import styled from 'styled-components';
import { finTheme as $ } from '../../style/variables';

export const StyledBanner = styled.div`
    background:#fff;
    
    >h2 {
        color:${$.mainBlue};
    }
    >p {
        color:${$.mainText};
    }

`;