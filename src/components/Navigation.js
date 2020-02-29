import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation = ({theme}) => {
    return ( 
        <StyledWrapper theme={theme}>
            <h2><Link to="/">Still Point</Link></h2>
            <ul>
                <li>
                    <Link to="/contact">Kontakt</Link>
                </li>
                <li>
                    <Link to="/blog" >Blog</Link>
                </li>
                <li>
                    <Link to="/about" >O mnie</Link>
                </li>
            </ul>
        </StyledWrapper>
     );
}
 
export default Navigation;

const StyledWrapper = styled.nav`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 2rem;
    background-color: #fff;
    width: 100%;
    h2 {
        padding: 1rem 3rem;
        font-size: ${({theme}) => theme.font.m};
        font-weight: ${({theme}) => theme.font.bold};
        @media (max-width: 600px) {
            font-size: ${({theme}) => theme.font.l};
        }
    }
    ul {
        display: flex;
        li {
            padding: 1rem 2rem;
            font-size: ${({theme}) => theme.font.xs};
            font-weight: ${({theme}) => theme.font.thin};
        }
    }
    @media (max-width: 600px) {
        padding: 0;
        z-index: 120;
        ul {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: ${({theme}) => theme.colors.primary};
            color: white;
            z-index: 99999;
            height: 60px;
            padding: 0 24px 0 0;
            li {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 3rem 0;
                font-size: ${({theme}) => theme.font.s};
                font-weight: ${({theme}) => theme.font.bold};
                z-index: 99999;
            }
        }
    }
    @media (max-width: 600px) {
        height: 70px;
    }
`;

