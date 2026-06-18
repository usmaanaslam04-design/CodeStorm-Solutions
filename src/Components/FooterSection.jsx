"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FooterSection.module.css";
import footerImage from "@/Images/footer-image.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Ferrofluid from "./Ferrofluid";
import EmberGlow from "./EmberGlow";
import useLowPower from "./useLowPower";

export default function FooterSection() {
  const isLowPower = useLowPower();

  return (
    <footer className={styles.footerSection}>
      <div className={styles.auroraBg}>
        {isLowPower ? (
          <EmberGlow />
        ) : (
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
        )}
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.footerGlass}>
          <motion.div
            className={styles.footerLeft}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={footerImage}
              alt="CodeStorm Solutions"
              width={220}
              height={220}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          <motion.div
            className={styles.footerRight}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className={styles.footerHeading}>CodeStorm Solutions</h1>

            <div className={styles.footerNav}>
              <a href="#home" className={styles.footerNavLink}>
                Home
              </a>
              <a href="#about" className={styles.footerNavLink}>
                About Us
              </a>
              <a href="#services" className={styles.footerNavLink}>
                Services
              </a>
              <a href="contact" className={styles.footerNavLink}>
                Contact
              </a>
            </div>

            <div className={styles.footerContact}>
              <p className={styles.footerContactText}>
                codestormsolutions@gmail.com
              </p>
              <p className={styles.footerContactText}>+92 320 4491976</p>
            </div>

            <div className={styles.footerSocials}>
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className={styles.footerBottom}>
          © 2025–2031 CodeStorm Solutions | Design & Developed by CodeStorm
          Solutions
        </div>
      </div>
    </footer>
  );
}