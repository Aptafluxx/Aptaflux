import { artComponents } from "@/components/art";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";
import { homeContent } from "@/content/home";
import { work } from "@/content/work";
import { durations, easing } from "@/lib/motion";

export function FeaturedWork() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <h2 className="mb-10 font-display text-[clamp(40px,6vw,96px)] font-semibold leading-[0.95] tracking-[-0.03em] sm:mb-14">
          {homeContent.work.heading}
        </h2>
        <div>
          {work.map((project, index) => {
            const Artwork = artComponents[project.cover];
            const imageOnRight = index % 2 === 1;

            return (
              <div key={project.slug}>
                <Link
                  className="group grid grid-cols-1 items-start gap-5 py-8 min-[820px]:grid-cols-12 min-[820px]:items-end min-[820px]:gap-10 min-[820px]:py-10"
                  href={`/work/${project.slug}`}
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
                    <p className="text-[17px] text-muted">{project.client}</p>
                    <h3 className="mt-2 font-display text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-[15px] text-muted">
                      {project.services.join(", ")}
                    </p>
                    <p className="mt-4 font-display text-[22px] leading-snug text-ember">
                      {project.results[0]?.label}
                    </p>
                  </div>
                </Link>
                {index < work.length - 1 ? <Rule /> : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
