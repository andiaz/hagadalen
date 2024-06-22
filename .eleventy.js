const { EleventyI18nPlugin } = require("@11ty/eleventy");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "sv",
	});

    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/js");

    // Shortcode to process images
    eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, outputFormat = "jpeg") => {
        if (alt === undefined) {
            // You bet we throw an error on missing alt (alt="" works okay)
            throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }

        let metadata = await Image(src, {
            widths: [null], // keep the original width
            formats: [outputFormat],
            urlPath: "/img/", // this is the path Eleventy will use in the output HTML
            outputDir: "./public/img/", // this is the output directory
            sharpOptions: {
                // any additional sharp options
            }
        });

        let imageAttributes = {
            alt,
            sizes: "100vw",
            loading: "lazy",
            decoding: "async",
        };

        // You bet we throw an error on missing images
        if (!metadata[outputFormat] || !metadata[outputFormat].length) {
            throw new Error(`No output images for myImage from: ${src}`);
        }

        return Image.generateHTML(metadata, imageAttributes);
    });

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