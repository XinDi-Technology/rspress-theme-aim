import React from 'react';
import { FooterCopyright } from './FooterCopyright';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <main style={{ flex: 1 }}>{children}</main>
    <FooterCopyright />
  </div>
);

export { Layout };
