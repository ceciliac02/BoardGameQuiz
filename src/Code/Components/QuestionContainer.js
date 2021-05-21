import styled from 'styled-components';

export default styled.div`
    width: 60vw;
    height: 10vh;
    background-color: ${props => props.theme.color2};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
`;