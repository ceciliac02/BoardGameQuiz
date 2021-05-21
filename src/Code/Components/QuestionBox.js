import styled from "styled-components";

export default styled.div`
    height: 50vh;
    width: 80vw;
    border: 2px solid ${props => props.theme.color4};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;