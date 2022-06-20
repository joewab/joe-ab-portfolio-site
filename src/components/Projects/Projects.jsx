import * as React from "react";

import { Box, Grid, Typography, Container, Paper } from '@mui/material';

function Animals() {

  return (
    <div>
      <h1 className='headings'>Apps</h1>
      <Container spacing={5}>
        <Grid>
          <Grid m={4} item>
            <Paper elevation={5}>
            <Typography p={4}>
              "Get Smart": an art history flashcard game where a teacher can build galleries for their students.
              Click
              <a target="_blank" href="https://polar-escarpment-47222.herokuapp.com/#/login"> here </a>
              to go to the site hosted on Heroku. It can take some time to load due to the host. You can also read more about it below...
            </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <img width="100%" src={require("./project-images/Screen Shot 2022-06-12 at 12.57.13 PM.png")} />
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
            <img width="100%" src={require("./project-images/Screen Shot 2022-06-12 at 12.57.33 PM.png")} />
          </Grid>
          <Grid item>
            <img width="100%" src={require("./project-images/Screen Shot 2022-06-12 at 12.57.58 PM.png")} />
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
            <img width="100%" src={require("./project-images/Screen Shot 2022-06-12 at 12.59.14 PM.png")} />
          </Grid>
        </Grid>
      </Container>
      {/* <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          p: 0,
          m: 0,
          borderRadius: 1,
        }}>
          
            <div>
              <img width="700px" src={require("./project-images/Screen Shot 2022-06-12 at 12.57.58 PM.png")} />
              </div>
              <div>
              <img width="300px" src={require("./project-images/Screen Shot 2022-06-12 at 12.58.21 PM.png")} />
              </div>
      </Box> */}



    </div>
  );
}

export default Animals;
