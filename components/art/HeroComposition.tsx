export function HeroComposition() {
  return (
    <svg
      aria-hidden="true"
      className="hero-art h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 760 640"
    >
      <g className="hero-art-float">
        <rect x="68" y="106" width="510" height="390" rx="8" fill="var(--color-bg)" stroke="var(--color-line)" strokeWidth="2" />
        <path d="M68 151h510" stroke="var(--color-line)" strokeWidth="2" />
        <circle cx="92" cy="128" r="6" fill="var(--color-ember)" />
        <circle cx="114" cy="128" r="6" fill="var(--color-text)" opacity=".55" />
        <circle cx="136" cy="128" r="6" fill="var(--color-text)" opacity=".3" />
        <rect x="105" y="190" width="214" height="18" rx="4" fill="var(--color-text)" />
        <rect x="105" y="226" width="285" height="9" rx="4" fill="var(--color-muted)" />
        <rect x="105" y="246" width="238" height="9" rx="4" fill="var(--color-muted)" />
        <rect x="105" y="276" width="112" height="34" rx="4" fill="var(--color-ember)" />
        <rect x="105" y="341" width="138" height="118" rx="6" fill="var(--color-surface)" />
        <rect x="257" y="341" width="138" height="118" rx="6" fill="var(--color-surface)" />
        <rect x="409" y="341" width="138" height="118" rx="6" fill="var(--color-surface)" />
        <rect x="119" y="356" width="72" height="7" rx="3" fill="var(--color-text)" />
        <rect x="119" y="374" width="102" height="5" rx="2" fill="var(--color-muted)" />
        <rect x="271" y="356" width="72" height="7" rx="3" fill="var(--color-text)" />
        <rect x="271" y="374" width="102" height="5" rx="2" fill="var(--color-muted)" />
        <rect x="423" y="356" width="72" height="7" rx="3" fill="var(--color-text)" />
        <rect x="423" y="374" width="102" height="5" rx="2" fill="var(--color-muted)" />
      </g>
      <g className="hero-art-phone">
        <rect x="454" y="220" width="206" height="356" rx="28" fill="var(--color-cream)" stroke="var(--color-line)" strokeWidth="3" />
        <rect x="470" y="250" width="174" height="308" rx="18" fill="var(--color-bg)" />
        <rect x="523" y="260" width="68" height="6" rx="3" fill="var(--color-line)" />
        <rect x="486" y="288" width="94" height="12" rx="4" fill="var(--color-text)" />
        <rect x="486" y="310" width="136" height="7" rx="3" fill="var(--color-muted)" />
        <rect x="486" y="338" width="142" height="66" rx="6" fill="var(--color-surface)" />
        <circle cx="504" cy="360" r="9" fill="var(--color-ember)" />
        <rect x="522" y="354" width="81" height="6" rx="3" fill="var(--color-text)" />
        <rect x="522" y="367" width="60" height="5" rx="2" fill="var(--color-muted)" />
        <rect x="486" y="414" width="142" height="56" rx="6" fill="var(--color-surface)" />
        <circle cx="504" cy="435" r="9" fill="var(--color-ember)" />
        <rect x="522" y="429" width="81" height="6" rx="3" fill="var(--color-text)" />
        <rect x="522" y="442" width="60" height="5" rx="2" fill="var(--color-muted)" />
        <rect x="486" y="480" width="142" height="56" rx="6" fill="var(--color-surface)" />
        <circle cx="504" cy="501" r="9" fill="var(--color-ember)" />
        <rect x="522" y="495" width="81" height="6" rx="3" fill="var(--color-text)" />
        <rect x="522" y="508" width="60" height="5" rx="2" fill="var(--color-muted)" />
      </g>
      <g className="hero-art-notification">
        <rect x="40" y="454" width="228" height="68" rx="8" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="2" />
        <circle cx="70" cy="488" r="14" fill="var(--color-ember)" />
        <path d="m64 488 4 4 8-9" stroke="var(--color-bg)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <text x="94" y="484" fill="var(--color-text)" fontSize="13" fontWeight="600">New booking</text>
        <text x="94" y="502" fill="var(--color-muted)" fontSize="12">confirmed</text>
      </g>
      <g className="hero-art-chart">
        <rect x="522" y="60" width="174" height="106" rx="8" fill="var(--color-surface)" stroke="var(--color-line)" strokeWidth="2" />
        <path d="m545 137 25-27 21 13 32-37 23 14" stroke="var(--color-ember)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <path d="M544 145h130" stroke="var(--color-line)" strokeWidth="2" />
        <circle cx="591" cy="84" r="4" fill="var(--color-text)" opacity=".75" />
        <circle cx="606" cy="84" r="4" fill="var(--color-text)" opacity=".4" />
        <circle cx="621" cy="84" r="4" fill="var(--color-text)" opacity=".2" />
      </g>
    </svg>
  );
}
