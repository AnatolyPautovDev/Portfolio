import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {Container} from "../../../components/common/Container.ts";
import {FlexWrapper} from "../../../components/Wrappers/FlexWrapper.ts";
import bg from "../../../assets/images/about-bg.svg"

const About = styled.section`
    background-color: #fff;
    position: relative;
    overflow-x: clip;
    padding: ${theme.sectionPadding};
    ${Container} > ${FlexWrapper} {
        max-width: 708px;
        @media ${theme.media.tabletLarge} {
            margin: 0 auto;
            gap: 18px;
        }
    }
    &::after {
        content: "";
        display: block;
        width: 835px;
        aspect-ratio: 1;
        position: absolute;
        background: url('${bg}') center/cover no-repeat;
        right: -325px;
        top: -60px;
        z-index: 0;
        @media ${theme.media.tabletLarge} {
            display: none;
        }
    }
`

const Title = styled.h3`
    letter-spacing: -0.4px;
`

const AboutText = styled.p`
    font-size: clamp(14px, 0.802rem + 0.32vw, 18px);
    font-weight: 400;
`

const List = styled.ul`
    li + li {
        padding-top: 35px;
        @media ${theme.media.tablet} {
            padding-top: 15px;
        }
    }
`

const Organization = styled.span`
    &::before {
        background: url('../../../../public/office-building.svg') center/contain no-repeat;
    }
`

const Location = styled.span`
    &::before {
        background: url('../../../../public/location.svg') center/contain no-repeat;
    }
`

const Period = styled.span`
    &::before {
        background: url('../../../../public/calendar.svg') center/contain no-repeat;
    }
`

const Item = styled.li`
    padding-bottom: 23px;
    border-bottom: 2px solid ${theme.colors.grey};
    
    ${FlexWrapper} + ${FlexWrapper} {
        @media ${theme.media.tablet} {
            padding-top: 5px;
        }
    }

    @media ${theme.media.tablet} {
        padding-bottom: 12px;
    }
    
    ${Organization}, ${Location}, ${Period} {
        font-size: 12px;
        text-align: left;
        color: ${theme.colors.lightContent};
        display: flex;
        align-items: center;
        gap: 8px;
        @media ${theme.media.mobile} {
            font-size: 10px;
            gap: 2px;
        }
    }
    ${Location} {
        @media ${theme.media.mobileSmall} {
            display: none;
        }
    }
    ${Organization}::before, ${Location}::before, ${Period}::before {
        content: "";
        display: inline-block;
        width: 12px;
        aspect-ratio: 1;
        @media ${theme.media.mobile} {
            width: 10px;
        }
        @media ${theme.media.mobileSmall} {
            display: none;
        }
    }
    ${FlexWrapper} > ${FlexWrapper} {
        max-width: 340px;
        width: 100%;
        @media ${theme.media.mobile} {
            max-width: 250px;
        }
        @media ${theme.media.mobileSmall} {
            width: unset;
            max-width: none;
        }
    }
`

const Caption = styled.h4`
    font-size: clamp(14px, 0.766rem + 0.48vw, 20px);
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.4;
    text-align: left;
`

const Busyness = styled.span`
    width: 84px;
    font-size: 9px;
    font-weight: 600;
    color: #018C0F;
    background-color: #d7ffe0;
    border-radius: 100px;
    transform: translateY(-12px);
    padding: 7px 0;
    @media ${theme.media.tablet} {
        transform: translateY(0);
    }
    @media ${theme.media.mobile} {
        font-size: 8px;
        width: 72px;
        padding: 5px 0;
    }
    
`

export const S = {
    About,
    Title,
    AboutText,
    List,
    Organization,
    Location,
    Period,
    Item,
    Caption,
    Busyness
}