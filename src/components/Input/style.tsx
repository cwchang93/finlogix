import styled from 'styled-components';

enum EInputHeight {
    large = '40px',
    default = '32px',
    small = '24px',
}

interface IContainerProps {
    label?: string;
    require?: string;
    icon?: {
        position: string;
        pic: any;
    };
}

interface IInputTextProps {
    width?: string;
    height?: string;
}

/**mixin*/
const vCenter = () => `
    display: flex;
    align-items: center;
`;

export const StyledInputText = styled.input<IInputTextProps>`
    box-sizing: border-box;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: ${props => {
        return props.width || '';
    }};
    height: ${props => {
        return props.height || EInputHeight['default'];
    }};
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    &:focus {
        outline: none; /* 移除 webkit 瀏覽器閃一下框線的效果 */
    }
`;

export const StyledContainerDiv = styled.div<IContainerProps>`
    display: ${props => {
        return props.label && 'flex';
    }};

    /* position: relative; */

    label {
        ${vCenter};
        line-height: 1.5;
        margin: 0 5px;
        ${(props: any) => {
        return {
            ['&::' + props.require]: { content: "'*'", color: 'red' },
        };
    }}
    }

    .inputWrap {
        position: relative;
        ${vCenter};
    }

    .icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    /* span {
        position: relative;
    } */

    .msg {
        margin-left: 10px;
        /* margin-top: 5px; */
        color: red;
    }
`;
