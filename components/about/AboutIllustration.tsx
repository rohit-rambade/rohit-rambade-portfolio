import React from "react";
import Image from "next/image";

export const AboutIllustration: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[300px]">
      <Image
        src="/images/about-illustration.png"
        alt=""
        width={320}
        height={400}
        sizes="(min-width: 640px) 300px, 240px"
        className="h-auto w-full object-contain grayscale contrast-125 mix-blend-multiply"
      />
    </div>
  );
};
