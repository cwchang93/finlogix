import React from 'react';
import { ICommonProps } from '../../utils';
import { StyledLayout } from './style';

export interface ILayoutProps extends ICommonProps {
    maxWidth: string;
    children: React.ReactNode;
};

const Layout: React.FC<ILayoutProps> = (props) => {

    const { maxWidth, children } = props;

    return (

        <StyledLayout maxWidth={maxWidth}>
            {children}
        </StyledLayout>

    )

}


export default Layout;