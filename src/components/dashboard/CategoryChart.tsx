import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { categoria: "Rede", total: 45 },
  { categoria: "Software", total: 62 },
  { categoria: "Hardware", total: 28 },
  { categoria: "Acesso", total: 35 },
  { categoria: "Email", total: 18 },
];

const CategoryChart = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Por Categoria</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Distribuição de chamados</p>
      </div>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={32}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" vertical={false} />
          <XAxis dataKey="categoria" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222 44% 8%)",
              border: "1px solid hsl(222 30% 16%)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Bar dataKey="total" fill="hsl(187 72% 50%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CategoryChart;
