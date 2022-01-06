import styled from "styled-components";
import { finTheme as $ } from "../../style/variables";

export const StyledContentVideo = styled.div`
  * {
    color: ${$.mainText};
  }
`;

export const StyledContentWrap = styled.div`
  h2 {
    font-size: 22px;
    color: ${$.mainBlue};
  }

  p {
    font-size: 16px;
    color: ${$.mainText};
  }

  h4 {
    .seeMoreLink {
      text-decoration: none;
      font-weight: normal;
      .arrowRight {
        border: solid ${$.mainText} 1px;
        font-weight: normal;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 4px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
  }

  @media (min-width: 768px) {
    h2 {
      margin-top: 0;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const StyledVideoWrap = styled.div`
  iframe {
    width: 100%;
    height: 300px;
  }

  @media (min-width: 768px) {
    iframe {
      width: 100%;
      /* height: 30px; */
    }
  }
`;
