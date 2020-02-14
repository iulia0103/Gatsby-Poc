import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import media from "../theme/responsive";
import Layout from "../layout/layout";

const Container = styled.div`
    color: ${({ theme }) => theme.colors.magenta};
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    padding: 10px;

    ${media.mdUp`
        color: ${({ theme }) => theme.colors.jade};
        padding: 0;
    `}
`;

const Image = styled.img`
    width: 300px;
`;

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
    {
        rickAndMorty {
            character(id: 1) {
                name
                image
            }
        }
    }
`;

const Home = ({ data }) => {
    const { name, image } = data.rickAndMorty.character;

    return (
        <Layout>
            <Container>
                <Title>Hello Gatsby!</Title>
                <p>Rick & Morty Character Query - ID 1</p>
                <p>{name}</p>
                <Image src={image} alt={name} />
            </Container>
        </Layout>
    );
};

Home.propTypes = {
    data: PropTypes.shape({
        rickAndMorty: PropTypes.shape({
            character: PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired
            }).isRequired
        })
    })
};

export default Home;
