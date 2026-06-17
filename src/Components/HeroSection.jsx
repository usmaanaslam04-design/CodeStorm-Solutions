"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import Aurora from "@/Components/Aurora";
import logo from "@/Images/main-logo.png";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.auroraBg}>
        <Aurora
          colorStops={["#b26032", "#3d1a08", "#e08840"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <motion.div
        className={styles.logoWrapper}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -16, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.3, ease: "easeOut" },
          y: {
            duration: 3,
            delay: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src={logo}
          alt="CodeStorm Solutions"
          width={250}
          height={250}
          className={styles.heroLogo}
          priority
        />
      </motion.div>

      <motion.div
        className={styles.brandText}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className={styles.brandName}>CodeStorm</h1>
        <p className={styles.brandSub}>S O L U T I O N S</p>
        <p className={styles.tagline}>
          [ D E S I G N . &nbsp;&nbsp; D E V E L O P . &nbsp;&nbsp; D E L I
          V E R ]
        </p>
        <p className={styles.description}>
          A passionate team of developers and designers delivering
          end-to-end digital solutions — from concept to launch.
        </p>

        <div className={styles.buttonRow}>
          <button className={styles.glassBtn}>Get Started</button>
          <a href="tel:+923338189912" className={styles.plainBtn}>
            Contact Us : +92 333 8189912
          </a>
        </div>
      </motion.div>
    </section>
  );
}