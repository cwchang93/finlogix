import styled from 'styled-components';

/** styled mixin start */

const btnMixin = () => `
    display: inline-block;
    position: relative;
    min-width: 70px;
    min-height: 40px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: 401;
    font-family: Microsoft JhengHei;
    outline: 0;
    text-decoration: none;
    cursor: pointer;

`;

const btnCSS = (color: string, background: string, border: string) => {
    return `
    &:hover,
    &:focus {
        color: ${color};
        background: ${background};
        border-color: ${border};
    }

    &:disabled {
        color: rgba(0, 0, 0, 0.25);
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        cursor: not-allowed;
    }`;
};

const typeMixin = () => {
    return `
    &.default {
        color: #222222;
        ${btnCSS('#1890ff', '#ffffff', '#1890ff')}
    }

    &.primary {
        background-color: #1890ff;
        border-color: #1890ff;
        color: #ffffff;
        ${btnCSS('#ffffff', '#40a9ff', '#40a9ff')}
    }

    &.fin {
        background-color: #01254F;
        border-color: #01254F;
        color: #ffffff;
        ${btnCSS('#ffffff', '#01254F', '#01254F')}
    }
    `;
};

/** styled mixin end */

export const StyledLink = styled.a`
    &.link {
        ${btnMixin}

        display: inline-block;
        margin: 0;
        color: #1890ff;
        border: 0;
        text-decoration: none;
        line-height: 30px;

        &:hover {
            text-decoration: none;
        }
    }

    ${typeMixin}
`;

export const StyledButton = styled.button`
    display: inline-block;
    position: relative;
    min-width: 70px;
    min-height: 40px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: 401;
    font-family: Microsoft JhengHei;
    outline: 0;
    text-decoration: none;
    cursor: pointer;

    &.link {
        display: inline-block;
        margin: 0;
        color: #1890ff;
        border: 0;
        text-decoration: none;
        line-height: 30px;

        &:hover {
            text-decoration: none;
        }
    }

    ${typeMixin}
`;
