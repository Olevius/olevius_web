import { useEffect, useState } from "react";
import type { NavLink } from "../data/content";

type NavigationProps = {
  links: NavLink[];
  onJoinWaitlist: () => void;
};

export const Navigation = ({ links, onJoinWaitlist }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-background-light/95 backdrop-blur-sm border-b border-black">
      <div className="px-6 md:px-12">
        <div className="flex items-start justify-between py-4 md:items-center">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
            <a
              className="font-display font-bold text-lg tracking-tight text-black hover:opacity-70 transition-opacity"
              href="#hero"
              onClick={closeMenu}
            >
              Olevius
            </a>
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute left-0 top-full w-full flex-col gap-3 border-b border-black bg-background-light px-6 pb-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:px-0 md:pb-0`}
            >
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  className="text-sm font-medium text-black hover:underline underline-offset-4 decoration-1 transition-all"
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="md:hidden rounded-md bg-transparent p-2 text-black transition-colors hover:text-black/70 border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none"
              type="button"
              aria-label="Toggle navigation"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
            >
              <span className="material-icons">{isOpen ? "close" : "menu"}</span>
            </button>
            <button
              className="hidden md:inline-block text-sm font-bold rounded-full px-6 py-2 bg-black text-[#dfffce] border-none hover:bg-transparent hover:text-black transition-colors uppercase tracking-wide focus-visible:outline-none cursor-pointer"
              type="button"
              onClick={onJoinWaitlist}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
