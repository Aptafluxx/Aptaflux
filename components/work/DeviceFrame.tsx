import type { ReactNode } from "react";

type DeviceFrameProps = {
  children?: ReactNode;
  device?: "laptop" | "phone";
  phoneKind?: "doctor" | "water";
  phoneScreen?: "primary" | "secondary";
  phonePlacement?: "center" | "left" | "right";
};

function PhoneScreen({
  kind,
  screen,
}: {
  kind: "doctor" | "water";
  screen: "primary" | "secondary";
}) {
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
      {screen === "secondary" ? (
        <g>
          <rect x="7" y="58" width="166" height="255" rx="8" fill="var(--color-bg)" />
          {kind === "doctor" ? (
            <>
              <rect x="16" y="71" width="82" height="8" rx="4" fill="var(--color-cream)" />
              <rect x="16" y="86" width="112" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
              <rect x="16" y="106" width="148" height="112" rx="7" fill="var(--color-surface)" />
              <rect x="26" y="118" width="42" height="6" rx="3" fill="var(--color-cream)" opacity=".7" />
              <g fill="var(--color-cream)" opacity=".45">
                <rect x="26" y="136" width="17" height="17" rx="4" />
                <rect x="51" y="136" width="17" height="17" rx="4" />
                <rect x="76" y="136" width="17" height="17" rx="4" />
                <rect x="101" y="136" width="17" height="17" rx="4" />
                <rect x="126" y="136" width="17" height="17" rx="4" />
                <rect x="26" y="161" width="17" height="17" rx="4" />
                <rect x="51" y="161" width="17" height="17" rx="4" />
                <rect x="76" y="161" width="17" height="17" rx="4" />
                <rect x="101" y="161" width="17" height="17" rx="4" />
                <rect x="126" y="161" width="17" height="17" rx="4" />
              </g>
              <rect x="51" y="161" width="17" height="17" rx="4" fill="var(--color-ember)" />
              <rect x="16" y="230" width="148" height="48" rx="7" fill="var(--color-surface)" />
              <circle cx="34" cy="254" r="9" fill="var(--color-ember)" />
              <rect x="51" y="246" width="87" height="6" rx="3" fill="var(--color-cream)" />
              <rect x="51" y="258" width="61" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
              <rect x="16" y="287" width="148" height="18" rx="6" fill="var(--color-ember)" />
            </>
          ) : (
            <>
              <rect x="16" y="71" width="104" height="8" rx="4" fill="var(--color-cream)" />
              <rect x="16" y="86" width="83" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
              <rect x="16" y="105" width="148" height="70" rx="7" fill="var(--color-surface)" />
              <path d="M28 148h118" stroke="var(--color-line)" strokeWidth="3" />
              <path d="M36 148v-21m54 21v-30m53 30v-15" stroke="var(--color-ember)" strokeLinecap="round" strokeWidth="5" />
              <circle cx="36" cy="127" r="5" fill="var(--color-ember)" />
              <circle cx="90" cy="118" r="5" fill="var(--color-ember)" />
              <circle cx="143" cy="133" r="5" fill="var(--color-ember)" />
              <rect x="16" y="188" width="148" height="37" rx="7" fill="var(--color-surface)" />
              <circle cx="35" cy="206" r="8" fill="var(--color-ember)" />
              <rect x="51" y="199" width="91" height="6" rx="3" fill="var(--color-cream)" />
              <rect x="51" y="211" width="66" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
              <rect x="16" y="236" width="148" height="37" rx="7" fill="var(--color-surface)" />
              <circle cx="35" cy="254" r="8" fill="var(--color-ember)" />
              <rect x="51" y="247" width="91" height="6" rx="3" fill="var(--color-cream)" />
              <rect x="51" y="259" width="66" height="5" rx="2.5" fill="var(--color-cream)" opacity=".55" />
              <rect x="16" y="284" width="148" height="21" rx="6" fill="var(--color-ember)" />
            </>
          )}
        </g>
      ) : null}
    </svg>
  );
}

export function DeviceFrame({
  children,
  device = "laptop",
  phoneKind = "doctor",
  phoneScreen = "primary",
  phonePlacement = "center",
}: DeviceFrameProps) {
  if (device === "phone") {
    const placementClass =
      phonePlacement === "left"
        ? "left-[27%] rotate-[-4deg] z-10"
        : phonePlacement === "right"
          ? "left-[48%] rotate-[4deg] z-20"
          : "left-1/2 -translate-x-1/2";

    return (
      <div
        className={`absolute top-1/2 h-[85%] aspect-[9/16] -translate-y-1/2 rounded-[1.4rem] border-[6px] border-cream bg-bg p-1.5 ${placementClass}`}
      >
        <span aria-hidden="true" className="absolute left-1/2 top-1.5 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-text/70" />
        <div className="h-full overflow-hidden rounded-[1rem] bg-bg">
          <PhoneScreen kind={phoneKind} screen={phoneScreen} />
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
