import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { SiHashnode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href="https://github.com/Subham-sarkar" className="mx-3" target="_blank">
        <AiOutlineGithub style={{ color: "#fff", fontSize: "1.5rem", transition: "font-size 0.2s ease-in-out" }} 
        onMouseOver={(e) => {e.currentTarget.style.fontSize = "2rem"}}
        onMouseOut={(e) => {e.currentTarget.style.fontSize = "1.5rem"}}/>
      </a>
      <a href="https://www.linkedin.com/in/subhamsarkar6798/" className="mx-3" target="_blank">
        <AiOutlineLinkedin style={{ color: "#fff", fontSize: "1.5rem", transition: "font-size 0.2s ease-in-out" }} onMouseOver={(e) => {e.currentTarget.style.fontSize = "2rem"}}
        onMouseOut={(e) => {e.currentTarget.style.fontSize = "1.5rem"}}/>
      </a>
      <a href="mailto:subhamsarkar6798@gmail.com" className="mx-3" target="_blank" title="subhamsarkar6798@gmail.com">
        <HiOutlineMail style={{ color: "#fff", fontSize: "1.5rem", transition: "font-size 0.2s ease-in-out" }} onMouseOver={(e) => {e.currentTarget.style.fontSize = "2rem"}}
        onMouseOut={(e) => {e.currentTarget.style.fontSize = "1.5rem"}}/>
      </a>
      <a href="https://tldrthis.hashnode.dev/" className="mx-3" target="_blank">
        <SiHashnode style={{ color: "#fff", fontSize: "1.5rem", transition: "font-size 0.2s ease-in-out" }} onMouseOver={(e) => {e.currentTarget.style.fontSize = "2rem"}}
        onMouseOut={(e) => {e.currentTarget.style.fontSize = "1.5rem"}}/>
      </a>
    </footer>
  );
};

export default Footer;
