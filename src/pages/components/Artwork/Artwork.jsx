import * as React from "react";
import { Grid, Container} from '@mui/material';

import MidPHand01 from "./art-images/midp2-hand-01.jpg";
import MidPHead01 from "./art-images/midp2-head-01.jpg";
import MidPSprays03 from "./art-images/midp2-sprays-03.jpg";
import MidPSprays05 from "./art-images/midp2-sprays-05.jpg";
import Studio1_10 from "./art-images/studio1-10.jpg";
import Studio1_11 from "./art-images/studio1-11.jpg";
import Studio1_12 from "./art-images/studio1-12.jpg";
import Studio1_14 from "./art-images/studio1-14.jpg";




function Artwork() {

  return (
    <div>
      <h1 className='headings'>Art</h1>
      <Container >
        <Grid container spacing={2}>
         
          <Grid item xs={6}>
            <img width='70%' alt="" src={MidPHand01} />
          </Grid>
          <Grid item xs={6}>
            <img width='70%' alt="" src={MidPHead01} />
          </Grid>
          <Grid item>
            <img width='500px' alt="" src={MidPSprays03} />
          </Grid>
          <Grid item>
            <img width='500px' alt="" src={MidPSprays05} />
          </Grid>
          
          <Grid item>
            <img width='500px' alt="" src={Studio1_10} />
          </Grid>
          <Grid item>
            <img width='500px' alt="" src={Studio1_11} />
          </Grid>
          <Grid item>
            <img width='500px' alt="" src={Studio1_12} />
          </Grid>
          <Grid item>
            <img width='500px' alt="" src={Studio1_14} />
          </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default Artwork;
