import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {GridWrapper} from "../../../components/Wrappers/GridWrapper.ts";
import {FlexWrapper} from "../../../components/Wrappers/FlexWrapper.ts";

const Projects = styled.section`
    background-color: #fff;
    position: relative;
    padding: ${theme.sectionPadding};
    
    ${GridWrapper} {
        padding-top: 110px;
        @media ${theme.media.desktop} {
            grid-template-columns: repeat(2, 375px);
            justify-content: center;
        }
        @media ${theme.media.tabletLarge} {
            grid-template-columns: repeat(2, 320px);
            row-gap: 20px;
            padding-top: 50px;
        }
        @media ${theme.media.tablet} {
            grid-template-columns: repeat(1, 320px);
        }
    }
    
    @media ${theme.media.mobile} {
        padding: 80px 0;
    }
`

const Project = styled.article`
    max-width: 375px;
    width: 100%;
    /*min-height: 570px;*/
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
    overflow: hidden;
    
    & > ${FlexWrapper} {
        min-height: 310px;
        padding: 25px 30px;
        @media ${theme.media.tabletLarge} {
            padding: 15px 20px 20px;
            min-height: 270px;
        }
    }
    
    p + p {
        flex-grow: 1;
    }
    
    
    @media ${theme.media.mobile} {
        box-shadow: 2px 2px 40px 0 rgba(0, 0, 0, 0.20);
    }
`

const ImageWrapper = styled.div`
    height: 260px;
    overflow: hidden;
    @media ${theme.media.tabletLarge} {
        height: 230px;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Title = styled.h1`
    color: #000;
    font-size: clamp(24px, 1.427rem + 0.32vw, 28px);
    font-weight: 500;
    margin-bottom: 17px;
    @media ${theme.media.tabletLarge} {
        margin-bottom: 12px;
    }
    
`

const Description = styled.p`
    font-size: clamp(16px, 0.964rem + 0.16vw, 18px);
    font-weight: 300;
    margin-bottom: 12px;
`

const Link = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #000;
    text-decoration: underline;
    line-height: 1.6;
    font-size: clamp(14px, 0.839rem + 0.16vw, 16px);

    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        aspect-ratio: 1;
        @media ${theme.media.tablet} {
            width: 15px;
        }
    }
    
    &:first-child::before {
        background: url('../../../../../public/link.svg') center/cover no-repeat;
    }
    
    &:last-child::before {
        background: url('../../../../../public/github.svg') center/cover no-repeat;
    }
`

export const S = {
    Projects,
    Project,
    ImageWrapper,
    Image,
    Title,
    Description,
    Link,
}