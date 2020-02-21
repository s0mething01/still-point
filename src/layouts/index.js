import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from "prop-types";
import Navigation from '../components/Navigation';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/theme';

const StyledMain = styled.main`
    margin-top: 100px;
    min-height: calc(100vh - 100px);
`;
const StyledFooter = styled.footer`
    color: white;
    background-color: ${({theme}) => theme.colors.primary};
`;

const StyledContactBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        padding: 2rem 4rem;
        font-size: ${({theme}) => theme.font.xs};
        font-weight: ${({theme}) => theme.font.thin};
    }
`;
const StyledMediatBox = styled.div`
    display: flex;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    a {
        background-color: #fff;
        width: 125px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:first-child {
            border-right: 3px solid ${({theme}) => theme.colors.primary};
        }
        &:last-child {
            border-left: 3px solid ${({theme}) => theme.colors.primary};
        }
    }
    img {
        width: 50px;
        height: 50px;
        color: ${({theme}) => theme.colors.primary};
    }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}> 
        <GlobalStyle theme={theme}/>
        <Navigation />
        <StyledMain>{children}</StyledMain>
        <StyledFooter theme={theme}>
            <p>gdfgdfgdfggdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgd</p>
        </StyledFooter>
        <StyledContactBox theme={theme}>
            <a href="mailto:still@point.com">Mail: still@point.com</a>
            <a href="tel:+48545435355">Telefon: 545 435 355</a>
        </StyledContactBox>
        <StyledMediatBox theme={theme}>
            <a href="www.facebook.com"><img src="static/icons/facebook.svg" alt=""/></a>
            <a href="www.instagram.com"><img src="static/icons/instagram.svg" alt=""/></a>
        </StyledMediatBox>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;