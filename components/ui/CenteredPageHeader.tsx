import { Container } from "@/components/ui/Container";

type CenteredPageHeaderProps = {
  badge: string;
  titleLineOne: string;
  titleLineTwo: string;
  introduction: string;
};

export function CenteredPageHeader({
  badge,
  titleLineOne,
  titleLineTwo,
  introduction,
}: CenteredPageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-accent/25 bg-band/22 pb-16 pt-[calc(72px+40px)] text-center md:pb-24 md:pt-[calc(var(--navbar-bottom,72px)+48px)]">
      <Container className="relative z-10">
        <span className="inline-flex rounded-full border border-line px-3 py-1 text-small font-semibold text-brand">
          {badge}
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl font-body text-display-xl font-extrabold tracking-[-0.04em]">
          <span className="block text-fg">{titleLineOne}</span>
          <span className="block text-accent">{titleLineTwo}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[52ch] text-body leading-relaxed text-muted">
          {introduction}
        </p>
      </Container>
    </section>
  );
}
