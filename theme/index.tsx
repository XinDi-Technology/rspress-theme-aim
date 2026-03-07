import { Layout as BasicLayout } from '@rspress/core/theme-original';
import { FooterCopyright } from './FooterCopyright';

const Layout = () => (
  <BasicLayout afterFooter={<FooterCopyright />} />
);

export { Layout };
export * from '@rspress/core/theme-original';
