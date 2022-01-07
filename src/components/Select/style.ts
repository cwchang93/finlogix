import styled from 'styled-components';

export const SelectSTY = styled.div`
    min-width: 120px;
    width: 100%;
    height: 40px;

    .ClickOutside {
        width: inherit;
        height: inherit;
        .Trigger {
            display: flex;
            align-items: center;
            width: inherit;
            height: inherit;
            border: solid 1px #ddd;
            border-radius: 3px;
            background-color: #fff;

            user-select: none;
            cursor: pointer;

            > span {
                padding-left: 8px;
            }

            > div.xin-icon {
                margin-left: auto;
                margin-right: 4px;
                color: #bbb;
                svg {
                    transition: transform 0.3s;
                }
            }

            &.open {
                border-color: darkseagreen;
                > div.xin-icon svg {
                    transform: rotate(180deg);
                }
            }
        }

        .Window {
            width: 100%;
            left: 1px;
            border: 0px;
            padding: 0px;
            background-color: #fff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.35);
        }
    }
`;

export const OptionSTY = styled.div`
    display: grid;
    padding: 4px 0px;

    > div {
        padding: 4px 0px 4px 12px;
        background-color: #fff;
        &:hover {
            background-color: #eee;
            cursor: pointer;
        }
    }
`;
