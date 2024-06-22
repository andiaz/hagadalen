const { EleventyI18nPlugin } = require("@11ty/eleventy");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "sv",
	});

    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/js");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}