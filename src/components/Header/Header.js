import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
    width: 100%;
`;

const Menu = styled.ul`
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    list-style-type: none;
    padding: 0;
`;

const MenuItem = styled.li`
    padding: 0 10px;
    text-decoration: underline;
    text-transform: uppercase;
`;

const Title = styled.h2`
    text-transform: uppercase;
`;

const Header = ({ text, items }) => (
    <Container>
        <Title>{text}</Title>
        <Menu>
            {items.map(item => (
                <MenuItem key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                </MenuItem>
            ))}
        </Menu>
    </Container>
);

Header.propTypes = {
    text: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};

Header.defaultProps = {
    items: [
        { name: "home", path: "/" },
        { name: "about", path: "/about" }
    ]
};

export default Header;
