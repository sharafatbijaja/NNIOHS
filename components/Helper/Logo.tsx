import Link from "next/link";
import React from "react";
import Image from "next/image";

type LogoProps = {
  href?: string;
  external?: boolean;
  className?: string;
};

const Logo = ({ href = "/", external = false, className = "" }: LogoProps) => {
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
        src="/images/logo-nniohs.png"
        alt="NNIOHS Logo"
        width={100}
        height={80}
        className="h-16 w-auto -my-1.5"
        priority
      />
  );

  if (external) {
    return (
      // <a href={href} aria-label="Bijaja Home" className={`Bijaja-Css-Logo ${className}`} target="_blank" rel="noopener noreferrer">
      //   {logoMarkup}
      // </a>
         <Image
          src="/images/logo-nniohs.png"
          alt="NNIOHS Logo"
          width={100}
          height={80}
          className="h-16 w-auto -my-1.5"
          priority
        />
    );
  }

  return (
    <Link href={href} aria-label="Bijaja Home" className={`Bijaja-Css-Logo ${className}`}>
      {logoMarkup}
    </Link>
  );
};

export default Logo;
