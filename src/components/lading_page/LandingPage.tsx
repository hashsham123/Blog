import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";

const frames = [
  "scene00011.png",
  "scene00021.png",
  "scene00031.png",
  "scene00041.png",
  "scene00051.png",
  "scene00061.png",
  "scene00071.png",
  "scene00081.png",
  "scene00091.png",
  "scene00101.png",
  "scene00111.png",
  "scene00121.png",
  "scene00131.png",
  "scene00141.png",
  "scene00151.png",
  "scene00161.png",
  "scene00171.png",
  "scene00181.png",
  "scene00191.png",
  "scene00201.png",
  "scene00211.png",
];

const LandingPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState<number>(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage = scrollTop / maxScroll;

    const frameIndex = Math.min(
      Math.floor(scrollPercentage * (frames.length - 1)),
      frames.length - 1
    );
    setCurrentFrame(frameIndex);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const img = new Image();
      img.src = `/frames/${frames[currentFrame]}`;

      img.onload = () => {
        console.log(`Frame ${currentFrame} loaded: ${img.src}`);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };

      img.onerror = () => {
        console.error(`Error loading frame ${currentFrame}: ${img.src}`);
      };
    } else {
      console.error("Canvas or context is not available");
    }
  }, [currentFrame]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main_frame">
      <canvas className="canvas" ref={canvasRef} />
    </div>
  );
};

export default LandingPage;
