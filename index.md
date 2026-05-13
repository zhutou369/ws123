---
layout: layout.njk
title: WhatsApp网页版 | 官方安全指南
---

<style>
    /* 1. 暴力重置实现全屏 */
    html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; background: #f0f2f5; overflow-x: hidden; }
    :root { --wa-green: #128C7E; --wa-dark: #075E54; }

    /* 顶部全屏 Header */
    .header-full { background: var(--wa-green); color: white; width: 100%; padding: 70px 0; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .header-full h1 { margin: 0; font-size: 3rem; font-weight: 800; }

    /* 中间白色卡片 */
    .content-card { 
        max-width: 1100px; 
        margin: -40px auto 60px; 
        background: white; 
        border-radius: 15px; 
        padding: 45px; 
        box-shadow: 0 10px 40px rgba(0,0,0,0.06); 
        box-sizing: border-box;
    }

    /* 纯净文章列表（去掉冗余URL） */
    .post-row { 
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        padding: 25px 15px; 
        border-bottom: 1px solid #f8f8f8; 
        text-decoration: none; 
        color: #333; 
        transition: 0.3s;
    }
    .post-row:hover { background: #fcfdfd; transform: translateX(10px); color: var(--wa-green); }
    .post-row h2 { margin: 0; font-size: 1.45rem; font-weight: 600; }
    .post-row .date-label { color: #ccc; font-family: monospace; font-size: 0.9rem; }

    /* 全屏页脚 */
    .footer-full { text-align: center; padding: 50px 0; background: white; border-top: 1px solid #eee; width: 100%; }
</style>

<div class="header-full">
    <h1>WhatsApp 网页版</h1>
    <p style="margin-top:15px; opacity:0.9; font-size: 1.2rem;">官方安全通讯指南 · 2026 技术支持</p>
</div>

<div class="content-card">
    <div style="color: #666; margin-bottom: 35px; line-height: 1.8; border-bottom: 1px solid #eee; padding-bottom: 25px;">
        欢迎来到 <strong>WhatsApp网页版</strong> 专业资讯站。我们致力于为您提供最安全、最稳定的 <strong>WhatsApp Web</strong> 登录教程与账号安全策略。
    </div>

    <h3 style="border-left: 6px solid var(--wa-green); padding-left: 15px; margin-bottom: 25px; color: var(--wa-dark);">最新更新资讯</h3>

    <div class="article-container">
        {# 强制循环所有在 posts 文件夹下的文章 #}
        {% for post in collections.all | reverse %}
            {% if post.filePathStem.includes("/posts/") %}
            <a href="{{ post.url }}" class="post-row">
                <h2>{{ post.data.title }}</h2>
                <span class="date-label">{{ post.date | date: "%Y-%m-%d" }}</span>
            </a>
            {% endif %}
        {% endfor %}
    </div>

    {% if collections.all.length < 2 %}
    <p style="text-align: center; color: #ccc; padding: 60px;">内容同步中，请尝试在后台重新发布新文章...</p>
    {% endif %}
</div>

<footer class="footer-full">
    <p style="font-weight: bold; color: #666; font-size: 1.2rem;">© 2026 WhatsApp网页版. 保留所有权利。</p>
</footer>