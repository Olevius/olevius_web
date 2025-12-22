import type { FooterLink } from "../data/content";

type ContactSectionProps = {
  footerLinks: FooterLink[];
};

export const ContactSection = ({ footerLinks }: ContactSectionProps) => (
  <section className="py-24 bg-background-light" id="contact">
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">
        Ready to upgrade?
      </h2>
      <p className="text-xl text-black mb-12 max-w-xl mx-auto">
        Join the waitlist to be notified when we launch, or contact us directly for enterprise pilot programs.
      </p>
      <form className="max-w-md mx-auto bg-white border border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <div className="grid gap-6 mb-8">
          <div>
            <label
              className="block text-xs font-bold text-black uppercase tracking-wider mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 bg-gray-50 border border-black text-black focus:ring-0 focus:border-black focus:bg-[#dfffce]/20 outline-none transition-all placeholder:text-gray-400"
              id="email"
              placeholder="you@company.com"
              type="email"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                className="h-4 w-4 text-black border-black rounded-none focus:ring-0 focus:ring-offset-0 bg-transparent checked:bg-black"
                id="updates"
                type="checkbox"
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-bold text-black text-xs uppercase" htmlFor="updates">
                Stay in the loop?
              </label>
              <p className="text-gray-500 text-xs mt-1">Occasional product news and launch alerts.</p>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-black text-[#dfffce] font-bold py-4 px-8 border border-black hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
          type="button"
        >
          Send Message
          <span className="material-icons text-sm">send</span>
        </button>
      </form>
      <div className="mt-20 pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-black/60">
        <p>© 2025 Olevius.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {footerLinks.map(({ href, label }) => (
            <a key={label} className="hover:text-black hover:underline" href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
