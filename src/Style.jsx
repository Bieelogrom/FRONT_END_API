import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Nunito", sans-serif;
    }

    html,
    body{
        width: 100%;
        height: 100%;
    }

    #root{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
`

export const Formolario = styled.form`
    height: 100%;
    width: 100%;
`

export const FormularioWrapper = styled.main`
    width: 50%;
    height: fit-content;
    background: #403F4C;
    padding: 14px;
`

export const FormularioLabel = styled.label`
    color: #fff;
    font-size: 14px;
`

export const FormularioInput = styled.input`
    width: 100%;
    height: 50%;
`

export const FormularioDiv = styled.div`
    width: 100%;
    height: 12%;
`

