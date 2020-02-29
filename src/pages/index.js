import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import HeroImage from '../components/HeroImage';
import StyledSection from '../styledComponents/StyledSection';
import Footer from '../components/Footer';

const IndexPage = ({theme}) => {
  const data = useStaticQuery(graphql`
    query queryForHeroImage {
      file(name: {eq: "hero"}) {
        childImageSharp {
          fluid(duotone: { highlight: "#233540", shadow: "#192550", opacity: 50 }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <StyledHeroSection withImage theme={theme}>
        <h1>
          Still Point
          <span>Natalia Gliniecka</span>
        </h1>
        <p className="mottoBox">Kiedy robisz to co kochasz, nigdy nie<span>przepracujesz ani jednego dnia.</span></p>
        <ul>
          <li>#lovemyjob</li>
          <li>#fizjoterapia</li>
          <li>#osteopatia</li>
        </ul>
        <p className="adressBox">ul. 17 Stycznia 22/1A, Zbąszyń</p>
      </StyledHeroSection>
      <Footer withImage/>
      <HeroImage fluid={data.file.childImageSharp.fluid}/>
    </>
  )
}

export default IndexPage;

const StyledHeroSection = styled(StyledSection)`
  padding: 4rem;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  span {
      display: block;
    }
  h1 {
    font-size: ${({theme}) => theme.font.xl};
    font-weight: ${({theme}) => theme.font.bold};
    @media (max-width: 400px) {
      margin-top: -10vh;
      font-size: ${({theme}) => theme.font.l};
    }
  }
  .adressBox {
    font-size: ${({theme}) => theme.font.xs};
    font-weight: ${({theme}) => theme.font.normal};
  }
  .mottoBox {
    font-size: ${({theme}) => theme.font.m};
    font-weight: ${({theme}) => theme.font.thin};
  }
  ul {
    display: flex;
    li {
      padding: 1rem 0 1rem 3rem;
      font-size: ${({theme}) => theme.font.xs};
      font-weight: ${({theme}) => theme.font.bold};
    }
  }
`;