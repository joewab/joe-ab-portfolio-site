import { Box, Grid, Typography, Container, Paper } from '@mui/material';




function Artwork() {

  return (
    <div>
      <h1 className='headings'>Art</h1>
      <Container >
        <Grid container spacing={2}>
          {/* <Grid item>
            <img width='500px' src={require('./art-images/Earth_Alien.jpg')} />
          </Grid>
          <Grid item>
            <img width='500px' src={require('./art-images/Emergence_of_the_Squid_Soul.jpg')} />
          </Grid> */}
          <Grid item>
            <img width='500px' src={require('./art-images/midp2-hand-01.jpg')} />
          </Grid>
          <Grid item>
            <img width='500px' src={require('./art-images/midp2-head-01.jpg')} />
          </Grid>
          <Grid item>
            <img width='500px' src={require('./art-images/midp2-sprays-03.jpg')} />
          </Grid>
          <Grid item>
            <img width='500px' src={require('./art-images/midp2-sprays-05.jpg')} />
          </Grid>
          {/* <Grid item>
            <img width='500px' src={require('./art-images/Robot_Surrenders_to_the_Primordial_Ooze.jpg')} />
          </Grid> */}
          <Grid item>
            <img width='500px' src={require('./art-images/studio1-10.jpg')} />
          </Grid>
          <Grid item>
            <img width='500px' src={require('./art-images/studio1-11.jpg')} />
          </Grid>
          <Grid item>
            <img width='500px' src={require('./art-images/studio1-12.jpg')} />
          </Grid>
          <Grid item>
            <img width='500px' src={require('./art-images/studio1-14.jpg')} />
          </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default Artwork;
