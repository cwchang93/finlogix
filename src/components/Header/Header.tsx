import * as React from 'react';
import cx from 'classnames';
import { ICommonProps } from '../../utils';
import { StyledHeader } from './style';
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

export interface IHeaderProps extends ICommonProps {
    logoSrc?: string;
    // onLogin?: () => void;
    onLogout?: () => void;
    auth?: boolean;
}

const Header: React.FC<IHeaderProps> = (props) => {

    const { logoSrc, onLogout, auth, children } = props;

    return (
        <StyledHeader>
            <div className="menuIcon">
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="logoWrap">
                <NavLink to="/">
                    <img src={logoSrc} />
                </NavLink>
            </div>

            <div className="middlePart">
                {children}
            </div>


            <div className="authWrap">
                {auth ? <Button onClick={onLogout}>Logout</Button> : <NavLink to="/login"><Button >Login</Button></NavLink>
                }
            </div>
        </StyledHeader>
    )

}


export default Header;