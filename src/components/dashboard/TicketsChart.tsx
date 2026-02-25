import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { mes: "Jan", chamados: 120, resolvidos: 98 },
  { mes: "Fev", chamados: 135, resolvidos: 115 },
  { mes: "Mar", chamados: 148, resolvidos: 130 },
  { mes: "Abr", chamados: 160, resolvidos: 150 },
  { mes: "Mai", chamados: 142, resolvidos: 138 },
  { mes: "Jun", chamados: 155, resolvidos: 152 },
  { mes: "Jul", chamados: 168, resolvidos: 165 },
];

const TicketsChart = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Chamados vs Resolvidos</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Últimos 7 meses</p>
      </div>
      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">+48% prod.</span>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorChamados" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(187 72% 50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(187 72% 50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorResolvidos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(152 60% 48%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(152 60% 48%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
          <XAxis dataKey="mes" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222 44% 8%)",
              border: "1px solid hsl(222 30% 16%)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Area type="monotone" dataKey="chamados" stroke="hsl(187 72% 50%)" fill="url(#colorChamados)" strokeWidth={2} />
          <Area type="monotone" dataKey="resolvidos" stroke="hsl(152 60% 48%)" fill="url(#colorResolvidos)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default TicketsChart;
