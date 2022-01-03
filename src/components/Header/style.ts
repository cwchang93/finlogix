import styled from 'styled-components';

export const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    height:60px;
    display:grid;
    grid-template-columns: 40px auto 100px;
    align-items: center;
    border-bottom: solid #F5F5F5 1px;

    .menuIcon{
        padding-left: 15px;
        font-size: 26px;
    }

    .logoWrap{
        padding-left: 8px;
        >img {
            width: 90px;

        }
        
    }

    .middlePart {
        display:none;
    }

    .authWrap{
        text-align:center;
    }

    @media screen and (min-width: 768px) {
        height:80px;
        /* padding: 0 calc((100% - 1180px)/2); */
        max-width:1180px;


        .menuIcon{
            display:none;
        }

        .logoWrap{
            padding-left: 8px;
            >img {
                width: unset;
            }
        }

        .middlePart{
            display:block;
        }
    }
    


`;

