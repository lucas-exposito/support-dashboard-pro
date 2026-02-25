import { useState, useMemo } from "react";
import { Circle, Search, Filter, X } from "lucide-react";

const allTickets = [
  { id: "#TW-1042", title: "Falha na VPN corporativa", status: "Em andamento", priority: "Alta", time: "2h atrás", statusColor: "text-warning", category: "Rede" },
  { id: "#TW-1041", title: "Instalação Office 365", status: "Resolvido", priority: "Média", time: "3h atrás", statusColor: "stat-up", category: "Software" },
  { id: "#TW-1040", title: "Reset de senha - Diretoria", status: "Resolvido", priority: "Urgente", time: "4h atrás", statusColor: "stat-up", category: "Acesso" },
  { id: "#TW-1039", title: "Monitor sem sinal - Sala 4B", status: "Aberto", priority: "Baixa", time: "5h atrás", statusColor: "text-primary", category: "Hardware" },
  { id: "#TW-1038", title: "Erro no sistema ERP", status: "Em andamento", priority: "Alta", time: "6h atrás", statusColor: "text-warning", category: "Software" },
  { id: "#TW-1037", title: "Configurar e-mail novo colaborador", status: "Resolvido", priority: "Média", time: "7h atrás", statusColor: "stat-up", category: "Email" },
  { id: "#TW-1036", title: "Impressora não responde - 3° andar", status: "Aberto", priority: "Baixa", time: "8h atrás", statusColor: "text-primary", category: "Hardware" },
  { id: "#TW-1035", title: "Atualização antivírus corporativo", status: "Resolvido", priority: "Alta", time: "9h atrás", statusColor: "stat-up", category: "Software" },
  { id: "#TW-1034", title: "Acesso ao sistema de RH bloqueado", status: "Em andamento", priority: "Urgente", time: "10h atrás", statusColor: "text-warning", category: "Acesso" },
  { id: "#TW-1033", title: "Lentidão na rede Wi-Fi", status: "Aberto", priority: "Média", time: "11h atrás", statusColor: "text-primary", category: "Rede" },
];

const priorityStyles: Record<string, string> = {
  Urgente: "bg-destructive/15 text-destructive",
  Alta: "bg-warning/15 text-warning",
  Média: "bg-primary/15 text-primary",
  Baixa: "bg-muted text-muted-foreground",
};

const statusOptions = ["Todos", "Aberto", "Em andamento", "Resolvido"];

interface RecentTicketsProps {
  searchQuery?: string;
}

const RecentTickets = ({ searchQuery = "" }: RecentTicketsProps) => {
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filtered = useMemo(() => {
    return allTickets.filter((t) => {
      const matchesSearch =
        !searchQuery ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "Todos" || t.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Chamados Recentes</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {filtered.length} de {allTickets.length} chamados
          </p>
        </div>
        <div className="flex items-center gap-2">
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-all ${
                statusFilter === s
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-muted-foreground border-b border-border">
              <th className="text-left pb-3 font-medium">ID</th>
              <th className="text-left pb-3 font-medium">Título</th>
              <th className="text-left pb-3 font-medium">Categoria</th>
              <th className="text-left pb-3 font-medium">Status</th>
              <th className="text-left pb-3 font-medium">Prioridade</th>
              <th className="text-right pb-3 font-medium">Tempo</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-muted-foreground">
                  Nenhum chamado encontrado
                </td>
              </tr>
            ) : (
              filtered.map((t) => (
                <tr key={t.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer">
                  <td className="py-3 font-mono text-muted-foreground">{t.id}</td>
                  <td className="py-3 text-foreground">{t.title}</td>
                  <td className="py-3">
                    <span className="text-muted-foreground">{t.category}</span>
                  </td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1.5 ${t.statusColor}`}>
                      <Circle className="w-1.5 h-1.5 fill-current" />
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${priorityStyles[t.priority]}`}>
                      {t.priority}
                    </span>
                  </td>
                  <td className="py-3 text-right text-muted-foreground">{t.time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTickets;
