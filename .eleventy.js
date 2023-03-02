const { NetlifyIdentity } = require('netlify-identity-widget');
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addNunjucksAsyncShortcode('auth', async function () {
        const user = NetlifyIdentity.currentUser();
        if (!user) {
            return `<a href="/login-page">Log in to view pricing</a>`;
        }
        return `<p>Here is the pricing information...</p>`;
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
