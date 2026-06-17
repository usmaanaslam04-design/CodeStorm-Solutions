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
import Grainient from "./Grainient";

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
        <Grainient
       color1="#b26035"
          color2="#000000"
          color3="#000000"
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