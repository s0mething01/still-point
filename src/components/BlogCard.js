import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from "gatsby";

const BlogCard = ({title, date, theme, slug, fluid }) => {
    const [isMagnified, setMagnifiety ] = useState(false)
    const postDate = date.slice(0,10).split('-').reverse().join('.');
    const handleSetMagnifiety = boolean => setMagnifiety(boolean);
    return ( 
        <StyledCard 
            onTouchStart={() => handleSetMagnifiety(true)}
            onTouchEnd={() => handleSetMagnifiety(false)}
            onMouseOver={() =>handleSetMagnifiety(true)}
            onFocus={() =>handleSetMagnifiety(true)}
            onMouseOut={() => handleSetMagnifiety(false)}
            onBlur={() => handleSetMagnifiety(false)}
            to={`/blog/${slug}`}
            >
                <StyledCardTitle theme={theme}>
                    <h2>{title}</h2>
                    <p>{postDate}</p>
                </StyledCardTitle>
                <BlogImage fluid={fluid} key={fluid} isMagnified={isMagnified}>
                </BlogImage>
        </StyledCard>
     );
}
 
export default BlogCard;

const StyledCard = styled(Link)`
    position: relative;
    max-width: 420px;
    width: 100%;
    height: 420px;
    margin: 0 10rem 10rem 0;
    overflow: hidden;
    @media (max-width: 1920px) {
        height: 360px;
        max-width: 360px;
        margin: 0 8rem 8rem 0;
    } 
    @media (max-width: 600px) {
        max-width: auto;
        height: 320px; 
        width: 100%;
        margin: 0 0 8rem 0;
    } 
`;

const BlogImage = styled(Img)`
    position: absolute !important;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: ${({isMagnified}) => isMagnified ? 'scale(1.3)' : 'scale(1)'};
    transition: .3s transform ease;

`;

const StyledCardTitle = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    bottom: 10%;
    width: 92%;
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    padding: 1.5rem;
    border-bottom: 5px solid ${({theme}) => theme.colors.secondary};
    opacity: .9;
    h2 {
        font-size: ${({theme}) => theme.font.xs};
        font-weight: ${({theme}) => theme.font.bold};
        @media (max-width: 600px)  {
            font-size: ${({theme}) => theme.font.m};
        }
    }
    p {
        font-size: ${({theme}) => theme.font.xss};
        font-weight: ${({theme}) => theme.font.thin};
        padding: .5rem 0;
        @media (max-width: 600px)  {
            font-size: ${({theme}) => theme.font.s};
        }
    }
`;