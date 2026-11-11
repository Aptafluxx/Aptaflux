"use client";

import {
  siFirebase,
  siFlutter,
  siGooglecloud,
  siNextdotjs,
  siNodedotjs,
  siTypescript,
} from "simple-icons";
import { useReducedMotion } from "framer-motion";
import { homeContent } from "@/content/home";

const icons = [
  siFlutter,
  siNextdotjs,
  siTypescript,
  siFirebase,
  siGooglecloud,
  siNodedotjs,
] as const;
const technologies = homeContent.technologies.names.map((name, index) => ({
  name,
  icon: icons[index],
}));

function LogoList({ reverse = false }: { reverse?: boolean }) {
  const logos = reverse ? [...technologies].reverse() : technologies;

  return (
    <div className={`tech-marquee-track flex w-max items-center gap-10 ${reverse ? "tech-marquee-reverse" : ""}`}>
      {[0, 1].map((copy) => (
        <ul
          aria-hidden={copy === 1}
          className="flex items-center gap-10"
          key={copy}
        >
          {logos.map(({ name, icon }) => (
            <li className="flex shrink-0 items-center gap-3" key={name}>
              <svg
                aria-hidden="true"
                className="h-7 w-7 fill-current opacity-80"
                viewBox="0 0 24 24"
              >
                <path d={icon.path} />
              </svg>
              <span className="whitespace-nowrap font-body text-h3 font-bold tracking-[-0.02em]">
                {name}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export function Marquee() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
        {technologies.map(({ name, icon }) => (
          <li className="flex items-center gap-3" key={name}>
            <svg aria-hidden="true" className="h-7 w-7 fill-current opacity-80" viewBox="0 0 24 24">
              <path d={icon.path} />
            </svg>
            <span className="whitespace-nowrap font-body text-h3 font-bold tracking-[-0.02em]">
              {name}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div aria-label={technologies.map(({ name }) => name).join(", ")} className="space-y-6" role="group">
      <div className="overflow-hidden">
        <LogoList />
      </div>
      <div className="hidden overflow-hidden md:block">
        <LogoList reverse />
      </div>
    </div>
  );
}
