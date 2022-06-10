import React from "react";

import { BsFillLightningFill } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiDollar, BiAtom, BiTrendingUp } from "react-icons/bi";
import { RiGovernmentLine } from "react-icons/ri";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "No Token Emissions",
    description:
      "By owning its liquidity, Mine Empire eliminates the need for farm emissions.",
    icon: iconStyle(BiAtom),
    imgClass: "one",
  },
  {
    name: "No Team/VC Allocations",
    description:
      "We believe in being a net positive contributor to the crypto ecosystem. This means there will be ZERO founder/team/seed allocations.",
    icon: iconStyle(BiTrendingUp),
    imgClass: "two",
  },
  {
    name: "Liquidity Buy Back",
    description:
      "We project to use up to 80% of our income in buying back the protocol tokens. This adds a constant buy pressure from the protocol itself.",
    icon: iconStyle(BiDollar),
    imgClass: "three",
  },
  {
    name: "Low Barrier of Entry",
    description:
      "Mine Empire is designed for both small and big players alike. Mining equipment will be cheap to mint and will provide exponential leveling for the players who like to grind.",
    icon: iconStyle(BsFillLightningFill),
    imgClass: "four",
  },
  {
    name: "Governance Accumulation",
    description:
      "By accumulating governance power in other dexes, we can vote for emissions on our own pools. A win - win for Mine Empire and our partners.",
    icon: iconStyle(RiGovernmentLine),
    imgClass: "five",
  },
  {
    name: "Scalable",
    description:
      "With the power of the treasury, Mine Empire can quickly and sustainably scale up.",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six",
  },
];
