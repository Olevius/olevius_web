import type { TeamMember } from "../data/content";
import { TeamMemberCard } from "./TeamMemberCard";

type ExpertsSectionProps = {
  members: TeamMember[];
};

export const ExpertsSection = ({ members }: ExpertsSectionProps) => (
  <section className="py-24 border-b border-black" id="about">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-16 relative">
        <h2 className="font-display text-8xl md:text-9xl font-bold mb-4 opacity-10 absolute left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none select-none -translate-y-1/2">
          EXPERTS EXPERTS
        </h2>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase relative z-10">
          Meet the Experts
        </h2>
        <p className="text-xl text-black font-medium relative z-10">
          Built by Waterloo students passionate about stress-free blood pressure measurement.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {members.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  </section>
);
