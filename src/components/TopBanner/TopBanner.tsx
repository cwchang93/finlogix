import * as React from "react";
import { ICommonProps } from "../../utils";
import { StyledBanner } from "./style";

export interface ITopBanner extends ICommonProps {
  title?: string;
  content?: string;
}

const TopBanner: React.FC<ITopBanner> = (props) => {
  return (
    <StyledBanner>
      <h2> {props.title} </h2>
      <p>{props.content}</p>
    </StyledBanner>
  );
};

export default TopBanner;
