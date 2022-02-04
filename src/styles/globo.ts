import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }

    button{
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
        outline: none;
    }
`

export default globalStyle