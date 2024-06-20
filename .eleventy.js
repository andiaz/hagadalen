const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "sv",
	});

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/js");
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}