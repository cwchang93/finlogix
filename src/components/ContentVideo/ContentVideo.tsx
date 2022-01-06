import * as React from "react";
import { ICommonProps } from "../../utils";
import {
  StyledContentVideo,
  StyledContentWrap,
  StyledVideoWrap,
} from "./style";

export interface IContentVideo extends ICommonProps {
  title?: string;
  children?: React.ReactNode;
  videoSrc?: string;
  moreLink?: string;
}

const ContentVideo: React.FC<IContentVideo> = (props) => {
  const { title, children, videoSrc, moreLink } = props;
  return (
    <StyledContentVideo className="contentVideo">
      <StyledContentWrap>
        <h2> {title} </h2>
        {children}
        <h4>
          <a className="seeMoreLink" href={moreLink}>
            See more
            <i className="arrowRight"></i>
          </a>
        </h4>
      </StyledContentWrap>

      <StyledVideoWrap>
        <iframe src={videoSrc}></iframe>
      </StyledVideoWrap>
    </StyledContentVideo>
  );
};

export default ContentVideo;
