import styled from 'styled-components';

export const StyledItem = styled.li`
    clear: both;
    margin: 0;
    padding: 5px 12px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: #e6f7ff;
    }
    &.activeItem {
        background-color: #e6f7ff;
    }
    > a {
        display: block;
        margin: -5px -12px;
        padding: 5px 12px;
        color: rgba(0, 0, 0, 0.65);
        transition: all 0.3s;
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        text-align: center;
    }
`;

interface IMenuListProps {
    show: boolean;
    top: number;
}

export const StyledMenuList = styled.ul<IMenuListProps>`
    position: absolute;
    display: ${props => (props.show ? 'inline-block' : 'none')};
    left: 0;
    top: ${props => `${props.top}px`};
    min-width: 90px;
    margin-top: 5px;
    padding: 4px 0;
    text-align: left;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    list-style: none;
`;

export const StyledTitle = styled.div`
    display: block;
    color: #1890ff;
    background-color: transparent;
    cursor: ${(props: { disabled: boolean }) => (props.disabled ? 'no-drop' : 'pointer')};
    text-align: center;
`;

export const StyledDropDown = styled.div`
    position: relative;
    display: inline-block;
    min-width: 90px;
`;
