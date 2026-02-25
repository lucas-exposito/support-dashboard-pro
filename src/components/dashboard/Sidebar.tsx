import { LayoutDashboard, Ticket, BarChart3, Users, Settings, Headphones, Zap } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Ticket, label: "Chamados" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: Users, label: "Equipe" },
  { icon: Settings, label: "Configurações" },
];

const Sidebar = () => (
  <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-50">
    <div className="p-6 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
        <Zap className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <h1 className="text-sm font-bold text-sidebar-accent-foreground tracking-tight">TechWave</h1>
        <p className="text-[10px] text-sidebar-foreground tracking-widest uppercase">Solutions</p>
      </div>
    </div>

    <nav className="flex-1 px-3 mt-4 space-y-1">
      {navItems.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
            active
              ? "bg-sidebar-accent text-sidebar-accent-foreground glow-border"
              : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </nav>

    <div className="p-4 m-3 rounded-lg bg-secondary border border-border">
      <div className="flex items-center gap-2 mb-2">
        <Headphones className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium text-foreground">Suporte Ativo</span>
      </div>
      <p className="text-[11px] text-muted-foreground">12 chamados em aberto</p>
    </div>
  </aside>
);

export default Sidebar;
