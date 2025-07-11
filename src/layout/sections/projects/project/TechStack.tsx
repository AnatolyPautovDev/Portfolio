import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type TechStackProps = {
    stackList: Array<string>;
}

export const TechStack = (props: TechStackProps) => {
    return (
        <StackList>
            <TechStackTitle>Tech stack :</TechStackTitle> {props.stackList.join(', ')}
        </StackList>
    );
};

const StackList = styled.p`
    color: ${theme.colors.accent};
    font-size: clamp(12px, 0.714rem + 0.16vw, 14px);
    font-weight: 300;
`

const TechStackTitle = styled.span`
    font-size: clamp(14px, 0.839rem + 0.16vw, 16px);
    font-weight: 400;
`
