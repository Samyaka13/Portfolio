import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Define types for better TypeScript support
interface HeroConfig {
  greeting?: string;
  name?: string;
  tagline?: string;
  description?: string;
  buttonText?: string;
  buttonLink: string;
  buttonAction?: () => void;
}

interface AnimationConfig {
  duration?: number;
  ease?: string;
  staggerDelay?: number;
}

interface HeroProps {
  config?: HeroConfig;
  animationConfig?: AnimationConfig;
  className?: string;
}

// Default configuration
const defaultConfig: HeroConfig = {
  greeting: "Hi my name is",
  name: "Your Name",
  tagline: "I blend design, logic, and performance",
  description: "I'm a passionate developer who loves creating amazing digital experiences. I enjoy turning ideas into real-world solutions through full-stack web development and love exploring how technology can simplify and improve lives.",
  buttonText: "Check out my resume",
  buttonLink: "/resume.pdf"
};

const defaultAnimationConfig: AnimationConfig = {
  duration: 0.3,
  ease: "easeInOut",
  staggerDelay: 0.15
};

function Hero({
  config = { buttonLink: "/resume.pdf" },
  animationConfig = {},
  className = ""
}: HeroProps) {

  const mergedConfig = { ...defaultConfig, ...config };
  const mergedAnimationConfig = { ...defaultAnimationConfig, ...animationConfig };

  const {
    greeting,
    name,
    tagline,
    description,
    buttonText,
    buttonLink,
    buttonAction
  } = mergedConfig;

  const { duration, ease, staggerDelay } = mergedAnimationConfig;


  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };


  const getDelay = (index: number) => 0.6 + (index * staggerDelay!);

  return (
    <div className={`hero ${className}`}>

      <motion.h1
        className="hero-title"
        variants={fadeInUpVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration,
          ease,
          delay: getDelay(0),
        }}
      >
        {greeting}
      </motion.h1>


      <motion.h2
        className="hero-title-large"
        variants={fadeInUpVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration,
          ease,
          delay: getDelay(1),
        }}
      >
        {name}
      </motion.h2>

      {/* Tagline */}
      <motion.h3
        className="hero-title-medium hero-title-sub"
        variants={fadeInUpVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration,
          ease,
          delay: getDelay(2),
        }}
      >
        {tagline}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="hero-text"
        variants={fadeInUpVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration,
          ease,
          delay: getDelay(3),
        }}
      >
        {description}
      </motion.p>

      <motion.div
        className="hero-button"
        variants={fadeInUpVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration,
          ease,
          delay: getDelay(4),
        }}
      >
        <Button
          text={buttonText!}
          link={buttonLink}
          onClick={buttonAction}
        />
      </motion.div>
    </div>
  );
}

// Export different configurations for easy use
export const HeroWithCustomConfig = (props: HeroProps) => {
  const samyakConfig: HeroConfig = {
    greeting: "Hi my name is",
    name: "Samyak Ajmera",
    tagline: "I blend design, logic, and performance",
    description: "I'm Samyak Ajmera, a final-year B.Tech student with a deep interest in software development and AI. I enjoy turning ideas into real-world solutions through full-stack web development and love exploring how technology can simplify and improve lives. I'm curious, adaptable, and always eager to learn something new.",
    buttonText: "Check out my resume",
    buttonLink: "/resume.pdf"
  };

  return <Hero config={samyakConfig} {...props} />;
};

// Hook for easy customization
export const useHeroConfig = (customConfig: Partial<HeroConfig>) => {
  return { ...defaultConfig, ...customConfig };
};

// Usage examples (commented out for production)
/*
// Example 1: Basic usage
<Hero />

// Example 2: Custom configuration
<Hero 
  config={{
    greeting: "Hello, I'm",
    name: "John Doe",
    tagline: "Full Stack Developer",
    description: "I create beautiful and functional web applications...",
    buttonText: "View My Work",
    buttonLink: "/portfolio"
  }}
/>

// Example 3: Custom animations
<Hero 
  config={{
    name: "Jane Smith",
    tagline: "UI/UX Designer"
  }}
  animationConfig={{
    duration: 0.5,
    ease: "easeOut",
    staggerDelay: 0.2
  }}
/>

// Example 4: Using the hook
const myConfig = useHeroConfig({
  name: "Alex Johnson",
  tagline: "Data Scientist"
});

<Hero config={myConfig} />

// Example 5: Pre-configured component
<HeroWithCustomConfig />
*/

export default Hero;