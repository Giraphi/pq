import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: "Source Code Pro", source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        margin: 0;
        color: white;
        background-color: #282c34;
        font-size: 16px;
    }
`

export default GlobalStyle;
