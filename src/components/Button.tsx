import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  onClick?: () => void;
}

function Button({ text, link, onClick }: ButtonProps) {
  const isExternal = link.startsWith("http") || link.endsWith(".pdf");

  return isExternal ? (
    <a
      className="btn"
      href={link}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      download={link.endsWith(".pdf") ? true : undefined}
    >
      {text}
    </a>
  ) : (
    <Link href={link} legacyBehavior>
      <a className="btn" onClick={onClick}>
        {text}
      </a>
    </Link>
  );
}

export default Button;
