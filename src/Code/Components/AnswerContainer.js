import styled from 'styled-components'

export const LargeChoiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: none
`;

export const Begin = styled.div`
    height: 30%;
    width: 50%;
    background-color: ${props => props.theme.color2};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
        color: ${props => props.theme.color1};
        text-shadow: 3px 3px ${props => props.theme.color3};
        cursor: pointer;
    }
`;

export const ChoiceContainer = styled.div`
    border: 2px solid ${prop => prop.theme.color1};
    background-color: ${prop => prop.theme.color4};
    width: 60%;
    height: 5%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: ${prop => prop.theme.color3};
        cursor: pointer;
    }
    &.selected, &:focus {
        background-color: ${prop => prop.theme.color2};
    }
`;

export const Choice = styled.p`
    font-size: 1.3rem;
    width: 100%;
    text-align: center;
`;

export default Choice;