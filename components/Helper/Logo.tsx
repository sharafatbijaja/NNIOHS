"use client";

import Link from "next/link";
import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const subscribe = () => () => { };

type LogoProps = {
  href?: string;
  external?: boolean;
  className?: string;
};

const Logo = ({ href = "/", external = false, className = "" }: LogoProps) => {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSource = mounted && currentTheme === "dark"
    ? "/images/logoLight11.png"
    : "/images/logoFinal.png";

  const logoMarkup = (
    // <div className="animated-text-box" role="img" aria-label="Bijaja logo">
    //   <div className="letters">
    //     <div className="letter letter-b" aria-hidden="true">
    //       <div className="letter-b1" />
    //       <div className="letter-b2">
    //         <div className="eyes">
    //           <div className="eye">
    //             <div className="eye-bowl">
    //               <div className="eye-lense">
    //                 <div className="lense-dot" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="eye">
    //             <div className="eye-bowl">
    //               <div className="eye-lense">
    //                 <div className="lense-dot" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mouth" />
    //         <span className="hello">Hello,</span>
    //       </div>
    //     </div>
    //     <div className="letter letter-i" aria-hidden="true">
    //       <div className="letter-i1" />
    //       <div className="letter-i2" />
    //     </div>
    //     <div className="letter letter-j" aria-hidden="true">
    //       <div className="letter-j1" />
    //       <div className="letter-j2" />
    //       <div className="letter-j3" />
    //     </div>
    //     <div className="letter letter-a" aria-hidden="true">
    //       <div className="letter-a1" />
    //       <div className="letter-a2" />
    //     </div>
    //     <div className="letter letter-j" aria-hidden="true">
    //       <div className="letter-j1" />
    //       <div className="letter-j2" />
    //       <div className="letter-j3" />
    //     </div>
    //     <div className="letter letter-a" aria-hidden="true">
    //       <div className="letter-a1" />
    //       <div className="letter-a2" />
    //     </div>
    //   </div>
    // </div>
    <Image
      src={logoSource}
      alt="Ikhlas Nursing Institute logo"
      width={120}
      height={90}
      className="h-16 w-auto -my-1.5"
      priority
    />
  );

  if (external) {
    return (

      <Image
        src={logoSource}
        alt="Ikhlas Institute of Nursing logo"
        width={120}
        height={90}
        className="h-16 w-auto -my-1.5"
        priority
      />
    );
  }

  return (
    <Link
      href={href}
      aria-label="Bijaja Home"
      className={`Bijaja-Css-Logo ${className}`}
    >
      {logoMarkup}
    </Link>
  );
};

export default Logo;
