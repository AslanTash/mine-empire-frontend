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
    links: ["Blog", "FAQs", "Support", "About us"],
  },
  {
    title: "Product",
    links: ["Login", "Personal", "Business", "Team"],
  },
  {
    title: "Press",
    links: ["Logos", "Events", "Stories", "Office"],
  },
  {
    title: "Legal",
    links: ["GDPR", "Privacy Policy", "Terms of Service", "Disclaimer"],
  },
];