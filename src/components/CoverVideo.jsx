import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/Walking Girl.mp4";
// import { Link } from "react-router-dom";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontBig};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />
      {/* <Link to="https://pump.fun/">Pump Fun</Link> */}

      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Bugatti
          </motion.h1>
          <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
                     <a href="https://pump.fun/"><h3>Pump Bugatti Express</h3></a>

        </motion.h2>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            <br />Express
          </motion.h1>
          <div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
Welcome to our exclusive Solana-powered online marketplace for all things Bugatti! As devout followers of this prestigious luxury car brand, we have carefully curated a collection of top-notch goods that pay tribute to the timeless elegance and unmatched performance of Bugatti vehicles. Our team is comprised of zealous individuals who share a deep passion for Bugatti and its storied legacy. We understand the exhilaration and thrill that comes with owning a Bugatti, and we are determined to spread that same exhilaration to our customers through our merchandise. From fashion and accessories to home decor and collectibles, our marketplace boasts a wide selection of Bugatti-inspired products that cater to fans and enthusiasts alike. Each item is meticulously handpicked and crafted to embody the opulence, refinement, and ingenuity that define the Bugatti brand. We take great pride in the quality of our offerings and collaborate closely with reputable manufacturers to ensure that every product meets our exacting standards. Whether you're shopping for a fellow Bugatti aficionado or treating yourself to a lavish indulgence, our marketplace has something special for you. Thank you for choosing to support our Solana-powered platform and becoming a part of the thriving Bugatti community. We hope our merchandise will elevate your adoration for this extraordinary brand and infuse a touch of Bugatti into your everyday experiences. Happy shopping and keep on pumping those Solana coins!          
        </motion.h2>
        </div>
          {/* <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            L
          </motion.h1>
                  <div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
           All At Once
          
        </motion.h2>
        </div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            E
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            M
          </motion.h1> */}
          
        </div>
        <div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
           All At Once:
           <a href="https://pump.fun/"><h3>Pump Bugatti Express</h3></a>

          
        </motion.h2>
        </div>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>

  );
};

export default CoverVideo;
