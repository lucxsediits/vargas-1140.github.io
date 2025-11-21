import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged,
  signInWithCustomToken
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
  CalendarClock
} from 'lucide-react';

// --- Cole sua configuração aqui ---
const firebaseConfig = {
  apiKey: "AIzaSyCXUG9VanJhe-huto707XTszRMCOjmzvA0",
  authDomain: "vargascury1140.firebaseapp.com",
  projectId: "vargascury1140",
  storageBucket: "vargascury1140.firebasestorage.app",
  messagingSenderId: "248969218430",
  appId: "1:248969218430:web:6ffaee66a679c93659cb2f",
  measurementId: "G-ZWHG09M19B"
};

// --- Configuração do Firebase ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- Definições de Negócio ---
const STATUS_OPTIONS = {
  'nao-verificado': { label: 'Não Verificado', color: 'bg-yellow-400 text-yellow-900', icon: HelpCircle, hex: '#FACC15' },
  'dificil': { label: 'Difícil de Zerar', color: 'bg-red-600 text-white', icon: XCircle, hex: '#DC2626' },
  'facil': { label: 'Fácil de Zerar', color: 'bg-cyan-500 text-white', icon: AlertCircle, hex: '#06B6D4' },
  'pronto': { label: 'Prontos', color: 'bg-green-600 text-white', icon: CheckCircle2, hex: '#16A34A' },
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
  const [user, setUser] = useState(null);
  const [apartments, setApartments] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedAptId, setSelectedAptId] = useState(null);
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState('nao-verificado');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyPriority, setShowOnlyPriority] = useState(false);
  const [statusFilter, setStatusFilter] = useState(null);

  // --- Autenticação e Carregamento ---
  useEffect(() => {
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      } else {
        await signInAnonymously(auth);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    // Usando a coleção v2 para garantir que a estrutura nova seja carregada
    const unsubscribe = onSnapshot(
      collection(db, 'artifacts', appId, 'public', 'data', 'vargas_apartments_v2'),
      (snapshot) => {
        const data = {};
        snapshot.forEach((doc) => {
          data[doc.id] = doc.data();
        });
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
    let operationCount = 0;
    for (let floor = 1; floor <= FLOORS_TOTAL; floor++) {
      for (let unit = 1; unit <= UNITS_PER_FLOOR; unit++) {
        const aptId = `${floor}${unit.toString().padStart(2, '0')}`;
        const ref = doc(db, 'artifacts', appId, 'public', 'data', 'vargas_apartments_v2', aptId);
        batch.set(ref, {
          id: aptId,
          status: 'nao-verificado',
          notes: '',
          isPriority: PRIORITY_IDS.includes(aptId)
        });
        operationCount++;
        if (operationCount >= 450) {
          await batch.commit();
          operationCount = 0;
        }
      }
    }
    if (operationCount > 0) await batch.commit();
    setLoading(false);
  };

  // --- Ações ---
  const handleAptClick = (aptId) => {
    const apt = apartments[aptId] || { status: 'nao-verificado', notes: '' };
    setSelectedAptId(aptId);
    setEditStatus(apt.status);
    setEditNotes(apt.notes || '');
  };

  const handleSave = async () => {
    if (!user || !selectedAptId) return;
    try {
      await setDoc(
        doc(db, 'artifacts', appId, 'public', 'data', 'vargas_apartments_v2', selectedAptId),
        {
          id: selectedAptId,
          status: editStatus,
          notes: editNotes,
          updatedAt: new Date().toISOString(),
          updatedBy: user.uid, 
          isPriority: PRIORITY_IDS.includes(selectedAptId)
        },
        { merge: true }
      );
      setSelectedAptId(null);
    } catch (error) {
      alert("Erro ao salvar.");
    }
  };

  // --- Gerador de Relatório WhatsApp ---
  const copyReportToClipboard = () => {
    const today = new Date().toLocaleDateString('pt-BR');
    const now = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    let text = `🏗️ *RESUMO VISTORIA - VARGAS 1140*\n📅 ${today} às ${now}\n\n`;
    text += `✅ *Total Prontos:* ${stats['pronto']}/${stats.total}\n`;
    text += `⭐ *Principais Prontos:* ${stats.priorityOk}/${stats.priorityTotal}\n\n`;
    
    const problemApts = Object.values(apartments)
      .filter(apt => apt.status === 'dificil' || apt.status === 'facil')
      .sort((a, b) => parseInt(a.id) - parseInt(b.id));

    if (problemApts.length > 0) {
      text += `⚠️ *PENDÊNCIAS (${problemApts.length}):*\n`;
      problemApts.forEach(apt => {
         const icon = apt.status === 'dificil' ? '🔴' : '🔵';
         const notes = apt.notes ? `- ${apt.notes}` : '';
         text += `${icon} *Apto ${apt.id}*: ${notes}\n`;
      });
    } else {
      text += "🎉 Nenhuma pendência registrada no momento!";
    }

    // Tentativa de usar a API de clipboard de forma segura
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("📋 Relatório copiado! Pode colar no WhatsApp.");
    } catch (err) {
        alert("Erro ao copiar automaticamente. Tente manualmente.");
    }
  };

  // --- Estatísticas ---
  const stats = useMemo(() => {
    const counts = {
      'pronto': 0, 'facil': 0, 'dificil': 0, 'nao-verificado': 0,
      total: 0, priorityTotal: 0, priorityOk: 0
    };
    
    // Garantir contagem correta dos principais
    PRIORITY_IDS.forEach(id => {
      const apt = apartments[id];
      if (apt) {
        counts.priorityTotal++;
        if (apt.status === 'pronto') counts.priorityOk++;
      }
    });

    Object.values(apartments).forEach(apt => {
      if (counts[apt.status] !== undefined) counts[apt.status]++;
      else counts['nao-verificado']++;
      counts.total++;
    });
    return counts;
  }, [apartments]);

  // --- Filtragem ---
  const filteredApartments = useMemo(() => {
    let list = Object.values(apartments);
    list.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    if (showOnlyPriority) {
      list = list.filter(apt => PRIORITY_IDS.includes(apt.id));
    }
    
    if (statusFilter) {
      list = list.filter(apt => apt.status === statusFilter);
    }

    if (searchTerm) {
      list = list.filter(apt => 
        apt.id.includes(searchTerm) || 
        (apt.notes && apt.notes.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    return list;
  }, [apartments, searchTerm, showOnlyPriority, statusFilter]);

  const floorsView = useMemo(() => {
    const groups = {};
    filteredApartments.forEach(apt => {
      const floor = apt.id.length === 3 ? apt.id[0] : apt.id.substring(0, 2);
      if (!groups[floor]) groups[floor] = [];
      groups[floor].push(apt);
    });
    return groups;
  }, [filteredApartments]);

  // Calculo de progresso por andar (para visualização)
  const getFloorProgress = (floorApts) => {
     if (!floorApts || floorApts.length === 0) return 0;
     const done = floorApts.filter(a => a.status === 'pronto').length;
     return Math.round((done / floorApts.length) * 100);
  };

  if (loading) return <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-600 font-medium animate-pulse">Carregando Vistoria...</div>;

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <header className="bg-slate-800 text-white p-4 shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto">
          {/* Top Bar: Título e Ações Principais */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-indigo-400" />
              VARGAS 1140
            </h1>
            
            <div className="flex gap-3 w-full md:w-auto">
                {/* Card de Principais */}
                <div className="bg-indigo-600 flex-1 md:flex-none px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 border border-indigo-500">
                  <div className="p-2 bg-indigo-800 rounded-full">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-indigo-200 font-bold uppercase tracking-wider">Principais</div>
                    <div className="text-xl font-bold leading-none">
                      {stats.priorityOk} <span className="text-sm text-indigo-300 font-normal">/ {stats.priorityTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Botão Relatório WhatsApp */}
                <button 
                  onClick={copyReportToClipboard}
                  className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg flex flex-col items-center justify-center border border-emerald-500 transition-colors min-w-[80px]"
                  title="Copiar Relatório para WhatsApp"
                >
                   <Share2 className="w-5 h-5 mb-1" />
                   <span className="text-[10px] font-bold uppercase">Relatório</span>
                </button>
            </div>
          </div>

          {/* Filtros de Status Clicáveis */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(STATUS_OPTIONS).map(([key, config]) => (
              <button 
                key={key} 
                onClick={() => setStatusFilter(statusFilter === key ? null : key)}
                className={`
                   p-3 rounded-lg border flex items-center justify-between transition-all duration-200
                   ${statusFilter === key ? 'ring-2 ring-white scale-[1.02] shadow-xl brightness-110' : 'opacity-80 hover:opacity-100'}
                   ${config.color.replace('bg-', 'bg-opacity-20 bg-').replace('text-white', 'text-white').replace('text-yellow-900', 'text-yellow-100')}
                   ${statusFilter && statusFilter !== key ? 'opacity-40 grayscale-[0.5]' : ''}
                `}
              >
                <div className="flex items-center gap-2">
                    {statusFilter === key && <Filter className="w-3 h-3 animate-bounce" />}
                    <span className="text-xs font-bold uppercase">{config.label}</span>
                </div>
                <span className="text-2xl font-bold">{stats[key]}</span>
              </button>
            ))}
          </div>
          
          {statusFilter && (
            <div className="text-center mt-2 animate-in fade-in">
                <button onClick={() => setStatusFilter(null)} className="text-xs text-slate-300 hover:text-white underline flex items-center justify-center gap-1 mx-auto">
                    <X className="w-3 h-3" /> Limpar filtro: Exibindo apenas {STATUS_OPTIONS[statusFilter].label}
                </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 p-2 md:p-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Barra de Busca e Filtro Principal */}
          <div className="flex flex-col md:flex-row gap-3 mb-6 justify-between items-end bg-white p-3 rounded-xl shadow-sm border border-gray-100">
             <button 
               onClick={() => setShowOnlyPriority(!showOnlyPriority)}
               className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all w-full md:w-auto ${showOnlyPriority ? 'bg-indigo-100 border-indigo-500 text-indigo-700 ring-2 ring-indigo-200' : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`}
             >
               <Star className={`w-4 h-4 ${showOnlyPriority ? 'fill-indigo-700' : ''}`} />
               {showOnlyPriority ? 'Mostrando Apenas Principais' : 'Mostrar Principais'}
             </button>

             <div className="relative w-full md:w-80">
               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
               <input 
                 type="text" 
                 placeholder="Buscar apto (ex: 304) ou problema..." 
                 className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
             </div>
          </div>

          {/* Grid de Andares */}
          <div className="space-y-6 pb-10">
            {Object.entries(floorsView).sort((a,b) => parseInt(a[0]) - parseInt(b[0])).map(([floor, apts]) => {
              const progress = getFloorProgress(apts);
              
              return (
                <div key={floor} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  {/* Cabeçalho do Andar com Barra de Progresso */}
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 font-bold text-gray-700 flex justify-between items-center relative overflow-hidden">
                    {/* Barra de Progresso de Fundo */}
                    <div className="absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-1000 ease-out" style={{ width: `${progress}%` }} />
                    
                    <div className="flex items-center gap-3 z-10">
                        <span className="text-lg">Andar {floor}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${progress === 100 ? 'bg-green-100 text-green-700 border-green-200' : 'bg-white text-gray-500 border-gray-200'}`}>
                           {progress}% Concluído
                        </span>
                    </div>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600 z-10">{apts.length} aptos</span>
                  </div>
                  
                  <div className="p-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                    {apts.map(apt => {
                      const isPriority = PRIORITY_IDS.includes(apt.id);
                      const statusConfig = STATUS_OPTIONS[apt.status];
                      
                      return (
                        <button
                          key={apt.id}
                          onClick={() => handleAptClick(apt.id)}
                          className={`
                            relative flex flex-col items-center justify-center p-1 rounded-lg border transition-all h-14
                            ${statusConfig.color} 
                            ${isPriority ? 'ring-2 ring-indigo-500 ring-offset-1 z-10 shadow-md font-bold' : 'border-transparent opacity-90 hover:opacity-100 hover:scale-105'}
                          `}
                        >
                          {isPriority && (
                            <div className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full p-0.5 shadow-sm z-20">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            </div>
                          )}
                          
                          <span className="text-sm">{apt.id}</span>
                          
                          {apt.notes && (
                            <div className="absolute bottom-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-sm" title="Com anotações" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            {Object.keys(floorsView).length === 0 && (
              <div className="text-center py-20 text-gray-400 bg-white rounded-xl border border-dashed border-gray-300">
                <Search className="w-12 h-12 mx-auto mb-2 opacity-20" />
                <p>Nenhum apartamento encontrado com esses filtros.</p>
                <button onClick={() => {setSearchTerm(''); setStatusFilter(null); setShowOnlyPriority(false)}} className="mt-4 text-indigo-600 hover:underline text-sm">
                  Limpar todos os filtros
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Modal de Edição */}
      {selectedAptId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">
            <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold">Apto {selectedAptId}</h2>
                {PRIORITY_IDS.includes(selectedAptId) && (
                  <span className="bg-indigo-600 text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-sm border border-indigo-400">
                    <Star className="w-3 h-3 fill-white" /> Principal
                  </span>
                )}
              </div>
              <button onClick={() => setSelectedAptId(null)} className="hover:bg-slate-700 p-1 rounded transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              
              {apartments[selectedAptId]?.updatedAt && (
                  <div className="text-xs text-gray-500 flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-100">
                      <CalendarClock className="w-3 h-3" />
                      <span>Última vistoria: <strong>{new Date(apartments[selectedAptId].updatedAt).toLocaleString('pt-BR')}</strong></span>
                  </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Qual a situação atual?</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(STATUS_OPTIONS).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => setEditStatus(key)}
                      className={`
                        flex items-center gap-3 p-3 rounded-lg border-2 transition-all text-left
                        ${editStatus === key ? `border-slate-800 ring-1 ring-slate-800 ${config.color} text-white shadow-md` : 'border-gray-100 hover:bg-gray-50 text-gray-600 hover:border-gray-300'}
                      `}
                    >
                      <div className={`p-1 rounded-full ${editStatus === key ? 'bg-white/20' : 'bg-gray-100'}`}>
                        <config.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-sm">{config.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex justify-between">
                  <span>Pendências / Observações</span>
                  <span className="text-xs font-normal text-gray-400">Opcional</span>
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[120px] text-gray-800 text-sm resize-none bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Ex: Acabamento da porta, metais, pintura manchada..."
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button onClick={() => setSelectedAptId(null)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">Cancelar</button>
                <button onClick={handleSave} className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 font-medium flex items-center gap-2 shadow-lg transform active:scale-95 transition-all">
                  <Save className="w-4 h-4" /> Salvar Vistoria
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}