import React from "react";
import styled from 'styled-components';
import SEO from "../components/seo";
import Footer from '../components/Footer';
import StyledSection from '../styledComponents/StyledSection';

const NotFoundPage = ({theme}) => (
  <>
    <SEO title="404: Not found" />
    <Styled404Page theme={theme}>
      <h1>404</h1>
      <p>Uups, nie znaleziono takiej strony.</p>  
      {console.log(theme)}
    </Styled404Page>
    <Footer/>
  </>
)

export default NotFoundPage

const Styled404Page = styled(StyledSection)`
  display: flex;
  padding: 4rem 2rem;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 25rem;
    font-weight: ${({theme}) => theme.font.bold};
    padding: 0;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 20rem;
    }
  }
  p {
    padding: 0;
    margin-bottom: 10vh;
    font-size: ${({theme}) => theme.font.l};
    text-align: center;
    @media (max-width: 600px) {
      font-size: ${({theme}) => theme.font.m};
    }
  }
`;
