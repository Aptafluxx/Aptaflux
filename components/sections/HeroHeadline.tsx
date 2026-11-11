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
    <h1 className="font-display text-display-xl">
      <span className="min-[640px]:hidden">
        <HeadlineLines lines={mobileLines} />
      </span>
      <span className="hidden min-[640px]:block">
        <HeadlineLines lines={lines} />
      </span>
    </h1>
  );
}
