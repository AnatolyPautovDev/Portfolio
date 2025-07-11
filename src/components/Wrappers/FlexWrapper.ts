import styled from "styled-components";

type FlexWrapperProps = {
    direction?: "column"
    justify?: string
    align?: string
    wrap?: "wrap"
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-wrap: ${props => props.wrap};
    gap: ${props => props.gap};
`