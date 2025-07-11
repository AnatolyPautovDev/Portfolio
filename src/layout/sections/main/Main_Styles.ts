import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {Container} from "../../../components/common/Container.ts";
import {FlexWrapper} from "../../../components/Wrappers/FlexWrapper.ts";

const Main = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow-x: clip;
    
    ${Container} > ${FlexWrapper} {
        @media ${theme.media.tabletLarge} {
            flex-direction: column;
            align-content: center;
            row-gap: 50px;
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    line-height: 0;
    background-image: ${theme.colors.gradient};
    border-radius: 230px;
    
    z-index: 0;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: clamp(350px, 16.831rem + 22.42vw, 628px);
        aspect-ratio: 1;
        background: url('../../../../public/foto-bg.svg') center/cover no-repeat;
        z-index: 1;
    }
`

const Photo = styled.img`
    width: clamp(230px, 12.198rem + 9.68vw, 350px);
    border-radius: 230px;
    border: 9px solid transparent;
`

const Greeting = styled.div`
    min-width: clamp(330px, 15.363rem + 23.39vw, 620px);
    color: ${theme.colors.accent};
    font-size: clamp(32px, 1.528rem + 2.1vw, 58px);
    font-weight: 700;
    letter-spacing: -1px;
    text-align: left;
    align-self: end;
    @media ${theme.media.tabletLarge} {
        text-align: center;
    }
`

const Name = styled.span`
    color: transparent;
    background-image: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
`

export const S = {
    Main,
    ImageWrapper,
    Photo,
    Greeting,
    Name,
}