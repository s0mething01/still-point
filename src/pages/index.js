import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components'

const IndexPage = ({theme}) => {
  const data = useStaticQuery(graphql`
    query queryForHeroImage {
      file(name: {eq: "hero"}) {
        id
        childImageSharp {
          fluid(duotone: { highlight: "#233540", shadow: "#DAB861", opacity: 100 }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <>
      <StyledHeroSection theme={theme}>
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
      <StyledImg theme={theme} fluid={data.file.childImageSharp.fluid}/>
    </>
  )
}

export default IndexPage;

const StyledHeroSection = styled.section`
  padding: 4rem;
  display:flex;
  height: calc(100vh - 100px);
  width: 60%;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  > * {
    padding-bottom: 3rem;
  }
  span {
      display: block;
    }
  h1 {
    font-size: ${({theme}) => theme.font.l};
    font-weight: ${({theme}) => theme.font.bold};
  }
  .adressBox {
    font-size: ${({theme}) => theme.font.s};
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
      font-size: ${({theme}) => theme.font.s};
      font-weight: ${({theme}) => theme.font.bold};
    }
  }
`

const StyledImg = styled(Img)`
  position: fixed !important;
  top: 0;
  bottom: 0;
  right: 0;
  width: 40%;
  object-fit: cover;
  &::after, &::before {
    content: '';
    width: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: ${({theme}) => theme.colors.primary}
  }
  &::before {
    left: 20px;
    background-color: ${({theme}) => theme.colors.secondary};
    z-index: 1;
  }
`;