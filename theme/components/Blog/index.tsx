import { usePageData } from '@rspress/core/runtime';

interface BlogPost {
  title: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  link: string;
  summary: string;
}

export function BlogList() {
  const { siteData } = usePageData();
  
  // 获取当前语言
  const currentLang = siteData.lang || 'zh';
  
  // 暂时使用静态数据，确保博客功能能够正常工作
  // 后续可以改为动态获取
  const blogPosts: BlogPost[] = [
    {
      title: '欢迎使用 Rspress 主题 AIm',
      date: '2026-03-17',
      author: 'AIm 团队',
      categories: ['公告', '教程'],
      tags: ['Rspress', '主题', '博客'],
      link: currentLang === 'en' ? '/en/blog/welcome' : '/blog/welcome',
      summary: 'Rspress Theme AIm 是一个基于 Rspress 的文档站主题，提供了丰富的功能和良好的用户体验。'
    }
  ];

  return (
    <div className="blog-list">
      <h2>最新文章</h2>
      <div className="blog-posts">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <h3>
                <a href={post.link}>{post.title}</a>
              </h3>
              <div className="blog-post-meta">
                <span className="blog-post-date">{post.date}</span>
                <span className="blog-post-author">{post.author}</span>
              </div>
              <div className="blog-post-summary">{post.summary}</div>
              <div className="blog-post-tags">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-posts">
            <p>暂无博客文章</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function BlogPostHeader() {
  const { siteData } = usePageData();
  
  // 获取当前页面的元数据
  const pageData = siteData.pageData;
  const frontMatter = pageData?.frontmatter || {};

  return (
    <div className="blog-post-header">
      <h1>{frontMatter.title || 'Blog Post'}</h1>
      <div className="blog-post-meta">
        <span className="blog-post-date">{frontMatter.date || ''}</span>
        <span className="blog-post-author">{frontMatter.author || ''}</span>
      </div>
      {frontMatter.categories && frontMatter.categories.length > 0 && (
        <div className="blog-post-categories">
          {frontMatter.categories.map((category: string, index: number) => (
            <span key={index} className="blog-category">{category}</span>
          ))}
        </div>
      )}
      {frontMatter.tags && frontMatter.tags.length > 0 && (
        <div className="blog-post-tags">
          {frontMatter.tags.map((tag: string, index: number) => (
            <span key={index} className="blog-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}