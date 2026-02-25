import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { semana: "Sem 1", tempo: 4.2, meta: 3.0 },
  { semana: "Sem 2", tempo: 3.8, meta: 3.0 },
  { semana: "Sem 3", tempo: 3.1, meta: 3.0 },
  { semana: "Sem 4", tempo: 2.9, meta: 3.0 },
  { semana: "Sem 5", tempo: 2.5, meta: 3.0 },
  { semana: "Sem 6", tempo: 2.7, meta: 3.0 },
  { semana: "Sem 7", tempo: 2.3, meta: 3.0 },
  { semana: "Sem 8", tempo: 2.1, meta: 3.0 },
];

const ResponseTimeChart = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "450ms" }}>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Tempo de Resposta</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Média semanal (horas)</p>
      </div>
      <span className="text-xs font-mono stat-up bg-success/10 px-2 py-1 rounded">Abaixo da meta</span>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
          <XAxis dataKey="semana" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 5]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222 44% 8%)",
              border: "1px solid hsl(222 30% 16%)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Line type="monotone" dataKey="meta" stroke="hsl(0 72% 55%)" strokeDasharray="5 5" strokeWidth={1.5} dot={false} />
          <Line type="monotone" dataKey="tempo" stroke="hsl(187 72% 50%)" strokeWidth={2.5} dot={{ fill: "hsl(187 72% 50%)", r: 3 }} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ResponseTimeChart;
