import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/AOW/1.webp';
import img2 from '../assets/Images/AOW/2.webp';
import img3 from '../assets/Images/AOW/3.webp';
import img4 from '../assets/Images/AOW/4.webp';

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 40vw;

  }
  @media (max-width: 30em) {
  width: 60vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Sirin Stencil';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};


  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewArrival = () => {
   gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);


  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
let t1= gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    
    <Section  ref={ref} id="fixed-target" className="new-arrival">
            <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        Exclusive Spotlight
        <br /> 
      </Title>
      {/* <Text> */}
        {/* <h1>Zaha Hadid</h1></Text> */}
      <Overlay />

      {/* <Title
        // data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        Artist Spotlight
      </Title> */}
      <br />

      <Container ref={ScrollingRef}>
        
        <Photos img={img1} name="Veyron" />
        <Photos img={img2} name="Chiron" />
        <Photos img={img3} name="EB110" />
        <Photos img={img4} name="TYPE 57SC" />
      </Container>

      <Text>
      <h1>Zooming In</h1>
      <br />
      <a href="https://pump.fun/8xioThSSmMwuP2LFeyUMkgyw9qYT23sjwzYtddUVpumph3"><h3>Pump Bugatti Express</h3></a>

      <br />
      {/* Zaha Hadid */}
        <br />

        At Bugatti, one of the most prestigious and iconic luxury car companies in the world, there are countless talented engineers and artists working behind the scenes to create the most exquisite and high-performing cars. Among these individuals is one standout engineer/artist who continuously pushes the boundaries of innovation and design in their work. This individual brings a unique blend of technical expertise and artistic vision to their role at Bugatti. As an engineer, they have a deep understanding of the mechanics and technical aspects of car design, constantly seeking ways to improve performance and functionality. But what sets them apart is their artistic eye, which allows them to infuse their designs with a sense of beauty and elegance that is synonymous with the Bugatti brand. Their creativity and attention to detail are evident in every aspect of their work, from the aerodynamic curves of the car's body to the smallest details of the interior. They are constantly experimenting with new materials and techniques, pushing the boundaries of what is possible in car design. But their role at Bugatti goes beyond just designing cars. They also work closely with other team members to ensure that every aspect of the car, from the engine to the paint job, is perfectly executed and meets the highest standards of excellence. Their dedication and passion for their work are truly inspiring, and their contributions have played a crucial role in making Bugatti the renowned brand it is today. In conclusion, the engineer/artist at Bugatti is a true visionary, combining technical expertise with artistic flair to create some of the most exceptional cars in the world. Their work is a testament to the company's commitment to innovation and luxury, and their presence on the team is integral to Bugatti's success. It is a privilege to have such a talented individual as part of the Bugatti family, and their contributions continue to set the standard for excellence in the automotive industry.
      </Text>
    </Section>
  );
};

export default NewArrival;
