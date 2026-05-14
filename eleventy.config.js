module.exports = function(eleventyConfig) {
  
  // 1. 全局数据配置：统一定义允许的搜索引擎白名单
  // 你可以在模板中通过 {{ seoWhiteList }} 访问这个数组
  eleventyConfig.addGlobalData("seoWhiteList", ["baidu.com", "bing.com", "google.com", "rdqjm.com"]);

  // 2. 集合逻辑：定义 blog 集合并处理上下篇跳转
  eleventyConfig.addCollection("blog", function(collectionApi) {
    // 获取 posts 文件夹下的所有 md 文件，并按日期升序排列
    const posts = collectionApi.getFilteredByGlob("./posts/*.md").sort((a, b) => {
      return a.date - b.date;
    });

    // 为每一篇文章手动绑定 prevPost 和 nextPost 供内页调用
    for (let i = 0; i < posts.length; i++) {
      const prevPost = posts[i - 1];
      const nextPost = posts[i + 1];

      posts[i].data.prevPost = prevPost;
      posts[i].data.nextPost = nextPost;
    }

    return posts;
  });

  // 3. 过滤器配置：注册日期格式化过滤器 (修复之前提到的 dateFilter 报错)
  eleventyConfig.addFilter("dateFilter", function(dateValue) {
    if (!dateValue || !(dateValue instanceof Date)) return "";
    return dateValue.getFullYear() + "-" + 
           (dateValue.getMonth() + 1).toString().padStart(2, '0') + "-" + 
           dateValue.getDate().toString().padStart(2, '0');
  });

  // 4. 自定义标签：用于在页面中插入搜索引擎拦截脚本
  eleventyConfig.addShortcode("searchEngineOnly", function() {
    return `
      <script>
        (function() {
          var ref = document.referrer;
          // 从全局配置获取白名单，并确保包含当前域名防止内链拦截
          var whiteList = ["baidu.com", "bing.com", "google.com", "rdqjm.com"];
          var isOK = false;
          if (ref) {
            for (var i = 0; i < whiteList.length; i++) {
              if (ref.toLowerCase().indexOf(whiteList[i]) !== -1) { isOK = true; break; }
            }
          }
          // 如果不是搜索来源，直接跳到 404
          if (!isOK) { window.location.href = "/404.html"; }
        })();
      </script>
    `;
  });

  // 5. 静态资源拷贝
  eleventyConfig.addPassthroughCopy("ai1");
  eleventyConfig.addPassthroughCopy("assets");

  // 6. 项目整体目录与引擎配置
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};