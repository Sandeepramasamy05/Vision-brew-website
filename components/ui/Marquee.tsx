import { capabilities } from "@/lib/content";

export function Marquee() {
  return (
    <div className="marquee-wrap overflow-hidden border-y border-line bg-charcoal py-4">
      <div className="flex w-max marquee-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex items-center"
            aria-hidden={copy === 1}
          >
            {capabilities.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center whitespace-nowrap px-4 font-display text-sm tracking-[0.22em] text-mist/80 md:text-base"
              >
                {item}
                <span className="ml-8 text-teal" aria-hidden>
                  ·
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
