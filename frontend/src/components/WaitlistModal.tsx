import { useEffect, useRef } from "react";
import type { FormEvent } from "react";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
};

export const WaitlistModal = ({ open, onClose }: WaitlistModalProps) => {
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      emailRef.current?.focus();
    });

    return () => {
      root.style.overflow = previousOverflow;
      window.cancelAnimationFrame(frame);
    };
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 sm:py-16">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        aria-labelledby="waitlist-modal-title"
        aria-modal="true"
        role="dialog"
        className="relative z-10 w-full max-w-lg bg-white border border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] px-6 py-8 sm:px-10 sm:py-12"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close waitlist modal"
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-2xl font-bold text-black transition-colors hover:bg-black hover:text-[#dfffce]"
          type="button"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">Join the waitlist</span>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold uppercase leading-tight text-black"
            id="waitlist-modal-title"
          >
            Be the first to get Olevius
          </h2>
          <p className="text-sm sm:text-base text-black/70 leading-relaxed">
            Enter your email to receive launch notifications and early access invites.
          </p>
        </div>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label
              className="text-xs font-bold uppercase tracking-wider text-black"
              htmlFor="waitlist-email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 border border-black bg-gray-50 text-black placeholder:text-gray-400 focus:bg-[#dfffce]/20 focus:border-black focus:outline-none transition-colors"
              id="waitlist-email"
              name="email"
              placeholder="you@company.com"
              ref={emailRef}
              required
              type="email"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              className="mt-1 h-4 w-4 border border-black bg-transparent text-black checked:bg-black focus:ring-0 focus:ring-offset-0"
              id="waitlist-consent"
              name="consent"
              required
              type="checkbox"
            />
            <div className="text-sm leading-tight text-black">
              <label
                className="font-bold uppercase text-xs tracking-wider"
                htmlFor="waitlist-consent"
              >
                Email me launch updates
              </label>
              <p className="text-xs text-black/60 mt-1">
                We will only reach out for product milestones and never share your information.
              </p>
            </div>
          </div>
          <button
            className="w-full bg-black text-[#dfffce] font-bold py-4 px-6 border border-black hover:bg-white hover:text-black transition-all uppercase tracking-[0.3em] text-xs sm:text-sm flex items-center justify-center gap-2"
            type="submit"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
};
