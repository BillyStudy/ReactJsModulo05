import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`

    *{ 
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
        font-family: Poppins, Arial, Helvetica, sans-serif;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background-color: #3152bd;
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button{
        font-size: 14px;
        color: #222;
    }
    button{
        cursor: pointer;
    }
`;