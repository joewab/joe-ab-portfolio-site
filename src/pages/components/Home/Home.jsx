import * as React from "react";

import { Link } from "gatsby"
import GithubIcon from "../../github-outline.png";
import LinkedInIcon from "../../Linkedin-Outline.png";
import Resume from "../Resume/Joe_Anthony-Brown_Resume.pdf";


function Home() {
  return (
    <div className="homepage">
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
          <a target="_blank" rel="noreferrer" href={Resume}><img alt="" src="https://img.icons8.com/ios/50/undefined/resume.png" /></a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://github.com/joewab"><img alt="" width='50px' src={GithubIcon} /></a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joe-anthony-brown/"><img alt="" width='50px' src={LinkedInIcon} /></a>
        </div>
      </nav>
      <div className="reading-container">
      <h1 className="big-text">Hello, my name is Joe.</h1>
      <h2>I'm a full stack developer and artist.</h2>
      <h3>This is a work in progress, I will be continuing to rework it and add content... </h3>
      </div>
      <div className="gap"></div>
      <a target="_blank" href="https://icons8.com/icon/73/home">Icons by Icons8</a>

    </div>
  );
}

export default Home;
