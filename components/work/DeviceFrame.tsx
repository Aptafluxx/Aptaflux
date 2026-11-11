import type { ReactNode } from "react";

type DeviceFrameProps = {
  children?: ReactNode;
  device?: "laptop" | "phone";
  phoneKind?: "doctor" | "water";
  phonePlacement?: "center" | "left" | "right";
};

function PhoneScreen({ kind }: { kind: "doctor" | "water" }) {
  return (
    <svg aria-hidden="true" className="h-full w-full" fill="none" viewBox="0 0 180 320">
      <rect width="180" height="320" fill="var(--color-bg)" />
      <rect x="13" y="23" width="154" height="28" rx="7" fill="var(--color-surface)" />
      <circle cx="27" cy="37" r="5" fill="var(--color-ember)" />
      <rect x="38" y="34" width="65" height="6" rx="3" fill="var(--color-cream)" />
      <rect x="145" y="33" width="12" height="8" rx="4" fill="var(--color-cream)" opacity=".7" />
      {kind === "doctor" ? (
        <>
          <rect x="13" y="61" width="154" height="86" rx="8" fill="var(--color-cream)" />
          <circle cx="43" cy="94" r="19" fill="var(--color-surface)" />
          <circle cx="43" cy="88" r="7" fill="var(--color-cream)" />
          <path d="M30 109c2-9 7-14 13-14s11 5 13 14" fill="var(--color-cream)" />
          <rect x="71" y="80" width="77" height="8" rx="4" fill="var(--color-bg)" />
          <rect x="71" y="96" width="58" height="6" rx="3" fill="var(--color-bg)" opacity=".55" />
          <rect x="71" y="110" width="66" height="6" rx="3" fill="var(--color-bg)" opacity=".35" />
          <rect x="13" y="158" width="154" height="36" rx="6" fill="var(--color-surface)" />
          <circle cx="31" cy="176" r="8" fill="var(--color-ember)" />
          <rect x="47" y="170" width="92" height="6" rx="3" fill="var(--color-cream)" />
          <rect x="47" y="181" width="67" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
          <rect x="13" y="201" width="154" height="36" rx="6" fill="var(--color-surface)" />
          <circle cx="31" cy="219" r="8" fill="var(--color-ember)" />
          <rect x="47" y="213" width="92" height="6" rx="3" fill="var(--color-cream)" />
          <rect x="47" y="224" width="67" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
          <rect x="13" y="244" width="154" height="36" rx="6" fill="var(--color-surface)" />
          <circle cx="31" cy="262" r="8" fill="var(--color-ember)" />
          <rect x="47" y="256" width="92" height="6" rx="3" fill="var(--color-cream)" />
          <rect x="47" y="267" width="67" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
          <rect x="13" y="288" width="154" height="23" rx="6" fill="var(--color-ember)" />
          <rect x="53" y="297" width="74" height="5" rx="2.5" fill="var(--color-bg)" />
        </>
      ) : (
        <>
          <path d="M37 67c-11 16-23 29-23 44a23 23 0 0 0 46 0c0-15-12-28-23-44Z" fill="var(--color-ember)" />
          <rect x="71" y="78" width="77" height="8" rx="4" fill="var(--color-cream)" />
          <rect x="71" y="95" width="58" height="6" rx="3" fill="var(--color-cream)" opacity=".55" />
          <rect x="13" y="128" width="154" height="42" rx="6" fill="var(--color-surface)" />
          <circle cx="35" cy="149" r="12" fill="var(--color-cream)" />
          <path d="M35 139c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13Z" fill="var(--color-ember)" />
          <rect x="56" y="142" width="91" height="6" rx="3" fill="var(--color-cream)" />
          <rect x="56" y="153" width="57" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
          <rect x="13" y="178" width="154" height="42" rx="6" fill="var(--color-surface)" />
          <circle cx="35" cy="199" r="12" fill="var(--color-cream)" />
          <path d="M35 189c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13Z" fill="var(--color-ember)" />
          <rect x="56" y="192" width="91" height="6" rx="3" fill="var(--color-cream)" />
          <rect x="56" y="203" width="57" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
          <rect x="13" y="228" width="154" height="42" rx="6" fill="var(--color-surface)" />
          <circle cx="35" cy="249" r="12" fill="var(--color-cream)" />
          <path d="M35 239c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13Z" fill="var(--color-ember)" />
          <rect x="56" y="242" width="91" height="6" rx="3" fill="var(--color-cream)" />
          <rect x="56" y="253" width="57" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
          <rect x="13" y="283" width="154" height="28" rx="6" fill="var(--color-ember)" />
          <rect x="53" y="294" width="74" height="6" rx="3" fill="var(--color-bg)" />
        </>
      )}
    </svg>
  );
}

export function DeviceFrame({
  children,
  device = "laptop",
  phoneKind = "doctor",
  phonePlacement = "center",
}: DeviceFrameProps) {
  if (device === "phone") {
    const placementClass =
      phonePlacement === "left"
        ? "left-[42%] -translate-x-[82%] z-10"
        : phonePlacement === "right"
          ? "left-[58%] -translate-x-[18%] z-20"
          : "left-1/2 -translate-x-1/2";

    return (
      <div
        className={`absolute top-1/2 h-[75%] aspect-[9/16] -translate-y-1/2 rounded-[1.4rem] border-[6px] border-cream bg-bg p-1.5 ${placementClass}`}
      >
        <span aria-hidden="true" className="absolute left-1/2 top-1.5 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-text/70" />
        <div className="h-full overflow-hidden rounded-[1rem] bg-bg">
          <PhoneScreen kind={phoneKind} />
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
