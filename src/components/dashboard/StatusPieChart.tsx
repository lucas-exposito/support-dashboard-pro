import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Resolvidos", value: 842, color: "hsl(152 60% 48%)" },
  { name: "Em andamento", value: 156, color: "hsl(38 92% 55%)" },
  { name: "Abertos", value: 98, color: "hsl(187 72% 50%)" },
  { name: "Cancelados", value: 24, color: "hsl(0 72% 55%)" },
];

const StatusPieChart = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "350ms" }}>
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-foreground">Status dos Chamados</h3>
      <p className="text-xs text-muted-foreground mt-0.5">Distribuição atual</p>
    </div>
    <div className="h-52">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222 44% 8%)",
              border: "1px solid hsl(222 30% 16%)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-2">
      {data.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
          <span className="text-[11px] text-muted-foreground truncate">{item.name}</span>
          <span className="text-[11px] font-semibold text-foreground ml-auto">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default StatusPieChart;
