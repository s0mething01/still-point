import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from "prop-types";
import Navigation from '../components/Navigation';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/theme';
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
    const [isInstagramButtonActive, setInstagramButtonActivity] = useState(false);
    const [isFacebookButtonActive, setFacebookButtonActivity] = useState(false);
    const icons = useStaticQuery(graphql`
        query iconsQuery {
            allFile(filter: {sourceInstanceName: {eq: "icons"}}) {
                nodes {
                  publicURL
                }
            }
        }
    `)
    return (
        <ThemeProvider theme={theme}> 
            <GlobalStyle theme={theme}/>
            <Navigation />
            <StyledMain>{children}</StyledMain>
            <StyledMediatBox theme={theme}>
                <a
                    onTouchStart={() =>  setInstagramButtonActivity(true)}
                    onTouchEnd={() =>  setInstagramButtonActivity(false)}
                    onMouseOver={() => setInstagramButtonActivity(true)}
                    onFocus={() => setInstagramButtonActivity(true)}
                    onMouseOut={() =>  setInstagramButtonActivity(false)}
                    onBlur={() =>  setInstagramButtonActivity(false)}
                    onFocus={() => setFacebookButtonActivity(true)}
                    className={isInstagramButtonActive ? 'active' : null} 
                    href="https://www.instagram.com"><img src={icons.allFile.nodes[1].publicURL} alt=""/></a>
                <a 
                    onTouchStart={() =>  setFacebookButtonActivity(true)}
                    onTouchEnd={() =>  setFacebookButtonActivity(false)}
                    onMouseOver={() => setFacebookButtonActivity(true)}
                    onMouseOut={() =>  setFacebookButtonActivity(false)}
                    onBlur={() =>  setFacebookButtonActivity(false)}
                    onFocus={() => setFacebookButtonActivity(true)}
                    className={isFacebookButtonActive ? 'active' : null} 
                    href="https://www.facebook.com"><img src={icons.allFile.nodes[0].publicURL} alt=""/></a>
            </StyledMediatBox>
        </ThemeProvider>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;


const StyledMain = styled.main`
    margin-top: 100px;
    min-height: calc(100vh - 100px);
    @media (max-width: 600px) {
        margin-top: 70px;
        min-height: calc(100vh - 130px);
    }
`;
const StyledMediatBox = styled.div`
    z-index: 999999999;
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
        &.active {
            background-color:  ${({theme}) => theme.colors.secondary};
        }
    }
    img {
        width: 50px;
        height: 50px;
        color: ${({theme}) => theme.colors.primary};
    }
    @media (max-width: 1024px) {
        bottom: auto;
        top: 0;
        right: 40px;
        a {
            width: 70px;
            height: 100px;
            img {
                height: 40px;
            }
            &:first-child {
            border-right: none;
            }
            &:last-child {
                border-left: none;
            }
        }
    }
    @media (max-width: 600px) {
        right: 28px;
        a {
            height: 60px;
            width: 50px;
            img {
                height: 32px;
            }
        }
    }
`;