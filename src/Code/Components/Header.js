import styled from 'styled-components';

const Header = styled.div`
height: 10vh;
background-color: ${props => props.theme.color1};
font-weight: bold;
font-family: ${props => props.theme.font};
font-size: 3rem;
text-align: center;
color: ${props => props.theme.color4};
text-shadow: 3px 3px ${props => props.theme.color3};

`;

export default Header;