import styled from "styled-components";
import { finTheme as $ } from "../../style/variables";

export const StyledGeneralForm = styled.div`
  max-width: 580px;
  margin: auto;

  .titleDescription {
    text-align: center;
    > h3 {
      font-size: 20px;
      color: ${$.mainBlue};
    }
    > p {
      font-size: 13px;
      color: ${$.mainText};
      line-height: 16px;
      margin-bottom: 20px;
    }
  }

  .contentWrap {
    text-align: center;
  }

  @media (min-width: 768px) {
    .titleDescription {
      > h3 {
        font-size: 22px;
      }
      > p {
        font-size: 16px;
      }
    }
  }
`;
