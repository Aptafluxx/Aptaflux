type ScrollIndicatorProps = {
  className?: string;
  label: string;
};

export function ScrollIndicator({ className = "", label }: ScrollIndicatorProps) {
  return (
    <div aria-label={label} className={`scroll-indicator flex shrink-0 items-center gap-3 text-[15px] text-muted ${className}`} role="img">
      <span>{label}</span>
      <span className="relative h-12 w-px overflow-hidden bg-line">
        <span className="scroll-indicator-line absolute left-0 top-0 h-4 w-px bg-ember" />
      </span>
    </div>
  );
}
