import React from "react";
import clsx from "clsx";

export function Spotlight({ className = "", fill = "white" }) {
  return (
    <svg
      className={clsx("pointer-events-none absolute blur-3xl opacity-30", className)}
      width="700"
      height="700"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill} stopOpacity="1" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#grad)" />
    </svg>
  );
}

export default Spotlight;
