import React, { useEffect, useState } from "react";
import Experience from "../../components/experiences/Experience";
import LandingPage from "../../components/lading_page/LandingPage";
import Projects from "../../components/projects/Projects";
import Certificate from "../../components/certificates/Certificate";
import AboutMe from "../../components/aboutMe/AboutMe";
import "../../styles/Home.scss";

function Home() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetHeight = window.innerHeight * 5.9;
      setIsFixed(scrollTop >= targetHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home_container" id="top">
      <div
        style={{
          position: isFixed ? "sticky" : "relative",
          top: isFixed ? "0" : undefined,
        }}
      >
        <LandingPage />
      </div>
      <div
        className="port-div-on-top"
        style={{
          backgroundColor: "#ffffff",
          zIndex: 10,
          width: "100%",
          height: "100%",
        }}
      >
        <AboutMe />
        <Experience />
        <Projects />
        <Certificate />
      </div>
    </div>
  );
}

export default Home;
