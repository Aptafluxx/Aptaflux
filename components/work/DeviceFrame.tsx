import type { ReactNode } from "react";

type DeviceFrameProps = {
  children: ReactNode;
  device?: "laptop" | "phone";
};

export function DeviceFrame({ children, device = "laptop" }: DeviceFrameProps) {
  if (device === "phone") {
    return (
      <div className="absolute left-1/2 top-1/2 h-[80%] aspect-[9/16] -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] border-[6px] border-cream bg-bg p-1.5">
        <span aria-hidden="true" className="absolute left-1/2 top-1.5 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-text/70" />
        <div className="h-full overflow-hidden rounded-[1rem] bg-bg [&>svg]:h-full [&>svg]:w-full [&>svg]:object-cover">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-x-[7.5%] top-[8%] bottom-[8%] flex flex-col items-center">
      <div className="relative flex h-[88%] w-full items-stretch rounded-t-lg border-[6px] border-bg bg-bg px-1.5 pb-1.5 pt-4">
        <span aria-hidden="true" className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-text/65" />
        <div className="h-full w-full overflow-hidden rounded-sm bg-surface [&>svg]:h-full [&>svg]:w-full [&>svg]:object-cover">
          {children}
        </div>
      </div>
      <div aria-hidden="true" className="h-2 w-[106%] rounded-b-md bg-bg" />
      <div aria-hidden="true" className="h-1 w-[24%] rounded-b-lg bg-surface" />
    </div>
  );
}
