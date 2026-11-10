type HeroHeadlineProps = {
  lines: readonly string[];
  mobileLines: readonly string[];
};

function HeadlineLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block overflow-hidden pb-[0.08em]">
          <span
            className="headline-line block"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </>
  );
}

export function HeroHeadline({ lines, mobileLines }: HeroHeadlineProps) {
  return (
    <h1 className="font-display text-[64px] font-semibold leading-[0.88] tracking-[-0.03em] min-[640px]:text-[clamp(2.5rem,9vw,12rem)] min-[1024px]:text-[clamp(3.5rem,12vw,12rem)]">
      <span className="min-[640px]:hidden">
        <HeadlineLines lines={mobileLines} />
      </span>
      <span className="hidden min-[640px]:block">
        <HeadlineLines lines={lines} />
      </span>
    </h1>
  );
}
