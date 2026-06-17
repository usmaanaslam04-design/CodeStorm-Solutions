"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ShowcaseSection.module.css";
import dentalLogo from "@/Images/dental.png";
import cuspidooLogo from "@/Images/cuspidoo.png";
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
import { MdOutlineDesignServices, MdPhoneIphone } from "react-icons/md";
import { HiOutlinePaintBrush } from "react-icons/hi2";
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

export default function ShowcaseSection() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.auroraBg}>
        <Grainient
          color1="#000000"
          color2="#b26035"
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

      {/* Services Block */}
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

      {/* Tech Block */}
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

      {/* Projects Block */}
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