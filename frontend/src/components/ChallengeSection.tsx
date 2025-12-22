import type { ChallengeItem } from "../data/content";

type ChallengeSectionProps = {
  items: ChallengeItem[];
};

const IMAGE_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCk00dWMiP9xdMRymlks0U3cp2v9Ch1J22xywH1TXLkj7DCDoayOBXxHXcnpgNVuxtxJU-DXEVgbYNJ6m_knQhn39ZJuzMNuM2bIEDUeh-dFXergm4S3qKYIPL_WodCtAYKz9hu1_FytbREwgesiQrp_45Wnunfc7wTWP4_7G23nGCG9ImBH6i-YxxCbx6fRISORDugQi2Ai4eXFImIxcOHU9mLdq3WQMz9D7_9Gi9hkGO5nydmir25C0ZT-eujTvHtO64eFBTqLaU";

export const ChallengeSection = ({ items }: ChallengeSectionProps) => (
  <section className="py-0 border-b border-black" id="problem">
    <div className="grid lg:grid-cols-2">
      <div className="relative border-b lg:border-b-0 lg:border-r border-black p-6 md:p-12 flex items-center justify-center bg-white/30">
        <img
          alt="Frustrated professional dealing with bulky equipment"
          className="relative grayscale contrast-125 w-full object-cover aspect-4/3 border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          src={IMAGE_SRC}
        />
      </div>
      <div className="p-6 md:p-12 flex flex-col justify-center">
        <span className="font-display font-bold text-xl mb-4 uppercase tracking-wider block border-b border-black pb-2 w-max">
          The Challenge
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase">
          Hypertension remains under-monitored for most.
        </h2>
        <p className="text-lg text-black mb-12 font-medium max-w-md">
          Blood pressure monitoring today requires clinically graded checkups. You need to visit a clinic or use bulky, stationary equipment that is neither convenient nor accessible for regular use.
        </p>
        <ul className="space-y-0 divide-y divide-black border-t border-b border-black">
          {items.map(({ icon, title, description }) => (
            <li
              key={title}
              className="flex items-center py-6 group hover:bg-white/40 transition-colors cursor-default"
            >
              <div className="mr-6">
                <span className="material-icons text-3xl text-black">{icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 uppercase">{title}</h3>
                <p className="text-black/70 text-sm">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
