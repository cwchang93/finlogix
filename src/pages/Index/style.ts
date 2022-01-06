import styled from "styled-components";

export const StyledIndex = styled.div`
  background: #fff;
  padding-bottom: 100px;
`;

export const StyledCardSection = styled.section`
  background: #f2f2f2;
  padding: 40px 0;
  @media (min-width: 768px) {
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
  }
`;

export const StyledVideoSect = styled.section`
  padding: 60px 20px;

  .contentVideo {
    align-items: center;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 440px 580px;
      grid-gap: 50px;
      padding: 135px 0;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
`;

export const StyledFormSect = styled.section`
  &.formSect {
    max-width: 1180px;
    margin: auto;

    padding-top: 50px;
    @media (min-width: 768px) {
      padding-bottom: 50px;
      border: 1px solid #dbdbdb;
      box-sizing: border-box;
      box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
      border-radius: 20px;
    }
  }

  .ld-genForm {
    .ld-input {
      display: block;
      margin-bottom: 16px;
      > label {
        margin-bottom: 7px;
      }
      .inputWrap {
        .input {
          width: 100%;
        }
      }
    }

    .registerBtn {
      width: 100%;
      margin-top: 20px;
    }
  }
`;
