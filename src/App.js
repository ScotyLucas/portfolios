
import ProfileCard from './components/ProfileCard'
import SpotlightCard from './components/Knowladge';
import './App.css'
import ChromaGrid from './components/Work';
import movieSearchImg from './images/movie_search.png';
import Invoicepng from './images/invoice_img.png';

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
    image: "https://i.pravatar.cc/300?img=2",
    title: "Wokr 3",
    subtitle: "",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg,rgb(83, 0, 216), #000)",
    url: "https://demo1.vidiczkimate.eu/"
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

          avatarUrl="/path/to/avatar.jpg"

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
            <h2>I'm using react long time. Not always for my past jobs just for my own projects.</h2>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>React Vite</h1>
            <h2>I started using and learning vite 1 year ago, but i'm always love to learn new thing.</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Agular</h1>
            <h2>I'm new to Angular, but i'm optimistic about it.</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>HTML5</h1>
            <h2>I'm started coding in html when i was 13 and it hold nothing new for me.</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Bootstarp</h1>
            <h2>I'm activly using Bootstrap for my little project like OPS's.</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>CSS3 SASS/SCSS</h1>
            <h2>Also css is not hoolding any new to me. I'm master in css and SASS/SCSS.</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Javascript</h1>
            <h2>1</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Node.js</h1>
            <h2>1</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Git</h1>
            <h2>Version controlling, pull and push, commit, i know how to use Git.</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>SEO</h1>
            <h2>Link building, File storage and domain setting up.</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Software Testing</h1>
            <h2>1</h2>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Firebase</h1>
            <h2>1</h2>
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
  <ChromaGrid 
    items={items2}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
      </div>
    </div>
  );
}

export default App;
