import React from 'react';

interface FooterCopyrightProps {
  startYear?: number;
  endYear?: number;
  siteName?: string;
  siteUrl?: string;
}

export const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  startYear = 2022,
  endYear = new Date().getFullYear(),
  siteName = 'xindi-technology.github.io',
  siteUrl,
}) => (
  <div style={{ textAlign: 'center', padding: '1em 0', fontSize: '0.9em', color: '#888' }}>
    © {startYear} - {endYear} {siteUrl ? <a href={siteUrl}>{siteName}</a> : siteName}
  </div>
);
