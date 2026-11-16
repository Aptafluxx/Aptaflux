import type { ReactNode } from "react";
import Image from "next/image";

type DeviceFrameProps = {
  children?: ReactNode;
  className?: string;
  device?: "laptop" | "phone";
  mobileImage?: string;
  mobileAlt?: string;
};

export function DeviceFrame({
  children,
  className = "",
  device = "laptop",
  mobileImage,
  mobileAlt,
}: DeviceFrameProps) {
  if (device === "phone") {
    return (
      <div className={`absolute left-1/2 top-1/2 aspect-[9/19.5] h-[85%] -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] border-[3px] border-fg bg-bg md:border-[5px] ${className}`}>
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-fg/60"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-bg">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute left-1/2 top-1/2 flex h-auto max-h-[92%] w-[85%] -translate-x-1/2 -translate-y-1/2 flex-col items-center ${className}`}>
      <div className="relative w-full rounded-t-lg border-[6px] border-bg bg-bg px-1.5 pb-1.5 pt-4">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-fg/60"
        />
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-card [&>svg]:h-full [&>svg]:w-full [&>svg]:object-cover">
          {children}
        </div>
      </div>
      <div aria-hidden="true" className="h-2 w-[106%] rounded-b-md bg-bg" />
      <div aria-hidden="true" className="h-1 w-[24%] rounded-b-lg bg-card" />
      {mobileImage ? (
        <div className="absolute bottom-[3%] right-[-6%] z-30 aspect-[9/19.5] w-[17%] rounded-[1.1rem] border-[3px] border-fg bg-bg shadow-[0_8px_24px_rgba(0,0,0,0.3)] md:rounded-[1.4rem] md:border-[5px]">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1 z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-fg/60"
          />
          <div className="relative h-full w-full overflow-hidden rounded-[0.8rem] bg-bg md:rounded-[1rem]">
            <Image
              alt={mobileAlt ?? ""}
              className="object-cover object-top"
              fill
              sizes="(min-width: 1024px) 10vw, (min-width: 640px) 12vw, 16vw"
              src={mobileImage}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
