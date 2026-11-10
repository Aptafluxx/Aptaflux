type RuleProps = {
  className?: string;
};

export function Rule({ className = "" }: RuleProps) {
  return <hr aria-hidden="true" className={`border-0 border-t border-line ${className}`} />;
}
