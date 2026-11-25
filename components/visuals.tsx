export function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const paths: Record<string, string> = {
    arrow: "M4 12h15m-6-6 6 6-6 6",
    out: "M5 19 19 5M6 5h13v13",
    down: "M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4",
    pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
    plus: "M12 4v16M4 12h16",
    menu: "M3 7h18M3 12h18M3 17h18",
    layers: "m2 8 10-5 10 5-10 5Zm1 5 9 5 9-5m-18 4 9 5 9-5",
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  );
}
export function Mark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" width="35" height="35">
      <path
        fill="#ff7748"
        d="M1 26 15 5h8L9 26zm13 0 9-14 3 7-5 7zm10 0 4-6 5 10H3l3-4z"
      />
    </svg>
  );
}
export const media: Record<
  string,
  { file: string; alt: string; caption: string }[]
> = {
  algogemix: [
    {
      file: "algo-pair.webp",
      alt: "NinjaTrader chart displaying the PairZScore oscillator",
      caption: "Product screenshot · PairZScore",
    },
    {
      file: "algo-risk.webp",
      alt: "AdvancedRiskReward position sizing levels on a trading chart",
      caption: "Product screenshot · AdvancedRiskReward",
    },
    {
      file: "algo-grid.webp",
      alt: "GridPro chart excerpt",
      caption: "Product screenshot · GridPro chart detail",
    },
  ],
  "paranormal-atlas": [
    {
      file: "atlas-dossier.webp",
      alt: "Dyatlov Pass case-file layout with timeline and evidence panels",
      caption: "Original interface concept · Case dossier",
    },
    {
      file: "atlas-dashboard.webp",
      alt: "Vertical research dashboard design",
      caption: "Original interface concept · Research dashboard",
    },
  ],
  "utopic-dystopia": [
    {
      file: "utopic-stronghold.webp",
      alt: "Concept painting of a fortified film lot at dusk",
      caption: "Original environment concept · Film lot stronghold",
    },
  ],
  "nations-ghost": [
    {
      file: "blocc-blocc.webp",
      alt: "Blocc Blocc release artwork featuring the two artists",
      caption: "Release artwork · Blocc Blocc",
    },
  ],
};
export function Artwork({ slug }: { slug: string }) {
  const item = media[slug]?.[0];
  if (item)
    return <img src={"/media/" + item.file} alt={item.alt} loading="lazy" />;
  return (
    <img
      src={"/media/" + slug + ".webp"}
      alt={
        slug === "algogemix"
          ? "Editorial illustration of a statistical signal"
          : "Schematic of the proposed email routing workflow"
      }
      loading="lazy"
    />
  );
}
