import "./Projects.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Projects() {
  return (
    <div className="main_project" id="projects">
      <div className="content_project">
        <p className="title_project">My Projects</p>
        <section className="project_section">
          {/* <p className="title_project" style={{marginRight: '10%', fontSize: '4rem'}}>Project</p> */}
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
                A full stack clone made yousing MERN stack, firebase
                <p style={{ fontSize: "0.9rem" }}>6 min read</p>
              </p>
              <p className="desc_project">
                A full-stack clone using the MERN stack (MongoDB, Express,
                React, Node.js) and Firebase for authentication and real-time
                data.
              </p>
            </div>
          </div>
        </section>

        <section className="project_section2">
          <div className="box_project">
            <div className="left_project">
              <img
                src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
              />
            </div>
            <div className="right_project">
              <p className="name_project">
                Youtube-Clone
                <MoreHorizIcon />
              </p>
              <p className="para_project">
                A full stack clone made yousing MERN stack, firebase
                <p style={{ fontSize: "0.9rem" }}>6 min read</p>
              </p>
              <p className="desc_project">
                A full-stack clone using the MERN stack (MongoDB, Express,
                React, Node.js) and Firebase for authentication and real-time
                data.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
