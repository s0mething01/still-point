import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import HeroImage from '../components/HeroImage';
import StyledSection from '../styledComponents/StyledSection';
import Footer from '../components/Footer';
import ReactHtmlParser from 'react-html-parser';

const IndexPage = ({theme, data}) => {
  const changeStringToParse = str => str.replace('width="500"', 'width="350"').replace('width=500', 'width=350').replace('height="161"', 'height="200"').replace('allowTransparency="true"', "");
  return (
    <>
      <StyledHeroSection withImage theme={theme}>
          <section>
            {data.allDatoCmsOpinion.nodes.map(el => <article key={el.id}>{ReactHtmlParser(changeStringToParse(el.opinion))}</article>)}
          </section>
      </StyledHeroSection>
      <Footer withImage/>
      <HeroImage />
    </>
  )
}

export default IndexPage;

const StyledHeroSection = styled(StyledSection)`
  padding: 4rem;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: right;
  @media (max-width: 420px) {
    padding: 2rem calc(1rem + 24px) 1rem 2rem;
  }
  @media (max-width: 340px) {
    padding: 2rem 24px 1rem 2rem;
  }
  section {
      display: flex;
      max-width: 800px;
      flex-wrap: wrap;
      justify-content: space-around;
      @media (max-width: 420px) {
          padding: 0;
          align-items: flex-start;
      }
      overflow: hidden;
  }
  article {
      width: 400px;
      @media (max-width: 420px) {
        width: 320px; 
        height: 150px;
      }
      iframe {
        @media (max-width: 420px) {
            width: 400px;
            transform: scale(.75); 
            transform-origin: center;
        }
      }
  }
`;


export const query = graphql`
    query datoOpinionsContent {
        allDatoCmsOpinion {
            nodes {
              opinion
              id
            }
          }
    }
`;
