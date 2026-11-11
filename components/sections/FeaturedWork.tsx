import { artComponents } from "@/components/art";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Rule } from "@/components/ui/Rule";
import { homeContent } from "@/content/home";
import { work } from "@/content/work";
import { durations, easing } from "@/lib/motion";

export function FeaturedWork() {
  return (
    <Section>
        <h2 className="mb-8 font-display text-h2 font-semibold md:mb-10">
          {homeContent.work.heading}
        </h2>
        <div>
          {work.map((project, index) => {
            const Artwork = artComponents[project.cover];
            const imageOnRight = index % 2 === 1;

            return (
              <div key={project.slug}>
                <Link
                  className="group grid grid-cols-1 items-start gap-5 py-8 min-[820px]:grid-cols-12 min-[820px]:items-end min-[820px]:gap-10"
                  href={`/work/${project.slug}`}
                  prefetch={false}
                >
                  <div
                    className={`aspect-[4/3] rounded-[2px] bg-surface p-4 sm:p-6 ${
                      imageOnRight
                        ? "min-[820px]:order-2 min-[820px]:col-span-7 min-[820px]:col-start-6"
                        : "min-[820px]:col-span-7"
                    }`}
                  >
                    <div className="flex h-full items-center justify-center overflow-hidden">
                      <div
                        className="aspect-[3/2] w-full transition-transform group-hover:scale-[0.985]"
                        style={{
                          transitionDuration: `${durations.medium}s`,
                          transitionTimingFunction: `cubic-bezier(${easing.join(",")})`,
                        }}
                      >
                        <Artwork />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      imageOnRight
                        ? "min-[820px]:order-1 min-[820px]:col-span-5 min-[820px]:col-start-1"
                        : "min-[820px]:col-span-5 min-[820px]:col-start-8"
                    }
                  >
                    <p className="text-body text-muted">{project.category}</p>
                    <h3 className="mt-2 font-display text-work-title font-semibold">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-small text-muted">
                      {project.services.join(", ")}
                    </p>
                    <p className="mt-4 font-display text-h3 leading-snug text-ember">
                      {project.results[0]?.label}
                    </p>
                  </div>
                </Link>
                {index < work.length - 1 ? <Rule /> : null}
              </div>
            );
          })}
        </div>
    </Section>
  );
}
