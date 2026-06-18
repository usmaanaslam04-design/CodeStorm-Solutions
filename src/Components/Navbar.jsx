"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import logo from "@/Images/main-logo.png";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", type: "scroll" },
  { name: "About", href: "#about", type: "scroll" },
  { name: "Services", href: "#services", type: "scroll" },
  { name: "Contact", href: "/contact", type: "page" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleClick = (e, link) => {
    if (link.type === "page") return; // normal navigation, no interception

    if (!isHome) return; // not on homepage, let it navigate to "/" + hash normally

    e.preventDefault();
    const el = document.querySelector(link.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getHref = (link) => {
    if (link.type === "page") return link.href;
    return isHome ? link.href : `/${link.href}`;
  };

  return (
    <motion.nav
      className={styles.wrapper}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.navbar}>

        {/* Logo + Brand */}
        <div className={styles.logoSection}>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={logo}
              alt="CodeStorm Solutions"
              width={70}
              height={70}
              className={styles.logo}
              priority
            />
          </motion.div>

          {/* Brand name slides out from behind the logo */}
          <motion.span
            className={styles.brandName}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <strong>CodeStorm</strong> Solutions
          </motion.span>
        </div>

        {/* Navigation Links */}
        <motion.div
          className={styles.links}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={getHref(link)}
              onClick={(e) => handleClick(e, link)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.nav>
  );
};

export default Navbar;