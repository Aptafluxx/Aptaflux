import { artComponents } from "@/components/art";
import type { WorkArtKey } from "@/content/work";

type ArtworkFrameProps = {
  art: WorkArtKey;
  className?: string;
};

export function ArtworkFrame({ art, className = "" }: ArtworkFrameProps) {
  const Artwork = artComponents[art];

  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[2px] bg-card p-4 sm:p-8 ${className}`}
    >
      <div className="h-full w-full">
        <Artwork />
      </div>
    </div>
  );
}
