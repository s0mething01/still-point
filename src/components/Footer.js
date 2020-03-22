import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"

const Footer = ({theme, withImage}) => {
    const { allDatoCmsFooter }= useStaticQuery(
        graphql`
            query query {
                allDatoCmsFooter {
                nodes {
                    addresvalue
                    mailvalue
                    maintopic
                    phonevalue
                    secondarytopic
                }
                }
            }
        `
      )
    const { maintopic, secondarytopic, mailvalue, phonevalue, addresvalue} = allDatoCmsFooter.nodes[0];
    return (
        <StyledFooter withImage={withImage}>
            <div className="footerHeaderBox">
                <h2>{maintopic}</h2>
                <h2>{secondarytopic}</h2>
                {/* <h3>Natalia Gliniecka</h3> */}
            </div>
            <StyledContactBox theme={theme}>
                <a href={`mailto:${mailvalue}`}>Mail: {mailvalue}</a>
                <a href={`tel:+48${phonevalue}`}>Telefon: {phonevalue}</a>
            </StyledContactBox>
    <p className="adressBox">{addresvalue}</p>
            <p className="authorBox">Stronę wykonał Mikołaj Zienkowicz {new Date().getFullYear()} ©</p>
        </StyledFooter>
     );
}
 
export default Footer;

const StyledContactBox = styled.div`
    display: flex;
    a {
        padding: 1.5rem 2rem;
        font-size: ${({theme}) => theme.font.xs};
        font-weight: ${({theme}) => theme.font.thin};
    }
    @media (max-width: 374px) {
        flex-direction: column;
    }
`;

const StyledFooter = styled.footer`
    padding: 3rem 2rem;
    position: relative;
    width: ${({withImage}) => withImage ? '60%' : '100%'};
    color: white;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-left: 20px solid ${({theme}) => theme.colors.secondary};
    .footerHeaderBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
        h2 {
            font-size: ${({theme}) => theme.font.l} !important;
            font-size: 40px;
            font-weight: ${({theme}) => theme.font.bold};
            display: flex; 
            justify-content: center;
            width: 100%;
            text-align: center;
            @media (max-width: 600px) {
                font-size: 25px !important;
            }
        }
    }
    .adressBox {
        padding: 2rem 0 0 0;
        font-weight: ${({theme}) => theme.font.bold};
        font-size: ${({theme}) => theme.font.xs};
    }
    .authorBox {
        padding: 3rem 0 0;
        color: rgba(255,255,255,.7);
        font-weight: ${({theme}) => theme.font.bold};
        font-size: ${({theme}) => theme.font.xs};
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        margin-bottom: 60px;
        padding: 3rem calc(2rem + 24px) 3rem 2rem;
        border: none;
        border-bottom: 5px solid ${({theme}) => theme.colors.secondary};
    }
`;