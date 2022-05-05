import {createGlobalStyle} from "styled-components";
import SourceCodePro from "../fonts/source-code-pro-regular.woff";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Source Code Pro";
        src: url(${SourceCodePro}) format('woff');
    }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: "Source Code Pro", Menlo, Monaco, Consolas, 'Courier New', monospace;
        margin: 0;
        color: white;
        background-color: #282c34;
        font-size: 16px;
    }
`

export default GlobalStyle;
