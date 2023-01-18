import { Link } from "react-router-dom"
import styled from "styled-components"

export const LginFrmContainer = styled.div`
    background-color: white;
`

export const LginFrmWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1.5rem;
    background-color: #6590ed;
    
`

export const LginFrmBody = styled.div`
    width: 25rem;
    height: 30rem;
    border-radius: 1rem;
    background-color: white;
`

export const LginFrmTitle = styled.h1`
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
`

export const LginFrmSpan = styled.span`
    font-size: 0.8rem;
    margin-bottom: 1rem;
    font-weight: 5000;
`
export const SelectorWrapper = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    align-items: center;
    background-color: #D3D3D3;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: #D3D3D3;
    &.router-active {
        background-color: white;
        pointer-events: none;
    }
`