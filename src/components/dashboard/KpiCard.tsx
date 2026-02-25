import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  delay?: number;
}

const KpiCard = ({ title, value, change, trend, icon: Icon, delay = 0 }: KpiCardProps) => (
  <div
    className="glass-card p-5 opacity-0 animate-fade-in group hover:glow-border transition-shadow duration-300"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className={`flex items-center gap-1 text-xs font-medium ${trend === "up" ? "stat-up" : "stat-down"}`}>
        {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {change}
      </div>
    </div>
    <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
    <p className="text-xs text-muted-foreground mt-1">{title}</p>
  </div>
);

export default KpiCard;
