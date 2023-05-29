import React from "react";
import Link from "next/link";
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
      <Link href="https://drive.google.com/file/d/1C03aZWhWH4OOR1CfKUm6hwtCnO4XdRX7/view?usp=sharing" rel="noopener noreferrer" target="_blank">
        <Button>See my resume</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
