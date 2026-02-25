import { Ticket, Clock, Users, Activity, Bell, Search } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import KpiCard from "@/components/dashboard/KpiCard";
import TicketsChart from "@/components/dashboard/TicketsChart";
import CategoryChart from "@/components/dashboard/CategoryChart";
import RecentTickets from "@/components/dashboard/RecentTickets";
import ResultsCard from "@/components/dashboard/ResultsCard";

const kpis = [
  { title: "Total de Chamados", value: "1.284", change: "+12%", trend: "up" as const, icon: Ticket },
  { title: "Tempo Médio Resolução", value: "2.4h", change: "−55%", trend: "up" as const, icon: Clock },
  { title: "Produtividade", value: "148%", change: "+48%", trend: "up" as const, icon: Activity },
  { title: "Técnicos Ativos", value: "24", change: "+3", trend: "up" as const, icon: Users },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Sidebar />
    <main className="ml-64 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md px-8 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-foreground">Dashboard</h2>
          <p className="text-xs text-muted-foreground">Painel de controle de chamados — TechWave Solutions</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Buscar chamados..."
              className="pl-9 pr-4 py-2 text-xs rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-56"
            />
          </div>
          <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
            TW
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <KpiCard key={kpi.title} {...kpi} delay={i * 80} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <TicketsChart />
          </div>
          <CategoryChart />
        </div>

        {/* Table + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <RecentTickets />
          </div>
          <ResultsCard />
        </div>
      </div>
    </main>
  </div>
);

export default Index;
