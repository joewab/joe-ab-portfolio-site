import * as React from "react";
// import Home from './components/Home/Home.jsx';
// import Projects from './components/Projects/Projects.jsx';
// import Artwork from './components/Artwork/Artwork.jsx';
import './index.css';
import { Link } from "gatsby"
import GithubIcon from "./GitHub-Mark-64px.png";
import LinkedInIcon from "./LI-In-Bug.png";


import Resume from "./components/Resume/_Joe_Anthony-Brown_Resume.pdf"


function IndexPage() {
  return (
    
      <div>
        <nav id="nav">
          <div>
            <Link to="/components/Home/Home"><img src="https://img.icons8.com/ios/50/undefined/home--v1.png"/></Link>
          </div>
          <div>
            <Link to="/components/Projects/Projects"><img src="https://img.icons8.com/ios/50/undefined/code.png"/></Link>
          </div>
          <div>
            <Link to="/components/Artwork/Artwork"><img src="https://img.icons8.com/external-others-made-by-made/50/undefined/external-art-art-others-made-by-made-54.png"/></Link>
          </div>
          <div>
          <a target="_blank" rel="noreferrer" href= {Resume}><img src="https://img.icons8.com/ios/50/undefined/resume.png"/></a>
          </div>
          <div>
          <a target="_blank" rel="noreferrer" href= "https://github.com/joewab"><img width='50px' src={GithubIcon}/></a>
          </div>
          <div>
          <a target="_blank" rel="noreferrer" href= "https://www.linkedin.com/in/joe-anthony-brown/"><img width='50px' src={LinkedInIcon}/></a>
          </div>
        </nav>
        </div>

       
    
  );
}
// http://localhost:3000/#/
export default IndexPage;
