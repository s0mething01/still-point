import styled from 'styled-components';

const BorderBox = styled.div`
    position: relative;
    height: 10px;
    width: 100%;
    max-width: 600px;
    background-color: ${({theme}) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${({theme}) => theme.colors.secondary};
    }
`;

export default BorderBox;