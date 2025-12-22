import type { TestingStat } from "../data/content";

type TestingSectionProps = {
  stats: TestingStat[];
};

const TEST_IMAGE_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4yIWJfpShE6I8trtquHTXctVR7spGdjiGYS6_ynqZAprf9h_3R30UoYJv__yKIH0E7fj_8oPH-5AXbpPe8I1ueNUkkGv639d1O574Zw3M8gBjJxkaYkphVmRKOu0DEknkAagMzEfYTZmg-wsVvW7AfC3fSmu1ZHijIOM_7AFhNw94dgfYkZfviOAJP7pnXJqLz4M5EzGdpn8rGBYxhaM9kgjjjktOwg494SnC7gMCpuOrpc7ErU2ZqshCIw7A-R7or9JAshDAgLw";

export const TestingSection = ({ stats }: TestingSectionProps) => (
  <section className="border-b border-black overflow-hidden bg-black text-[#dfffce]">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#dfffce]/20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase leading-none">
            Backed by
            <br />
            rigorous testing.
          </h2>
          <p className="text-[#dfffce]/80 text-xl mb-12 font-light">
            We don&apos;t just claim accuracy; we prove it. Over 500 lab tests conducted through certified medical institutions.
          </p>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-5xl font-display font-bold mb-2">{value}</div>
                <div className="text-white uppercase text-xs tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 md:p-20 flex items-center justify-center bg-[#111]">
          <img
            alt="Data chart visualization"
            className="border border-[#dfffce]/30 shadow-2xl grayscale invert"
            src={TEST_IMAGE_SRC}
          />
        </div>
      </div>
    </div>
  </section>
);
