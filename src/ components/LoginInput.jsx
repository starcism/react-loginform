import styled from "styled-components";

export const LoginInput = ({ type="text", name, placeholder, value, setValue, err }) => {
    return (
        <Container>
            <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={setValue} err={err}>
            </StyledInput>
        </Container>
    );
}

export const LoginSubmit = ({ type="submit", value, width }) => {
    return (
        <Container>
            <StyledSubmit type={type} value={value} width={width}/>
        </Container>
    );
}

const StyledSubmit = styled.input`
    width: ${(props) => props.width};
    padding: 0.75rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: royalblue;
    color: white;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0.75rem;
    border: ${props => props.err ? "1px solid red" : "1px solid rgb(156 163 175)"};
    border-radius: 0.25rem;
    background-color: rgb(249 250 251);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    :focus {
        background-color: white;
        border: 1px solid royalblue;
        outline: 1px solid #87CEEB;
    }
    &:hover {
        background-color: white;
    }
`;

const Container = styled.div`
    margin-bottom: 0.5rem;
`;
