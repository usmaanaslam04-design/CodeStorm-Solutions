"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import dentalLogo from "@/Images/dental.png";
import cuspidooLogo from "@/Images/cuspidoo.png";
import Grainient from "./Grainient";

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.auroraBg}>
        <Grainient
          color1="#000000"
          color2="#000000"
          color3="#b26035"
          timeSpeed={0.25}
          colorBalance={-0.1}
          warpStrength={1}
          warpFrequency={3.4}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0}
          grainScale={2}
          grainAnimated={false}
          contrast={0.35}
          gamma={0.6}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
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