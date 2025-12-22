import type { TeamMember } from "../data/content";

const baseCardClass =
  "group border border-black bg-white p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300";
const imageWrapperClass =
  "w-full aspect-square overflow-hidden mb-6 border border-black bg-gray-100";
const imageClass =
  "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500";
const nameClass = "font-display font-bold text-xl uppercase mb-1";
const roleClass = "text-black font-bold text-sm mb-3 uppercase tracking-wide";
const descriptionClass = "text-sm text-black/70 border-t border-black pt-3";

type TeamMemberCardProps = {
  member: TeamMember;
  className?: string;
};

export const TeamMemberCard = ({
  member,
  className = "",
}: TeamMemberCardProps) => {
  const { name, role, description, imageSrc } = member;
  const cardClassName = className ? `${baseCardClass} ${className}` : baseCardClass;

  return (
    <article className={cardClassName}>
      <div className={imageWrapperClass}>
        <img
          alt={`Team member ${name}`}
          className={imageClass}
          src={imageSrc}
        />
      </div>
      <h3 className={nameClass}>{name}</h3>
      <p className={roleClass}>{role}</p>
      <p className={descriptionClass}>{description}</p>
    </article>
  );
};