import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "GS Academia",
      projectLink: "https://gs-acadmia-frontend.vercel.app",
      projectDescription:
        "GS Academia is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "Razorpay",
        "Cloudinary",
        "Typescript",
        "Express",
        "MongoDB"
      ],
      projectExternalLinks: {
        github: "https://github.com/Samyaka13/GS-Acadmia",
        externalLink: "https://gs-acadmia-frontend.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Real-Time Collaborative Text Editor",
      projectLink: "https://text-editor-mk21.vercel.app/",
      projectDescription:
        "A real-time collaborative text editor that lets users create organizations and work on documents together. It supports rich text formatting with custom fonts, styles, and headings. Members can edit simultaneously, with live updates and role-based permissions to control who can view or edit. Built for seamless team collaboration, but tailored for organizational workflows.",
      projectTech: [
        "Next.js",
        "Tip-Tap",
        "Shadcn/ui",
        "Clerk",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/Samyaka13/Text-Editor",
        externalLink: "https://text-editor-mk21.vercel.app/",
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
          const {
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          } = project;
          
          return (
            <motion.div
              className="project"
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <div className="project-image">
                <div className="project-image-overlay"></div>
                <div className="project-image-container">
                  <Image 
                    src={image} 
                    fill 
                    alt={projectName} 
                    quality={100}
                    priority={index === 0}
                  />
                </div>
              </div>
              
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
                      aria-label={`Visit ${projectName} website`}
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