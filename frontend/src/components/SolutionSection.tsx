import type { SolutionFeature } from "../data/content";

type SolutionSectionProps = {
  features: SolutionFeature[];
};

export const SolutionSection = ({ features }: SolutionSectionProps) => (
  <section className="border-b border-black" id="solution">
    <div className="p-6 md:p-12 border-b border-black bg-white/20">
      <h2 className="font-display text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight">
        The Solution
      </h2>
      <p className="text-xl text-black font-medium max-w-2xl">
        We didn&apos;t just shrink the tech; we reimagined the workflow.
      </p>
    </div>
    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black bg-white">
      {features.map(({ icon, title, description }) => (
        <div
          key={title}
          className="p-8 md:p-12 hover:bg-[#dfffce] transition-colors group h-full flex flex-col justify-between min-h-[400px]"
        >
          <div>
            <div className="w-12 h-12 bg-black text-[#dfffce] flex items-center justify-center mb-8 border border-black">
              <span className="material-icons">{icon}</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 uppercase">{title}</h3>
            <p className="text-black text-lg leading-relaxed mb-6">{description}</p>
          </div>
          {/* <a
            className="text-black font-bold inline-flex items-center uppercase text-sm tracking-wide border-b-2 border-transparent group-hover:border-black transition-all w-max pb-1"
            href={cta.href}
          >
            {cta.label} <span className="material-icons text-sm ml-2">arrow_forward</span>
          </a> */}
        </div>
      ))}
    </div>
  </section>
);
