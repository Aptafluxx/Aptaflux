// Lightweight, hand-built SVG illustrations grounded in each case study's
// actual domain, standing in for product screenshots without using generic
// gray placeholder boxes.

export function DoctorHuntArt() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" role="img" aria-label="Healthcare booking interface diagram">
      <rect width="480" height="360" fill="#10151A" />
      <rect x="32" y="32" width="180" height="296" rx="4" fill="#151B21" stroke="#232B31" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(48, ${64 + i * 52})`}>
          <circle cx="14" cy="14" r="14" fill="#0E4650" />
          <rect x="40" y="4" width="120" height="8" rx="2" fill="#3A4348" />
          <rect x="40" y="18" width="80" height="7" rx="2" fill="#232B31" />
        </g>
      ))}
      <rect x="240" y="32" width="208" height="296" rx="4" fill="#0E1317" stroke="#232B31" />
      <rect x="260" y="56" width="90" height="10" rx="2" fill="#5FB8AE" opacity="0.7" />
      <rect x="260" y="84" width="168" height="1" fill="#232B31" />
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => {
          const filled = (row * 5 + col) % 7 === 2 || (row * 5 + col) % 7 === 4;
          return (
            <rect
              key={`${row}-${col}`}
              x={260 + col * 32}
              y={100 + row * 34}
              width="26"
              height="26"
              rx="3"
              fill={filled ? "#013b46" : "#151B21"}
              stroke="#232B31"
            />
          );
        })
      )}
    </svg>
  );
}

export function DripsWaterArt() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" role="img" aria-label="Automated commerce and chatbot order flow diagram">
      <rect width="480" height="360" fill="#10151A" />
      <rect x="32" y="32" width="416" height="60" rx="4" fill="#151B21" stroke="#232B31" />
      <circle cx="60" cy="62" r="10" fill="#013b46" />
      <rect x="84" y="52" width="140" height="8" rx="2" fill="#3A4348" />
      <rect x="84" y="66" width="90" height="6" rx="2" fill="#232B31" />

      <g transform="translate(32, 116)">
        <rect width="200" height="212" rx="4" fill="#0E1317" stroke="#232B31" />
        <rect x="16" y="16" width="70" height="8" rx="2" fill="#5FB8AE" opacity="0.7" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(16, ${44 + i * 56})`}>
            <rect width="168" height="44" rx="3" fill="#151B21" stroke="#232B31" />
            <circle cx="22" cy="22" r="10" fill="#0A5261" opacity="0.6" />
            <rect x="42" y="12" width="90" height="7" rx="2" fill="#3A4348" />
            <rect x="42" y="24" width="50" height="6" rx="2" fill="#232B31" />
          </g>
        ))}
      </g>

      <g transform="translate(248, 116)">
        <rect width="200" height="212" rx="4" fill="#0E1317" stroke="#232B31" />
        <circle cx="30" cy="30" r="12" fill="#013b46" />
        <rect x="52" y="24" width="60" height="7" rx="2" fill="#5FB8AE" opacity="0.6" />
        <rect x="16" y="56" width="150" height="30" rx="14" fill="#151B21" stroke="#232B31" />
        <rect x="30" y="66" width="90" height="8" rx="2" fill="#3A4348" />
        <rect x="60" y="98" width="120" height="30" rx="14" fill="#0E4650" opacity="0.5" />
        <rect x="72" y="108" width="80" height="8" rx="2" fill="#5FB8AE" />
        <rect x="16" y="140" width="140" height="30" rx="14" fill="#151B21" stroke="#232B31" />
        <rect x="30" y="150" width="70" height="8" rx="2" fill="#3A4348" />
      </g>
    </svg>
  );
}

export function TaskFlowArt() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" role="img" aria-label="Real-time sync and authentication architecture diagram">
      <rect width="480" height="360" fill="#10151A" />
      <g transform="translate(60, 48)">
        <rect width="140" height="88" rx="4" fill="#0E1317" stroke="#232B31" />
        <circle cx="26" cy="28" r="9" fill="#013b46" />
        <rect x="44" y="20" width="72" height="7" rx="2" fill="#3A4348" />
        <rect x="44" y="34" width="50" height="6" rx="2" fill="#232B31" />
        <rect x="16" y="58" width="108" height="16" rx="3" fill="#151B21" stroke="#232B31" />
      </g>
      <g transform="translate(280, 48)">
        <rect width="140" height="88" rx="4" fill="#0E1317" stroke="#232B31" />
        <circle cx="26" cy="28" r="9" fill="#0A5261" />
        <rect x="44" y="20" width="72" height="7" rx="2" fill="#3A4348" />
        <rect x="44" y="34" width="50" height="6" rx="2" fill="#232B31" />
        <rect x="16" y="58" width="108" height="16" rx="3" fill="#151B21" stroke="#232B31" />
      </g>

      <rect x="170" y="188" width="140" height="64" rx="4" fill="#0E4650" opacity="0.7" />
      <rect x="196" y="208" width="88" height="8" rx="2" fill="#EDF1F1" opacity="0.85" />
      <rect x="196" y="222" width="60" height="7" rx="2" fill="#EDF1F1" opacity="0.5" />

      <path d="M130 136 C130 170, 200 170, 232 196" stroke="#3A4348" strokeWidth="2" fill="none" />
      <path d="M350 136 C350 170, 280 170, 248 196" stroke="#3A4348" strokeWidth="2" fill="none" />
      <circle cx="130" cy="136" r="4" fill="#5FB8AE" />
      <circle cx="350" cy="136" r="4" fill="#5FB8AE" />

      <g transform="translate(160, 280)">
        <rect width="160" height="46" rx="4" fill="#151B21" stroke="#232B31" />
        <rect x="14" y="14" width="14" height="18" rx="2" fill="#5FB8AE" opacity="0.8" />
        <rect x="40" y="15" width="90" height="7" rx="2" fill="#3A4348" />
        <rect x="40" y="27" width="60" height="6" rx="2" fill="#232B31" />
      </g>
    </svg>
  );
}
