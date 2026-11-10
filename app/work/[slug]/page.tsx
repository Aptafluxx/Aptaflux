import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { work } from "@/content/work";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: WorkPageProps): Promise<Metadata> {
  const params = await props.params;
  const project = work.find(({ slug }) => slug === params.slug);

  return {
    title: project?.title ?? "Work",
  };
}

export default async function ProjectPage(props: WorkPageProps) {
  const params = await props.params;
  const project = work.find(({ slug }) => slug === params.slug);

  if (!project) {
    notFound();
  }

  return <PageHeader title={project.title} />;
}
