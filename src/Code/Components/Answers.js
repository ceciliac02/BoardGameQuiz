import styled from 'styled-components'

export const Form = styled.form`

`;

export const InputContainer = styled.div`
    border: 2px solid ${prop => prop.theme.color1};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    margin: 0;
`;

export const Label = styled.label`
    color: #D5614C;
    font-size: 1.3rem;
`;

export default Input;