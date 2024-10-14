import "./LandingPage.css";
import "animate.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function LandingPage() {
  return (
    <div className="main_container_landing">
      <div className="content_landing">
        <div className="text_section_landing animate__animated animate__backInLeft">
          <p>
            I am a skilled developer with a deep passion for coding, which I
            consider both a profession and a cherished hobby.
          </p>

          <div className="button_container_landing">
            <button>
              <UploadFileIcon className="animate__animated animate__flash animate__infinite" />
              Download Resume
            </button>
          </div>
        </div>
        <div className="image_section_landing animate__animated animate__backInRight">
          <img src="/model.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
