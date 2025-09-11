export default function InfiniteMarquee({
  text = "Your text • ",
  duration = 60,
  className = "",
  pauseOnHover = true,
}: {
  text?: string;
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
}) {
  const phrase = text.endsWith(" ") ? text : text + " ";

  return (
    <div
      className={`relative w-full overflow-hidden bg-transparent ${className} ${
        pauseOnHover ? "group/marquee" : ""
      }`}
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}
      aria-label="infinite scrolling text"
    >
      <div
        className="marquee flex w-max whitespace-nowrap"
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {/* two identical chunks side by side */}
        <MarqueeChunk phrase={phrase} />
        <MarqueeChunk phrase={phrase} ariaHidden />
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee-left linear infinite;
        }
        ${
          pauseOnHover
            ? `.group\\/marquee:hover .marquee { animation-play-state: paused; }`
            : ""
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}

function MarqueeChunk({
  phrase,
  ariaHidden = false,
}: {
  phrase: string;
  ariaHidden?: boolean;
}) {
  // Repeat enough times so one chunk alone is wider than the viewport
  const repeats = 32;
  return (
    <div className="flex items-center" aria-hidden={ariaHidden}>
      {Array.from({ length: repeats }).map((_, idx) => (
        <span
          key={idx}
          className="px-4 text-xl md:text-2xl font-semibold tracking-wide"
        >
          {phrase}
        </span>
      ))}
    </div>
  );
}
