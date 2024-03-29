import styled from "styled-components";

const colorGroup = {
  header: "#01254F",
  content: "rgba(0, 0, 0, 0.65)",
  register: "#6BB718",
};

export const StyledRegisterCard = styled.div`
  border: solid #d6d6d6 1px;
  padding: 20px;
  width: 100%;
  max-width: 380px;
  background-color: #fff;

  box-sizing: border-box;
  box-shadow: 1px 2px 6px rgb(219 219 219 / 50%);
  border-radius: 4px;

  > div {
    text-align: left;
  }

  @media (min-width: 768px) {
    height: 340px;
  }
`;

export const StyledHeader = styled.div`
  color: ${colorGroup.header};

  .createdAt {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 16px;
    margin-bottom: 12px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;

    @media (min-width: 768px) {
      min-height: 34px;
    }
  }
`;

export const StyledContent = styled.div`
  color: ${colorGroup.content};

  .content {
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    p {
      font-size: 14px;
    }
  }

  .formatCreatedAt {
    font-size: 12px;
    margin-bottom: 35px;
  }
`;

export const StyledRegisterBar = styled.div`
  color: ${colorGroup.register};
  display: flex;
  justify-content: space-between;
  .registerBtn {
    color: #6bb718;
    border: none;
    padding: 0;
  }

  .icon {
    border: solid ${colorGroup.register} 1px;
    border-radius: 50%;
    &:before {
      content: ">";
    }
  }
`;
