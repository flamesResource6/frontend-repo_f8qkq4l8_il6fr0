import React from "react";
import Spline from "@splinetool/react-spline";
import clsx from "clsx";

export function SplineScene({ scene, className = "", ...props }) {
  return (
    <div className={clsx("relative", className)} {...props}>
      {scene ? (
        <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white/60 text-sm">
          Missing scene URL
        </div>
      )}
    </div>
  );
}

export default SplineScene;
