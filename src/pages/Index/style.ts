import styled from "styled-components";

export const StyledIndex = styled.div`
  background: white;
`;

export const StyledCardSection = styled.section`
  background: #f2f2f2;
  padding: 40px 0;
  @media (min-width: 768px) {
    /* margin: 0 calc((1180px - 100vw) / 2); */
    padding: 80px 0;
  }
`;

export const StyledCardsWrap = styled.div`
  grid-gap: 10px;
  display: flex;
  grid-gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0;
    max-width: 1180px;
    margin: auto;
  }
`;
