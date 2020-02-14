import React from "react";
import PropTypes from "prop-types";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/global-styles";
import theme from "../theme/theme";

import Header from "../components/Header/Header";

const Content = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
    width: 100%;
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header text="Gatsby Project" />

        <Content>{children}</Content>
    </ThemeProvider>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
