import styled from "@emotion/styled"
import { theme } from "constants/theme";
import { NavLink } from "react-router-dom"

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 15px;
`;

export const StyledHeader = styled.header`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing(13)}px;
  border-bottom: 1px solid black;
  
`;

export const StyledLink = styled(NavLink)`
  margin-left: ${({ theme }) => theme.spacing(3)}px;
  font-size: ${({ theme }) => theme.spacing(5)}px;

  color: ${({ theme }) => theme.colors.black};

  transition: color 250ms linear;

  &.active {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const LoaderBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CenterCss = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate: (-50%, -50%);
  background-color: ${({theme}) => theme.colors.white};
  `;
