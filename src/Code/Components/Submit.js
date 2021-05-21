import styled from "styled-components";

export default styled.div`
    height: 5vh;
    width: 8vw;
    background-color: ${props => props.theme.color2};
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transform: translateY(50%);
    &:hover {
        color: white;
        cursor: pointer;
    }
`;