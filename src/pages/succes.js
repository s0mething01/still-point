import React from 'react';
import styled from 'styled-components';
import StyledSection from '../styledComponents/StyledSection';
import Footer from '../components/Footer';

const SuccesPage = ({theme}) => {
  return (
    <>
      <StyledHeroSection theme={theme}>
        <p>succes</p>
      </StyledHeroSection>
      <Footer/>
    </>
  )
}

export default SuccesPage;

const StyledHeroSection = styled(StyledSection)`
  padding: 4rem;
`;