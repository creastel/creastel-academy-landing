import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
    path: `.env`,
});

const config: GatsbyConfig = {
    jsxRuntime: `automatic`,
    siteMetadata: {
        siteUrl: 'https://www.academy.creastel.com',
        url: 'https://www.academy.creastel.com',
        title: 'Creastel Academy',
        titleTemplate: 'Creastel Academy – %s',
        description: 'Become the architect of tomorrow\'s apps.',
        image: '/images/logo.png',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Creastel Academy`,
                short_name: `Creastel Academy`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `standalone`,
                icon: `static/images/logo.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [`Inter\:400,500,600,700`],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: process.env.GOOGLE_TAG_MANAGER_ID || 'G-XXXXXXXXXX',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' },
                enableWebVitalsTracking: true,
            },
        },
    ],
};

export default config;
