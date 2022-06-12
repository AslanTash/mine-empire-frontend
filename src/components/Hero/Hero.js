import React from "react";
import { Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
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
            <a
              href="https://twitter.com/mine_empire"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./assets/twitter.png" alt="" />
            </a>
          </HeroButton>
          <HeroButton>
            <a
              href="https://discord.gg/ZtH6KtpqGQ"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./assets/discord.png" alt="" />
            </a>
          </HeroButton>
          <HeroButton>
            <a href="https://t.me/mineempire" target="_blank" rel="noreferrer">
              <img src="./assets/telegram.png" alt="" />
            </a>
          </HeroButton>
          <HeroButton>
            <a
              href="https://aslan-1.gitbook.io/mine-empire/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./assets/gitbook.png" alt="" />
            </a>
          </HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
