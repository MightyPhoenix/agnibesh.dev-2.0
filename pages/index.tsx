import type { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
// import Head from "next/head";
import Script from "next/Script";
// import Image from "next/image";
// import Halo from "../components/Halo";
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
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const Home: NextPage = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (window !== undefined && THREE.LinearFilter !== undefined) {
      window.scrollTo(0, 1);
      if (!vantaEffect) {
        setVantaEffect(
          HALO({
            el: myRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            amplitudeFactor: 0,
            xOffset: 0.22,
            size: 1.5,
            backgroundColor: 0x0,
            baseColor: 0x0,
          })
        );
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      {/* <button className="theButton" onClick={toggle}>
        {playing ? <FaPause /> : <FaPlay />}
      </button> */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        integrity="sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></Script>
      <div className="App">
        <section className="hero" ref={myRef}>
          <Fade bottom duration={3000}>
            <div>
              <h1>Agnibesh Mukherjee</h1>
              <p>
                average TC39 aspirant <Emoji symbol={"🥷"} />
                <Emoji symbol={"💖"} />
              </p>
            </div>
          </Fade>
        </section>
        <section className="spacer spacer1">
          <div className="grid1">
            <div></div>
            <div className="wassup">
              <h1>👋 Wassup?</h1>
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
                      rel="noreferrer"
                      href="https://github.com/MightyPhoenix"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/hsebinga/"
                    >
                      <AiOutlineInstagram />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://open.spotify.com/user/31vhl5d4sdpth7xim4fbyypclmdi"
                    >
                      <FaSpotify />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/mightyphoenix7/"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
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
    </div>
  );
};

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

export default Home;
