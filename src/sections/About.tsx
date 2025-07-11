import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
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
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I’m Samyak Ajmera, a final-year B.Tech student who found his calling in the world of software development and artificial intelligence. While my academic background is rooted in engineering, my passion lies in writing code, solving problems, and building digital solutions that make a difference.
          </p>
          <p className="about-grid-info-text">
            Over time, I’ve specialized in full-stack web development using the MERN stack, and gained hands-on experience with tools like Cloudinary, Razorpay, and JWT authentication. I also have a solid grasp of Java, which I’ve used to build data structure–oriented solutions and solve algorithmic problems effectively.
          </p>

          <p className="about-grid-info-text">
            Beyond web development, I’m actively exploring the intersection of AI and real-world applications, with a strong desire to create tech that’s both smart and accessible. I’m a curious and adaptive learner who enjoys collaborating with others, learning from feedback, and continuously pushing the boundaries of what I can build.
          </p>
        
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next Js</li>
            <li className="about-grid-info-list-item">Express.JS</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Chakra UI</li>
            <li className="about-grid-info-list-item">Shad CN</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">TanStack</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/PP.jpg" alt="profile" fill/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
