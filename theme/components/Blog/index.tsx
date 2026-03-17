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
  
  // 动态获取博客文章数据
  const blogPosts: BlogPost[] = [];
  
  if (siteData.pages && Array.isArray(siteData.pages)) {
    // 过滤出博客文章页面
    siteData.pages.forEach((page) => {
      // 安全检查：确保 page 和 page.route 存在
      if (!page || !page.route) {
        return;
      }
      
      // 检查是否是博客文章（路径包含 /blog/ 且不是 index 页面）
      const isBlogPost = page.route.includes('/blog/') && !page.route.endsWith('/blog/');
      
      if (isBlogPost) {
        // 确保当前语言的文章
        const isCurrentLang = page.route.startsWith(`/${currentLang}/blog/`) || 
                             (currentLang === 'zh' && page.route.startsWith('/blog/'));
        
        if (isCurrentLang) {
          const frontMatter = page.frontmatter || {};
          
          // 确保文章有必要的元数据
          if (frontMatter.title) {
            blogPosts.push({
              title: frontMatter.title,
              date: frontMatter.date || '',
              author: frontMatter.author || '',
              categories: frontMatter.categories || [],
              tags: frontMatter.tags || [],
              link: page.route,
              summary: frontMatter.summary || ''
            });
          }
        }
      }
    });
    
    // 按日期排序（最新的在前）
    blogPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

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