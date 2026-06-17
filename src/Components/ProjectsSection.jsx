"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import dentalLogo from "@/Images/dental.png";
import cuspidooLogo from "@/Images/cuspidoo.png";
import LiquidEther from "./LiquidEther";

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.auroraBg}>
        <LiquidEther
          colors={["#D4783A", "#B26032", "#7A2808"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#b26032"
          color1="#000000"
          color2="#b26032"
        />
      </div>

      <div className={styles.projectsWrapper}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Latest Projects
        </motion.h2>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Real products. Real results. Built with passion.
        </motion.p>

        <div className={styles.projectCards}>
          <motion.a
            href="https://white-dental-aesthetics-y52x.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles.projectLogoBox}>
              <Image
                src={dentalLogo}
                alt="White Dental & Aesthetics"
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.projectInfo}>
              <h3 className={styles.projectName}>
                White Dental & Aesthetics
              </h3>
              <p className={styles.projectDesc}>
                A modern dental clinic website with appointment booking,
                service pages, and a clean professional design.
              </p>
              <span className={styles.projectLink}>Visit Website →</span>
            </div>
          </motion.a>

          <motion.a
            href="https://cuspidoo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles.projectLogoBox}>
              <Image
                src={cuspidooLogo}
                alt="Cuspidoo"
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.projectInfo}>
              <h3 className={styles.projectName}>Cuspidoo</h3>
              <p className={styles.projectDesc}>
                A medical and surgical instruments e-commerce platform with
                product categories and detailed listings.
              </p>
              <span className={styles.projectLink}>Visit Website →</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}