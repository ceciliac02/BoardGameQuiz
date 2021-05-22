import styled from "styled-components";

export default styled.div`
    height: 50vh;
    width: 60vw;
    background-color: ${props => props.theme.color1};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;