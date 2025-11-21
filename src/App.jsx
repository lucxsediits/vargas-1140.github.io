import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  onSnapshot,
  writeBatch 
} from 'firebase/firestore';
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  HelpCircle, 
  Edit3, 
  Save, 
  ClipboardList,
  Search,
  Star,
  Share2,
  Filter,
  X,
  CalendarClock,
  Maximize2
} from 'lucide-react';

// ------------------------------------------------------------------
// CONFIGURAÇÃO DO SEU FIREBASE
// -------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCXUG9VanJhe-huto707XTszRMCOjmzvA0",
    authDomain: "vargascury1140.firebaseapp.com",
    projectId: "vargascury1140",
    storageBucket: "vargascury1140.firebasestorage.app",
    messagingSenderId: "248969218430",
    appId: "1:248969218430:web:6ffaee66a679c93659cb2f",
    measurementId: "G-ZWHG09M19B",
  };

let app, auth, db;
try {
  if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  }
} catch (e) {
  console.error("Erro Firebase");
}

// --- Configurações Visuais ---
const STATUS_CONFIG = {
  'nao-verificado': { label: 'Não Verificado', bg: 'bg-yellow-400', text: 'text-yellow-900', icon: HelpCircle },
  'dificil': { label: 'Difícil', bg: 'bg-red-600', text: 'text-white', icon: XCircle },
  'facil': { label: 'Fácil', bg: 'bg-cyan-500', text: 'text-white', icon: AlertCircle },
  'pronto': { label: 'Pronto', bg: 'bg-green-600', text: 'text-white', icon: CheckCircle2 },
};

// Lista dos Principais (Mantida)
const PRIORITY_IDS = [
  '102','103','104','105','106','110','113','115','117','119','120',
  '201','202','203','204','205','210','213','214','215','217','218','219','220',
  '301','304','305','306','307','309','313','314','315','318','320',
  '402','403','404','413','414','415','416','417','418','419',
  '501','502','503','504','505','506','510','511','513','514','515','516','520',
  '601','602','603','617','618',
  '701','705','706','708','709','712','713','719','720',
  '801','802','805','810','813','815','816','817','818','819',
  '901','902','903','904','905','906','910','912','913','914','916','917','918','919','920',
  '1001','1002','1004','1005','1006','1013','1015','1016','1017','1019',
  '1102','1103','1104','1105','1106','1107','1108','1110','1111','1112','1113','1114','1115','1117','1119','1120',
  '1202','1203','1205','1206','1207','1208','1212','1214','1215','1217','1218','1219','1220',
  '1301','1302','1304','1305','1306','1313','1314','1315','1317','1318',
  '1401','1404','1406','1407','1408','1412','1414','1415','1416','1417','1418','1420',
  '1501','1504','1506','1507','1510','1511','1512','1514','1517','1519','1520',
  '1602','1603','1604','1606','1608','1613','1614','1615','1616','1618','1619',
  '1702','1703','1705','1711','1712','1715','1718','1719','1720',
  '1801','1802','1803','1810','1811','1814','1815','1818','1819','1820'
];

const FLOORS_TOTAL = 18;
const UNITS_PER_FLOOR = 20;

export default function App() {
  const [user, setUser] = useState(null);
  const [apartments, setApartments] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedAptId, setSelectedAptId] = useState(null);
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState('nao-verificado');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyPriority, setShowOnlyPriority] = useState(false);
  const [statusFilter, setStatusFilter] = useState(null);

  // Verificação de segurança da chave
  if (!app) return <div className="p-10 text-center text-red-600 font-bold">Configure o Firebase no código!</div>;

  useEffect(() => {
    signInAnonymously(auth);
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(
      collection(db, 'vargas_vistoria_data'),
      (snapshot) => {
        const data = {};
        snapshot.forEach((doc) => data[doc.id] = doc.data());
        if (Object.keys(data).length === 0) initializeData();
        else {
          setApartments(data);
          setLoading(false);
        }
      }
    );
    return () => unsubscribe();
  }, [user]);

  const initializeData = async () => {
    setLoading(true);
    const batch = writeBatch(db);
    let op = 0;
    for (let f = 1; f <= FLOORS_TOTAL; f++) {
      for (let u = 1; u <= UNITS_PER_FLOOR; u++) {
        const id = `${f}${u.toString().padStart(2, '0')}`;
        batch.set(doc(db, 'vargas_vistoria_data', id), {
          id, status: 'nao-verificado', notes: '', isPriority: PRIORITY_IDS.includes(id)
        });
        op++;
        if (op >= 450) { await batch.commit(); op = 0; }
      }
    }
    if (op > 0) await batch.commit();
    setLoading(false);
  };

  const handleSave = async () => {
    if (!user || !selectedAptId) return;
    await setDoc(doc(db, 'vargas_vistoria_data', selectedAptId), {
      id: selectedAptId,
      status: editStatus,
      notes: editNotes,
      updatedAt: new Date().toISOString(),
      updatedBy: "Admin",
      isPriority: PRIORITY_IDS.includes(selectedAptId)
    }, { merge: true });
    setSelectedAptId(null);
  };

  const copyReport = () => {
    const done = Object.values(apartments).filter(a => a.status === 'pronto').length;
    const total = Object.values(apartments).length;
    const text = `*VARGAS 1140 - STATUS*\n✅ Prontos: ${done}/${total}\n\nAcesse o painel para ver detalhes.`;
    navigator.clipboard.writeText(text).then(() => alert("Relatório copiado!"));
  };

  const stats = useMemo(() => {
    const s = { pronto: 0, facil: 0, dificil: 0, 'nao-verificado': 0, priorityOk: 0, priorityTotal: 0 };
    PRIORITY_IDS.forEach(id => {
      if (apartments[id]) {
        s.priorityTotal++;
        if (apartments[id].status === 'pronto') s.priorityOk++;
      }
    });
    Object.values(apartments).forEach(a => {
      if (s[a.status] !== undefined) s[a.status]++;
      else s['nao-verificado']++;
    });
    return s;
  }, [apartments]);

  // Geração da Matriz (Grid)
  const gridMatrix = useMemo(() => {
    const matrix = [];
    for (let f = FLOORS_TOTAL; f >= 1; f--) { // De cima para baixo (18 ao 1)
      const floorRow = [];
      for (let u = 1; u <= UNITS_PER_FLOOR; u++) {
        const id = `${f}${u.toString().padStart(2, '0')}`;
        floorRow.push(apartments[id] || { id, status: 'nao-verificado' });
      }
      matrix.push({ floor: f, units: floorRow });
    }
    return matrix;
  }, [apartments]);

  if (loading) return <div className="flex h-screen items-center justify-center text-xl font-bold text-slate-600">Carregando Painel da Obra...</div>;

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 flex flex-col">
      
      {/* --- CABEÇALHO DE COMANDO --- */}
      <header className="bg-slate-900 text-white shadow-2xl z-20 sticky top-0">
        <div className="max-w-[1600px] mx-auto p-4">
          
          {/* Linha 1: Título e Ações */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight">VARGAS 1140</h1>
                <p className="text-xs text-slate-400 font-mono">SISTEMA DE VISTORIA</p>
              </div>
            </div>

            {/* Placar dos Principais */}
            <div className="flex items-center gap-4 bg-slate-800 p-2 rounded-lg border border-slate-700">
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Principais</div>
                <div className="text-xl font-black leading-none text-white">
                  {stats.priorityOk} <span className="text-sm text-slate-500">/ {stats.priorityTotal}</span>
                </div>
              </div>
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </div>

            <div className="flex gap-2">
              <button onClick={() => setShowOnlyPriority(!showOnlyPriority)} className={`px-4 py-2 rounded font-bold text-xs uppercase tracking-wide border ${showOnlyPriority ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400/10'}`}>
                {showOnlyPriority ? 'Ver Todos' : 'Só Principais'}
              </button>
              <button onClick={copyReport} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-xs uppercase flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Relatório
              </button>
            </div>
          </div>

          {/* Linha 2: Filtros Visuais (Dashboard) */}
          <div className="grid grid-cols-4 gap-1 md:gap-4">
            {Object.entries(STATUS_CONFIG).map(([key, conf]) => (
              <button 
                key={key}
                onClick={() => setStatusFilter(statusFilter === key ? null : key)}
                className={`
                  relative overflow-hidden p-2 md:p-3 rounded flex flex-col items-center justify-center transition-all
                  ${statusFilter === key ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900' : 'opacity-80 hover:opacity-100'}
                  ${conf.bg}
                `}
              >
                <span className="text-2xl md:text-3xl font-black text-white drop-shadow-md">{stats[key]}</span>
                <span className="text-[10px] uppercase font-bold text-white/90">{conf.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* --- ÁREA PRINCIPAL (GRID / TABELA) --- */}
      <main className="flex-1 overflow-x-auto p-2 md:p-6 bg-slate-200">
        <div className="min-w-[1000px] max-w-[1600px] mx-auto bg-white shadow-xl border border-slate-300 rounded-lg overflow-hidden">
          
          {/* Cabeçalho da Tabela */}
          <div className="flex bg-slate-800 text-white font-mono text-xs border-b border-slate-600 sticky top-0 z-10">
            <div className="w-16 p-2 flex items-center justify-center font-bold bg-slate-900 shrink-0 border-r border-slate-700">ANDAR</div>
            {Array.from({ length: UNITS_PER_FLOOR }, (_, i) => i + 1).map(u => (
              <div key={u} className="flex-1 p-2 text-center border-r border-slate-700 last:border-r-0 font-bold">
                FINAL {u.toString().padStart(2, '0')}
              </div>
            ))}
          </div>

          {/* Corpo da Tabela */}
          <div className="divide-y divide-slate-200">
            {gridMatrix.map(({ floor, units }) => (
              <div key={floor} className="flex h-12 hover:bg-slate-50 transition-colors">
                {/* Coluna do Andar */}
                <div className="w-16 bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm border-r border-slate-300 shrink-0">
                  {floor}º
                </div>

                {/* Células dos Apartamentos */}
                {units.map(apt => {
                  const isPriority = PRIORITY_IDS.includes(apt.id);
                  const status = STATUS_CONFIG[apt.status];
                  
                  // Filtros
                  if (statusFilter && apt.status !== statusFilter) {
                    return <div key={apt.id} className="flex-1 bg-slate-100 border-r border-slate-200/50" />;
                  }
                  if (showOnlyPriority && !isPriority) {
                    return <div key={apt.id} className="flex-1 bg-slate-100 border-r border-slate-200/50 opacity-30" />;
                  }

                  // Célula Ativa
                  return (
                    <div 
                      key={apt.id}
                      onClick={() => { setSelectedAptId(apt.id); setEditStatus(apt.status); setEditNotes(apt.notes || ''); }}
                      className={`
                        flex-1 relative border-r border-white/20 cursor-pointer group transition-all
                        flex items-center justify-center
                        ${status.bg}
                        ${searchTerm && apt.id.includes(searchTerm) ? 'ring-4 ring-purple-500 z-10' : ''}
                      `}
                      title={`Apto ${apt.id} - ${status.label}`}
                    >
                      <span className="font-mono font-bold text-white text-sm drop-shadow-md group-hover:scale-125 transition-transform">
                        {apt.id}
                      </span>

                      {/* Ícone de Prioridade (Estrela) */}
                      {isPriority && (
                        <div className="absolute top-0.5 right-0.5">
                          <Star className="w-2.5 h-2.5 text-yellow-300 fill-yellow-300 drop-shadow-sm" />
                        </div>
                      )}

                      {/* Indicador de Notas */}
                      {apt.notes && (
                        <div className="absolute bottom-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- MODAL DE EDIÇÃO (Mantido igual para funcionalidade) --- */}
      {selectedAptId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black">Apto {selectedAptId}</h2>
                {PRIORITY_IDS.includes(selectedAptId) && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
              </div>
              <button onClick={() => setSelectedAptId(null)}><X className="w-6 h-6 hover:text-red-400" /></button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(STATUS_CONFIG).map(([key, conf]) => (
                  <button
                    key={key}
                    onClick={() => setEditStatus(key)}
                    className={`p-3 rounded font-bold text-sm flex items-center gap-2 border-2 transition-all ${editStatus === key ? `${conf.bg} ${conf.text} border-transparent ring-2 ring-offset-2 ring-slate-900` : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}
                  >
                    <conf.icon className="w-4 h-4" /> {conf.label}
                  </button>
                ))}
              </div>

              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Pendências</label>
              <textarea
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded h-32 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Escreva aqui..."
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
              />

              <button onClick={handleSave} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold text-lg flex items-center justify-center gap-2">
                <Save className="w-5 h-5" /> Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}