import React from "react";
import clsx from "clsx";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
