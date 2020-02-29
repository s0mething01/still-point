import React, { useState } from 'react';
import styled from 'styled-components';
import StyledSection from '../styledComponents/StyledSection';
import BorderBox from '../styledComponents/BorderBox';
import Footer from '../components/Footer';

const ContactPage = () => {
    const [checkBox, setCheckbox] = useState('0')
    const handleInputChange = e => setCheckbox(e.target.value);
    return (
        <>
            <StyledContactSection>
                <h1>Kontakt</h1>
                <BorderBox />
                <Paragraph>Kiedy robisz to co kochasz, 
                    nigdy nie <span>przepracujesz ani jednego dnia.</span>
                </Paragraph>
                <Form>
                        <div>
                            <label className={checkBox === '0' ? 'active checkboxLabel' : 'checkboxLabel'} htmlFor="contactChoice1">
                                <input className="hidden" onChange={handleInputChange} type="radio" id="contactChoice1"
                                name="contact" value='0'/>
                                Wizyta
                            </label>
                            <label className={checkBox === '1' ? 'active checkboxLabel' : 'checkboxLabel'} onChange={handleInputChange} htmlFor="contactChoice2">
                                <input className="hidden" type="radio" id="contactChoice2"
                                name="contact" value='1'/>
                                Pytanie
                            </label>
                            <label className={checkBox === '2' ? 'active checkboxLabel' : 'checkboxLabel'} onChange={handleInputChange} htmlFor="contactChoice3">
                                <input className="hidden" type="radio" id="contactChoice3"
                                name="contact" value='2'/>
                                Inne
                            </label>
                        </div>
                        <input type="text" placeholder="Temat"/>
                        <input type="text" placeholder="Twój Mail"/>
                        <textarea name="" id="" placeholder="Treść pytania"></textarea>
                        <button type="submit">Wyślij</button>
                </Form>
            </StyledContactSection>
            <Footer />
        </>
    );
};

export default ContactPage;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
    textarea {
        resize: none;
        display: block;
        width: auto;
        height: 200px;
        padding: 15px 20px;
        font-size: ${({theme}) => theme.font.xxs};
        font-family: 'Montserrat'
    }
    input {
        padding: 0 20px;
        width: 100%;
        height: 55px;
        max-width: 500px;
        &.hidden {
            visibility: none;
            display: none;
        }
    }
    button, label.checkboxLabel, input, textarea {
        margin-bottom: 2rem;
        border: 3px solid ${({theme}) => theme.colors.primary};
        font-size: ${({theme}) => theme.font.xs};
        font-weight: ${({theme}) => theme.font.normal};
        color:  ${({theme}) => theme.colors.primary};
    }
    button {
        height: 55px;
        border: 2px solid black;
        max-width: 220px;
        width: 100%;
        background-color: ${({theme}) => theme.colors.primary};
        color: white;
        font-weight: ${({theme}) => theme.font.bold};
        font-size: ${({theme}) => theme.font.xs};
    }
    label {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 55px;
        box-sizing: border-box;
        font-size: ${({theme}) => theme.font.xxs};
        font-weight: ${({theme}) => theme.font.bold};
        &.active {
            background: ${({theme}) => theme.colors.primary};
            color: white;
        }
    }
    div {
        display: flex;
        label {
            border-left: 3px solid ${({theme}) => theme.colors.primary};
            border-right: none !important;
        }
        label:nth-child(3) {
            border-right: 3px solid ${({theme}) => theme.colors.primary} !important;
        }
    }
`;

const StyledContactSection = styled(StyledSection)`
    padding: 4rem 12rem;
    h1 {
        font-size: ${({theme}) => theme.font.l};
        font-weight: ${({theme}) => theme.font.bold};
    }
`;

const Paragraph = styled.p`
    max-width: 600px;
    padding: 1rem 0;
    font-size: ${({theme, isBig}) => isBig ? theme.font.m : theme.font.s};
    font-weight: ${({theme, isBold}) => isBold ? theme.font.bold : theme.font.thin};
`;