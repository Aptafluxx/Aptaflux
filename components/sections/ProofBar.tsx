import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function ProofBar() {
  const { proof } = homeContent;

  return (
    <Section topRule>
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
          <h2 className="text-small font-medium text-muted">{proof.heading}</h2>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {proof.clients.map((client) => (
              <p
                key={client}
                className="font-display text-h3 font-semibold"
              >
                {client}
              </p>
            ))}
          </div>
        </div>
    </Section>
  );
}
