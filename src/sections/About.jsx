import React from "react";
import styled from "styled-components";
import img6 from "../assets/Images/6.webp";
import img13 from "../assets/Images/13.webp";
import img14 from "../assets/Images/14.webp";
import img16 from "../assets/Images/16.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 75%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: 30;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

// const Title = styled.h1`
//   font-size: ${(props) => props.theme.fontBig};
//   font-family: "Sirin Stencil";
//   font-weight: 300;
//   /* text-transform: capitalize; */

//   position: absolute;
//   top: 1rem;
//   left: 5%;
//   z-index: 5;

//   span {
//     display: inline-block;
//   }

//   @media (max-width: 64em) {
//     font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
//     top: 0;
//     left: 0%;
//   }
//   @media (max-width: 48em) {
//     font-size: ${(props) => props.theme.fontxxxl};
//   }
// `;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      {/* <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title> */}
      <br />
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        {/* <br />
        <br /> */}
           <img
          width="400"
          height="600"
          className="small-img-2"
          src={img6}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
              <Section> <h3>Welcome to our online shop dedicated to all things Bugatti! As avid fans of this iconic luxury car brand, we have curated a collection of high-quality merchandise that celebrates the timeless beauty and unparalleled performance of Bugatti vehicles. Our team is made up of passionate individuals who share a deep admiration for Bugatti and its rich history. We understand the thrill and excitement that comes with owning a Bugatti, and we want to bring that same feeling to our customers through our merchandise. From clothing and accessories to home decor and collectibles, our shop offers a wide range of Bugatti-inspired products that are perfect for any fan or enthusiast. Each item is carefully selected and designed to reflect the elegance, sophistication, and innovation that are synonymous with the Bugatti name. We take pride in the quality of our products and work closely with trusted manufacturers to ensure that each item meets our high standards.</h3></Section> <Section><h3>Whether you are looking for a gift for a fellow Bugatti lover or treating yourself to something special, our shop has something for everyone. Thank you for choosing to shop with us and being a part of the Bugatti community. We hope our merchandise will enhance your love for this exceptional brand and bring a piece of Bugatti into your everyday life. Happy shopping!</h3></Section>

      </Left>
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={img14}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        />
      <Right>
        <img width="400" height="600" src={img13} alt="About Us" />
        <img
          width="400"
          height="600"
          className="small-img-1"
          src={img16}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
                <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">

                     <a href="https://pump.fun/8xioThSSmMwuP2LFeyUMkgyw9qYT23sjwzYtddUVpump"><h3>Pump Bugatti Express</h3></a>

        </Left>
      </Right>
    </Section>
  );
};

export default About;
