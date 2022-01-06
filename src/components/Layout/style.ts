import styled from "styled-components";

interface ILayoutProps {
  maxWidth: string;
}

export const StyledLayout = styled.div<ILayoutProps>`
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;
