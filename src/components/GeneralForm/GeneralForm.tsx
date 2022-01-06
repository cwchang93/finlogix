import * as React from "react";
import { ICommonProps } from "../../utils";
import { StyledGeneralForm } from "./style";
import cx from "classnames";

export interface IGeneralForm extends ICommonProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const GeneralForm: React.FC<IGeneralForm> = (props) => {
  const { title, description, children, className } = props;
  return (
    <StyledGeneralForm className={cx("ld-genForm", className)}>
      <div className="titleDescription">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="contentWrap">{children}</div>
    </StyledGeneralForm>
  );
};

export default GeneralForm;
