import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby'
import StyledSection from '../styledComponents/StyledSection';
import BorderBox from '../styledComponents/BorderBox';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

const BlogPage = ({data}) => {
    return (
        <>
            <StyledBlogSection>
                <h1>Blog</h1>
                <BorderBox />
                <p>{data.allDatoCmsQuotation.nodes[0].contactpagequotation}</p>
                <StyledBlogGrid>
                    {data.allDatoCmsArticle.nodes.map(({slug, title, id, meta, hashtags, postavatar}, index) => (
                        <BlogCard 
                            key={index} 
                            slug={slug} 
                            title={title} 
                            date={meta.createdAt} 
                            hashtags={hashtags} 
                            fluid={postavatar.fluid}/>
                    ))}
                </StyledBlogGrid>
            </StyledBlogSection>
            <Footer/>
        </>  
    )
};

export default BlogPage;

const StyledBlogSection = styled(StyledSection)`
    padding: 4rem 0 4rem 12rem;
    > h1 {
        font-size: ${({theme}) => theme.font.l};
        font-weight: ${({theme}) => theme.font.bold};
    }
    > p {
        max-width: 600px;
        padding: 1rem 0;
        font-size: ${({theme, isBig}) => isBig ? theme.font.m : theme.font.s};
        font-weight: ${({theme, isBold}) => isBold ? theme.font.bold : theme.font.thin};
    }
`;

const StyledBlogGrid = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const query = graphql`
    query datoArctclesContent {
        allDatoCmsQuotation {
            nodes {
                contactpagequotation
            }
        }
        allDatoCmsArticle {
            nodes {
                title
                hashtags
                slug
                meta {
                    createdAt
                }
                postavatar {
                    fluid {
                      ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;