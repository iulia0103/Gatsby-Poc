import React from "react";
import styled from "styled-components";
import Layout from "../layout/layout";

const Container = styled.div`
    color: ${({ theme }) => theme.colors.magenta};
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.jade};
`;

const Anchor = styled.a`
    margin: 20px 0;
    text-decoration: underline;
`;

const About = () => (
    <Layout>
        <Container>
            <Title>Gatsby is nice</Title>
            <p>Such wow. Very React.</p>
            <Anchor
                href="https://www.gatsbyjs.org/docs"
                rel="noopener noreferrer"
                target="_blank">
                Go to Gatsby docs
            </Anchor>
        </Container>
    </Layout>
);

export default About;
