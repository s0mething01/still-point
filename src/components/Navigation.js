import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
    position: fixed;
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
    }
    ul {
        display: flex;
        li {
            padding: 1rem 2rem;
            font-size: ${({theme}) => theme.font.s};
            font-weight: ${({theme}) => theme.font.thin};
        }
    }

`;

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

