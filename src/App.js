import "./App.css";
import { useState, useEffect } from "react";
import Halo from "./Halo";
import { IconContext } from "react-icons";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function App() {
  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      audio.volume = 0.4;
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(
    "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Never+Gonna+Give+You+Up-+Original&filename=mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  );

  useEffect(() => {
    toggle();
  }, []);

  return (
    <>
      <button className="theButton" onClick={toggle}>
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <div className="App">
        <Halo className="hero">
          <Fade bottom duration={3000}>
            <div>
              <h1>Agnibesh Mukherjee</h1>
              <p>a javascript 🥷💖 </p>
            </div>
          </Fade>
        </Halo>
        <section className="spacer spacer1">
          <div className="grid1">
            <div></div>
            <div className="wassup">
              <h1>👋 Wassup?</h1>
              <Fade bottom duration={2000}>
                <div className="grid1-1">
                  <div className="border-right-white">
                    <ul>
                      <li>✌🏻 B.Tech CSE 4th Year (pls hire me)</li>
                      <li>💕 Currently Interning at Glowradius.com</li>
                      <li>😱 Previously Newslaundry.com</li>
                    </ul>
                  </div>
                  <div className="border-left-white">
                    <ul>
                      <li>🤑 Winner, ACM East India Hackathon 2020</li>
                      <li>🧐 Co-Authored a Paper KIIT ICDCIT PIC 2020</li>
                      <li>🎹 Makes music and take photos 📸</li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="spacer spacer2 d-flex-vertical-between">
          <div className="grid2">
            <div className="wassup2">
              <Fade top>
                <h1>
                  👉👈 Contact <strike>Us</strike> Me? 😳
                </h1>
              </Fade>
              <Fade bottom>
                <IconContext.Provider value={{ className: "icons" }}>
                  <div className="grid2-1">
                    <a target="_blank" href="#">
                      <AiFillGithub />
                    </a>
                    <a target="_blank" href="#">
                      <AiOutlineInstagram />
                    </a>
                    <a target="_blank" href="#">
                      <FaSpotify />
                    </a>
                    <a target="_blank" href="#">
                      <AiFillLinkedin />
                    </a>
                    <a target="_blank" href="#">
                      <AiOutlineTwitter />
                    </a>
                  </div>
                </IconContext.Provider>
              </Fade>
            </div>
            <div className="footer">
              <h3>
                Made with <span className="animate-beat">❤️</span> by Agnibesh ©
                2021
              </h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
