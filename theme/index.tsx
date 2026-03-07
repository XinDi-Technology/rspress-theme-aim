import { Layout as BasicLayout } from '@rspress/core/theme-original';
import { CopyrightFooter } from './components/CopyrightFooter';
import './styles/index.css';

function Layout() {
  return (
    <BasicLayout
      afterFooter={<CopyrightFooter />}
    />
  );
}

export { Layout };
export * from '@rspress/core/theme-original';
