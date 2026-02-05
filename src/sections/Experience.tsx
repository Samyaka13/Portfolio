import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
  {
    name: "Dice Enterprises",
    role: "Software Development Engineer Intern",
    start: "Jan 2026",
    end: "Present",
    shortDescription: [
      "Working at a product-based enterprise SaaS company building scalable solutions for corporate spend management and procurement workflows.",
      "Contributing to a production React Native mobile application, understanding real-world mobile architecture and cross-platform patterns.",
      "Performed exploratory and regression testing to identify UI inconsistencies, edge cases, and functional bugs in mobile features.",
      "Reviewed and analyzed the corresponding web application to understand shared APIs, business logic, and data contracts across platforms.",
    ],
  },
  {
    name: "PixelTech",
    role: "Software Development Engineer Intern",
    start: "May 2025",
    end: "Aug 2025",
    shortDescription: [
      "Built and maintained scalable, responsive user interfaces using React.js for client-facing products and internal dashboards.",
      "Implemented reusable UI components and improved performance in production-grade applications.",
      "Worked with modern state management tools including TanStack Query and Redux to manage server state and application logic.",
      "Customized and integrated component libraries such as Chakra UI and Shadcn UI to maintain consistent design systems.",
    ],
  },
  {
    name: "ListApp PharmaTech",
    role: "Web Developer",
    start: "Apr 2024",
    end: "May 2024",
    shortDescription: [
      "Designed and developed a responsive branding website from scratch to establish the startup’s online presence.",
      "Independently translated business requirements into UI/UX decisions, implementation, and deployment.",
    ],
  },
];

  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Internship Experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
