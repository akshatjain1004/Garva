import React from "react";

import { Box, Flex, Image, Spacer } from "@chakra-ui/react";

import Slider from "react-slick";

import NavBar from "../components/NavBar";
import NavDrawer from "./NavDrawer";

import azadiKaAmritMahotsavLogo from "../assets/logos/akam.png";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

export default function Carousel() {
  // eslint-disable-next-line no-unused-vars
  const [slider, setSlider] = React.useState();

  const images = [
    "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];

  return (
    <Box position={"fixed"} height={"100vh"} width={"full"} overflow={"hidden"}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((image, index) => (
          <Box
            key={index}
            height={"100vh"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${image})`}
          >
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <NavBar />
              <NavDrawer />
              <Spacer />
              <Image
                src={azadiKaAmritMahotsavLogo}
                className="headerImage"
                style={{ marginTop: "2vh", marginRight: "1vw" }}
              />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
