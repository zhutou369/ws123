---
layout: layout.njk
title: 我的导航站
---

# 欢迎来到我的导航站

这里是基于 Cloudflare Pages 和 11ty 搭建的自动化资讯站。

---

## 🚀 最新发布文章

<ul>
{% for post in collections.blog | reverse %}
  <li style="margin-bottom: 15px;">
    <a href="{{ post.url }}" style="font-size: 1.2rem;">{{ post.data.title }}</a>
    <br>
    <small style="color: #666;">发布时间：{{ post.date }}</small>
  </li>
{% endfor %}
</ul>

{% if collections.blog.length == 0 %}
<p style="color: #999;">暂无文章，请前往后台发布第一篇资讯。</p>
{% endif %}

---

### 💡 管理说明
* **发布文章**：访问 `/admin/` 进入后台。
* **自动更新**：后台保存后，Cloudflare 会在 1 分钟内自动更新此页面。