import "../../styles/Projects.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Projects() {
  return (
    <div className="main_project" id="projects">
      <div className="content_project">
        <p className="title_project">My Projects</p>
        <section className="project_section">
          <div className="box_project">
            <div className="left_project">
              <img
                src="https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
              />
            </div>
            <div className="right_project">
              <p className="name_project">
                Youtube-Clone
                <MoreHorizIcon />
              </p>
              <p className="para_project">
                A full stack website made using MERN stack{" "}
                <p style={{ fontSize: "0.9rem" }}>30 sec read</p>
              </p>
              <p className="desc_project">
                Developed a full-stack YouTube clone using React.js, Node.js,
                and MongoDB Atlas. Utilized Redux Toolkit, React Router,
                Material UI, JWT, and Mongoose for robust front-end and back-end
                functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="project_section project_section2">
          <div className="box_project">
            <div className="left_project">
              <img
                src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
              />
            </div>
            <div className="right_project">
              <p className="name_project">
                HashSocial <MoreHorizIcon />
              </p>
              <p className="para_project">
                A Social Media website made using MERN stack
                <p style={{ fontSize: "0.9rem" }}>30 sec read</p>
              </p>
              <p className="desc_project">
                Built HashSocial, a social media website using React.js and
                Node.js. Implemented Context API, React Router, Material UI, and
                MongoDB Atlas with Mongoose for seamless functionality and data
                management.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
