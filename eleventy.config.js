module.exports = function(eleventyConfig) {
  // 1. 核心：监视 posts 文件夹。哪怕是文章内容变了，11ty 也会重新构建
  eleventyConfig.addWatchTarget("./posts/");

  // 2. 静态资源搬运：确保 admin 和 assets 文件夹被直接拷贝到生成的网站中
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  
  // 3. 如果你的图片存在 posts 文件夹里，也需要拷贝它
  // eleventyConfig.addPassthroughCopy("posts/*.jpg"); 

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};