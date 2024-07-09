import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center space-x-2">
      <Image src="/logo.png" alt="Logo" width={20} height={20} />
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-btn font-bold to-modal">
        Shopiverse
      </h3>
    </Link>
  );
};

export default Logo;
