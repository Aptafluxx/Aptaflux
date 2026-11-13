import Link from "next/link";

type BreadcrumbsProps = {
  current: string;
  parent: "Services" | "Work";
  parentHref: "/services" | "/work";
};

export function Breadcrumbs({
  current,
  parent,
  parentHref,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-small text-muted">
        <li>
          <Link className="transition-colors hover:text-fg" href={parentHref}>
            {parent}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-fg">
          {current}
        </li>
      </ol>
    </nav>
  );
}
