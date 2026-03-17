import { usePageData } from '@rspress/core/runtime';
import './index.css';

export interface BlogItem {
  title?: string;
  description?: string;
  date?: Date;
  link?: string;
  authors?: string[];
}

export interface BlogProps {
  posts: BlogItem[];
}

export const useBlogPages = (): BlogItem[] => {
  const { siteData } = usePageData();

  // 获取当前语言
  const currentLang = siteData.lang || 'zh';

  // 动态获取博客文章数据
  const blogPosts: BlogItem[] = [];

  if (siteData.pages && Array.isArray(siteData.pages)) {
    // 过滤出博客文章页面
    siteData.pages.forEach((page) => {
      // 安全检查：确保 page 和 page.route 存在
      if (!page || !page.route) {
        return;
      }

      // 检查是否是博客文章（路径包含 /blog/）
      const isBlogPost = page.route.includes('/blog/');

      // 排除博客首页
      const isBlogIndex = page.route.endsWith('/blog/') ||
                        page.route.endsWith('/blog/index');

      if (isBlogPost && !isBlogIndex) {
        // 确保当前语言的文章
        const isCurrentLang = page.route.startsWith(`/${currentLang}/blog/`) ||
                             (currentLang === 'zh' && !page.route.startsWith('/en/') && page.route.includes('/blog/'));

        if (isCurrentLang) {
          const frontMatter = page.frontmatter || {};

          // 确保文章有必要的元数据
          if (frontMatter.title) {
            blogPosts.push({
              title: frontMatter.title,
              description: frontMatter.description || '',
              date: frontMatter.date ? new Date(frontMatter.date) : undefined,
              link: page.route,
              authors: frontMatter.author ? [frontMatter.author] : [],
            });
          }
        }
      }
    });

    // 按日期排序（最新的在前）
    blogPosts.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return b.date.getTime() - a.date.getTime();
    });
  }

  return blogPosts;
};

export function BlogList({ posts }: BlogProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
  };

  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <article key={index} className="blog-item">
          <a href={post.link} className="blog-title">
            <h2>{post.title}</h2>
          </a>
          <div className="blog-meta">
            {post.date && <time className="blog-date">{formatDate(post.date)}</time>}
            {post.authors && post.authors.length > 0 && (
              <span className="blog-author">
                {post.authors.join(', ')}
              </span>
            )}
          </div>
          {post.description && <p className="blog-description">{post.description}</p>}
        </article>
      ))}
    </div>
  );
}

export function BlogListAuto() {
  const posts = useBlogPages();
  return <BlogList posts={posts} />;
}

