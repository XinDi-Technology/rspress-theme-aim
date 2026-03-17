import { usePageData } from '@rspress/core/runtime';

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
  const { siteData, page } = usePageData();

  // 从页面路径中获取当前语言
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

  // 临时调试
  if (typeof window !== 'undefined') {
    console.log('Base path:', basePath);
    console.log('Current URL:', window.location.href);
    console.log('Current lang:', currentLang);
  }

  // 动态获取博客文章数据
  const blogPosts: BlogItem[] = [];

  if (siteData.pages && Array.isArray(siteData.pages)) {
    // 过滤出博客文章页面
    for (const page of siteData.pages) {
      // 安全检查：确保 page 和 page.routePath 存在
      if (!page || !page.routePath) {
        continue;
      }

      // 检查路由中是否包含 blog
      const hasBlogPath = page.routePath.includes('/blog');

      if (!hasBlogPath) {
        continue;
      }

      // 排除博客首页（index.mdx）
      const isBlogIndex =
        page.routePath === '/blog' ||
        page.routePath === `/${currentLang}/blog` ||
        page.routePath.endsWith('/blog/') ||
        page.routePath === `/${currentLang}/blog/`;

      if (isBlogIndex) {
        continue;
      }

      // 获取页面的语言
      let pageLang = 'zh';
      if (page.routePath.startsWith('/en/')) {
        pageLang = 'en';
      } else if (page.routePath.startsWith('/zh/')) {
        pageLang = 'zh';
      }

      // 调试：输出页面的语言信息
      if (typeof window !== 'undefined') {
        console.log('Page routePath:', page.routePath, 'pageLang:', pageLang, 'currentLang:', currentLang);
      }

      // 确保当前语言的文章
      if (pageLang === currentLang) {
        const frontMatter = page.frontmatter || {};

        // 确保文章有必要的元数据
        if (frontMatter.title) {
          // 移除 routePath 开头的斜杠
          let cleanRoute = page.routePath.replace(/^\//, '');

          const link = `${basePath}/${cleanRoute}`;
          if (typeof window !== 'undefined') {
            console.log('Generated link:', link, 'from routePath:', page.routePath);
          }
          blogPosts.push({
            title: frontMatter.title,
            description: frontMatter.description || '',
            date: frontMatter.date ? new Date(frontMatter.date) : undefined,
            link: link,
            authors: frontMatter.author ? [frontMatter.author] : [],
          });
        }
      }
    }

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
    return <p className="blog-empty">暂无博客文章</p>;
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
