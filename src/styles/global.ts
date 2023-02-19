import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props => props.theme["cian-800"]} ;
        color: ${props => props.theme["gray-200"]};
        margin: 20px;
    }

    button, input, body, textarea{
        font-family: 'Nunito', sans-serif;
    }
`