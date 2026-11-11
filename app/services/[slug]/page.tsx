import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { servicesContent } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicesContent.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: ServicePageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = servicesContent.services.find((item) => item.slug === slug);

  if (!service) {
    return { title: servicesContent.metadataTitle };
  }

  return createPageMetadata({
    title: service.name,
    description: service.promise,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage(props: ServicePageProps) {
  const { slug } = await props.params;
  const service = servicesContent.services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader title={service.name} intro={service.promise} />
      <Section aria-label={service.name} tone="surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="max-w-[60ch] text-body leading-relaxed">
              {service.scope}
            </p>
            <ul className="mt-8">
              {service.deliverables.map((deliverable) => (
                <li
                  className="border-t border-line py-4 text-body"
                  key={deliverable}
                >
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-fit rounded-sm border border-line p-5 sm:p-6 lg:col-span-4 lg:col-start-9">
            <p className="text-small font-semibold">
              {homeContent.services.bestForLabel}
            </p>
            <p className="mt-3 text-body leading-relaxed text-muted">
              {service.bestFor}
            </p>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
