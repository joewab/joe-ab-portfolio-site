import * as React from "react";
import { Grid, Container } from '@mui/material';

import { Link } from "gatsby";
import GithubIcon from "../../GitHub-Mark-64px.png";
import LinkedInIcon from "../../LI-In-Bug.png";
import Resume from "../Resume/_Joe_Anthony-Brown_Resume.pdf";

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
