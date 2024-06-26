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
      <SectionText>Hello, I'm Huy <br />Passionate developer from Da Nang, Viet Nam</SectionText>
      <Link href="https://drive.google.com/file/d/1DRW36z-ub3Tn54yCY0MRznf23eM8GE4w/view?usp=sharing" rel="noopener noreferrer" target="_blank">
        <Button>See my resume</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
