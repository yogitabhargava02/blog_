import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/facebook.png" alt="a" width={24} height={24} />
        <Image src="/tiktok.png" alt="a" width={24} height={24} />
        <Image src="/youtube.png" alt="a" width={24} height={24} />
        <Image src="/instagram.png" alt="a" width={24} height={24} />
      </div>
      <div className={style.logo}>ISPL</div>
      <div className={style.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>

        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
