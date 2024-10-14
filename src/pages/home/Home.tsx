import Experience from "../../components/experiences/Experience";
import LandingPage from "../../components/lading_page/LandingPage";
import Projects from "../../components/projects/Projects";
import Certificate from "../../components/certificates/Certificate";
import "./Home.css";

function Home() {
  return (
    <div className="home_container" id="top">
      <LandingPage />
      <Experience />
      <Projects />
      <Certificate />
    </div>
  );
}

export default Home;
