import React from 'react'
import Img from 'gatsby-image';
import styled from 'styled-components'

const HeroImage = ({theme, fluid}) => {;
    return ( 
        <StyledHeroImg theme={theme} fluid={fluid}/>
     );
}
 
export default HeroImage;

const StyledHeroImg = styled(Img)`
  position: fixed !important;
  z-index: 99999;
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
  @media (max-width: 1024px) {
    display: none;
  }
`;