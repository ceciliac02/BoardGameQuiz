import styled from 'styled-components';

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ResultPckg = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;

export const SmallResultPckg = styled.div`
    display: flex;
`;

export const ResultName = styled.div`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    font-family: ${props => props.theme.font};
    color: #564154;
    text-shadow: 2px 2px ${props => props.theme.color3};
`;

export const ResultImage = styled.div`
    img {
        max-height: 160px;
        width: auto;
    }
`;

export const Retry = styled.div`
    height: 7vh;
    width: 10vw;
    background-color: ${props => props.theme.color2};
    font-size: 2rem;
    font-family: ${props => props.theme.font};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover {
        color: ${props => props.theme.color1};
        text-shadow: 3px 3px ${props => props.theme.color3};
        cursor: pointer;
    }
`;

export default Results;