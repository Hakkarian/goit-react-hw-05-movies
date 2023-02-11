import styled from "@emotion/styled"

export const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.spacing(8)}px;
`


export const StyledElement = styled.li`
    width: calc((100% - ${({theme}) => theme.spacing(4)}px * 2) / ${({theme}) => theme.spacing(2)});
`