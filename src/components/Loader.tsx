import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="S" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{ scale: 2 }}
                  fill="currentColor"
                  d="M19.8,3.4c-3.3,0-6.3,1.3-8.6,3.6c-0.6,0.6-0.6,1.5,0,2.1l1.8,1.8c0.6,0.6,1.6,0.6,2.2,0
    c1.2-1.2,2.8-1.9,4.6-1.9c2.4,0,3.7,1.1,3.7,2.7c0,1.7-1.7,2.2-4.6,3c-3.4,0.9-7.3,2.3-7.3,6.7c0,3.9,3.1,6.8,7.9,6.8
    c3.1,0,5.8-1.2,7.7-3.1c0.6-0.6,0.6-1.5,0-2.1l-1.7-1.7c-0.6-0.6-1.5-0.6-2.1,0c-1.3,1.3-3.1,2-4.9,2c-2.3,0-3.6-1-3.6-2.4
    c0-1.6,1.6-2.1,4.3-2.9c3.5-1,7.6-2.4,7.6-7C27.4,6.1,24.2,3.4,19.8,3.4z"
                />

              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;

