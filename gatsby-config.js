/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-eslint", //by default lints js/jsx and excludes node_modules|.cache|public
            options: {
                stages: ["develop"] //by default only lints in develop, can also lint when building JS "build-javascript"
            }
        },
        {
            resolve: "gatsby-plugin-stylelint"
        },
        {
            resolve: "gatsby-plugin-styled-components",
            options: {
                //"ssr": false, //avoids server - client mismatch due to different class generation
                displayName: true //help identify your components in the DOM without React DevTools <button class="Button-asdf123 asdf123" />
            }
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "RMAPI",
                fieldName: "rickAndMorty",
                url: "https://rickandmortyapi-gql.now.sh/"
            }
        }
        // {
        //     resolve: "gatsby-plugin-graphql-codegen",
        //     options: {
        //         documentPaths: ["./src/**/*.{js,jsx}"]
        //     }
        // }
    ]
};
