export function HeroComposition() {
  return (
    <svg
      aria-hidden="true"
      className="hero-art h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 760 640"
    >
      <g className="hero-art-float">
        <rect x="48" y="106" width="560" height="390" rx="10" fill="rgb(var(--card))" />
        <path d="M58 156h540v330H58z" fill="rgb(var(--fg))" />
        <path d="M48 116a10 10 0 0 1 10-10h540a10 10 0 0 1 10 10v40H48v-40Z" fill="rgb(var(--card))" />
        <circle cx="76" cy="133" r="6" fill="rgb(var(--brand))" />
        <circle cx="98" cy="133" r="6" fill="rgb(var(--fg))" opacity=".8" />
        <circle cx="120" cy="133" r="6" fill="rgb(var(--fg))" opacity=".45" />
        <rect x="88" y="188" width="230" height="22" rx="5" fill="rgb(var(--bg))" />
        <rect x="88" y="228" width="300" height="10" rx="5" fill="rgb(var(--muted))" />
        <rect x="88" y="250" width="252" height="10" rx="5" fill="rgb(var(--muted))" />
        <rect x="88" y="282" width="126" height="38" rx="5" fill="rgb(var(--brand))" />
        <rect x="88" y="350" width="145" height="120" rx="7" fill="rgb(var(--card))" />
        <rect x="250" y="350" width="145" height="120" rx="7" fill="rgb(var(--card))" />
        <rect x="412" y="350" width="145" height="120" rx="7" fill="rgb(var(--card))" />
        <rect x="103" y="368" width="78" height="8" rx="4" fill="rgb(var(--fg))" />
        <rect x="103" y="388" width="108" height="6" rx="3" fill="rgb(var(--fg))" opacity=".55" />
        <rect x="265" y="368" width="78" height="8" rx="4" fill="rgb(var(--fg))" />
        <rect x="265" y="388" width="108" height="6" rx="3" fill="rgb(var(--fg))" opacity=".55" />
        <rect x="427" y="368" width="78" height="8" rx="4" fill="rgb(var(--fg))" />
        <rect x="427" y="388" width="108" height="6" rx="3" fill="rgb(var(--fg))" opacity=".55" />
      </g>
      <g className="hero-art-phone">
        <rect x="390" y="216" width="220" height="366" rx="30" fill="rgb(var(--fg))" />
        <rect x="402" y="230" width="196" height="338" rx="21" fill="rgb(var(--bg))" />
        <rect x="472" y="239" width="54" height="7" rx="3.5" fill="rgb(var(--card))" />
        <rect x="418" y="266" width="112" height="14" rx="4" fill="rgb(var(--fg))" />
        <rect x="418" y="290" width="148" height="7" rx="3.5" fill="rgb(var(--fg))" opacity=".55" />
        <rect x="414" y="318" width="172" height="70" rx="8" fill="rgb(var(--card))" />
        <circle cx="435" cy="343" r="10" fill="rgb(var(--brand))" />
        <rect x="454" y="337" width="108" height="7" rx="3.5" fill="rgb(var(--fg))" />
        <rect x="454" y="353" width="76" height="6" rx="3" fill="rgb(var(--fg))" opacity=".55" />
        <rect x="414" y="400" width="172" height="70" rx="8" fill="rgb(var(--card))" />
        <circle cx="435" cy="425" r="10" fill="rgb(var(--brand))" />
        <rect x="454" y="419" width="108" height="7" rx="3.5" fill="rgb(var(--fg))" />
        <rect x="454" y="435" width="76" height="6" rx="3" fill="rgb(var(--fg))" opacity=".55" />
        <rect x="414" y="482" width="172" height="66" rx="8" fill="rgb(var(--card))" />
        <circle cx="435" cy="505" r="10" fill="rgb(var(--brand))" />
        <rect x="454" y="499" width="108" height="7" rx="3.5" fill="rgb(var(--fg))" />
        <rect x="454" y="515" width="76" height="6" rx="3" fill="rgb(var(--fg))" opacity=".55" />
      </g>
      <g className="hero-art-notification">
        <rect x="24" y="460" width="244" height="76" rx="10" fill="rgb(var(--fg))" />
        <circle cx="58" cy="498" r="16" fill="rgb(var(--brand))" />
        <path d="m51 498 5 5 10-11" stroke="rgb(var(--bg))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <text x="86" y="493" fill="rgb(var(--bg))" fontSize="14" fontWeight="700">New booking</text>
        <text x="86" y="514" fill="rgb(var(--bg))" fontSize="13">confirmed</text>
      </g>
      <g className="hero-art-chart">
        <rect x="530" y="48" width="184" height="116" rx="10" fill="rgb(var(--fg))" />
        <path d="m550 136 29-34 25 17 35-45 30 18" stroke="rgb(var(--brand))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
        <path d="M550 146h143" stroke="rgb(var(--bg))" strokeOpacity=".15" strokeWidth="2" />
        <circle cx="574" cy="72" r="4" fill="rgb(var(--bg))" opacity=".7" />
        <circle cx="589" cy="72" r="4" fill="rgb(var(--bg))" opacity=".4" />
        <circle cx="604" cy="72" r="4" fill="rgb(var(--bg))" opacity=".2" />
      </g>
    </svg>
  );
}
