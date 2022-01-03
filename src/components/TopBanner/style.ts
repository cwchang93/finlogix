import styled from 'styled-components';
import { finTheme as $ } from '../../style/variables';

export const StyledBanner = styled.div`
    background:#fff;
    text-align:center;
    padding-top:20px;

    max-width: 800px;
    margin: auto;

    >h2 {
        color:${$.mainBlue};
    }
    >p {
        font-size: 12px;    
        line-height: 16px;
        color:${$.mainText};
    }

    @media screen and (min-width:768px) {
        
        padding:80px 0;

        >p{
            font-size: 16px;
            line-height: 25px;
        }
    }

`;