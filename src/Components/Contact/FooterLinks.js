import React from "react";

export default function FooterLinks(props) {
  return <p className={`footer-link-items ${props.className}`}>{props.item}</p>;
}
