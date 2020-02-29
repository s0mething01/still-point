import React from 'react';
import { Link } from 'gatsby';
import StyledSection from '../styledComponents/StyledSection';
import styled from 'styled-components';
import Footer from '../components/Footer';

const BlogPostPage = ({theme, pageContext}) => {
    return (
        <>
            <StyledPostPageSection theme={theme}>
                <h4>{pageContext.meta.createdAt.slice(0,10).split('-').reverse().join('.')}</h4>
                <h2>{pageContext.title}</h2>
                <h3>{pageContext.hashtags}</h3>
                {pageContext.content.map((el,index) => {
                    if(el.imageValue) return <img key={index} src={el.imageValue.url} alt=""/>;
                    else if(el.contentvalue) return <p key={index}>{el.contentvalue}</p>;
                    else if(el.headingcontent) return <h5 key={index}>{el.headingcontent}</h5>;
                    return null;
                })}
                <Link to='/blog'>Powrót</Link>
            </StyledPostPageSection>
            <Footer/>
        </>
     );
}
 
export default BlogPostPage;

const StyledPostPageSection = styled(StyledSection)`
    padding: 4rem 0 4rem 12rem;
    max-width: 800px;
    h4 {
        margin-bottom: 1rem;
        font-size: ${({theme}) => theme.font.xs};
        font-weight: ${({theme}) => theme.font.thin};
        align-self: flex-end;
        @media (max-width: 600px) {
            font-size: ${({theme}) => theme.font.s};
        }
    }
    h3 {
        font-size: ${({theme}) => theme.font.xxs};
        font-weight: ${({theme}) => theme.font.bold};
        @media (max-width: 600px) {
            font-size: ${({theme}) => theme.font.xs};
        }
    }
    h5 {
        font-size: ${({theme}) => theme.font.m};
        font-weight: ${({theme}) => theme.font.bold}; 
        margin: 3rem 0;
    }
    a {
        font-size: ${({theme}) => theme.font.s};
        font-weight: ${({theme}) => theme.font.bold};
        text-decoration: underline;
    }
    > h2 {
        font-size: ${({theme}) => theme.font.l};
        font-weight: ${({theme}) => theme.font.bold};
    }
    > p {
        padding: 1rem 0;
        font-size: ${({theme}) => theme.font.xs};
        font-weight: ${({theme}) => theme.font.thin};
        text-align: justify;
        line-height: 3rem;
        @media (max-width: 1400px) {
            font-size: ${({theme}) =>theme.font.s};
            line-height: 4rem;
        }
        @media (max-width: 600px) {
            font-size: ${({theme}) => theme.font.m};
            line-height: 4.5rem;
            text-align: left;
        }
    }
    img {
        max-width: 100%;
        border: 10px solid ${({theme}) => theme.colors.primary};
        @media (max-width: 600px) {
            height: auto;
        }
    }
`;