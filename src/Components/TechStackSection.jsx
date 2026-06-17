"use client";

import { motion } from "framer-motion";
import styles from "./TechSection.module.css";
import LogoLoop from "@/Components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiTailwindcss,
  SiCloudinary,
  SiGithub,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import LiquidEther from "./LiquidEther";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <TbBrandReactNative />, title: "React Native" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiFirebase />, title: "Firebase" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiCloudinary />, title: "Cloudinary" },
  { node: <SiGithub />, title: "GitHub" },
];

export default function TechSection() {
  return (
    <section className={styles.techSection}>
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

      <div className={styles.techWrapper}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Technologies We Use
        </motion.h2>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Built with the most powerful and modern tools in the industry
        </motion.p>

        <motion.div
          className={styles.techGlassCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.loopWrapper}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={80}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0a0a0a"
              ariaLabel="Technologies we use"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}