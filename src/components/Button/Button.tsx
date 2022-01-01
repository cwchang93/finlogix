import * as React from 'react';
import cx from 'classnames';
import { ICommonProps } from '../../utils';
import { StyledButton, StyledLink } from './style';
export interface IButtonProps extends ICommonProps {
    type?: 'primary' | 'default';
    href?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = props => {
    const { children, type, href, ...other } = props;

    return href ? (
        <StyledLink href={href} className={cx('link', 'ld-btn', type, props.className)} {...other}>
            {children}
        </StyledLink>
    ) : (
        <StyledButton type="button" className={cx('button', 'ld-btn', type, props.className)} {...other}>
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    disabled: false,
    type: 'default',
};

export default Button;
