import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.darkContent};
        background-color: ${theme.colors.primary};
        line-height: 1.2;
        overflow-x: clip;
        min-width: 360px;
        
    }
    
    a {
        text-decoration: none;
        color: ${theme.colors.darkContent};
        transition: ${theme.animation.transition};
    }
    a:hover {
        color: ${theme.colors.accent};
    }
    
    a.active {
        color: ${theme.colors.accent};
        font-weight: 700;
    }

    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    h2, h3 {
        color: ${theme.colors.accent};
    }
    
    h3 {
        font-size: clamp(28px, 1.496rem + 1.13vw, 42px);
        font-weight: 700;
    }
    
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
`