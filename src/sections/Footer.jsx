import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

// import Logo from "../assets/Svgs/11.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        {/* <img
          width="300"
          height="300"
          src={Logo}
          alt="$VeN"
          data-scroll
          data-scroll-speed="2"
        /> */}
        <h3 data-scroll data-scroll-speed="-1">
        Bugatti: Express
        </h3>
        <a href="https://pump.fun/8xioThSSmMwuP2LFeyUMkgyw9qYT23sjwzYtddUVpump">Pump Fun</a>

      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            Home
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            About
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#shop")}>
            Browse
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            Bugatti Spotlight
          </li>
          {/* <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              reviews
            </a>
          </li> */}
          </ul>
          Rev up your style with Bugatti Express! 🚀 Shop the latest, most luxurious Bugatti merchandise online now! 💎 From sleek apparel to high-end accessories, we've got everything you need to elevate your look. 💯 Don't miss out on the opportunity to own a piece of the iconic Bugatti brand. Visit Bugatti Express today and experience the ultimate in online shopping. #BugattiExpress #LuxuryLifestyle #ShopNow" Modern Article: Bugatti Express: Elevating Your Style and Online Shopping Experience In today's fast-paced world, convenience and luxury go hand in hand. That's why Bugatti Express, an e-commerce business, has taken the online shopping experience to a whole new level. With the click of a button, you can now own a piece of the iconic Bugatti brand, known for its unparalleled speed and sophistication. Bugatti Express offers a wide range of merchandise, from clothing to accessories, all inspired by the sleek design and performance of the Bugatti sports cars. Each item is carefully curated to reflect the brand's prestigious reputation and cater to the most discerning customers. One of the key advantages of shopping with Bugatti Express is the convenience it offers. No more waiting in long lines or sifting through crowded stores, as you can browse and purchase your desired items from the comfort of your own home.         <br />
        <br />
        It's not just about convenience, Bugatti Express also prioritizes quality. All products are made with the finest materials and crafted with precision, ensuring that every purchase is a lasting investment. From the luxurious leather of their bags to the intricate details on their apparel, every item exudes elegance and sophistication. Furthermore, Bugatti Express offers a wide range of sizes and styles to cater to all individuals. Whether you're looking for a statement piece or everyday essentials, there's something for everyone. And with regular updates and new releases, you can keep up with the latest trends and styles effortlessly. Bugatti Express also values their customers and strives to provide exceptional service. With fast and reliable shipping, your purchases will be delivered to your doorstep in no time. And in case of any issues or concerns, their customer service team is always available to assist and ensure your satisfaction. So why settle for ordinary when you can experience the extraordinary with Bugatti Express? Elevate your style and elevate your online shopping experience with Bugatti Express.

          <br />
          <br />
        {/* </ul> */}
        <Bottom>

          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2024. All Rights Reserved.
          </span>
          {/* <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Optimized with &hearts; by{" "}
            <a
              href="https://twitter.com/taurosDAO"
              target={"_blank"}
              rel="dofollow noreferrer"
            >
              TaurosDAO
            </a>
          </span> */}
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
