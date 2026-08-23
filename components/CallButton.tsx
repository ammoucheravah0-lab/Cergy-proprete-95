import React from "react";

export default function CallButton() {
  return (
    <a
      href="tel:+33752081144"
      aria-label="Appeler Cergy Propreté"
      title="Appeler Cergy Propreté"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brass-100 bg-brass-500 text-navy-950 shadow-[0_8px_24px_rgba(201,162,39,0.35)] transition-all duration-300 hover:scale-110 hover:bg-brass-400 hover:shadow-[0_10px_30px_rgba(201,162,39,0.55)] hover:ring-4 hover:ring-brass-500/20 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.411-5.181-3.764-6.592-6.592l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    </a>
  );
}