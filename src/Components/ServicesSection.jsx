"use client";

import { motion } from "framer-motion";
import styles from "./ServicesSection.module.css";
import { MdOutlineDesignServices, MdPhoneIphone } from "react-icons/md";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import Ferrofluid from "./Ferrofluid";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
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