import styled from "styled-components";
import {FlexWrapper} from "../../components/Wrappers/FlexWrapper.ts";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    padding-top: 10px;
    background-color: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.3);

    ${FlexWrapper} > ${FlexWrapper} {
        @media ${theme.media.tabletLarge} {
            flex-direction: row-reverse;
            width: calc(50% + 45px);
            gap: 0;
            justify-content: space-between;
            align-items: center;
        }
    }
`

export const S = {
    Header,
}