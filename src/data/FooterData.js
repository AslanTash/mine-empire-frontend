import React from "react";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
  },
  {
    name: "Discord",
    icon: iconStyle(FaDiscord),
  },
  {
    name: "Telegram",
    icon: iconStyle(FaTelegram),
  },
];

export const footerData = [
  {
    title: "Main",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "About",
  },
  {
    title: "Support",
  },
];
