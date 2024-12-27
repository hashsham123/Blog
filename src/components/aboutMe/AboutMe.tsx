import "../../styles/AboutMe.scss";
import QuizIcon from "@mui/icons-material/Quiz";

function AboutMe() {
  return (
    <section className="port-about-me-container">
      <div className="port-about-me">
        <div className="port-about-me-half port-about-me-image">
          <img src="/Hashsham-khan.jpg" alt="image" />
          <u><p>Hashsham Khan</p></u>
        </div>
        <div className="port-about-me-half port-about-me-para">
          <div className="port-about-me-quotation-up">
            <img src="/icons/quotation-mark.png" alt="image" />
          </div>
          <h3>
            Who am I<QuizIcon fontSize="large" sx={{ color: "#3f4c6b", marginLeft: "0.5rem" }} />
          </h3>
          <p>
            I am a passionate software developer skilled in React.js, Node.js,
            and modern JavaScript frameworks like Next.js and Nest.js. With both
            internship and full-time experience, I have a strong foundation in
            building scalable applications. I hold a degree in Software
            Engineering and thrive on creating innovative solutions for complex
            challenges.
          </p>
          <div className="port-about-me-quotation">
            <img src="/icons/quotation-mark-down.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
