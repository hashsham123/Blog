import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";

const frames = [
  // "frames1/scene00001.png",
  // "frames1/scene00011.png",
  // "frames1/scene00021.png",
  // "frames1/scene00031.png",
  "frames1/scene00041.png",
  "frames1/scene00051.png",
  "frames1/scene00061.png",
  "frames1/scene00071.png",
  "frames1/scene00081.png",
  "frames1/scene00091.png",
  "frames1/scene00101.png",
  "frames1/scene00111.png",
  "frames1/scene00121.png",
  "frames1/scene00131.png",
  "frames1/scene00141.png",
  "frames1/scene00151.png",
  "frames1/scene00161.png",
  "frames1/scene00171.png",
  "frames1/scene00181.png",
  "frames1/scene00191.png",
  "frames1/scene00201.png",
  "frames1/scene00211.png",
  // "frames/scene00011.png",
  "frames/scene00021.png",
  "frames/scene00031.png",
  "frames/scene00041.png",
  "frames/scene00051.png",
  "frames/scene00061.png",
  "frames/scene00071.png",
  "frames/scene00081.png",
  "frames/scene00091.png",
  "frames/scene00101.png",
  "frames/scene00111.png",
  "frames/scene00121.png",
  "frames/scene00131.png",
  "frames/scene00141.png",
  "frames/scene00151.png",
  "frames/scene00161.png",
  "frames/scene00171.png",
  // "frames/scene00181.png",
  // "frames/scene00191.png",
  // "frames/scene00201.png",
  // "frames/scene00211.png",
];

const LandingPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [imageCache, setImageCache] = useState<HTMLImageElement[]>([]);

  const preloadImages = () => {
    const cache: HTMLImageElement[] = [];
    frames.forEach((frame, index) => {
      const img = new Image();
      img.src = `/${frame}`;
      img.onload = () => {
        cache[index] = img;
        setImageCache([...cache]);
      };
    });
  };

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
    preloadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx && imageCache[currentFrame]) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const img = imageCache[currentFrame];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, [currentFrame, imageCache]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="main_frame">
        <canvas className="canvas" ref={canvasRef} />
      </div>
      <div className="button_canvas">
        <button>
          <img
            src="/downloadIcon.png"
            alt="download icon"
            className="animate__animated animate__fadeIn animate__infinite"
          />
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
