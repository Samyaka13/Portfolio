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
            I&apos;m <strong>Samyak Ajmera</strong>, an Electrical Engineering
            undergraduate at SGSITS Indore and a{" "}
            <strong>Software Development Engineer Intern</strong> focused on
            building reliable, production-grade web, mobile, and AI-driven
            systems.
          </p>

          <p className="about-grid-info-text">
            My work bridges full-stack engineering, mobile development, and
            applied AI. Rather than building shallow LLM wrappers, I focus on{" "}
            <strong>backend-first architectures</strong> — asynchronous
            workers, message queues, state machines, and semantic
            retrieval — to solve concrete product problems.
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
            secure JWT authentication and offloading compute-heavy workflows
            with Redis and BullMQ.
          </p>

          <p className="about-grid-info-text">
            In AI, I build agentic tooling with{" "}
            <strong>LangChain and LangGraph</strong> — multi-agent routing
            networks, human-in-the-loop execution gates, and semantic search
            pipelines over vector embeddings.
          </p>

          <p className="about-grid-info-text">
            Technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            {/* Languages */}
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Java</li>

            {/* Frontend & Mobile */}
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js (App Router)</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">TanStack Query</li>

            {/* Backend */}
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express.js</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Redis & BullMQ</li>
            <li className="about-grid-info-list-item">JWT Auth</li>

            {/* AI & Agentic */}
            <li className="about-grid-info-list-item">LangGraph</li>
            <li className="about-grid-info-list-item">LangChain</li>
            <li className="about-grid-info-list-item">Gemini API</li>
            <li className="about-grid-info-list-item">Vector Embeddings</li>
          </ul>
        </div>

        {/* PHOTO */}
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/PP.jpg"
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
