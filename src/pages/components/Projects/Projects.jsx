import * as React from "react";

import {  Grid, Typography, Container, Paper } from '@mui/material';

import GetSmart01 from "./project-images/Screen Shot 2022-06-12 at 12.57.13 PM.png";
import GetSmart02 from "./project-images/Screen Shot 2022-06-12 at 12.57.33 PM.png";
import GetSmart03 from "./project-images/Screen Shot 2022-06-12 at 12.57.58 PM.png";
import GetSmart04 from "./project-images/Screen Shot 2022-06-12 at 12.59.14 PM.png";


function Projects() {

  return (
    <div>
      <h1 className='headings'>Code</h1>
      <Container spacing={5}>
        <Grid>
          <Grid m={4} item>
            <Paper elevation={5}>
            <Typography p={4}>
              "Get Smart": an art history flashcard game where a teacher can build galleries for their students.
              Click
              <a target="_blank" rel="noreferrer" href="https://polar-escarpment-47222.herokuapp.com/#/login"> here </a>
              to go to the site hosted on Heroku. It can take some time to load due to the host. You can also read more about it below...
            </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <img width="100%" src={GetSmart01} />
          </Grid>
          <Grid m={4} item>
            <Paper elevation={5}>
            <Typography p={4}>
              As an instructor you can create new galleries, and you have access to all galleries you have built. 
              You can add, edit, and delete individual slides or entire galleries.
            </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <img width="100%" src={GetSmart02} />
          </Grid>
          <Grid item>
            <img width="100%" src={GetSmart03} />
          </Grid>
          <Grid m={4} item>
            <Paper elevation={5}>
              <Typography p={4}>
              As a student you have access to the galleries of slides that your teacher created. 
              You may click on one to begin the flash card game.
              As you correctly fill out the details about the artwork, you earn points.
              These points are saved so you can stop at any time and come back later.
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <img width="100%" src={GetSmart04} />
          </Grid>
        </Grid>
      </Container>
     



    </div>
  );
}

export default Projects;
