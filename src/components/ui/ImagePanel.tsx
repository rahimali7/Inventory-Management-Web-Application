import Image from "next/image";
import { StarFrame } from "@/components/ui/StarFrame";
import { cn } from "@/lib/cn";

/**
 * Stands in for photography until the masjid supplies real images.
 *
 * Pass `src` and it renders the photo; leave it out and it renders a
 * geometric panel built from the logo's star motif — intentional-looking
 * rather than an obvious empty slot. Swap in photos by adding files to
 * /public/img and passing `src`.
 */
export function ImagePanel({
  src,
  alt = "",
  className,
  ratio = "4/5",
  tone = "navy",
}: {
  src?: string;
  alt?: string;
  className?: string;
  ratio?: "4/5" | "3/4" | "16/9" | "1/1";
  tone?: "navy" | "sand" | "crimson";
}) {
  const ratios = {
    "4/5": "aspect-[4/5]",
    "3/4": "aspect-[3/4]",
    "16/9": "aspect-[16/9]",
    "1/1": "aspect-square",
  }[ratio];

  const tones = {
    navy: "bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-gold-400/25",
    sand: "bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300 text-navy-800/15",
    crimson:
      "bg-gradient-to-br from-crimson-800 via-crimson-900 to-navy-950 text-gold-400/25",
  }[tone];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        ratios,
        !src && tones,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <StarFrame className="h-[78%] w-[78%]" strokeWidth={0.6} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <StarFrame className="h-[52%] w-[52%]" strokeWidth={0.8} />
          </div>
        </>
      )}
    </div>
  );
}
