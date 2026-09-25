import { Section } from "./ui";

const stack = ["Google Cloud", "Firebase", "Node.js", "Flutter", "Agentic AI"];

export default function InfraBanner() {
  return (
    <div className="border-y border-line bg-surface/40">
      <Section className="py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-ink-faint shrink-0">
            Infrastructure we deploy on
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {stack.map((name) => (
              <span
                key={name}
                className="text-[15px] font-medium text-ink-dim"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
