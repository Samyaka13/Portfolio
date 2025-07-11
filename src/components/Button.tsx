import Link from "next/link";
import React from "react";

function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link className="btn" target="_blank" href={link}  rel="noopener noreferrer" download>
      {text}
    </Link>
  );
}

export default Button;
