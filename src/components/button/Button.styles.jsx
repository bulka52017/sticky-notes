import styled from 'styled-components';

export const ButtonContainer = styled.button`
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 30px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 15px;
    font-family: 'Roboto Mono', monospace;
    background-color: ${({ bgColor }) => bgColor};
    opacity: 0.8;
    transition: opacity 0.2s ease;

    :hover {
        opacity: 1;
    }
`;
