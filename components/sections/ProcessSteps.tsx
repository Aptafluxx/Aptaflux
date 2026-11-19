import { Code2, Compass, Rocket, Search } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

const processIcons = [Search, Compass, Code2, Rocket] as const;

export function ProcessSteps({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <div className="relative grid gap-8 before:absolute before:left-5 before:top-5 before:h-[calc(100%-2.5rem)] before:w-px before:bg-line sm:grid-cols-2 sm:before:hidden lg:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = processIcons[index];

        return (
          <Reveal className="relative z-10" delay={index * 0.06} key={step.number}>
            <p className="font-body text-small font-bold text-brand">
              {step.number}
            </p>
            <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-raised text-brand">
              <Icon aria-hidden="true" size={20} />
            </div>
            <h3 className="mt-4 font-body text-h3 font-bold tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="mt-2 text-body leading-relaxed text-muted">
              {step.text}
            </p>
          </Reveal>
        );
      })}
      <div
        aria-hidden="true"
        className="absolute left-[8%] right-[8%] top-[3.625rem] z-0 hidden h-px bg-line lg:block"
      />
    </div>
  );
}
