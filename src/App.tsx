import "./App.css";
import React, { useState, useEffect } from "react";
import Halo from "./Halo";
import Cells from "./Cells";
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
  const useAudio = (url: string) => {
    const [audio] = useState<HTMLAudioElement>(new Audio(url));
    const [playing, setPlaying] = useState<Boolean>(false);

    const toggle: any = () => setPlaying(!playing);

    useEffect(() => {
      audio.volume = 0.4;
      playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, [audio]);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(
    "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Never+Gonna+Give+You+Up-+Original&filename=mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
  );

  return (
    <>
      <button className="theButton" onClick={toggle}>
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <div className="App">
        <Cells className="hero">
          <Fade bottom duration={3000}>
            <div>
              <h1>Agnibesh Mukherjee</h1>
              <p>
                average TC39 aspirant <Emoji symbol={"🥷"} />
                <Emoji symbol={"💖"} />
              </p>
            </div>
          </Fade>
        </Cells>
        <section className="spacer spacer1">
          <div className="grid1">
            <div></div>
            <div className="wassup">
              <h1>
                <Emoji symbol={"👋"} />
                Wassup?
              </h1>
              <Fade bottom duration={2000}>
                <div className="grid1-1">
                  <div className="border-right-white">
                    <ul>
                      <li>
                        <Emoji symbol={"✌🏻"} /> B.Tech CSE 4th Year (pls hire
                        me)
                      </li>
                      <li>
                        <Emoji symbol={"💕"} /> Currently Interning at
                        Glowradius.com
                      </li>
                      <li>
                        <Emoji symbol={"😱"} /> Previously Newslaundry.com
                      </li>
                    </ul>
                  </div>
                  <div className="border-left-white">
                    <ul>
                      <li>
                        <Emoji symbol={"🤑"} /> Winner, ACM East India Hackathon
                        2020
                      </li>
                      <li>
                        <Emoji symbol={"🧐"} /> Co-Authored a Paper KIIT ICDCIT
                        PIC 2020
                      </li>
                      <li>
                        <Emoji symbol={"🎹"} /> Makes music and take photos 📸
                      </li>
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
                  Contact Me <Emoji symbol={"😳"} />
                </h1>
              </Fade>
              <Fade bottom>
                <IconContext.Provider value={{ className: "icons" }}>
                  <div className="grid2-1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/MightyPhoenix"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/hsebinga/"
                    >
                      <AiOutlineInstagram />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://open.spotify.com/user/31vhl5d4sdpth7xim4fbyypclmdi"
                    >
                      <FaSpotify />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/mightyphoenix7/"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/hsebinga"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </div>
                </IconContext.Provider>
                <div className="thanks">
                  <h3>
                    Special thanks to Rick Astley for his song "Never gonna give
                    you up", VantaJs for the Halo Effect,
                    <br /> React-icons as always to the rescue, and haikei.app
                    for wonderful curvy SVGs.
                  </h3>
                </div>
              </Fade>
            </div>
            <div className="footer">
              <h3>
                Made with{" "}
                <span className="animate-beat">
                  <Emoji symbol={"❤"} />️
                </span>{" "}
                by Agnibesh © 2021
              </h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const Emoji = (props: { label?: string | undefined; symbol: string }) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

const arr: string[] = ["average TC39 aspirant", "wannabe js ninja", "don't judge by favicon"];

export default App;
