import React from "react";
import { DiFirebase, DiReact, DiZend, DiJava } from "react-icons/di";
import { AdditionalThings } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  AdditionalItem,
  AdditionalList,
  AdditionalTitle,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web dev world from
      Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            NextJS, React Ecosystem <br />
            Redux/Recoil/React Context<br />
            TailwindCSS/Bootstrap <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Java/Spring Framework <br />
            Docker and AWS beginer
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Exprerience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <AdditionalTitle>Additional technologies and skills</AdditionalTitle>
    <AdditionalList>
      {
        AdditionalThings.map(item => (
          <AdditionalItem>{item}</AdditionalItem>
        ))
      }
    </AdditionalList>
  </Section>
);
export default Technologies;
