import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

// import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
// import img10 from "../assets/Images/10.webp";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Sirin Stencil";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "", description = "", architect="" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      color="black"
    >
      <h1>{architect}</h1>
      <img width="400" height="600" src={img} alt={title} description={description} architect={architect} />
      <h1>{title}</h1>
      <h3>{description}</h3> 
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
       
      </Title>
      <br />
      <Left>
      <br />
      <br />
        <p>
          Spotlight of The Week

          <br />
          <br />
          {/* Her art pieces are often inspired by her own experiences and the world around her, and she is constantly pushing the boundaries of what is possible with digital art. She is also an avid NFT collector, curating her own collection of rare and unique pieces from the Tezos and Ethereum blockchain. She is passionate about the potential of NFTs and the possibilities they bring to the art world, and is always looking for new and exciting ways to use them. */}
          <br />
          <br />
          Open Editions
          {/* Truly, a force to be reckoned with. */}
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product architect="21in Tokyo Hardside Carry-on Spinner" img={img3} title="Travel" description="Telescoping handle, top carry handle, hardside construction, expandable, fully lined interior, interior compression straps, interior zippered divider, 6.1lbs
14in W x 21in H x 8.75in L
8 wheels, 360-degree spinner mobility
Zip closure
Retractable handle length: 22in L
Non leather
Imported
"  />

        <Product architect="Memory Foam Travel Neck Pillow" img={img2} title="Travel" description="Ergonomic design, engineered for optimum comfort, machine washable zippered cover, adjustable drawtring
10in W x 10in L
Polyester/spandex, fill: polyurethane foam
Imported
Spot clean" />
        
        <Product architect="Reborn Slim Crossbody Bag" img={img4} title="Travel" description="This collection was designed with the planet in mind. With minimalist lines and maximum functionality, this collection combines practicality with timeless style.

Product dimensions- 10in L x 2.5in W x 11in H
Tablet compatible- Standard size 8-10in
Webbing strap- 39.5in-60in
Product weight- 3 lbs
Slim crossbody bag
Zippered pocket at the back to keep your belongings secure
Reborn signature lining
Integrated key leach to easily locate your keys
Radio frequency identification protection to keep your personal information secure
Water-Repellent Polyester
Wipe Clean
Imported"/>

        {/* <Product architect="Mario Botta" img={img5} title="Church Of San Giovanni Battista Mogno" description="Mario Botta's Church of San Giovanni Battista in Mogno is a luminous masterpiece nestled in the Swiss landscape. Angular and contemporary, its geometric white form contrasts the verdant surroundings. Inside, a serenely lit sanctuary with wooden accents provides a contemplative space. Botta's design harmonizes modernity with spiritual solace, inviting visitors to immerse in a tranquil haven where architecture and nature unite in profound resonance."/> */}
        <Product architect="Reborn Lightweight Backpack" img={img6} title="Travel" description="This collection was designed with the planet in mind. With minimalist lines and maximum functionality, this collection combines practicality with timeless style.

Product dimensions- 14.5in L x 6in W x 18in H
Tablet compatible- Standard size 8in-10in
Backpack strap- 18in-39.22in
Product weight- 4 lbs
Lightweight backpack
Zip closure
Multiple front pockets, front pocket with key leach and an organizer section
Exterior padded section for laptop at the back
Reborn signature lining
Discrete elastic pocket for your water bottle
Trolley sleeve to easily slide the bag over your suitcase
Radio frequency identification protection to keep your personal information secure
Large main compartment with a padded pocket that can fit most 14'' laptops and most iPads/Tablets, making it perfect for work and travel / Padded handle with embossed trim for maximum comfort and durability.
Water-Repellent Polyester
Wipe Clean
Imported"/>
        <Product architect="Bugatti (Berlin) Carry-On ABS Luggage" img={img9} title="Travel" description="Travel confidently and stylishly with Bugatti's all new Berlin collection. This carry-on is lightweight, durable, hard side and secure with options designed for a worry-free travel.

Exterior dimensions- 14.25in L x 9in W x 21.25in H +2in
Overall dimensions- 14.25in L x 9in W x 21.25in H
Product weight- 6.6 lbs
Telescopic trolley handle system with multi-stage locking heights
Double 360-degree spinner wheels for precise control and smooth, quiet rolling 8 wheels
Hardshell made of lightweight and resistant ABS
Reinforced top handle and side handle for added strength
Integrated AirTag holder to keep track of your luggage (AirTagTM not included)
Zipper-release expansion system allows for an additional 20% more packing space
Signature lined with dividing panel, practical pockets and tightening straps to keep content organized and in place
Limited Lifetime warranty
100% ABS
Spot Clean
Imported"/>
        <Product architect="09 Electric Ride On Scooter" img={img8} title="Travel" description="One look at the unique aerodynamic design and high end appearance of the Bugatti electric scooter can tell you it is not just your average basic scooter. Fabricated with the everyday consumer in mind, sleek yet functional folding design and is available in 3 colors - agile Bbleu, silver-tone and black.

This product contains a lithium battery and will be delivered by Standard Ground Shipping and is not eligible for Premium or Overnight Shipping.
This item may not be shipped to Northern Mariana, Armed Forces Europe, Federated States of Micronesia, Hawaii, Alaska, Armed Forces Pacific, Armed Forces Americas, Puerto Rico, American Samoa, Guam, Palau, U.S. Virgin Islands, Marshall Islands.
This product will be delivered by Standard Ground Shipping and is not eligible for Premium or Overnight shipping.
Recommended for ages 12 years and up
Product dimension - 42.75in L x 19i W x 19.09in H
Product weight - 36 lbs
The Bugatti electric scooter surely will not disappoint, like all its products, Bugatti prioritizes high quality and front-line technology as the leading attributes of its peerless creations
Ergonomic grips
Thumb power throttle
Digital hashboard
Front headlight
Front reflector
Left brake lever
Folding system
Folding safety lock and folding safety lever
Aluminum Bugatti macarom
Front mud guard
Front wheel
Drumb brake
Kickstand
Footpad
Hook buckle
Taillight
Rear mud guard
Side reflector
Motor wheel
Dual turn signal grip lights
Left and right turn signal mechanism
Side illumination
90 days hard returns, lifetime parts
Large LED visible screen which displays trip mileage, speed, mode, battery life, dual turn signals and headlights, it has a weight capacity of up to 242 lbs and rides at a maximum velocity of 18.6 minute per hour (MPH)
Number of players - 1
Minimal assembly, connecting power button and handle bars – all specified in user manual step by step
Magnesium Alloy, Rubber
Wipe Clean
Imported " />
      </Right>
    </Section>
  );
};

export default Shop;
