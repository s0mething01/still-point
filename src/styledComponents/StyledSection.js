import styled from 'styled-components';

const StyledSection = styled.section`
    display:flex;
    min-height: calc(100vh - 100px);
    width: ${({withImage}) => withImage ? '60%' : '100%'};
    flex-direction: column;
    align-items: flex-start;
    > * {
        margin-bottom: 3rem;
    }
    span {
        display: block;
    }
    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 8rem;
        &::after, &::before {
            content: '';
            width: 20px;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            background-color: ${({theme}) => theme.colors.primary};
            z-index: 9998;
        }
        &::before {
            right: 20px;
            background-color: ${({theme}) => theme.colors.secondary};
            z-index: 9999;
        }
    }
    @media (max-width: 600px) {
        /* margin-bottom: 600px; */
        padding: 2rem calc(2rem + 24px) 2rem 2rem;
        &::after, &::before {
            width: 12px;
            z-index: 998;
        }
        &::before {
            z-index: 999;
            right: 12px;
        }
    }
`;

export default StyledSection;