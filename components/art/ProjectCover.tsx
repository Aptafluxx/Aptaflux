import { DeviceFrame } from "@/components/work/DeviceFrame";
import type { WorkProject } from "@/content/work";

export function ProjectCover({ project }: { project: Pick<WorkProject, "name" | "kind"> }) {
  const initial = project.name.charAt(0);
  return (
    <DeviceFrame device={project.kind === "mobile" ? "phone" : "laptop"}>
      <svg aria-hidden="true" className="h-full w-full" fill="none" viewBox="0 0 320 200">
        <rect width="320" height="200" fill="rgb(var(--bg))" />
        <rect x="18" y="18" width="284" height="22" rx="5" fill="rgb(var(--card))" />
        <circle cx="31" cy="29" r="5" fill="rgb(var(--brand))" />
        <rect x="44" y="26" width="80" height="6" rx="3" fill="rgb(var(--fg))" />
        <rect x="18" y="55" width="178" height="105" rx="8" fill="rgb(var(--card))" />
        <rect x="32" y="72" width="92" height="10" rx="5" fill="rgb(var(--fg))" />
        <rect x="32" y="91" width="130" height="6" rx="3" fill="rgb(var(--fg))" opacity=".55" />
        <rect x="32" y="112" width="78" height="26" rx="6" fill="rgb(var(--brand))" />
        <text x="71" y="130" fill="rgb(var(--brand-fg))" fontSize="18" fontWeight="700" textAnchor="middle">{initial}</text>
        <rect x="214" y="55" width="88" height="48" rx="8" fill="rgb(var(--fg))" />
        <rect x="214" y="113" width="88" height="47" rx="8" fill="rgb(var(--card))" />
        <rect x="230" y="72" width="45" height="6" rx="3" fill="rgb(var(--bg))" />
        <rect x="230" y="130" width="52" height="6" rx="3" fill="rgb(var(--fg))" />
      </svg>
    </DeviceFrame>
  );
}
