import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import HeroImage from '../components/HeroImage';
import StyledSection from '../styledComponents/StyledSection';
import BorderBox from '../styledComponents/BorderBox';
import Footer from '../components/Footer';


const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query queryForAboutHeroImage {
            file(name: {eq: "aboutHero"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);
    return (

        <>
            <StyledAboutSection withImage>
                <h1>O mnie</h1>
                <BorderBox />
                <Paragraph>Kiedy robisz to co kochasz, 
                    nigdy nie <span>przepracujesz ani jednego dnia.</span>
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </Paragraph>
                <Paragraph isBig isBold>Natalia Gliniecka</Paragraph>
            </StyledAboutSection>
            <HeroImage fluid={data.file.childImageSharp.fluid}/>
            <Footer withImage/>
        </>
    );
}

export default AboutPage;

const StyledAboutSection = styled(StyledSection)`
    padding: 0 12rem;
    justify-content: center;
    h1 {
        font-size: ${({theme}) => theme.font.l};
        font-weight: ${({theme}) => theme.font.bold};
    }
`;
const Paragraph = styled.p`
    max-width: 700px;
    padding: 1rem 0;
    font-size: ${({theme, isBig}) => isBig ? theme.font.m : theme.font.s};
    font-weight: ${({theme, isBold}) => isBold ? theme.font.bold : theme.font.thin};
`;
