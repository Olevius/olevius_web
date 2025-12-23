type HeroSectionProps = {
  onJoinWaitlist: () => void;
};

export const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden border-b border-black">
    <div className="max-w-7xl w-full mx-auto relative z-10">
      <div className="max-w-5xl">
        <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-black uppercase">
          Olevius
        </h1>
        <div className="border-t border-black w-full my-8" />
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-tight text-black">
          Accuracy. Unmatched.
          <br />
          <span className="font-light italic">Wherever you go.</span>
        </h2>
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl text-black font-normal mb-10 leading-snug">
            Ditch bulky, stationary monitors. Our clinically accurate device reads your blood pressure directly from your pulse, wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              className="w-full sm:w-auto px-8 py-4 bg-black text-[#dfffce] border border-black font-bold hover:bg-transparent hover:text-black transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
              type="button"
              onClick={onJoinWaitlist}
            >
              Join the Waitlist
            </button>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base text-gray-600 font-medium">
            Made by Waterloo students for our capstone project
          </p>
        </div>
      </div>
    </div>
    <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] rounded-full bg-gray-300 opacity-20 pointer-events-none mix-blend-multiply" />
  </section>
);
