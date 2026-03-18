import { Layout as BasicLayout } from '@rspress/core/theme-original';
import { CopyrightFooter } from './components/CopyrightFooter';
import { BlogPostNav } from './components/BlogPostNav';
import { usePageData } from '@rspress/core/runtime';
import './styles/index.css';
import './styles/blog.css';

function Layout(props: React.ComponentProps<typeof BasicLayout>) {
  const { page } = usePageData();

  // 判断是否为博客文章页面
  const isBlogPost = page?.routePath?.includes('/blog') &&
    !page?.routePath?.endsWith('/blog/') &&
    page?.routePath !== '/blog' &&
    page?.routePath !== '/zh/blog' &&
    page?.routePath !== '/en/blog';

  return (
    <>
      <BasicLayout {...props} />
      {isBlogPost && <BlogPostNav />}
      <CopyrightFooter />
    </>
  );
}

export { Layout };
export * from '@rspress/core/theme-original';