import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Button = styled.button `
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    color: ${theme.colors.primary};
    font-size: clamp(16px, 0.964rem + 0.16vw, 18px);
    height: 35px;
    padding: 0 20px;
    background-color: ${theme.colors.accent};
    cursor: pointer;
    border-radius: 15px;
    transition: ${theme.animation.transition};
    border: 2px solid ${theme.colors.accent};
    
    &:hover {
        background-color: transparent;
        color: ${theme.colors.accent};
    }
`