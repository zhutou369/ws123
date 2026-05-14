module.exports = function(eleventyConfig) {
  
  // 1. 定义并增强 blog 集合逻辑
  eleventyConfig.addCollection("blog", function(collectionApi) {
    // 获取 posts 文件夹下的所有 md 文件，并按日期升序排列（方便计算上下篇）
    const posts = collectionApi.getFilteredByGlob("./posts/*.md").sort((a, b) => {
      return a.date - b.date;
    });

    // 核心：为每一篇文章手动绑定 prevPost 和 nextPost
    for (let i = 0; i < posts.length; i++) {
      const prevPost = posts[i - 1];
      const nextPost = posts[i + 1];

      // 将找到的关联文章存储到该文章的 data 属性中，供内页模板调用
      posts[i].data.prevPost = prevPost;
      posts[i].data.nextPost = nextPost;
    }

    // 返回排序后的集合。如果希望首页显示的列表是最新的在前，可以在模板中使用 | reverse
    return posts;
  });

  // 2. 静态资源拷贝配置
  eleventyConfig.addPassthroughCopy("ai1");
  eleventyConfig.addPassthroughCopy("assets");

  // 3. 项目整体配置
  return {
    dir: {
      input: ".",      // 设置根目录为输入
      output: "_site"  // 设置输出目录
    },
    // 强制 Eleventy 使用 Nunjucks 渲染 HTML 和 Markdown 文件
    // 这是确保 {% for %} 和 {{ 变量 }} 能够正常解析的关键配置
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};