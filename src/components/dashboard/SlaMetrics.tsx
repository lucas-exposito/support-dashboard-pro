import { Shield, Star, Clock, Target } from "lucide-react";

const metrics = [
  {
    icon: Shield,
    label: "SLA Cumprido",
    value: "94.2%",
    sub: "Meta: 90%",
    color: "text-success",
    bg: "bg-success/10",
    bar: 94.2,
    barColor: "bg-success",
  },
  {
    icon: Star,
    label: "Satisfação (CSAT)",
    value: "4.7/5",
    sub: "+0.3 vs mês anterior",
    color: "text-warning",
    bg: "bg-warning/10",
    bar: 94,
    barColor: "bg-warning",
  },
  {
    icon: Clock,
    label: "First Response",
    value: "18min",
    sub: "Meta: 30min",
    color: "text-primary",
    bg: "bg-primary/10",
    bar: 100,
    barColor: "bg-primary",
  },
  {
    icon: Target,
    label: "Resolução 1° Contato",
    value: "72%",
    sub: "+8% este mês",
    color: "text-[hsl(262,60%,58%)]",
    bg: "bg-[hsl(262,60%,58%)]/10",
    bar: 72,
    barColor: "bg-[hsl(262,60%,58%)]",
  },
];

const SlaMetrics = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
    <div className="mb-5">
      <h3 className="text-sm font-semibold text-foreground">Métricas de Performance</h3>
      <p className="text-xs text-muted-foreground mt-0.5">Indicadores de qualidade do suporte</p>
    </div>
    <div className="space-y-5">
      {metrics.map((m) => (
        <div key={m.label}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg ${m.bg} flex items-center justify-center`}>
                <m.icon className={`w-4 h-4 ${m.color}`} />
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">{m.label}</p>
                <p className="text-[10px] text-muted-foreground">{m.sub}</p>
              </div>
            </div>
            <span className={`text-sm font-bold ${m.color}`}>{m.value}</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className={`h-full rounded-full ${m.barColor} transition-all duration-1000`}
              style={{ width: `${m.bar}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SlaMetrics;
