import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import devAiCopilot from "../../public/devai-copilot.svg";

function Projects() {
  const projectsData = [
    {
      image: project1,
      projectName: "GS Academia",
      projectDescription:
        "A full-stack learning platform for online courses, payments, reviews, and media management, built to provide a practical and engaging learning experience.",
      projectTech: ["React", "Redux Toolkit", "Razorpay", "Cloudinary", "TypeScript", "Express", "MongoDB"],
      projectExternalLinks: {
        github: "https://github.com/Samyaka13/GS-Acadmia",
        externalLink: "https://gs-acadmia-frontend.vercel.app/",
      },
    },
    {
      image: project2,
      projectName: "Real-Time Collaborative Text Editor",
      projectDescription:
        "A real-time collaborative editor where teams can create organizations, work on rich-text documents simultaneously, and manage role-based viewing and editing permissions.",
      projectTech: ["Next.js", "Tiptap", "Shadcn/ui", "Clerk", "Tailwind CSS"],
      projectExternalLinks: {
        github: "https://github.com/Samyaka13/Text-Editor",
        externalLink: "https://text-editor-mk21.vercel.app/",
      },
    },
    {
      image: devAiCopilot,
      projectName: "DevAI Copilot",
      projectDescription:
        "An AI-powered developer copilot designed to help developers understand, generate, and work with code through an integrated AI-assisted workflow.",
      projectTech: ["Next.js", "TypeScript", "AI", "Developer Tools"],
      projectExternalLinks: {
        github: "https://github.com/Samyaka13/devai-copilot",
        externalLink: "https://github.com/Samyaka13/devai-copilot",
      },
    },
  ];

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>

      <div className="projects-container">
        {projectsData.map((project, index) => {
          const { image, projectDescription, projectExternalLinks, projectName, projectTech } = project;

          return (
            <motion.div
              className={`project ${index % 2 === 1 ? "project-reverse" : ""}`}
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <Link
                href={projectExternalLinks.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image"
                aria-label={`Visit ${projectName}`}
              >
                <div className="project-image-overlay" />
                <div className="project-image-container">
                  <Image
                    src={image}
                    fill
                    alt={projectName}
                    quality={100}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>

              <div className="project-info">
                <p className="project-info-overline">Featured Project</p>
                <h3 className="project-info-title">{projectName}</h3>
                <div className="project-info-description">
                  <p>{projectDescription}</p>
                </div>
                <ul className="project-info-tech-list">
                  {projectTech.map((tech) => (
                    <li className="project-info-tech-list-item" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="project-info-links">
                  <li className="project-info-links-item">
                    <Link
                      href={projectExternalLinks.github}
                      className="project-info-links-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${projectName} on GitHub`}
                    >
                      <FiGithub />
                    </Link>
                  </li>
                  <li className="project-info-links-item">
                    <Link
                      href={projectExternalLinks.externalLink}
                      className="project-info-links-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${projectName}`}
                    >
                      <FiExternalLink />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
