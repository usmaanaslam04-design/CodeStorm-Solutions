"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AboutSection.module.css";
import topComma from "@/Images/top-comma.png";
import bottomComma from "@/Images/bottom-comma.png";
import Ferrofluid from "./Ferrofluid";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.auroraBg}>
        <Ferrofluid
          colors={["#000000", "#b26032", "#b26032"]}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={false}
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>

      <div className={styles.noteCard}>
        <Image
          src={topComma}
          alt="Quote"
          width={120}
          height={120}
          className={styles.quoteTop}
        />

        <div className={styles.noteContent}>
          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            At CodeStorm Solutions, we don't just build software — we craft
            digital experiences that leave a lasting impression. From
            pixel-perfect websites to powerful mobile applications and
            intuitive UI/UX designs, we bring your vision to life with
            precision and passion.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We believe every great product starts with a great idea. Our
            team of developers and designers work hand in hand to turn that
            idea into a fast, scalable, and beautifully designed solution —
            built to perform and designed to impress.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Whether you are a startup finding your footing or an established
            business looking to scale — we are your end-to-end digital
            partner, from concept to launch and beyond.
          </motion.p>
        </div>

        <Image
          src={bottomComma}
          alt="Quote"
          width={120}
          height={120}
          className={styles.quoteBottom}
        />
      </div>
    </section>
  );
}