const { EleventyI18nPlugin } = require("@11ty/eleventy");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const path = require("path");

// Define base directories
const SRC_DIR = "./src";
const OUTPUT_DIR = "./public";
const IMG_SRC_DIR = path.join(SRC_DIR, "img");
const IMG_OUTPUT_DIR = path.join(OUTPUT_DIR, "img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "sv",
    });

    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

    eleventyConfig.addPassthroughCopy(path.join(SRC_DIR, "css"));
    eleventyConfig.addPassthroughCopy(path.join(SRC_DIR, "js"));
    eleventyConfig.addPassthroughCopy(IMG_SRC_DIR);

    // Shortcode to process images
    eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, outputFormat = "jpeg", className = "") => {
        if (alt === undefined) {
            throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }

        let inputPath = path.join(SRC_DIR, src);
        let metadata = await Image(inputPath, {
            widths: [null], // keep the original width
            formats: [outputFormat],
            urlPath: "/img/", // this is the path Eleventy will use in the output HTML
            outputDir: IMG_OUTPUT_DIR, // this is the output directory
            sharpOptions: {
                // any additional sharp options
            }
        });

        let imageAttributes = {
            alt,
            sizes: "100vw",
            loading: "lazy",
            decoding: "async",
            class: className,
        };

        if (!metadata[outputFormat] || !metadata[outputFormat].length) {
            throw new Error(`No output images for myImage from: ${inputPath}`);
        }

        return Image.generateHTML(metadata, imageAttributes);
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: SRC_DIR,
            output: OUTPUT_DIR
        }
    };
};
