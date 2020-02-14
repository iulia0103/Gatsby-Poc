import { css } from "styled-components";

export const sizes = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
};

function smUp(...args) {
    return css`
        @media (min-width: ${sizes.sm}px) {
            ${css(...args)}
        }
    `;
}

function mdUp(...args) {
    return css`
        @media (min-width: ${sizes.md}px) {
            ${css(...args)}
        }
    `;
}

function lgUp(...args) {
    return css`
        @media (min-width: ${sizes.lg}px) {
            ${css(...args)}
        }
    `;
}

function xlUp(...args) {
    return css`
        @media (min-width: ${sizes.xl}px) {
            ${css(...args)}
        }
    `;
}

function xlDown(...args) {
    return css`
        @media (min-width: ${sizes.lg}px and (max-width: ${sizes.xl -
        0.02}px)) {
            ${css(...args)}
        }
    `;
}

const media = {
    smUp,
    mdUp,
    lgUp,
    xlUp,
    xlDown
};

export default media;
