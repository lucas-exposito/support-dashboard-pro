const technicians = [
  { name: "Ana Souza", role: "Sênior", tickets: 48, resolved: 46, avatar: "AS" },
  { name: "Carlos Lima", role: "Pleno", tickets: 42, resolved: 38, avatar: "CL" },
  { name: "Bruna Costa", role: "Sênior", tickets: 39, resolved: 39, avatar: "BC" },
  { name: "Diego Alves", role: "Júnior", tickets: 35, resolved: 30, avatar: "DA" },
  { name: "Fábio Mendes", role: "Pleno", tickets: 33, resolved: 31, avatar: "FM" },
];

const TeamPerformance = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in" style={{ animationDelay: "550ms" }}>
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="text-sm font-semibold text-foreground">Performance da Equipe</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Top 5 técnicos do mês</p>
      </div>
    </div>
    <div className="space-y-3">
      {technicians.map((t, i) => {
        const rate = Math.round((t.resolved / t.tickets) * 100);
        return (
          <div key={t.name} className="flex items-center gap-3 group">
            <span className="text-[10px] font-mono text-muted-foreground w-4">{i + 1}.</span>
            <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
              {t.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-foreground truncate">{t.name}</p>
                <span className="text-[10px] text-muted-foreground ml-2">{t.tickets} chamados</span>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 h-1 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${rate}%` }} />
                </div>
                <span className="text-[10px] font-mono text-primary">{rate}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default TeamPerformance;
