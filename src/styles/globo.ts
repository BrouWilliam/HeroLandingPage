import { createGlobalStyle } from "styled-components";
import Bkg1 from '../assets/background1.png'
import Bkg2 from '../assets/background2.png'

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
        background-image: url(${Bkg1}), url(${Bkg2});
        background-color: #F8FDFF;
        background-repeat: no-repeat;
        background-position: top right;
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