import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { Span } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href=""
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "1rem",
        }}
      >
        <DiCodeigniter
          style={{
            display: "flex",
            marginBottom: "1rem",
          }}
          size="3rem"
        />{" "}
        <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li
        style={{
          marginTop: "0.5rem",
        }}
      >
        <NavLink href="#projects">Project</NavLink>
      </li>
      <li
        style={{
          marginTop: "0.5rem",
        }}
      >
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li
        style={{
          marginTop: "0.5rem",
        }}
      >
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="linkedin.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="instagram.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
