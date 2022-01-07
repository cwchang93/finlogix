import styled from 'styled-components';

export const StyledClickOutside = styled.div`
    position: relative;
    display: inline-block;
`;

export const StyledTriggers = styled.div`
    display: inline-block;
`;

export const StyledWindows = styled.div`
    position: absolute;

    left: 0;

    background-color: white;

    padding: 4px;

    border: 1px solid #ddd;

    &.paddingRight {
        padding-right: 25px;
    }

    &:not(.show) {
        display: none;
    }

    .closeBtn {
        position: absolute;

        right: 0;
        top: 0;

        cursor: pointer;
    }
`;
