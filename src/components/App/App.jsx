import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Projects from '../Projects/Projects.jsx';
import Artwork from '../Artwork/Artwork.jsx';
import Resume from '../Resume/Resume.jsx';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';


function App() {
  return (
    <Router>
      <div>
        <nav id="nav">
          <div>
            <Link to="/"><img src="https://img.icons8.com/ios/50/undefined/home--v1.png"/></Link>
          </div>
          <div>
            <Link to="/projects"><img src="https://img.icons8.com/ios/50/undefined/code.png"/></Link>
          </div>
          <div>
            <Link to="/artwork"><img src="https://img.icons8.com/external-others-made-by-made/50/undefined/external-art-art-others-made-by-made-54.png"/></Link>
          </div>
          <div>
          <a target="_blank" href= {require("../Resume/Joe-Anthony-Brown_resume.pdf")}><img src="https://img.icons8.com/ios/50/undefined/resume.png"/></a>
          </div>
          <div>
          <a target="_blank" href= "https://github.com/joewab"><img width='50px' src={require("./GitHub-Mark-64px.png")}/></a>
          </div>
          <div>
          <a target="_blank" href= "https://www.linkedin.com/in/joe-anthony-brown/"><img width='50px' src={require("./LI-In-Bug.png")}/></a>
          </div>
        </nav>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/artwork">
          <Artwork />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </div>
    </Router>
    
  );
}
// http://localhost:3000/#/
export default App;
