import styled from "styled-components";

export default styled.div`
    height: 5vh;
    width: 8vw;
    background-color: ${props => props.theme.color2};
    font-size: 1.3rem;
    font-family: ${props => props.theme.font};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transform: translateY(10%);
    &:hover {
        color: ${props => props.theme.color1};
        text-shadow: 3px 3px ${props => props.theme.color3};
        cursor: pointer;
    }
`;