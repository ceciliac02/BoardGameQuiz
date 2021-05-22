import styled from 'styled-components'

export const ChoiceContainer = styled.div`
    border: 2px solid ${prop => prop.theme.color1};
    background-color: ${prop => prop.theme.color4};
    width: 60%;
    height: 5%;
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    &:hover {
        background-color: ${prop => prop.theme.color3};
        cursor: pointer;
    }
    &.selected {
        background-color: ${prop => prop.theme.color2};
    }
`;

export const Choice = styled.p`
    font-size: 1.3rem;
    width: 100%;
    text-align: center;
`;

export default Choice;