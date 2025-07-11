import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const SectionDescription = styled.p`
    text-align: center;
    font-size: clamp(26px, 1.516rem + 0.48vw, 32px);
    padding-top: 50px;
    @media ${theme.media.tablet} {
        padding-top: 20px;
    }
`