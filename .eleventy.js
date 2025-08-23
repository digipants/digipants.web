module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');
    eleventyConfig.addPassthroughCopy('./src/_redirects');
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
