import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";
import { homeContent } from "@/content/home";

export function ProofBar() {
  const { proof } = homeContent;

  return (
    <section>
      <Container>
        <Rule />
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 py-8">
          <h2 className="text-[15px] font-medium text-muted">{proof.heading}</h2>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {proof.clients.map((client) => (
              <p
                key={client}
                className="font-display text-xl font-semibold tracking-[-0.02em]"
              >
                {client}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
