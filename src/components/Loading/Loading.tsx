import * as React from 'react';
import cx from 'classnames';
import { ICommonProps } from '../../utils';
import { StyledLoading } from './style';

export interface ILoadingProps extends ICommonProps {
    bgColor?: string;
    visible?: boolean;
}

const Loading: React.FC<ILoadingProps> = props => {
    return (
        <>
            <StyledLoading className={cx('Loading', 'ld-loading', props.className)} bgColor={props.bgColor} visible={props.visible}>
                <div className="loading">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </StyledLoading>
        </>
    );
};

export default Loading;
