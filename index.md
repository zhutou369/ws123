---
layout: layout.njk
title: WhatsApp网页版 | 官方指南
---

<style>
    html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; background: #f0f2f5; }
    :root { --wa-green: #128C7E; --wa-dark: #075E54; }
    .header-full { background: var(--wa-green); color: white; width: 100%; padding: 60px 0; text-align: center; }
    .main-box { max-width: 1100px; margin: -40px auto 60px; background: white; border-radius: 12px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); box-sizing: border-box; }
    .post-card { display: flex; justify-content: space-between; align-items: center; padding: 25px 15px; border-bottom: 1px solid #f8f8f8; text-decoration: none; color: #333; transition: 0.3s; }
    .post-card:hover { background: #fcfdfd; transform: translateX(10px); color: var(--wa-green); }
    .footer-full { text-align: center; padding: 50px 0; background: white; border-top: 1px solid #eee; width: 100%; color: #999; }
</style>

<div class="header-full">
    <h1 style="margin:0; font-size: 2.8rem;">WhatsApp 网页版</h1>
    <p style="margin-top:10px; opacity:0.9;">2026 官方安全通讯指南</p>
</div>

<div class="main-box">
    <h3 style="border-left: 6px solid var(--wa-green); padding-left: 15px; margin-bottom: 25px; color: var(--wa-dark);">最新资讯动态</h3>

    <div class="post-feed">
        {# 注意：这里去掉了 .includes 语法，改用最安全的标准循环 #}
        {% for post in collections.blog reverse %}
        <a href="{{ post.url }}" class="post-card">
            <h2 style="margin:0; font-size: 1.4rem;">{{ post.data.title }}</h2>
            <span style="color: #ccc;">{{ post.date | date: "%Y-%m-%d" }}</span>
        </a>
        {% endfor %}
    </div>

    {% if collections.blog.length == 0 %}
    <p style="text-align: center; color: #ccc; padding: 60px;">内容库同步中，请在后台发布新文章...</p>
    {% endif %}
</div>

<footer class="footer-full">
    <p style="font-weight: bold; color: #666;">© 2026 WhatsApp网页版. 保留所有权利。</p>
</footer>