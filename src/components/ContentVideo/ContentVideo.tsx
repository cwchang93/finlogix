import * as React from "react";
import { ICommonProps } from "../../utils";
import { StyledContentVideo } from "./style";

export interface IContentVideo extends ICommonProps {
  title?: string;
  content?: string;
}

const ContentVideo: React.FC<IContentVideo> = (props) => {
  console.log(props);
  return (
    <StyledContentVideo>
      <h2> {props.title} </h2>
      <p>{props.content}</p>
    </StyledContentVideo>
  );
};

export default ContentVideo;
