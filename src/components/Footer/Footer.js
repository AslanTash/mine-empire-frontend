import React from "react";
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterLinkItemsContainer,
  FooterColumn,
  FooterContainerFlex,
} from "./FooterStyles";
import { footerData, footerSocialData } from "../../data/FooterData";
import { Row, Section } from "../../globalStyles";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterContainerFlex>
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              <SocialIcon src="./assets/logo.png" />
              Mine Empire
            </FooterLogo>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href="/"
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          <FooterLinkItemsContainer>
            {footerData.map((footerItem, index) => (
              <FooterLinkItems key={index}>
                <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              </FooterLinkItems>
            ))}
          </FooterLinkItemsContainer>
        </FooterContainerFlex>
        <FooterRights>Mine Empire © 2022</FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
