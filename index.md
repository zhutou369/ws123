---
layout: layout.njk
title: WhatsApp网页版登入 | 官方指南
---

<style>
    /* 强制全屏且内容居中 */
    body, html { margin: 0 !important; padding: 0 !important; width: 100% !important; background: #f0f2f5; }
    :root { --wa-green: #128C7E; --wa-dark: #075E54; }

    .full-banner { background: var(--wa-green); color: white; width: 100%; padding: 60px 0; text-align: center; }
    
    .main-box { 
        max-width: 1100px; 
        margin: -40px auto 60px; 
        background: white; 
        border-radius: 12px; 
        padding: 40px; 
        box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
    }

    /* 自动生成的文章列表样式 */
    .post-item { 
        display: flex; 
        justify-content: space-between; 
        padding: 25px 0; 
        border-bottom: 1px solid #f5f5f5; 
        text-decoration: none; 
        color: #333; 
    }
    .post-item:hover { transform: translateX(10px); transition: 0.3s; color: var(--wa-green); }
    .post-item h2 { margin: 0; font-size: 1.4rem; }
    .post-item span { color: #ccc; }

    .site-footer { text-align: center; padding: 50px 0; background: white; border-top: 1px solid #eee; }
</style>

<div class="full-banner">
    <h1>WhatsApp 网页版</h1>
    <p>官方安全指南 · 2026 实时更新</p>
</div>

<div class="main-box">
    <div style="color: #666; margin-bottom: 30px; line-height: 1.8;">
        欢迎访问 <strong>WhatsApp网页版</strong>。我们提供最新的 <strong>WhatsApp Web</strong> 登录入口和安全技术指南。
    </div>

    <h3 style="border-left: 5px solid var(--wa-green); padding-left: 15px; margin-bottom: 20px;">最新资讯动态</h3>

    <div class="article-feed">
        {% for post in collections.blog | reverse %}
        <a href="{{ post.url }}" class="post-item">
            <h2>{{ post.data.title }}</h2>
            <span>{{ post.date | date: "%Y-%m-%d" }}</span>
        </a>
        {% endfor %}
    </div>

    {% if collections.blog.length == 0 %}
    <p style="text-align: center; color: #ccc; padding: 50px;">内容同步中...</p>
    {% endif %}
</div>

<footer class="site-footer">
    <p style="font-weight: bold; color: #444;">© 2026 WhatsApp网页版. 保留所有权利。</p>
</footer>