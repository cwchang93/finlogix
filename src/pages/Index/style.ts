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
  display: flex;
  grid-gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;

  .ld-loading {
    top: 70%;
  }

  @media (min-width: 768px) {
    padding: 0;
    max-width: 1180px;
    margin: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 720px;
    white-space: nowrap;
    padding-bottom: 16px;
  }
`;
