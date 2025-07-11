import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";
import {FlexWrapper} from "../../components/Wrappers/FlexWrapper.ts";

const Footer = styled.footer`
    background-color: #fff;
    position: relative;
    padding-bottom: 30px;
    a {
        color: ${theme.colors.accent};
    }
    a:hover {
        color: ${theme.colors.darkContent};
    }
`

const FooterContacts = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 2px solid rgba(102, 102, 102, 0.2);
    padding-bottom: 20px;
    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            gap: 20px;
        }
        
    }
`

const Link = styled.a`
    color: ${theme.colors.accent};
    font-family: "DM Sans", sans-serif;
    font-size: clamp(16px, 0.964rem + 0.16vw, 18px);
    font-weight: 400;
`

const Author = styled.small`
    display: block;
    font-size: clamp(12px, 0.677rem + 0.32vw, 16px);
    font-weight: 400;
    padding-top: 30px;
    text-align: center;
    
    span {
        color: transparent;
        background-image: ${theme.colors.gradient};
        background-clip: text;
    }
    @media ${theme.media.mobile} {
        padding-top: 15px;
    }

`

export const S = {
    Footer,
    FooterContacts,
    Link,
    Author,
}