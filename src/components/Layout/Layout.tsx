import React from 'react';
import { ICommonProps } from '../../utils';
import { StyledLayout } from './style';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/getCookie';
import { checkUser } from '../../store/auth-actions';
import { totalActions } from '../../store/index';
import { GlobalStyle } from '../../style/global_css'
export interface ILayoutProps extends ICommonProps {
    maxWidth: string;
    children: React.ReactNode;
};

const Layout: React.FC<ILayoutProps> = (props) => {

    const dispatch = useDispatch();


    React.useEffect(() => {

        // console.log('token', getCookie('access_token'));
        if (getCookie('access_token')) {
            dispatch(checkUser());
        }

    }, []);


    const { maxWidth, children } = props;

    return (

        <StyledLayout maxWidth={maxWidth}>
            <GlobalStyle />
            {children}
        </StyledLayout>

    )

}


export default Layout;