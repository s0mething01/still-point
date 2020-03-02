import React, { useState } from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import HeroImage from '../components/HeroImage';
import StyledSection from '../styledComponents/StyledSection';
import Footer from '../components/Footer';

const IndexPage = ({theme}) => {
  const [isButtonActive, setButtonActivity] = useState(false);
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
        <div>
          <p className="offertBox">Wizyta fizjoterapeutyczna: <span>80zł</span></p>
          <p className="offertBox">Wizyta osteopatyczna: <span>100zł</span></p>
        </div>
        <p className="adressBox">ul. 17 Stycznia 22/1A, Zbąszyń</p>
        <StyledLink 
            to="/opinions"
            onTouchStart={() =>  setButtonActivity(true)}
            onTouchEnd={() =>  setButtonActivity(false)}
            onMouseOver={() => setButtonActivity(true)}
            onFocus={() => setButtonActivity(true)}
            onMouseOut={() =>  setButtonActivity(false)}
            onBlur={() =>  setButtonActivity(false)} 
            className={isButtonActive ? 'active' : null} 
            >Opinie
        </StyledLink>
      </StyledHeroSection>
      <Footer withImage/>
      <HeroImage/>
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
    font-weight: ${({theme}) => theme.font.thin};
  }
  .mottoBox {
    font-size: ${({theme}) => theme.font.m};
    font-weight: ${({theme}) => theme.font.thin};
  }
  .offertBox {
    font-size: ${({theme}) => theme.font.xs};
    font-weight: ${({theme}) => theme.font.normal};
    padding: .5rem;
    letter-spacing: 1px;
    span {
      display: inline;
      font-weight: ${({theme}) => theme.font.bold };
      font-size: ${({theme}) => theme.font.s};
      padding-left: 1rem;
    }
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

const StyledLink = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid ${({theme}) => theme.colors.primary} !important;
        cursor: pointer;
        height: 55px;
        border: 2px solid black;
        max-width: 220px;
        width: 100%;
        background-color: ${({theme}) => theme.colors.primary};
        color: white;
        font-weight: ${({theme}) => theme.font.bold};
        font-size: ${({theme}) => theme.font.xs};
        @media (max-width: 1400px) {
            height: 45px;
            font-size: ${({theme}) => theme.font.s};
            max-width: 160px;
        }
        @media (max-width: 600px) {
            height: 40px;
            font-size: ${({theme}) => theme.font.s};
            max-width: 120px;
        }
        box-shadow: 0px 3px 0px 0px ${({theme}) => theme.colors.secondary};
        &.active {
            color: ${({theme}) => theme.colors.primary};
            background-color: #fff;
        }
`;