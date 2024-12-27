import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../../styles/Certificate.scss";

export default function MediaCard() {
  return (
    <>
      <p
        className="title_exp"
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
        id="certificates"
      >
        My Certificates
      </p>
      <div className="main_cards" id="about">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="certificates/devtown.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Devtown Training
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Gained in-depth knowledge and practical experience in MongoDB,
              Express.js, React.js, and Node.js, specializing in building
              full-stack web applications.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="certificates/competition.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Codespire Competition
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Participated in Codespire 2023 and secured 30th rank out of 315
              students, demonstrating strong problem-solving and coding skills
              in a competitive environment.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="certificates/persistent.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Persistent Training
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Completed the Persistent Martial Intern Program, gaining training
              in key software engineering subjects like Operating Systems,
              Object-Oriented Programming (OOP).
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="certificates/front-end-meta.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Meta Frontend Training
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Completed Meta Frontend Training, gaining expertise in HTML, CSS,
              JavaScript, React, and modern web development practices for
              building responsive applications.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="certificates/ibm-os.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              IBM OS Training
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Completed IBM OS Training, gaining hands-on experience with
              operating systems, enhancing knowledge in system administration
              and management.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="certificates/iit-html.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              HTML Certified by IIT
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Received HTML certification from IIT, demonstrating proficiency in
              web development, including structure, semantics, and best
              practices for building websites.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
