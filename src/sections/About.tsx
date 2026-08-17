import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        {/* INFO */}
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I’m <strong>Samyak Ajmera</strong>, a final-year engineering student
            working as a <strong>Software Development Engineer Intern</strong>,
            focused on building production-grade web and mobile applications.
          </p>

          <p className="about-grid-info-text">
            My recent work spans <strong>React Native mobile apps</strong> and
            full-stack systems where I collaborate with backend APIs, shared
            business logic, and real-world product workflows. I care about clean
            architecture, maintainability, and performance — not just UI.
          </p>

          <p className="about-grid-info-text">
            On the backend, I’ve built systems using Node.js and MongoDB,
            implemented JWT-based authentication, background job processing with
            Redis, and integrated AI services to solve practical problems like
            resume analysis and automation.
          </p>

          <p className="about-grid-info-text">
            Lately, I’ve been exploring how <strong>AI fits into real products</strong>
            — designing backend-first systems that use LLMs, queues, and async
            workers rather than surface-level AI demos.
          </p>

          <p className="about-grid-info-text">
            Technologies I’ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            {/* Frontend */}
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js (App Router)</li>
            <li className="about-grid-info-list-item">TypeScript</li>

            {/* State & Data */}
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">TanStack Query</li>

            {/* Backend */}
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express.js</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Redis & BullMQ</li>

            {/* Infra & Tools */}
            <li className="about-grid-info-list-item">JWT Auth</li>
            <li className="about-grid-info-list-item">Cloudinary</li>
            <li className="about-grid-info-list-item">REST APIs</li>
          </ul>
        </div>

        {/* PHOTO */}
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/PP.jpeg"
              alt="Samyak Ajmera"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
