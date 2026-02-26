import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  delay?: number;
}

const KpiCard = ({ title, value, change, trend, icon: Icon, delay = 0 }: KpiCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: delay / 1000, ease: "easeOut" }}
    whileHover={{ scale: 1.02, y: -2 }}
    className="glass-card p-5 group hover:glow-border transition-shadow duration-300"
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
  </motion.div>
);

export default KpiCard;
