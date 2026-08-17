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
            I&apos;m <strong>Samyak Ajmera</strong>, an Engineering
            undergraduate at SGSITS Indore and a{" "}
            <strong>Software Development Engineer</strong> focused on
            building reliable, production-grade web, mobile, and AI-driven
            systems.
          </p>

          <p className="about-grid-info-text">
            My work bridges full-stack engineering, mobile development, and
            applied AI. Rather than building shallow LLM wrappers or
            surface-level prototypes, I focus on{" "}
            <strong>backend-first architectures</strong> that integrate
            asynchronous workers, message queues, state machines, and
            semantic retrieval to solve concrete product problems.
          </p>

          <p className="about-grid-info-text">
            On the frontend, I design responsive, maintainable applications
            across web and mobile with <strong>React</strong>,{" "}
            <strong>React Native</strong>, and{" "}
            <strong>Next.js (App Router)</strong>, prioritizing clean
            component architecture and predictable state management with
            Redux Toolkit and TanStack Query.
          </p>

          <p className="about-grid-info-text">
            On the backend, I architect decoupled services with{" "}
            <strong>Node.js</strong>, Express, and MongoDB, implementing
            secure JWT authentication, robust data validation, and
            asynchronous task processing with Redis and BullMQ to offload
            compute-heavy workflows.
          </p>

          <p className="about-grid-info-text">
            In AI, I build agentic tooling and developer assistants with{" "}
            <strong>LangChain, LangGraph, and the Google Gemini API</strong> —
            multi-agent routing networks, state machines with human-in-the-loop
            execution gates, and semantic search pipelines over vector
            embeddings.
          </p>

          <p className="about-grid-info-text">
            I also have a strong foundation in Data Structures, Algorithms,
            and object-oriented design in Java, with an emphasis on code
            efficiency, system modularity, and algorithmic problem-solving.
          </p>

          <p className="about-grid-info-text">
            Technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            {/* Languages */}
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">SQL</li>

            {/* Frontend & Mobile */}
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js (App Router)</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">TanStack Query</li>

            {/* Backend & Databases */}
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express.js</li>
            <li className="about-grid-info-list-item">MongoDB (Mongoose)</li>
            <li className="about-grid-info-list-item">Redis & BullMQ</li>
            <li className="about-grid-info-list-item">JWT Authentication</li>

            {/* AI & Agentic */}
            <li className="about-grid-info-list-item">LangGraph</li>
            <li className="about-grid-info-list-item">LangChain</li>
            <li className="about-grid-info-list-item">Google Gemini API</li>
            <li className="about-grid-info-list-item">Vector Embeddings</li>

            {/* Tools & Platforms */}
            <li className="about-grid-info-list-item">Git</li>
            <li className="about-grid-info-list-item">Postman</li>
            <li className="about-grid-info-list-item">Cursor</li>
            <li className="about-grid-info-list-item">Xcode</li>
            <li className="about-grid-info-list-item">Vercel</li>
            <li className="about-grid-info-list-item">Cloudinary</li>
          </ul>
        </div>

        {/* PHOTO */}
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/PP2.jpeg"
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
