import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />
      <Container>
        <MainHeading>Open Economy Web3 Game</MainHeading>
        <ButtonWrapper>
          <HeroButton>
            <img src="./assets/twitter.png" alt="" />
          </HeroButton>
          <HeroButton>
            <img src="./assets/discord.png" alt="" />
          </HeroButton>
          <HeroButton>
            <img src="./assets/telegram.png" alt="" />
          </HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;