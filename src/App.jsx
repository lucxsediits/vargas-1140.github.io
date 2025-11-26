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
  addDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
  writeBatch 
} from 'firebase/firestore';
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  HelpCircle, 
  Save, 
  ClipboardList,
  Star,
  Share2,
  X,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  FileSpreadsheet,
  Database,
  History,
  UserCircle2,
  LogOut
} from 'lucide-react';

// ------------------------------------------------------------------
// CONFIGURAÇÃO DO FIREBASE
// ------------------------------------------------------------------
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
  console.error("Erro Firebase", e);
}

// --- CONFIGURAÇÃO DE USUÁRIOS (Adicione ou remova nomes aqui) ---
const USERS_LIST = [
  "Jonathas",
  "Lucas",
  "Jael"
];

// --- Configurações Visuais ---
const STATUS_CONFIG = {
  'nao-verificado': { label: 'Não Verificado', bg: 'bg-slate-100', text: 'text-slate-400', border: 'border-slate-200', icon: HelpCircle, excelColor: '#FFFF00', excelText: '#000000' }, 
  'dificil': { label: 'Difícil', bg: 'bg-red-500', text: 'text-white', border: 'border-red-600', icon: XCircle, excelColor: '#FF0000', excelText: '#FFFFFF' },
  'facil': { label: 'Fácil', bg: 'bg-cyan-500', text: 'text-white', border: 'border-cyan-600', icon: AlertCircle, excelColor: '#00B0F0', excelText: '#000000' },
  'pronto': { label: 'Pronto', bg: 'bg-emerald-500', text: 'text-white', border: 'border-emerald-600', icon: CheckCircle2, excelColor: '#00B050', excelText: '#FFFFFF' },
};

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
  const [user, setUser] = useState(null); // Firebase User
  const [currentUserData, setCurrentUserData] = useState(null); // Local App User Name
  const [apartments, setApartments] = useState({});
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedAptId, setSelectedAptId] = useState(null);
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState('nao-verificado');
  
  const [showOnlyPriority, setShowOnlyPriority] = useState(false);
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showLogsModal, setShowLogsModal] = useState(false);
  
  const [expandedFloors, setExpandedFloors] = useState(
    Object.fromEntries(Array.from({length: FLOORS_TOTAL}, (_, i) => [i + 1, true]))
  );

  if (!app) return <div className="p-10 text-center font-bold text-red-500">Erro: Firebase não configurado.</div>;

  // --- AUTENTICAÇÃO E INICIALIZAÇÃO ---
  useEffect(() => {
    // Tenta recuperar usuario salvo no navegador
    const savedUser = localStorage.getItem('vargas_app_user');
    if (savedUser) setCurrentUserData(savedUser);

    signInAnonymously(auth);
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // --- CARREGAMENTO DE DADOS (APARTAMENTOS) ---
  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(collection(db, 'vargas_vistoria_data'), (snapshot) => {
      const data = {};
      snapshot.forEach((doc) => data[doc.id] = doc.data());
      setApartments(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  // --- CARREGAMENTO DE LOGS (Últimos 50) ---
  useEffect(() => {
    if (!user || !showLogsModal) return;
    const q = query(collection(db, 'activity_logs'), orderBy('timestamp', 'desc'), limit(50));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const logsData = [];
      snapshot.forEach((doc) => logsData.push({ id: doc.id, ...doc.data() }));
      setLogs(logsData);
    });
    return () => unsubscribe();
  }, [user, showLogsModal]);

  // --- FUNÇÃO DE LOG (REGISTRA AÇÃO) ---
  const logAction = async (action, target, details) => {
    try {
      await addDoc(collection(db, 'activity_logs'), {
        user: currentUserData || 'Desconhecido',
        action,
        target,
        details,
        timestamp: new Date().toISOString()
      });
    } catch (e) {
      console.error("Erro ao salvar log", e);
    }
  };

  // --- LOGIN MANUAL SIMPLES ---
  const handleLogin = (name) => {
    setCurrentUserData(name);
    localStorage.setItem('vargas_app_user', name);
  };

  const handleLogout = () => {
    setCurrentUserData(null);
    localStorage.removeItem('vargas_app_user');
  };

  // --- FUNÇÕES DO SISTEMA ---
  const manualInitializeData = async () => {
    if (!confirm("TEM CERTEZA? Isso vai resetar todos os status. O log registrará essa ação.")) return;
    
    setLoading(true);
    const batch = writeBatch(db);
    let op = 0;
    for (let f = 1; f <= FLOORS_TOTAL; f++) {
      for (let u = 1; u <= UNITS_PER_FLOOR; u++) {
        const id = `${f}${u.toString().padStart(2, '0')}`;
        batch.set(doc(db, 'vargas_vistoria_data', id), {
          id, status: 'nao-verificado', notes: '', isPriority: PRIORITY_IDS.includes(id)
        }, { merge: true });
        op++;
        if (op >= 450) { await batch.commit(); op = 0; }
      }
    }
    if (op > 0) await batch.commit();
    
    await logAction('RESET TOTAL', 'SISTEMA', 'Inicializou/Resetou o banco de dados');
    
    setLoading(false);
    setShowResetConfirm(false);
    alert("Banco resetado e log registrado.");
  };

  const handleSave = async () => {
    if (!user || !selectedAptId) return;

    // Salva Apto
    await setDoc(doc(db, 'vargas_vistoria_data', selectedAptId), {
      id: selectedAptId,
      status: editStatus,
      notes: editNotes,
      updatedAt: new Date().toISOString(),
      updatedBy: currentUserData,
      isPriority: PRIORITY_IDS.includes(selectedAptId)
    }, { merge: true });

    // Registra Log
    await logAction('EDITAR', selectedAptId, `Status: ${editStatus} | Obs: ${editNotes}`);

    setSelectedAptId(null);
  };

  const copyReport = () => {
    const done = Object.values(apartments).filter(a => a.status === 'pronto').length;
    const total = Object.values(apartments).length || (FLOORS_TOTAL * UNITS_PER_FLOOR);
    const text = `*VARGAS 1140 - STATUS*\n✅ Prontos: ${done}/${total}\n👤 Enviado por: ${currentUserData}\n\nAcesse o painel para ver detalhes.`;
    navigator.clipboard.writeText(text).then(() => alert("Relatório copiado!"));
  };

  const exportToExcel = () => {
    const dataHoje = new Date().toLocaleDateString('pt-BR');
    const aptsPendentes = Object.values(apartments)
      .filter(a => a.notes && a.notes.trim().length > 0)
      .sort((a, b) => parseInt(a.id) - parseInt(b.id));

    let html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="UTF-8"></head><body><table>
      <tr><td colspan="10" style="font-weight:bold; font-size:16px;">RELATÓRIO VARGAS 1140 - Gerado por ${currentUserData}</td></tr>
      <tr><td>Andar</td><td>Apto</td><td>Status</td><td>Obs</td></tr>
    `;
    
    // Simplificado para o exemplo (mas mantendo funcionalidade)
    Object.values(apartments).forEach(apt => {
        html += `<tr><td>${apt.id.substring(0, apt.id.length-2)}</td><td>${apt.id}</td><td>${apt.status}</td><td>${apt.notes || ''}</td></tr>`;
    });

    html += `</table></body></html>`;
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Vargas_${dataHoje}.xls`;
    link.click();
  };

  const toggleFloor = (floor) => {
    setExpandedFloors(prev => ({ ...prev, [floor]: !prev[floor] }));
  };

  const stats = useMemo(() => {
    const s = { pronto: 0, facil: 0, dificil: 0, 'nao-verificado': 0, total: 0 };
    const totalUnits = FLOORS_TOTAL * UNITS_PER_FLOOR;
    
    Object.values(apartments).forEach(a => {
      if (s[a.status] !== undefined) s[a.status]++;
    });
    
    s['nao-verificado'] += (totalUnits - Object.keys(apartments).length);
    s.total = totalUnits;
    return s;
  }, [apartments]);

  const gridMatrix = useMemo(() => {
    const matrix = [];
    for (let f = FLOORS_TOTAL; f >= 1; f--) {
      const floorRow = [];
      for (let u = 1; u <= UNITS_PER_FLOOR; u++) {
        const id = `${f}${u.toString().padStart(2, '0')}`;
        floorRow.push(apartments[id] || { id, status: 'nao-verificado' });
      }
      matrix.push({ floor: f, units: floorRow });
    }
    return matrix;
  }, [apartments]);

  // --- TELA DE "LOGIN" ---
  if (!currentUserData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserCircle2 className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-2xl font-black text-slate-800 mb-2">Quem é você?</h1>
          <p className="text-slate-500 mb-6 text-sm">Selecione seu nome para registrar suas atividades no log.</p>
          
          <div className="grid gap-3">
            {USERS_LIST.map(name => (
              <button 
                key={name}
                onClick={() => handleLogin(name)}
                className="w-full p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 font-bold text-slate-700 transition-all text-left flex items-center justify-between group"
              >
                {name}
                <span className="opacity-0 group-hover:opacity-100 text-blue-500">➜</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (loading) return <div className="flex h-screen items-center justify-center text-xl font-bold text-slate-600 animate-pulse">Carregando Sistema...</div>;

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-900 flex flex-col pb-20">
      
      {/* --- CABEÇALHO --- */}
      <header className="bg-slate-800 text-white shadow-lg z-20 sticky top-0 border-b border-slate-700">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
             <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2.5 rounded-lg shadow-lg">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black tracking-tight">VARGAS 1140</h1>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 uppercase tracking-widest">Painel</span>
                    <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-blue-200 border border-slate-600 flex items-center gap-1">
                        <UserCircle2 className="w-3 h-3"/> {currentUserData}
                    </span>
                </div>
              </div>
            </div>
            <button onClick={handleLogout} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 border border-red-900/50 p-2 rounded hover:bg-red-900/20">
                <LogOut className="w-3 h-3"/> Sair
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Busca */}
            <div className="relative w-full md:w-64 group">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input 
                type="text" placeholder="Buscar Apto..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Ações Rápidas */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <button onClick={() => setShowOnlyPriority(!showOnlyPriority)} className={`px-4 py-2 rounded-lg font-bold text-xs uppercase border flex items-center gap-2 ${showOnlyPriority ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-slate-700 text-yellow-400 border-slate-600'}`}>
                    <Star className="w-3 h-3" fill={showOnlyPriority ? "black" : "none"} /> Principais
                </button>
                <button onClick={exportToExcel} className="px-4 py-2 bg-green-700 text-white rounded-lg font-bold text-xs uppercase flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4" /> Excel
                </button>
                <button onClick={copyReport} className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs uppercase flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Zap
                </button>
            </div>
          </div>

          {/* Cards de Status */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {Object.entries(STATUS_CONFIG).map(([key, conf]) => (
                <button key={key} onClick={() => setStatusFilter(statusFilter === key ? null : key)}
                  className={`p-3 rounded-xl flex flex-col border-2 ${statusFilter === key ? 'bg-slate-700 border-blue-400' : 'bg-slate-700/30 border-transparent hover:bg-slate-700/50'}`}>
                  <div className="flex justify-between w-full mb-1">
                    <span className={`text-xs font-bold uppercase ${statusFilter === key ? 'text-white' : 'text-slate-400'}`}>{conf.label}</span>
                    <conf.icon className={`w-4 h-4 ${statusFilter === key ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <span className={`text-2xl font-black ${statusFilter === key ? 'text-white' : 'text-slate-300'}`}>{stats[key]}</span>
                </button>
            ))}
          </div>
        </div>
      </header>

      {/* --- LISTA DE ANDARES --- */}
      <main className="flex-1 p-4 max-w-7xl mx-auto w-full space-y-4">
        {gridMatrix.map(({ floor, units }) => {
          const unitsFiltered = units.filter(apt => {
            const isPriority = PRIORITY_IDS.includes(apt.id);
            if (searchTerm && !apt.id.includes(searchTerm)) return false;
            if (showOnlyPriority && !isPriority) return false;
            if (statusFilter && apt.status !== statusFilter) return false;
            return true;
          });

          if ((statusFilter || showOnlyPriority || searchTerm) && unitsFiltered.length === 0) return null;

          const totalNoAndar = units.length;
          const prontosNoAndar = units.filter(u => u.status === 'pronto').length;
          const porcentagemAndar = Math.round((prontosNoAndar / totalNoAndar) * 100);
          const isOpen = expandedFloors[floor] || searchTerm !== '';

          return (
            <div key={floor} className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200">
              <button onClick={() => toggleFloor(floor)} className="w-full bg-slate-50 hover:bg-slate-100 p-3 flex justify-between items-center border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-800 text-white font-bold rounded px-3 py-2 text-sm shadow-sm">{floor}º ANDAR</div>
                  <div className="text-xs text-slate-500 font-medium">{unitsFiltered.length} aptos</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-slate-400">{porcentagemAndar}% OK</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </button>
              {isOpen && (
                <div className="p-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2 sm:gap-3 bg-slate-50/50">
                  {unitsFiltered.map(apt => {
                    const isPriority = PRIORITY_IDS.includes(apt.id);
                    const status = STATUS_CONFIG[apt.status];
                    return (
                      <button key={apt.id} onClick={() => { setSelectedAptId(apt.id); setEditStatus(apt.status); setEditNotes(apt.notes || ''); }}
                        className={`relative h-14 rounded-lg border-2 flex items-center justify-center transition-all ${status.bg} ${status.border} ${status.text} hover:scale-105 hover:shadow-lg`}>
                        <span className="font-black text-sm">{apt.id}</span>
                        {isPriority && <div className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black rounded-full p-0.5 shadow-sm border border-white z-10"><Star className="w-2.5 h-2.5 fill-black" /></div>}
                        {apt.notes && <div className="absolute -bottom-1 -right-1 bg-blue-600 w-3 h-3 rounded-full border-2 border-white animate-pulse" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* --- RODAPÉ DE ADMINISTRAÇÃO E LOGS --- */}
        <div className="mt-10 p-4 border-t border-slate-700 flex flex-col md:flex-row gap-4 justify-between items-center">
            
            <button onClick={() => setShowLogsModal(true)} className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors bg-slate-800 py-2 px-4 rounded border border-slate-700">
                <History className="w-4 h-4" /> Ver Histórico de Ações
            </button>

            {showResetConfirm ? (
                <div className="bg-red-900/50 p-4 rounded-lg border border-red-500 flex flex-col items-center gap-3">
                    <p className="text-red-200 text-sm font-bold">CUIDADO: Isso vai zerar o banco.</p>
                    <div className="flex gap-2">
                        <button onClick={manualInitializeData} className="px-4 py-2 bg-red-600 text-white font-bold rounded">Confirmar</button>
                        <button onClick={() => setShowResetConfirm(false)} className="px-4 py-2 bg-slate-600 text-white font-bold rounded">Cancelar</button>
                    </div>
                </div>
            ) : (
                <button onClick={() => setShowResetConfirm(true)} className="flex items-center gap-2 text-xs text-slate-600 hover:text-red-400 transition-colors">
                    <Database className="w-3 h-3" /> Admin: Resetar Banco
                </button>
            )}
        </div>
      </main>

      {/* --- MODAL DE EDIÇÃO --- */}
      {selectedAptId && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-slate-800 p-5 flex justify-between items-center">
              <h2 className="text-3xl font-black text-white">{selectedAptId}</h2>
              <button onClick={() => setSelectedAptId(null)}><X className="w-6 h-6 text-slate-400 hover:text-white" /></button>
            </div>
            <div className="p-6">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Alterar Status</label>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(STATUS_CONFIG).map(([key, conf]) => (
                  <button key={key} onClick={() => setEditStatus(key)}
                    className={`p-3 rounded-xl font-bold text-sm flex items-center gap-3 border ${editStatus === key ? `ring-2 ring-blue-500 ${conf.bg} ${conf.text} border-transparent` : 'bg-white border-slate-200 text-slate-600'}`}>
                    <conf.icon className="w-5 h-5" /> {conf.label}
                  </button>
                ))}
              </div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Observações</label>
              <textarea className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl h-28 text-sm outline-none resize-none text-slate-700"
                value={editNotes} onChange={(e) => setEditNotes(e.target.value)} placeholder="Detalhes..." />
              <button onClick={handleSave} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg">
                <Save className="w-5 h-5" /> SALVAR ALTERAÇÃO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL DE LOGS --- */}
      {showLogsModal && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden">
                <div className="bg-slate-800 p-5 flex justify-between items-center border-b border-slate-700">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <History className="w-5 h-5"/> Histórico de Atividades
                    </h2>
                    <button onClick={() => setShowLogsModal(false)}><X className="w-6 h-6 text-slate-400 hover:text-white" /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-0 bg-slate-50">
                    {logs.length === 0 ? (
                        <div className="p-10 text-center text-slate-400">Nenhum registro encontrado ainda.</div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-200 text-slate-600 text-xs uppercase sticky top-0">
                                <tr>
                                    <th className="p-3">Data/Hora</th>
                                    <th className="p-3">Usuário</th>
                                    <th className="p-3">Ação</th>
                                    <th className="p-3">Detalhes</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {logs.map((log) => (
                                    <tr key={log.id} className="border-b border-slate-200 hover:bg-white">
                                        <td className="p-3 text-slate-500 font-mono text-xs">
                                            {new Date(log.timestamp).toLocaleDateString('pt-BR')} <br/>
                                            {new Date(log.timestamp).toLocaleTimeString('pt-BR')}
                                        </td>
                                        <td className="p-3 font-bold text-blue-700">{log.user}</td>
                                        <td className="p-3 font-medium text-slate-700">
                                            {log.action} <span className="bg-slate-200 px-1 rounded text-xs ml-1">{log.target}</span>
                                        </td>
                                        <td className="p-3 text-slate-500 text-xs italic">{log.details}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
      )}

    </div>
  );
}