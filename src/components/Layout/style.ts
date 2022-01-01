import styled from 'styled-components';


interface ILayoutProps {
    maxWidth: string;
}

export const StyledLayout = styled.div<ILayoutProps>`
        padding:25px;
        padding-top:60px;
    
        @media screen and (min-width: 768px) {
            padding: calc((100% - 1180px)/2);
            padding-top:80px;
        }



`;