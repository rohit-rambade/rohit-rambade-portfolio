import React from "react";
import Image from "next/image";

export const AboutIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] mx-auto flex items-center justify-center p-2">
      {/* Clean line-art illustration */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/images/about-illustration.png"
          alt="Rohit Rambade - Developer illustration"
          width={320}
          height={400}
          className="object-contain filter grayscale contrast-125"
          priority
        />
      </div>

      {/* Subtle decorative background glow */}
      <div className="absolute -inset-4 bg-primary-veryLight rounded-3xl -z-10 opacity-60"></div>
    </div>
  );
};
