import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {Container} from "../../../components/common/Container.ts";
import {FlexWrapper} from "../../../components/Wrappers/FlexWrapper.ts";

const Contacts = styled.section`
    background-color: #fff;
    position: relative;
    padding: ${theme.sectionPadding};
    @media ${theme.media.mobile} {
        padding: 80px 0;
    }
    ${Container} > ${FlexWrapper} {
        padding-top: 110px;
        @media ${theme.media.mobile} {
            padding-top: 50px;
        }
    }
    
    ${FlexWrapper} > ${FlexWrapper} {
        max-width: 370px;
        width: 100%;
    }
`

const Form = styled.form`
    max-width: 570px;
    width: 450px;
    flex-grow: 1;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 20px;
    background-color: ${theme.colors.primary};
    box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.2);
    
    input, textarea {
        width: 100%;
        background-color: #F0F0F6;
        border: none;
        padding: 5px 10px;
        font-family: 'Poppins', sans-serif;
        font-size: clamp(16px, 0.964rem + 0.16vw, 18px);
        color: ${theme.colors.darkContent};

        &:focus-visible {
            outline: 1px solid ${theme.colors.accent};
        }
    }

    button {
        align-self: start;
        margin-top: 25px;
    }

    input {
        height: 50px;
    }
    
    textarea {
        height: 100%;
        resize: none;
    }
    
    label:last-of-type {
        flex-grow: 1;
    }
    @media ${theme.media.mobile} {
        padding: 25px 15px;
        gap: 15px;
    }
`

const Label = styled.label`
    font-size: clamp(16px, 0.964rem + 0.16vw, 18px);
    input, textarea {
        border-radius: 15px;
    }
`

const Box = styled.div `
    background-color: ${theme.colors.primary};
    border-radius: 20px;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.2);
    padding: 25px 25px 15px;
    @media ${theme.media.mobile} {
        padding: 25px 15px 15px;
    }
`

const Circle = styled.div `
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.accent};
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
`

const List = styled.ul `
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: clamp(16px, 0.964rem + 0.16vw, 18px);
`

const ListItem = styled.li `
    display: inline-flex;
    justify-content: space-between;
`

export const S = {
    Contacts,
    Form,
    Label,
    Box,
    Circle,
    List,
    ListItem
}