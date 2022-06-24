import * as React from "react";

import { Grid, Typography, Container, Paper } from '@mui/material';

import { Link } from "gatsby";
import GithubIcon from "../../GitHub-Mark-64px.png";
import LinkedInIcon from "../../LI-In-Bug.png";
import Resume from "../Resume/Joe_Anthony-Brown_Resume_general.pdf";

import GetSmart01 from "./project-images/Screen Shot 2022-06-12 at 12.57.13 PM.png";
import GetSmart02 from "./project-images/Screen Shot 2022-06-12 at 12.57.33 PM.png";
import GetSmart03 from "./project-images/Screen Shot 2022-06-12 at 12.57.58 PM.png";
import GetSmart04 from "./project-images/Screen Shot 2022-06-12 at 12.59.14 PM.png";


function Projects() {

  return (
    <div>
      <nav id="nav">
        <div>
          <Link to="../../Home/Home"><img alt="" src="https://img.icons8.com/ios/50/undefined/home--v1.png" /></Link>
        </div>
        <div>
          <Link to="../../Projects/Projects"><img alt="" src="https://img.icons8.com/ios/50/undefined/code.png" /></Link>
        </div>
        <div>
          <Link to="../../Artwork/Artwork"><img alt="" src="https://img.icons8.com/external-others-made-by-made/50/undefined/external-art-art-others-made-by-made-54.png" /></Link>
        </div>
        <div>
          <a target="_blank" aria-label="resume" rel="noreferrer" href={Resume}><img alt="" src="https://img.icons8.com/ios/50/undefined/resume.png" /></a>
        </div>
        <div>
          <a target="_blank" aria-label="github" rel="noreferrer" href="https://github.com/joewab"><img alt="" width='50px' src={GithubIcon} /></a>
        </div>
        <div>
          <a target="_blank" aria-label="linkedin" rel="noreferrer" href="https://www.linkedin.com/in/joe-anthony-brown/"><img alt="" width='50px' src={LinkedInIcon} /></a>
        </div>
      </nav>
      <div className="content-container">
      <h1>Code</h1>
      <Container spacing={5}>
        <Grid>
          <Grid m={4} item>
            <Paper elevation={5}>
              <Typography p={4}>
                <p>
                "Get Smart": an art history flashcard game where a teacher can build galleries for their students.
                Click
                <a target="_blank" rel="noreferrer" href="https://polar-escarpment-47222.herokuapp.com/#/login"> here </a>
                to go to the site hosted on Heroku. It can take some time to load due to the host. You can also read more about it below...
                </p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <img alt="" width="100%" src={GetSmart01} />
          </Grid>
          <Grid m={4} item>
            <Paper elevation={5}>
              <Typography p={4}>
                <p>
                As an instructor you can create new galleries, and you have access to all galleries you have built.
                You can add, edit, and delete individual slides or entire galleries.
                </p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <img alt="" width="100%" src={GetSmart02} />
          </Grid>
          <Grid item>
            <img alt="" width="100%" src={GetSmart03} />
          </Grid>
          <Grid m={4} item>
            <Paper elevation={5}>
              <Typography p={4}>
                <p>
                As a student you have access to the galleries of slides that your teacher created.
                You may click on one to begin the flash card game.
                As you correctly fill out the details about the artwork, you earn points.
                These points are saved so you can stop at any time and come back later.
                </p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <img alt="" width="100%" src={GetSmart04} />
          </Grid>
        </Grid>
      </Container>
      </div>




    </div>
  );
}

export default Projects;
