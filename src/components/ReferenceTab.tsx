export default function ReferenceTab() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Formules */}
      <Section title="Formules Tap Drill" color="ref">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormulaCard
            label="Imperial (UN*)"
            formula="Tap Drill = Major \u00d8 \u2212 (1 / TPI)"
            note="Donne ~75% d'engagement"
          />
          <FormulaCard
            label="Metric (M)"
            formula="Tap Drill = Nominal \u00d8 \u2212 Pitch (mm)"
            note="Idem 75-80%"
          />
        </div>
        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
          <InfoRow label="Engagement 75%" value="Recommande pour acier, aluminium" />
          <InfoRow label="Engagement 50-65%" value="Materiaux durs (inox, titane)" />
        </div>
      </Section>

      {/* Definitions */}
      <Section title="Definitions" color="steel-400">
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <DefRow term="TPI" def="Threads Per Inch — nombre de filets par pouce" />
          <DefRow term="Pitch" def="Distance axiale entre deux cretes consecutives (mm)" />
          <DefRow term="Major \u00d8" def="Diametre exterieur nominal du filet (crete)" />
          <DefRow term="Minor \u00d8" def="Diametre interieur (fond de filet)" />
          <DefRow term="Thread Depth" def="Profondeur radiale = (Major \u2212 Minor) / 2" />
          <DefRow term="Tap Drill" def="Foret utilise avant le taraudage (\u2248 diametre mineur)" />
          <DefRow term="Clearance Drill" def="Foret pour passage libre du boulon entier" />
          <DefRow term="Engagement" def="Longueur de contact filet-filet (min = 1\u00d7\u00d8 nominal)" />
        </div>
      </Section>

      {/* Normes */}
      <Section title="Normes Applicables" color="imperial">
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <NormRow code="UNC / UNF" norm="ASME B1.1" />
          <NormRow code="UNEF" norm="ASME B1.1 (Extra-Fine)" />
          <NormRow code="NPT" norm="ANSI/ASME B1.20.1" />
          <NormRow code="NPTF" norm="ANSI/ASME B1.20.3 (Dryseal)" />
          <NormRow code="BSPP (G)" norm="ISO 228-1 (Parallel)" />
          <NormRow code="BSPT (R)" norm="ISO 7-1 (Taper)" />
          <NormRow code="Metric ISO" norm="ISO 68-1 / ISO 261 / ISO 724" />
          <NormRow code="ACME" norm="ASME B1.5" />
          <NormRow code="Buttress" norm="ASME B1.9" />
          <NormRow code="Trapezoidal" norm="ISO 2902/2903/2904" />
        </div>
      </Section>

      {/* Conseils */}
      <Section title="Conseils Pratiques" color="metric">
        <div className="space-y-2 text-sm">
          <TipRow icon="wrench" title="Materiaux tendres" tip="Alu, plastique \u2192 foret legerement plus grand (+0.1mm)" />
          <TipRow icon="shield" title="Acier inox" tip="Reduire l'engagement a 60% — foret plus grand" />
          <TipRow icon="alert" title="Alu coule" tip="50-65% engagement pour eviter arrachement" />
          <TipRow icon="arrow-down" title="Filets borgnes" tip="Percer 3-5 filets plus profond que l'engagement" />
          <TipRow icon="droplet" title="Lubrification" tip="Toujours huile de coupe — critique pour inox et titane" />
          <TipRow icon="gauge" title="Vitesse de coupe" tip="Acier: 10-15 m/min | Alu: 40-60 m/min | Inox: 5-8 m/min" />
        </div>
      </Section>
    </div>
  )
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="bg-steel-900/50 border border-steel-800 rounded-lg p-4">
      <h2 className="text-base font-bold mb-3" style={{ color: `var(--color-${color})` }}>{title}</h2>
      {children}
    </div>
  )
}

function FormulaCard({ label, formula, note }: { label: string; formula: string; note: string }) {
  return (
    <div className="bg-steel-800/50 rounded-lg p-3 border border-steel-700">
      <div className="text-xs text-steel-400 mb-1">{label}</div>
      <div className="font-mono text-sm text-steel-100 font-semibold">{formula}</div>
      <div className="text-xs text-steel-500 mt-1">{note}</div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-steel-300 font-medium shrink-0">{label}:</span>
      <span className="text-steel-400">{value}</span>
    </div>
  )
}

function DefRow({ term, def }: { term: string; def: string }) {
  return (
    <div className="flex gap-2 py-1 border-b border-steel-800/50">
      <span className="text-ref font-mono font-semibold shrink-0 w-28">{term}</span>
      <span className="text-steel-300">{def}</span>
    </div>
  )
}

function NormRow({ code, norm }: { code: string; norm: string }) {
  return (
    <div className="flex gap-2 py-1 border-b border-steel-800/50">
      <span className="text-imperial font-semibold shrink-0 w-28">{code}</span>
      <span className="text-steel-300 font-mono text-xs">{norm}</span>
    </div>
  )
}

function TipRow({ title, tip }: { icon: string; title: string; tip: string }) {
  return (
    <div className="flex gap-3 py-2 border-b border-steel-800/50">
      <span className="text-metric font-semibold shrink-0 w-36">{title}</span>
      <span className="text-steel-300">{tip}</span>
    </div>
  )
}
