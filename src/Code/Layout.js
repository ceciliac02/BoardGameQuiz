import React from 'react';
import styled from 'styled-components';

const Layout = () => {
    const Background = styled.div`
    height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SideBox = styled.div`
    height: 100%;
    width: 15%;
    background-color: #BA3A3A;
`;

const Nav = styled.li`
    
`;

const MainBox = styled.div`
    height: 100%;
    width: 85%;
    background-color: #C06666;
`;

    return (
        <Background>
            <SideBox>
                <Nav>
                    Board Games By Name
                </Nav>
                <Nav>
                    Board Games By Type
                </Nav>
            </SideBox>
            <MainBox />
        </Background>

    )
}

export default Layout;