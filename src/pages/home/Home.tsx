import Experience from "../../components/experiences/Experience";
import LandingPage from "../../components/lading_page/LandingPage";
import Projects from "../../components/projects/Projects";
import Certificate from "../../components/certificates/Certificate";
import "../../styles/Home.scss";
import AboutMe from "../../components/aboutMe/AboutMe";

function Home() {
  return (
    <div className="home_container" id="top">
      <LandingPage />
      <AboutMe />
      <Experience />
      <Projects />
      <Certificate />
    </div>
  );
}

export default Home;
