import { usePageData } from '@rspress/core/runtime';
import { useEffect, useState } from 'react';

export function BlogPostNav() {
  const { page, siteData } = usePageData();
  const [isMounted, setIsMounted] = useState(false);

  // 确保只在客户端渲染
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 如果还没挂载，返回 null 避免 hydration 错误
  if (!isMounted) {
    return null;
  }

  // 获取当前语言
  let currentLang = 'zh';
  if (page && page.routePath) {
    if (page.routePath.startsWith('/en/')) {
      currentLang = 'en';
    } else if (page.routePath.startsWith('/zh/')) {
      currentLang = 'zh';
    }
  }

  // 获取 base 路径并移除末尾斜杠
  const basePath = (siteData.base || '/').replace(/\/$/, '');

  // 获取当前页面的 routePath
  const currentRoutePath = page?.routePath || '';

  // 获取所有博客文章
  const blogPosts = getBlogPosts(siteData, currentLang);

  // 查找当前文章在博客列表中的索引
  const currentIndex = blogPosts.findIndex(post => post.routePath === currentRoutePath);

  // 获取上一篇文章和下一篇文章
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // 生成链接
  const getLink = (routePath: string) => {
    // 直接使用 routePath，它已经包含了正确的路径
    return `${basePath}${routePath}`;
  };

  return (
    <>
      {/* 博客文章导航 */}
      {(prevPost || nextPost) && (
        <div className="blog-post-nav">
          {prevPost && (
            <a href={getLink(prevPost.routePath)} className="blog-post-nav-prev">
              <span className="blog-post-nav-label">← 上一篇</span>
              <span className="blog-post-nav-title">{prevPost.title}</span>
            </a>
          )}
          {nextPost && (
            <a href={getLink(nextPost.routePath)} className="blog-post-nav-next">
              <span className="blog-post-nav-label">下一篇 →</span>
              <span className="blog-post-nav-title">{nextPost.title}</span>
            </a>
          )}
        </div>
      )}
    </>
  );
}

// 获取博客文章列表
function getBlogPosts(siteData: any, currentLang: string) {
  const blogPosts: Array<{ routePath: string; title: string; date: Date }> = [];

  if (siteData.pages && Array.isArray(siteData.pages)) {
    for (const page of siteData.pages) {
      if (!page || !page.routePath) {
        continue;
      }

      const hasBlogPath = page.routePath.includes('/blog');
      if (!hasBlogPath) continue;

      // 排除博客首页
      const isBlogIndex =
        page.routePath === '/blog' ||
        page.routePath === `/${currentLang}/blog` ||
        page.routePath.endsWith('/blog/') ||
        page.routePath === `/${currentLang}/blog/`;

      if (isBlogIndex) continue;

      // 获取页面语言
      let pageLang = 'zh';
      if (page.routePath.startsWith('/en/')) {
        pageLang = 'en';
      } else if (page.routePath.startsWith('/zh/')) {
        pageLang = 'zh';
      }

      if (pageLang === currentLang) {
        const frontMatter = page.frontmatter || {};
        if (frontMatter.title) {
          blogPosts.push({
            routePath: page.routePath,
            title: frontMatter.title,
            date: frontMatter.date ? new Date(frontMatter.date) : new Date(),
          });
        }
      }
    }
  }

  // 按日期排序（最新的在前），日期相同则按标题排序
  blogPosts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    const dateDiff = b.date.getTime() - a.date.getTime();
    if (dateDiff !== 0) return dateDiff;
    // 日期相同，按标题排序
    return a.title.localeCompare(b.title);
  });

  return blogPosts;
}
