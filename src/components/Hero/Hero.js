import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Hello, I'm Huy <br /> Fullstack developer</SectionText>
      <Button onClick={() => (window.location = "https://drive.google.com/file/d/1C03aZWhWH4OOR1CfKUm6hwtCnO4XdRX7/view?usp=sharing")}>
        See my resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
