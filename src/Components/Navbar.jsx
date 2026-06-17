"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "@/Images/main-logo.png";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
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