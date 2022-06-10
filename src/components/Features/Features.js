import React from "react";
import { Container, Section } from "../../globalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from "./FeaturesStyles";

const Features = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse={false}>
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>100% Return to User Economy</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          <FeatureColumn
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
          >
            <FeatureImageWrapper>
              <img src="../../assets/svg/bullet.svg" alt="" />
            </FeatureImageWrapper>
            <FeatureName>No Token Emissions</FeatureName>
            <FeatureText>
              By eliminiating emissions, earned tokens have dramatically reduced
              inflation. By leveraging Protocol Owned Dex Liquidity (PODL), Mine
              Empire will produce income by participating in the broader crypto
              ecosystem.
            </FeatureText>
          </FeatureColumn>
          <FeatureColumn
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
          >
            <FeatureImageWrapper>
              <img src="../../assets/svg/bullet.svg" alt="" />
            </FeatureImageWrapper>
            <FeatureName>No Team/VC Allocations</FeatureName>
            <FeatureText>
              We believe in being a net positive contributor to the crypto
              ecosystem. This means there will be ZERO founder/team/seed
              allocations. All funding will be provided by the founder and will
              always remain in the protocol treasury.
            </FeatureText>
          </FeatureColumn>
          <FeatureColumn
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
          >
            <FeatureImageWrapper>
              <img src="../../assets/svg/bullet.svg" alt="" />
            </FeatureImageWrapper>
            <FeatureName>All Earnings for Users</FeatureName>
            <FeatureText>
              All protocol income is used to strengthen the treasury and build
              high yield earning opportunities. These funds eventually make
              their way back to the users.
            </FeatureText>
          </FeatureColumn>
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Features;
