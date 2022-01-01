import * as React from 'react';
import { ICommonProps } from '../../utils';
import { StyledRegisterCard, StyledHeader, StyledContent, StyledRegisterBar } from './style';
import Button from '../Button/Button'
import dayjs from 'dayjs';

export interface IRegisterCardProps extends ICommonProps {
    createdAt: string;
    title: string;
    content: string;
    isRegister?: boolean;
    onClickRegister?: () => void;
}

const RegisterCard: React.FC<IRegisterCardProps> = props => {

    const formatCreatedAt = dayjs(props.createdAt).add(10, 'days').format('YYYY/MM/DD hh:mm');

    return (
        <StyledRegisterCard>
            <StyledHeader>
                <div className="createdAt">
                    {props.createdAt}
                </div>
                <div className="title">
                    {props.title}
                </div>
            </StyledHeader>

            <StyledContent>
                <div className="content" dangerouslySetInnerHTML={{ __html: props.content }}>
                </div>
                <div className="formatCreatedAt" >
                    {formatCreatedAt}
                </div>
            </StyledContent>

            <StyledRegisterBar>
                <Button className="registerBtn" onClick={props.onClickRegister}>
                    Register Now
                </Button>
            </StyledRegisterBar>

        </StyledRegisterCard>
    )
};

RegisterCard.defaultProps = {
    createdAt: '05/11/2019',
    title: 'How to trade the risk currencies, such as the AUD',
    content: 'A live analysis on how to take advantage of the current AUD volatility, plus other key FX pairs',
    isRegister: false,
};

export default RegisterCard;
