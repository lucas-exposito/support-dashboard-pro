import { CheckCircle2 } from "lucide-react";

const results = [
  { label: "+48% de produtividade", desc: "da equipe de suporte" },
  { label: "−55% no tempo de análise", desc: "de indicadores" },
  { label: "Centralização total", desc: "e automação dos chamados" },
];

const ResultsCard = () => (
  <div className="glass-card p-5 opacity-0 animate-fade-in glow-border" style={{ animationDelay: "600ms" }}>
    <h3 className="text-sm font-semibold text-foreground mb-4">Resultados Alcançados</h3>
    <div className="space-y-4">
      {results.map((r, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-foreground">{r.label}</p>
            <p className="text-xs text-muted-foreground">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ResultsCard;
