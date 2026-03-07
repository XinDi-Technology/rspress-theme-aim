import React from 'react';
import { FooterCopyright } from './FooterCopyright';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <main style={{ flex: 1 }}>{children}</main>
    <FooterCopyright />
  </div>
);

export const Root = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default Layout;
