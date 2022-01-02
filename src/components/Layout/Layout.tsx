import React from 'react';
import { ICommonProps } from '../../utils';
import { StyledLayout } from './style';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/getCookie';
import { checkUser } from '../../store/auth-actions';
import { totalActions } from '../../store/index';
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

        dispatch(totalActions.init())



        // console.log(user);
    }, []);


    const { maxWidth, children } = props;

    return (

        <StyledLayout maxWidth={maxWidth}>
            {children}
        </StyledLayout>

    )

}


export default Layout;