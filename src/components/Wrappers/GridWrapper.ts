import styled from "styled-components";

type GridWrapperProps = {
    gridColumns: string;
    gap?: string;
    rowGap?: string;
    columnGap?: string;
    justifyContent?: string;
    alignContent?: string;
    justifyItems?: string;
    alignItems?: string;
}

export const GridWrapper = styled.div<GridWrapperProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.gridColumns});
    gap: ${props => props.gap};
    row-gap: ${props => props.rowGap};
    column-gap: ${props => props.columnGap};
    justify-content: ${props => props.justifyContent};
    align-content: ${props => props.alignContent};
    justify-items: ${props => props.justifyItems};
    align-items: ${props => props.alignItems};
`
