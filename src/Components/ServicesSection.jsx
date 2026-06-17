"use client";

import { motion } from "framer-motion";
import styles from "./ServicesSection.module.css";
import { MdOutlineDesignServices, MdPhoneIphone } from "react-icons/md";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import Grainient from "./Grainient";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
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

      <div className={styles.servicesWrapper}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Services We Provide
        </motion.h2>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Everything you need to build, launch and grow your digital
          presence
        </motion.p>

        <div className={styles.serviceCards}>
          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles.serviceIcon}>
              <MdOutlineDesignServices />
            </div>
            <h3 className={styles.serviceName}>Web Design</h3>
            <p className={styles.serviceDesc}>
              We craft stunning, responsive websites that captivate your
              audience and convert visitors into customers.
            </p>
          </motion.div>

          <motion.div
            className={`${styles.serviceCard} ${styles.serviceCardMiddle}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles.serviceIcon}>
              <MdPhoneIphone />
            </div>
            <h3 className={styles.serviceName}>Mobile Application</h3>
            <p className={styles.serviceDesc}>
              From iOS to Android, we build powerful, intuitive mobile apps
              that deliver seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles.serviceIcon}>
              <HiOutlinePaintBrush />
            </div>
            <h3 className={styles.serviceName}>UI/UX Design</h3>
            <p className={styles.serviceDesc}>
              We design interfaces that are not just beautiful but deeply
              intuitive — creating experiences users love.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}