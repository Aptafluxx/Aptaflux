import type { ReactNode } from "react";

type DeviceFrameProps = {
  children: ReactNode;
  device?: "laptop" | "phone";
};

export function DeviceFrame({ children, device = "laptop" }: DeviceFrameProps) {
  return (
    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-bg p-2.5">
      <div
        className={`relative h-full overflow-hidden rounded-md border border-line bg-surface ${
          device === "phone" ? "mx-auto max-w-[46%] rounded-[1.25rem] p-1.5" : "p-2"
        }`}
      >
        {device === "phone" ? (
          <div className="absolute left-1/2 top-1 z-10 h-1 w-8 -translate-x-1/2 rounded-full bg-line" />
        ) : (
          <div className="mb-2 flex h-4 items-center gap-1 border-b border-line px-1">
            <i className="h-1.5 w-1.5 rounded-full bg-ember" />
            <i className="h-1.5 w-1.5 rounded-full bg-text/40" />
            <i className="h-1.5 w-1.5 rounded-full bg-text/25" />
            <span className="ml-2 h-1.5 w-1/3 rounded-full bg-text/10" />
          </div>
        )}
        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
