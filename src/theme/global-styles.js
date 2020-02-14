import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
    ${normalize}

    html,
    body {
        font-family: "DIN Pro", sans-serif;
        font-size: 13px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    /*
    * Perfect Scrollbar styling (third party)
    */
    /* stylelint-disable */
    .ps {
        overflow: hidden !important;
        overflow-anchor: none;
        -ms-overflow-style: none;
        touch-action: auto;

        &__rail-x {
            bottom: 0;
            display: none;
            height: 15px;
            opacity: 0;
            position: absolute;
            transition: background-color 0.2s linear, opacity 0.2s linear;

            &:hover,
            &:focus {
                > .ps {
                    &__thumb-x {
                        background-color: #999;
                        height: 11px;
                    }
                }
            }

            &.ps {
                &--clicking {
                    .ps {
                        &__thumb-x {
                            background-color: #999;
                            height: 11px;
                        }
                    }
                }
            }
        }

        &__rail-y {
            display: none;
            opacity: 0;
            position: absolute;
            right: 0;
            transition: background-color 0.2s linear, opacity 0.2s linear;
            width: 15px;

            &:hover,
            &:focus {
                > .ps {
                    &__thumb-y {
                        background-color: #999;
                        height: 11px;
                    }
                }
            }

            &.ps {
                &--clicking {
                    .ps {
                        &__thumb-y {
                            background-color: #999;
                            height: 11px;
                        }
                    }
                }
            }
        }

        &--active-x {
            > .ps {
                &__rail-x {
                    background-color: transparent;
                    display: block;
                }
            }
        }

        &--active-y {
            > .ps {
                &__rail-y {
                    background-color: transparent;
                    display: block;
                }
            }
        }

        &__rail-x:hover,
        &__rail-y:hover,
        &__rail-x:focus,
        &__rail-y:focus,
        &__rail-x.ps--clicking,
        &__rail-y.ps--clicking {
            background-color: #eee;
            opacity: 0.9;
        }

        &--focus {
            > .ps {
                &__rail-x,
                &__rail-y {
                    opacity: 0.6;
                }
            }
        }

        &--scrolling-x {
            > .ps {
                &__rail-x {
                    opacity: 0.6;
                }
            }
        }

        &--scrolling-y {
            > .ps {
                &__rail-y {
                    opacity: 0.6;
                }
            }
        }

        &:hover {
            > .ps {
                &__rail-x,
                &__rail-y {
                    opacity: 0.6;
                }
            }
        }

        &__thumb-x {
            background-color: #aaa;
            border-radius: 6px;
            bottom: 2px;
            height: 6px;
            position: absolute;
            transition: background-color 0.2s linear, height 0.2s ease-in-out;
        }

        &__thumb-y {
            background-color: #aaa;
            border-radius: 6px;
            position: absolute;
            right: 2px;
            transition: background-color 0.2s linear, width 0.2s ease-in-out;
            width: 6px;
        }
    }

    @supports (-ms-overflow-style: none) {
        .ps {
            overflow: auto !important;
        }
    }

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .ps {
            overflow: auto !important;
        }
    }
    /* stylelint-enable */

`;
