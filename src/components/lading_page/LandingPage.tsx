import React, { useEffect, useRef } from "react";
import "../../styles/LandingPage.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frames = [
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
  "frames/scene00043.png",
  "frames/scene00044.png",
  "frames/scene00045.png",
  "frames/scene00046.png",
  "frames/scene00047.png",
  "frames/scene00048.png",
  "frames/scene00049.png",
  "frames/scene00050.png",
  "frames/scene00051.png",
  "frames/scene00052.png",
  "frames/scene00053.png",
  "frames/scene00054.png",
  "frames/scene00055.png",
  "frames/scene00056.png",
  "frames/scene00057.png",
  "frames/scene00058.png",
  "frames/scene00059.png",
  "frames/scene00060.png",
  "frames/scene00061.png",
  "frames/scene00062.png",
  "frames/scene00063.png",
  "frames/scene00064.png",
  "frames/scene00065.png",
  "frames/scene00066.png",
  "frames/scene00067.png",
  "frames/scene00068.png",
  "frames/scene00069.png",
  "frames/scene00070.png",
  "frames/scene00071.png",
  "frames/scene00072.png",
  "frames/scene00073.png",
  "frames/scene00074.png",
  "frames/scene00075.png",
  "frames/scene00076.png",
  "frames/scene00077.png",
  "frames/scene00078.png",
  "frames/scene00079.png",
  "frames/scene00080.png",
  "frames/scene00081.png",
  "frames/scene00082.png",
  "frames/scene00083.png",
  "frames/scene00084.png",
  "frames/scene00085.png",
  "frames/scene00086.png",
  "frames/scene00087.png",
  "frames/scene00088.png",
  "frames/scene00089.png",
  "frames/scene00090.png",
  "frames/scene00091.png",
  "frames/scene00092.png",
  "frames/scene00093.png",
  "frames/scene00094.png",
  "frames/scene00095.png",
  "frames/scene00096.png",
  "frames/scene00097.png",
];

const LandingPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const animationFrame = useRef<number>(0);

  const preloadImages = () => {
    frames.forEach((frame, index) => {
      const img = new Image();
      img.src = `/${frame}`;
      img.onload = () => {
        imageCache.current.set(index, img);
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
    preloadImages();

    const totalFrames = frames.length - 1;

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
  }, []);

  return (
    <div>
      <div className="main_frame" style={{ height: "900vh" }}>
        <canvas className="canvas" ref={canvasRef} />
      </div>
    </div>
  );
};

export default LandingPage;
