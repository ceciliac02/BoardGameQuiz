import styled from 'styled-components';

const Header = styled.div`
height: 10vh;
background-color: ${props => props.theme.color2};
font-weight: bold;
font-family: ${props => props.theme.font};
font-size: 3rem;
color: ${props => props.theme.color1};
text-shadow: 3px 3px ${props => props.theme.color3};
display: flex;
justify-content: center;
align-items: center
`;

export default Header;