
import ProfileCard from './components/ProfileCard'
import SpotlightCard from './components/Knowladge';
import './App.css'
import ChromaGrid from './components/Work';
import movieSearchImg from './images/movie_search.png';
import Invoicepng from './images/invoice_img.png';
import weatherAppImg from './images/weatherapp.png';
import ProfilePic from "./images/pfp.png"

function App() {
  
  const items = [
  {
    image: movieSearchImg,
    title: "Movie Search",
    subtitle: "",
    handle: "",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://demo1.vidiczkimate.eu"
  },
  {
    image: Invoicepng,
    title: "EasyInvoice",
    subtitle: "",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://easyinv.vidiczkimate.eu"
  },
  {
    image: weatherAppImg,
    title: "Weather app",
    subtitle: "",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg,rgb(83, 0, 216), #000)",
    url: "https://weatherjs.vidiczkimate.eu/"
  }
];

const items2 = [
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Work 4",
    subtitle: "",
    handle: "",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://demo1.vidiczkimate.eu"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Work 5",
    subtitle: "",
    handle: "",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://demo1.vidiczkimate.eu"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Work 6",
    subtitle: "",
    handle: "",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg,rgb(83, 0, 216), #000)",
    url: "https://demo1.vidiczkimate.eu"
  },
];

  return (
    <div className="App">
      <div className='profile'>
        <ProfileCard

          name="Vidiczki Máté"

          title="Junior Front-End Developer"

          handle="himself_scoty"

          status="Online"

          contactText="Contact Me"

          avatarUrl= {ProfilePic}

          showUserInfo={true}

          enableTilt={true}

          onContactClick={() => console.log('Contact clicked')}

        /></div>
        <div className='knowladge-text'>
          <h1>
            My Knowledge
          </h1>
        </div>
      <div className='knowladge'>
  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>React</h1>
    <h2>I've been working with React for years, both professionally and in personal projects. It's my go-to framework for building dynamic web apps.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>React + Vite</h1>
    <h2>I started using Vite a year ago, and it’s now a core part of my modern frontend workflow. I'm always eager to adopt faster, better tools.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>Angular</h1>
    <h2>I’m relatively new to Angular, but I enjoy exploring its structure and potential. Always open to learning new frameworks.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>HTML5</h1>
    <h2>I started coding in HTML at the age of 13. It's second nature to me now, and forms the solid base of all my frontend work.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>Bootstrap</h1>
    <h2>I regularly use Bootstrap for small- to mid-sized projects, especially for quick prototypes and admin panels.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>CSS3 / SASS / SCSS</h1>
    <h2>I'm confident with CSS, and have extensive experience with SASS/SCSS for writing clean, scalable stylesheets.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>JavaScript</h1>
    <h2>JavaScript is the heart of my web development work. I'm comfortable with both ES6+ and asynchronous programming.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>Node.js</h1>
    <h2>Experienced with Node.js for building backend APIs, RESTful services, and real-time applications.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>Git</h1>
    <h2>Comfortable using Git for version control—commit, push, pull, branching, and collaborating via GitHub or GitLab.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>SEO</h1>
    <h2>Hands-on experience with on-page SEO, link building, and optimizing site structure and metadata for better rankings.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>Software Testing</h1>
    <h2>Basic knowledge of writing and running unit and integration tests to ensure code reliability and performance.</h2>
  </SpotlightCard>

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1>Firebase</h1>
    <h2>I've used Firebase for real-time databases, hosting, and authentication in small- to mid-size projects.</h2>
  </SpotlightCard>
</div>
      <div className='work-text'>
            <h1>My works</h1>
      </div>
      <div className='work'>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
  {/* <ChromaGrid 
    items={items2}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  /> */}
      </div>
    </div>
  );
}

export default App;
