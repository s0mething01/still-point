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
                <p>Kiedy robisz to co kochasz, nigdy nie <span>przepracujesz ani jednego dnia.</span></p>
                <StyledBlogGrid>
                    {data.allDatoCmsArticle.nodes.map(({slug, title, id, meta, hashtags, postavatar}) => (
                        <BlogCard 
                            slug={slug} 
                            title={title} 
                            key={id} 
                            date={meta.createdAt} 
                            hashtags={hashtags} 
                            fluid={postavatar.fluid}/>
                    ))}
                    {console.log(data.allDatoCmsArticle.nodes[0])}
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