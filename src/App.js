import './App.css';
import image from "./img/Logo.png"
import hireme from "./img/Hire Me.png"
import grpimg from "./img/grp-img.png"
import twiiter from "./img/twitter.png"
import linkedin from "./img/linked_in.png"
import medium from "./img/medium.png"
function App() {
  return (
    <div className="App">
      <nav>
        <div className='logo-div'>
        <img src={image} alt='logo'/>
        <span>
          <img src={hireme} alt='hireme'/>
        </span>
        </div>
        <ul>
        <li><a>PORTFOLIO</a></li>
        <li><a>BLOG</a></li>
        <li><a>CV</a></li>
        <li><a>STORE</a></li>
        <li><a>FREELANCE</a></li>
        <li><a>ABOUT ME</a></li>
        <li><a>CONTACT</a></li>
          </ul>
      </nav>
      <main>
        <div className='main-container'>
    <div className='left-cont'>
    <h1>Blog Posts</h1>
    <h2>I think so, this is it. </h2>
    <p>Design begins after I begin to think about how to 
      present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at 
      the end of the product, the design will be considered unsuccessful in my opinion.</p>
    <div className='social'>
    <button className='twitter'><img src={twiiter} alt="twitter"/>TWITTER</button>
    <button className='linkedin'><img src={linkedin} alt="linkedin"/>LINKEDIN</button>
    <button className='medium'><img src={medium} alt="medium"/>MEDIUM</button>
    </div>
    </div>
    <div className='right-cont'>
<img src={grpimg} alt="grp-image"/>
    </div>
        </div>
      </main>
    </div>
  );
}

export default App;
