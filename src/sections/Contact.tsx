import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h1 className="contact-title">What&apos;s Next?</h1>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-location">📍 Based in Gurgaon, India 🇮🇳</p>
      <p className="contact-text">
        💼 I&apos;m actively seeking SDE full-time opportunities in full-stack web development. Let&apos;s connect and build something impactful!
      </p>
      <div className="contact-cta">
        <Button link="mailto:samyakajmera022@gmail.com" text="Say Hello" />
        <Button link="https://wa.me/917024362197" text="WhatsApp Me" />
      </div>
    </motion.div>
  );
}

export default Contact;
