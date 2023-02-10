import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterLinks from "./FooterLinks";

export default function Contact() {
  return (
    <footer className="contact">
      <img
        src="./images/Food-truck-logo.svg"
        alt="logo"
        className="contact-logo"
      />
      <div className="contact-link">
        <h3 className="footer-link-header contact-headers">Contact Us</h3>
        <FooterLinks
          className="address"
          item="Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434"
        />
        <FooterLinks item="example2020@gmail.com" />
        <FooterLinks item="(904) 443-0343" />
      </div>
      <div className="more-link">
        <h3 className="footer-link-header more-headers">More</h3>
        <FooterLinks item="About Us" />
        <FooterLinks item="Products" />
        <FooterLinks item="Career" />
        <FooterLinks item="Contact Us" />
      </div>
      <div className="social-link">
        <h3 className="footer-link-header social-header">Social Links</h3>
        <div className="social-media-icons">
          <InstagramIcon fontSize="large" />
          <TwitterIcon fontSize="large" className="social" />
          <FacebookIcon fontSize="large" className="social" />
        </div>
        <p className="copyright">© 2022 Food Truck Example</p>
      </div>
    </footer>
  );
}
