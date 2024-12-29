import React, { useEffect, useRef, useState } from "react";
import "../../styles/LandingPage.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frames = [
  "frames/scene00011.png",
  "frames/scene00012.png",
  "frames/scene00013.png",
  "frames/scene00014.png",
  "frames/scene00015.png",
  "frames/scene00016.png",
  "frames/scene00017.png",
  "frames/scene00018.png",
  "frames/scene00019.png",
  "frames/scene00020.png",
  "frames/scene00021.png",
  "frames/scene00022.png",
  "frames/scene00023.png",
  "frames/scene00024.png",
  "frames/scene00025.png",
  "frames/scene00026.png",
  "frames/scene00027.png",
  "frames/scene00028.png",
  "frames/scene00029.png",
  "frames/scene00030.png",
  "frames/scene00031.png",
  "frames/scene00032.png",
  "frames/scene00033.png",
  "frames/scene00034.png",
  "frames/scene00035.png",
  "frames/scene00036.png",
  "frames/scene00037.png",
  "frames/scene00038.png",
  "frames/scene00039.png",
  "frames/scene00040.png",
  "frames/scene00041.png",
  "frames/scene00042.png",
];

const frames2 = [
  "frames2/scene00006.png",
  "frames2/scene00007.png",
  "frames2/scene00008.png",
  "frames2/scene00009.png",
  "frames2/scene00010.png",
  "frames2/scene00011.png",
  "frames2/scene00012.png",
  "frames2/scene00013.png",
  "frames2/scene00014.png",
  "frames2/scene00015.png",
  "frames2/scene00016.png",
  "frames2/scene00017.png",
  "frames2/scene00018.png",
  "frames2/scene00019.png",
  "frames2/scene00020.png",
  "frames2/scene00021.png",
  "frames2/scene00022.png",
  "frames2/scene00023.png",
  "frames2/scene00024.png",
  "frames2/scene00025.png",
  "frames2/scene00026.png",
  "frames2/scene00027.png",
  "frames2/scene00028.png",
  "frames2/scene00029.png",
  "frames2/scene00030.png",
  "frames2/scene00031.png",
  "frames2/scene00032.png",
  "frames2/scene00033.png",
  "frames2/scene00034.png",
  "frames2/scene00035.png",
  "frames2/scene00036.png",
  "frames2/scene00037.png",
  "frames2/scene00038.png",
  "frames2/scene00039.png",
  "frames2/scene00040.png",
  "frames2/scene00041.png",
  "frames2/scene00042.png",
  "frames2/scene00043.png",
  "frames2/scene00044.png",
  "frames2/scene00045.png",
  "frames2/scene00046.png",
  "frames2/scene00047.png",
  "frames2/scene00048.png",
  "frames2/scene00049.png",
  "frames2/scene00050.png",
  "frames2/scene00051.png",
  "frames2/scene00052.png",
  "frames2/scene00053.png",
];

const LandingPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const animationFrame = useRef<number>(0);
  const [activeFrames, setActiveFrames] = useState<string[]>(frames);

  // Preload images and store them in a cache
  const preloadImages = (framesArray: string[]) => {
    imageCache.current.clear(); // Clear previous cache
    framesArray.forEach((frame, index) => {
      const img = new Image();
      img.src = `/${frame}`;
      img.onload = () => {
        imageCache.current.set(index, img);

        // Render the first frame once it's loaded
        if (index === 0) {
          renderFrame(0);
        }
      };
    });
  };

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imageCache.current.get(frameIndex);

    if (canvas && ctx && img) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    // Determine the correct frames array based on width
    const updateFrames = () => {
      const isSmallScreen = window.innerWidth <= 700;
      setActiveFrames(isSmallScreen ? frames2 : frames);
    };

    updateFrames();
    window.addEventListener("resize", updateFrames);

    return () => {
      window.removeEventListener("resize", updateFrames);
    };
  }, []);

  useEffect(() => {
    // Preload images and set up animation whenever activeFrames changes
    preloadImages(activeFrames);

    const totalFrames = activeFrames.length - 1;

    gsap.to(animationFrame, {
      current: totalFrames,
      ease: "none",
      scrollTrigger: {
        trigger: ".main_frame",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            Math.floor(self.progress * totalFrames),
            totalFrames
          );
          renderFrame(frameIndex);
        },
      },
    });

    return () => {
      ScrollTrigger.killAll(); // Clean up ScrollTrigger on unmount
    };
  }, [activeFrames]);

  return (
    <div>
      <div className="main_frame" style={{ height: "700vh" }}>
        <canvas className="canvas" ref={canvasRef} />
      </div>
    </div>
  );
};

export default LandingPage;
