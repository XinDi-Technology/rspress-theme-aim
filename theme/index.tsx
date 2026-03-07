import Theme from '@rspress/core/theme';
import { CopyrightFooter } from './components/CopyrightFooter';
import './styles/index.css';

const { Layout } = Theme;

function CustomLayout() {
  return (
    <Layout
      afterFooter={<CopyrightFooter />}
    />
  );
}

export default {
  ...Theme,
  Layout: CustomLayout,
};

export * from '@rspress/core/theme';
