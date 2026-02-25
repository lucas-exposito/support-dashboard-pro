import { Circle } from "lucide-react";

const tickets = [
  { id: "#TW-1042", title: "Falha na VPN corporativa", status: "Em andamento", priority: "Alta", time: "2h atrás", statusColor: "text-warning" },
  { id: "#TW-1041", title: "Instalação Office 365", status: "Resolvido", priority: "Média", time: "3h atrás", statusColor: "stat-up" },
  { id: "#TW-1040", title: "Reset de senha - Diretoria", status: "Resolvido", priority: "Urgente", time: "4h atrás", statusColor: "stat-up" },
  { id: "#TW-1039", title: "Monitor sem sinal - Sala 4B", status: "Aberto", priority: "Baixa", time: "5h atrás", statusColor: "text-primary" },
  { id: "#TW-1038", title: "Erro no sistema ERP", status: "Em andamento", priority: "Alta", time: "6h atrás", statusColor: "text-warning" },
  { id: "#TW-1037", title: "Configurar e-mail novo colaborador", status: "Resolvido", priority: "Média", time: "7h atrás", statusColor: "stat-up" },
];

const priorityStyles: Record<string, string> = {
  Urgente: "bg-destructive/15 text-destructive",
  Alta: "bg-warning/15 text-warning",
  Média: "bg-primary/15 text-primary",
  Baixa: "bg-muted text-muted-foreground",
};

const RecentTickets = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Chamados Recentes</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Últimas atualizações</p>
      </div>
      <button className="text-xs text-primary hover:underline">Ver todos</button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-muted-foreground border-b border-border">
            <th className="text-left pb-3 font-medium">ID</th>
            <th className="text-left pb-3 font-medium">Título</th>
            <th className="text-left pb-3 font-medium">Status</th>
            <th className="text-left pb-3 font-medium">Prioridade</th>
            <th className="text-right pb-3 font-medium">Tempo</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t) => (
            <tr key={t.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td className="py-3 font-mono text-muted-foreground">{t.id}</td>
              <td className="py-3 text-foreground">{t.title}</td>
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
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentTickets;
