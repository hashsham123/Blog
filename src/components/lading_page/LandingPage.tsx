import React, { useEffect, useRef, useState } from "react";
import "../../styles/LandingPage.scss";

const frames = [
  // "frames/scene00010.png",
  "frames/scene00011.png",
  "frames/scene00012.png",
  "frames/scene00013.png",
  "frames/scene00014.png",
  "frames/scene00015.png",
  "frames/scene00016.png",
  "frames/scene00017.png",
  "frames/scene00018.png",
  "frames/scene00019.png",
  // "frames/scene00020.png",
  // "frames/scene00021.png",
  // "frames/scene00022.png",
  // "frames/scene00023.png",
  // "frames/scene00024.png",
  // "frames/scene00025.png",
  // "frames/scene00026.png",
  // "frames/scene00027.png",
  // "frames/scene00028.png",
  // "frames/scene00029.png",
  // "frames/scene00030.png",
  // "frames/scene00031.png",
  // "frames/scene00032.png",
  // "frames/scene00033.png",
  // "frames/scene00034.png",
  // "frames/scene00035.png",
  // "frames/scene00036.png",
  // "frames/scene00037.png",
  // "frames/scene00038.png",
  // "frames/scene00039.png",
  // "frames/scene00040.png",
  // "frames/scene00041.png",
  // "frames/scene00042.png",
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
    </div>
  );
};

export default LandingPage;
