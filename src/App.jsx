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
  Database
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
  const [user, setUser] = useState(null);
  const [apartments, setApartments] = useState({});
  const [loading, setLoading] = useState(true);
  
  const [selectedAptId, setSelectedAptId] = useState(null);
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState('nao-verificado');
  const [showOnlyPriority, setShowOnlyPriority] = useState(false);
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Controle de estado para o botão de reset perigoso
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  const [expandedFloors, setExpandedFloors] = useState(
    Object.fromEntries(Array.from({length: FLOORS_TOTAL}, (_, i) => [i + 1, true]))
  );

  if (!app) return <div className="p-10 text-center font-bold text-red-500">Erro: Firebase não configurado.</div>;

  // Autenticação
  useEffect(() => {
    signInAnonymously(auth);
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // --- CORREÇÃO DE SEGURANÇA AQUI ---
  // Carregamento de dados (Sem inicialização automática perigosa)
  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(collection(db, 'vargas_vistoria_data'), (snapshot) => {
      const data = {};
      snapshot.forEach((doc) => data[doc.id] = doc.data());
      
      // Se não houver dados, NÃO FAZ NADA (Não sobrescreve)
      // Apenas atualiza a visualização
      setApartments(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  // Função Manual para Criar/Resetar Banco (Só roda se clicar no botão)
  const manualInitializeData = async () => {
    if (!confirm("TEM CERTEZA? Isso vai resetar todos os status para 'Não Verificado'. Use apenas se o banco estiver vazio.")) return;
    
    setLoading(true);
    const batch = writeBatch(db);
    let op = 0;
    for (let f = 1; f <= FLOORS_TOTAL; f++) {
      for (let u = 1; u <= UNITS_PER_FLOOR; u++) {
        const id = `${f}${u.toString().padStart(2, '0')}`;
        // Usamos merge: true para segurança extra
        batch.set(doc(db, 'vargas_vistoria_data', id), {
          id, status: 'nao-verificado', notes: '', isPriority: PRIORITY_IDS.includes(id)
        }, { merge: true });
        op++;
        if (op >= 450) { await batch.commit(); op = 0; }
      }
    }
    if (op > 0) await batch.commit();
    setLoading(false);
    setShowResetConfirm(false);
    alert("Banco de dados inicializado com sucesso!");
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
    const total = Object.values(apartments).length || (FLOORS_TOTAL * UNITS_PER_FLOOR);
    const text = `*VARGAS 1140 - STATUS*\n✅ Prontos: ${done}/${total}\n\nAcesse o painel para ver detalhes.`;
    navigator.clipboard.writeText(text).then(() => alert("Relatório copiado!"));
  };

  // --- FUNÇÃO: EXCEL PROFISSIONAL ---
  const exportToExcel = () => {
    const dataHoje = new Date().toLocaleDateString('pt-BR');
    const horaHoje = new Date().toLocaleTimeString('pt-BR');
    
    const aptsPendentes = Object.values(apartments)
      .filter(a => a.notes && a.notes.trim().length > 0)
      .sort((a, b) => parseInt(a.id) - parseInt(b.id));

    let html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>Mapa de Obra</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayGridlines/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          body { font-family: 'Calibri', 'Segoe UI', sans-serif; font-size: 11pt; }
          .main-header { background-color: #2C3E50; color: white; font-size: 24px; font-weight: bold; text-align: center; vertical-align: middle; height: 60px; border: 1px solid #000; }
          .sub-header { background-color: #95A5A6; color: white; font-size: 12px; text-align: center; vertical-align: middle; border: 1px solid #000; }
          .floor-col { background-color: #34495E; color: white; font-weight: bold; text-align: center; border: 1px solid #000; width: 60px; }
          .unit-col-header { background-color: #ECF0F1; font-weight: bold; text-align: center; border: 1px solid #BDC3C7; font-size: 10px; color: #7F8C8D; }
          .cell-apt { text-align: center; border: 1px solid #FFF; font-weight: bold; font-size: 12px; width: 50px; height: 25px; vertical-align: middle; }
          .summary-header { background-color: #2C3E50; color: white; font-weight: bold; text-align: left; padding-left: 5px; }
          .summary-label { background-color: #ECF0F1; font-weight: bold; border: 1px solid #BDC3C7; }
          .summary-value { text-align: center; border: 1px solid #BDC3C7; }
          .notes-header { background-color: #E74C3C; color: white; font-weight: bold; font-size: 14px; text-align: left; padding-left: 5px; border: 1px solid #000; }
          .note-row { border-bottom: 1px solid #EEE; vertical-align: top; }
          .note-id { font-weight: bold; text-align: center; background-color: #ECF0F1; }
          .note-text { text-align: left; padding-left: 5px; }
        </style>
      </head>
      <body>
        <table>
          <tr><td colspan="24" class="main-header">MAPA DE CONTROLE - VARGAS 1140</td></tr>
          <tr><td colspan="24" class="sub-header">Exportado em: ${dataHoje} às ${horaHoje}</td></tr>
          <tr><td colspan="24" style="height: 15px;"></td></tr>
          <tr>
            <td class="floor-col">ANDAR</td>
            ${Array.from({length: UNITS_PER_FLOOR}, (_, i) => `<td class="unit-col-header">F. ${i + 1}</td>`).join('')}
            <td colspan="3"></td>
          </tr>
    `;

    for (let f = FLOORS_TOTAL; f >= 1; f--) {
      html += `<tr><td class="floor-col">${f}º</td>`;
      for (let u = 1; u <= UNITS_PER_FLOOR; u++) {
        const id = `${f}${u.toString().padStart(2, '0')}`;
        const apt = apartments[id];
        const status = apt ? apt.status : 'nao-verificado';
        const color = STATUS_CONFIG[status].excelColor;
        const textColor = STATUS_CONFIG[status].excelText;
        const noteMark = (apt && apt.notes) ? ' 📝' : ''; 
        const priorityMark = PRIORITY_IDS.includes(id) ? ' ★' : '';
        html += `<td class="cell-apt" style="background-color: ${color}; color: ${textColor}; mso-pattern: auto; border: 0.5pt solid white;">${id}${priorityMark}${noteMark}</td>`;
      }
      html += `</tr>`;
    }

    const total = Object.keys(apartments).length || (FLOORS_TOTAL * UNITS_PER_FLOOR);
    
    html += `
      <tr><td colspan="24" style="height: 20px;"></td></tr>
      <tr><td colspan="4" class="summary-header">RESUMO DA OBRA</td><td colspan="20"></td></tr>
      <tr>
        <td colspan="2" class="summary-label">STATUS</td>
        <td colspan="1" class="summary-label" style="text-align: center;">QTD</td>
        <td colspan="1" class="summary-label" style="text-align: center;">%</td>
        <td colspan="20"></td>
      </tr>
    `;

    ['pronto', 'facil', 'dificil', 'nao-verificado'].forEach(status => {
      const count = stats[status];
      const percent = total > 0 ? ((count / total) * 100).toFixed(1) : '0.0';
      const color = STATUS_CONFIG[status].excelColor;
      html += `
        <tr>
          <td colspan="2" style="background-color: ${color}; color: ${STATUS_CONFIG[status].excelText}; font-weight: bold; border: 1px solid #999;">${STATUS_CONFIG[status].label.toUpperCase()}</td>
          <td colspan="1" class="summary-value">${count}</td>
          <td colspan="1" class="summary-value">${percent.replace('.', ',')}%</td>
          <td colspan="20"></td>
        </tr>
      `;
    });

    if (aptsPendentes.length > 0) {
      html += `
        <tr><td colspan="24" style="height: 20px;"></td></tr>
        <tr><td colspan="10" class="notes-header">📝 DETALHAMENTO DE OBSERVACÕES (${aptsPendentes.length})</td><td colspan="14"></td></tr>
        <tr>
          <td colspan="1" class="summary-label" style="text-align: center;">APTO</td>
          <td colspan="2" class="summary-label" style="text-align: center;">STATUS</td>
          <td colspan="7" class="summary-label">OBSERVAÇÃO REGISTRADA</td>
          <td colspan="14"></td>
        </tr>
      `;
      aptsPendentes.forEach(apt => {
        const statusConfig = STATUS_CONFIG[apt.status];
        html += `
          <tr class="note-row">
            <td colspan="1" class="note-id">${apt.id}</td>
            <td colspan="2" style="text-align: center; font-size: 10px; background-color: ${statusConfig.excelColor}; color: ${statusConfig.excelText};">${statusConfig.label}</td>
            <td colspan="7" class="note-text" style="background-color: #FAFAFA; border: 1px solid #EEE;">${apt.notes}</td>
            <td colspan="14"></td>
          </tr>
        `;
      });
    }

    html += `</table></body></html>`;
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Relatorio_Vargas_Final_${dataHoje.replace(/\//g, '-')}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFloor = (floor) => {
    setExpandedFloors(prev => ({ ...prev, [floor]: !prev[floor] }));
  };

  const stats = useMemo(() => {
    const s = { pronto: 0, facil: 0, dificil: 0, 'nao-verificado': 0, priorityOk: 0, priorityTotal: 0, total: 0 };
    PRIORITY_IDS.forEach(id => {
      if (apartments[id]) {
        s.priorityTotal++;
        if (apartments[id].status === 'pronto') s.priorityOk++;
      }
    });
    
    // Calculo baseado nos dados reais ou no total teórico se vazio
    const allIds = new Set(Object.keys(apartments));
    
    // Contagem baseada nos dados salvos
    Object.values(apartments).forEach(a => {
      if (s[a.status] !== undefined) s[a.status]++;
      else s['nao-verificado']++;
    });

    // Adiciona os não verificados implícitos (que não estão no DB)
    const totalUnits = FLOORS_TOTAL * UNITS_PER_FLOOR;
    const savedUnits = Object.keys(apartments).length;
    const missingUnits = totalUnits - savedUnits;
    
    s['nao-verificado'] += missingUnits;
    s.total = totalUnits;

    return s;
  }, [apartments]);

  const gridMatrix = useMemo(() => {
    const matrix = [];
    for (let f = FLOORS_TOTAL; f >= 1; f--) {
      const floorRow = [];
      for (let u = 1; u <= UNITS_PER_FLOOR; u++) {
        const id = `${f}${u.toString().padStart(2, '0')}`;
        // Se não existir no DB, cria um objeto visual padrão "não verificado"
        floorRow.push(apartments[id] || { id, status: 'nao-verificado' });
      }
      matrix.push({ floor: f, units: floorRow });
    }
    return matrix;
  }, [apartments]);

  if (loading) return <div className="flex h-screen items-center justify-center text-xl font-bold text-slate-600 animate-pulse">Carregando Vistoria Segura...</div>;

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-900 flex flex-col pb-20">
      
      {/* --- CABEÇALHO --- */}
      <header className="bg-slate-800 text-white shadow-lg z-20 sticky top-0 border-b border-slate-700">
        <div className="max-w-7xl mx-auto p-4">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2.5 rounded-lg shadow-lg shadow-blue-900/20">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight">VARGAS 1140</h1>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Painel de Controle</p>
              </div>
            </div>

            {/* Barra de Busca */}
            <div className="relative w-full md:w-64 group">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar Apto (ex: 1405)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-600"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button 
                onClick={() => setShowOnlyPriority(!showOnlyPriority)} 
                className={`flex-1 md:flex-none px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wide border transition-all flex items-center justify-center gap-2 ${showOnlyPriority ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-slate-700 text-yellow-400 border-slate-600 hover:bg-slate-600'}`}
              >
                <Star className="w-3 h-3" fill={showOnlyPriority ? "black" : "none"} /> Principais
              </button>
              
              <button onClick={exportToExcel} className="flex-1 md:flex-none px-4 py-2 bg-green-700 hover:bg-green-600 border border-green-600 text-white rounded-lg font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-md">
                <FileSpreadsheet className="w-4 h-4" /> Baixar Relatório
              </button>

              <button onClick={copyReport} className="flex-1 md:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg">
                <Share2 className="w-4 h-4" /> Zap
              </button>
            </div>
          </div>

          {/* Cards de Filtro */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(STATUS_CONFIG).map(([key, conf]) => {
              const isActive = statusFilter === key;
              return (
                <button 
                  key={key}
                  onClick={() => setStatusFilter(isActive ? null : key)}
                  className={`
                    relative overflow-hidden p-3 rounded-xl flex flex-col items-start justify-center transition-all duration-200 border-2
                    ${isActive ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-800 scale-105 z-10 shadow-xl' : 'hover:bg-slate-700/50 border-transparent bg-slate-700/30'}
                    ${isActive ? 'bg-slate-700 border-blue-400' : ''}
                  `}
                >
                  <div className="flex justify-between w-full items-start mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-slate-400'}`}>{conf.label}</span>
                    <conf.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <span className={`text-3xl font-black ${isActive ? 'text-white' : 'text-slate-300'}`}>{stats[key]}</span>
                  
                  <div className="w-full bg-slate-600 h-1 mt-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${conf.bg.replace('bg-', 'bg-')}`} 
                      style={{ width: `${(stats[key] / stats.total) * 100}%` }} 
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* --- LISTA DE ANDARES --- */}
      <main className="flex-1 p-4 max-w-7xl mx-auto w-full space-y-4">
        
        {(statusFilter || showOnlyPriority || searchTerm) && (
          <div className="bg-blue-900/30 border border-blue-500/30 text-blue-200 p-3 rounded-lg text-sm flex items-center gap-2 mb-4 animate-in fade-in">
            <Filter className="w-4 h-4" />
            <span>
              {searchTerm && <span>Buscando por: <strong className="text-white">"{searchTerm}"</strong></span>}
              {searchTerm && (statusFilter || showOnlyPriority) && " | "}
              {statusFilter && <span>Status: <strong className="text-white uppercase">{STATUS_CONFIG[statusFilter].label}</strong></span>}
              {statusFilter && showOnlyPriority && " + "}
              {showOnlyPriority && <strong className="text-yellow-300 uppercase">PRINCIPAIS</strong>}
            </span>
            <button onClick={() => {setStatusFilter(null); setShowOnlyPriority(false); setSearchTerm('')}} className="ml-auto text-xs underline hover:text-white">Limpar Tudo</button>
          </div>
        )}

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
          
          let progressColor = 'bg-slate-300';
          if (porcentagemAndar > 30) progressColor = 'bg-yellow-400';
          if (porcentagemAndar > 70) progressColor = 'bg-blue-400';
          if (porcentagemAndar === 100) progressColor = 'bg-emerald-500';

          const isOpen = expandedFloors[floor] || searchTerm !== '';

          return (
            <div key={floor} className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200">
              <button 
                onClick={() => toggleFloor(floor)}
                className="w-full bg-slate-50 hover:bg-slate-100 p-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="bg-slate-800 text-white font-bold rounded px-3 py-2 text-sm shadow-sm group-hover:bg-slate-700 transition">
                    {floor}º ANDAR
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {unitsFiltered.length} aptos
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:max-w-xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase w-12 text-right">
                    {porcentagemAndar}% OK
                  </div>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${progressColor} transition-all duration-500`} 
                      style={{ width: `${porcentagemAndar}%` }}
                    />
                  </div>
                  {isOpen ? <ChevronUp className="text-slate-400 w-5 h-5" /> : <ChevronDown className="text-slate-400 w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="p-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2 sm:gap-3 bg-slate-50/50">
                  {unitsFiltered.map(apt => {
                    const isPriority = PRIORITY_IDS.includes(apt.id);
                    const status = STATUS_CONFIG[apt.status];
                    const isDimmed = searchTerm && !apt.id.includes(searchTerm);
                    
                    return (
                      <button
                        key={apt.id}
                        onClick={() => { setSelectedAptId(apt.id); setEditStatus(apt.status); setEditNotes(apt.notes || ''); }}
                        className={`
                          relative h-14 rounded-lg border-2 flex items-center justify-center transition-all duration-200
                          ${status.bg} ${status.border} ${status.text}
                          ${isDimmed ? 'opacity-30 grayscale' : 'hover:scale-105 hover:shadow-lg hover:z-10'}
                        `}
                      >
                        <span className="font-black text-sm tracking-tight">{apt.id}</span>
                        
                        {isPriority && (
                          <div className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black rounded-full p-0.5 shadow-sm border border-white z-10">
                             <Star className="w-2.5 h-2.5 fill-black" />
                          </div>
                        )}
                        
                        {apt.notes && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-600 w-3 h-3 rounded-full border-2 border-white animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* --- RODAPÉ COM AÇÕES DE ADMINISTRAÇÃO SEGURA --- */}
        <div className="mt-10 p-4 border-t border-slate-700 flex justify-center">
            {showResetConfirm ? (
                <div className="bg-red-900/50 p-4 rounded-lg border border-red-500 flex flex-col items-center gap-3">
                    <p className="text-red-200 text-sm font-bold">CUIDADO: Isso vai zerar o banco de dados.</p>
                    <div className="flex gap-2">
                        <button onClick={manualInitializeData} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded">Confirmar Reset</button>
                        <button onClick={() => setShowResetConfirm(false)} className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded">Cancelar</button>
                    </div>
                </div>
            ) : (
                <button onClick={() => setShowResetConfirm(true)} className="flex items-center gap-2 text-xs text-slate-500 hover:text-red-400 transition-colors">
                    <Database className="w-3 h-3" /> Admin: Inicializar Banco de Dados
                </button>
            )}
        </div>

      </main>

      {/* --- MODAL (JANELA DE EDIÇÃO) --- */}
      {selectedAptId && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
            
            <div className="bg-slate-800 p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-black text-white tracking-tighter">{selectedAptId}</h2>
                {PRIORITY_IDS.includes(selectedAptId) && (
                  <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-black" /> Principal
                  </span>
                )}
              </div>
              <button onClick={() => setSelectedAptId(null)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">Alterar Situação</label>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(STATUS_CONFIG).map(([key, conf]) => (
                  <button
                    key={key}
                    onClick={() => setEditStatus(key)}
                    className={`
                      p-3 rounded-xl font-bold text-sm flex items-center justify-start gap-3 border transition-all
                      ${editStatus === key 
                        ? `ring-2 ring-blue-500 ring-offset-2 ring-offset-white ${conf.bg} ${conf.text} border-transparent shadow-md` 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'}
                    `}
                  >
                    <conf.icon className={`w-5 h-5 ${editStatus === key ? 'text-white' : 'text-slate-400'}`} />
                    {conf.label}
                  </button>
                ))}
              </div>

              <label className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Observações</label>
              <textarea
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl h-28 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all text-slate-700 font-medium"
                placeholder="Escreva aqui se houver alguma pendência..."
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
              />

              <button 
                onClick={handleSave} 
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all"
              >
                <Save className="w-5 h-5" /> SALVAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
