import styled from 'styled-components'

export const Form = styled.form`
    width: 90%
`;

export const InputContainer = styled.div`
    border: 2px solid ${prop => prop.theme.color1};
    background-color: ${prop => prop.theme.color4};
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
`;

export const Input = styled.input`
    margin: 0;
    margin-right: 5px;
`;

export const Label = styled.label`
    font-size: 1.3rem;
`;

export default Input;