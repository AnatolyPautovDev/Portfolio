import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {GridWrapper} from "../../../components/Wrappers/GridWrapper.ts";

const Skills = styled.section`
    background-color: #fff;
    position: relative;
    padding: ${theme.sectionPadding};
    @media ${theme.media.mobile} {
        padding: 80px 0;
    }
    ${GridWrapper} {
        padding-top: 125px;
        @media ${theme.media.tablet} {
            grid-template-columns: repeat(4, 1fr);
            justify-content: space-around;
            padding-top: 50px;
        }
        @media ${theme.media.mobile} {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

export const S = {
    Skills,
}