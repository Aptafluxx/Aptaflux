import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { work } from "@/content/work";

type WorkPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const project = work.find(({ slug }) => slug === params.slug);

  return {
    title: project?.title ?? "Work",
  };
}

export default function ProjectPage({ params }: WorkPageProps) {
  const project = work.find(({ slug }) => slug === params.slug);

  if (!project) {
    notFound();
  }

  return <PageHeader title={project.title} />;
}
