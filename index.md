---
layout: layout.njk
title: WhatsApp网页版 | 官方安全登录入口
---

<style>
    /* 1. 强制全屏重置 */
    html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #f0f2f5; }
    :root { --wa-green: #128C7E; --wa-dark: #075E54; }

    /* 全屏顶部 Banner */
    .hero-banner { 
        background: var(--wa-green); 
        color: white; 
        width: 100%; 
        padding: 70px 0; 
        text-align: center; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .hero-banner h1 { margin: 0; font-size: 2.8rem; font-weight: 800; }

    /* 居中的白色卡片内容区 */
    .main-wrapper {
        max-width: 1100px;
        margin: -40px auto 60px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        padding: 40px;
        box-sizing: border-box;
    }

    .seo-text { border-bottom: 2px solid #f9f9f9; padding-bottom: 25px; margin-bottom: 30px; color: #555; line-height: 1.8; }

    /* 文章列表样式 */
    .article-list { display: flex; flex-direction: column; gap: 15px; }
    .article-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px;
        border: 1px solid #eee;
        border-radius: 8px;
        text-decoration: none;
        transition: 0.3s;
    }
    .article-card:hover { border-color: var(--wa-green); background: #fcfdfd; transform: translateX(8px); }
    .article-card h2 { margin: 0; font-size: 1.4rem; color: #333; font-weight: 600; }
    .article-card .date { color: #aaa; font-size: 0.9rem; font-family: monospace; }

    /* 全屏页脚 */
    .site-footer {
        width: 100%;
        background: white;
        padding: 50px 0;
        text-align: center;
        border-top: 1px solid #eee;
        color: #999;
    }
</style>

<div class="hero-banner">
    <h1>WhatsApp 网页版</h1>
    <p style="margin-top:15px; opacity: 0.9;">官方安全通讯指南 · 2026 实时更新</p>
</div>

<div class="main-wrapper">
    <div class="seo-text">
        欢迎访问专业 <strong>WhatsApp网页版</strong> 资讯门户。我们实时同步 <strong>WhatsApp Web</strong> 的最新官方动态，为您提供安全登入、账号防护及高效办公的深度教程。
    </div>

    <h3 style="color: var(--wa-dark); border-left: 6px solid var(--wa-green); padding-left: 15px; margin-bottom: 25px;">最新资讯动态</h3>

    <div class="article-list">
        {% for post in collections.blog | reverse %}
        <a href="{{ post.url }}" class="article-card">
            <h2>{{ post.data.title }}</h2>
            <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
        </a>
        {% endfor %}
    </div>

    {% if collections.blog.length == 0 %}
    <p style="text-align: center; color: #ccc; padding: 80px 0;">文章正在生成库中，请稍后刷新...</p>
    {% endif %}
</div>

<footer class="site-footer">
    <p style="font-size: 1.1rem; color: #666; font-weight: bold; margin: 0;">© 2026 WhatsApp网页版. 保留所有权利。</p>
</footer>