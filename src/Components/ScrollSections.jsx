"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./ScrollSections.module.css";
import Aurora from "@/Components/Aurora";
import Navbar from "@/Components/Navbar";
import TopBanner from "@/Components/TopBanner";
import LogoLoop from "@/Components/LogoLoop";
import logo from "@/Images/main-logo.png";
import topComma from "@/Images/top-comma.png";
import bottomComma from "@/Images/bottom-comma.png";
import dentalLogo from "@/Images/dental.png";
import cuspidooLogo from "@/Images/cuspidoo.png";
import footerImage from "@/Images/footer-image.png";
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
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineDesignServices, MdPhoneIphone } from "react-icons/md";
import { HiOutlinePaintBrush } from "react-icons/hi2";

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

const sections = [
  { id: "hero" },
  { id: "about" },
  { id: "services" },
  { id: "tech" },
  { id: "projects" },
  { id: "footer" },
];

export default function ScrollSections() {
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        setCurrent((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrent((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const handleKeyDown = (e) => {
      if (isScrolling.current) return;
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

      isScrolling.current = true;

      if (e.key === "ArrowDown") {
        setCurrent((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrent((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <Aurora
          colorStops={["#b26032", "#3d1a08", "#e08840"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div className={styles.topBanner}>
        <TopBanner />
      </div>

      <div className={styles.navbarWrapper}>
        <Navbar setCurrent={setCurrent} />
      </div>

      <AnimatePresence mode="wait">
        {current === 0 && (
          <motion.div
            key="hero"
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <motion.div
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
                [ D E S I G N . &nbsp;&nbsp; D E V E L O P . &nbsp;&nbsp; D E
                L I V E R ]
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
          </motion.div>
        )}

        {current === 1 && (
          <motion.div
            key="about"
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className={styles.noteCard}>
              <Image
                src={topComma}
                alt="Quote"
                width={120}
                height={120}
                className={styles.quoteTop}
              />

              <div className={styles.noteContent}>
                <motion.p className={styles.paragraph}>
                  At CodeStorm Solutions, we don't just build software — we
                  craft digital experiences that leave a lasting impression.
                  From pixel-perfect websites to powerful mobile applications
                  and intuitive UI/UX designs, we bring your vision to life with
                  precision and passion.
                </motion.p>

                <motion.p className={styles.paragraph}>
                  We believe every great product starts with a great idea. Our
                  team of developers and designers work hand in hand to turn
                  that idea into a fast, scalable, and beautifully designed
                  solution — built to perform and designed to impress.
                </motion.p>

                <motion.p className={styles.paragraph}>
                  Whether you are a startup finding your footing or an
                  established business looking to scale — we are your end-to-end
                  digital partner, from concept to launch and beyond.
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
          </motion.div>
        )}

        {current === 2 && (
          <motion.div
            key="services"
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className={styles.servicesWrapper}>
              <motion.h2 className={styles.techHeading}>
                Services We Provide
              </motion.h2>

              <motion.p className={styles.techSubheading}>
                Everything you need to build, launch and grow your digital
                presence
              </motion.p>

              <div className={styles.serviceCards}>
                <motion.div className={styles.serviceCard}>
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
                >
                  <div className={styles.serviceIcon}>
                    <MdPhoneIphone />
                  </div>
                  <h3 className={styles.serviceName}>Mobile Application</h3>
                  <p className={styles.serviceDesc}>
                    From iOS to Android, we build powerful, intuitive mobile
                    apps that deliver seamless user experiences.
                  </p>
                </motion.div>

                <motion.div className={styles.serviceCard}>
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
          </motion.div>
        )}

        {current === 3 && (
          <motion.div
            key="tech"
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className={styles.techWrapper}>
              <motion.h2 className={styles.techHeading}>
                Technologies We Use
              </motion.h2>

              <motion.p className={styles.techSubheading}>
                Built with the most powerful and modern tools in the industry
              </motion.p>

              <motion.div className={styles.techGlassCard}>
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
          </motion.div>
        )}

        {current === 4 && (
          <motion.div
            key="projects"
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className={styles.projectsWrapper}>
              <motion.h2 className={styles.techHeading}>
                Our Latest Projects
              </motion.h2>

              <motion.p className={styles.techSubheading}>
                Real products. Real results. Built with passion.
              </motion.p>

              <div className={styles.projectCards}>
                <motion.a
                  href="https://white-dental-aesthetics-y52x.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectCard}
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
                    <span className={styles.projectLink}>
                      Visit Website →
                    </span>
                  </div>
                </motion.a>

                <motion.a
                  href="https://cuspidoo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectCard}
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
                      A medical and surgical instruments e-commerce platform
                      with product categories and detailed listings.
                    </p>
                    <span className={styles.projectLink}>
                      Visit Website →
                    </span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}

        {current === 5 && (
          <motion.div
            key="footer"
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className={styles.footerWrapper}>
              <div className={styles.footerGlass}>
                <motion.div className={styles.footerLeft}>
                  <Image
                    src={footerImage}
                    alt="CodeStorm Solutions"
                    width={220}
                    height={220}
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>

                <motion.div className={styles.footerRight}>
                  <h1 className={styles.footerHeading}>
                    CodeStorm Solutions
                  </h1>

                  <div className={styles.footerNav}>
                    <button
                      onClick={() => setCurrent(0)}
                      className={styles.footerNavLink}
                    >
                      Home
                    </button>

                    <button
                      onClick={() => setCurrent(1)}
                      className={styles.footerNavLink}
                    >
                      About Us
                    </button>

                    <button
                      onClick={() => setCurrent(2)}
                      className={styles.footerNavLink}
                    >
                      Services
                    </button>

                    <button
                      onClick={() => setCurrent(5)}
                      className={styles.footerNavLink}
                    >
                      Contact
                    </button>
                  </div>

                  <div className={styles.footerContact}>
                    <p className={styles.footerContactText}>
                      info@codestormsolutions.com
                    </p>
                    <p className={styles.footerContactText}>
                      +92 333 8189912
                    </p>
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

              <motion.div className={styles.footerBottom}>
                © 2025–2031 CodeStorm Solutions | Design & Developed by
                CodeStorm Solutions
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.dots}>
        {sections.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${
              current === i ? styles.dotActive : ""
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}