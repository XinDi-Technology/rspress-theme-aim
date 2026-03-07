import { usePageData } from '@rspress/core/runtime';
import type { DefaultThemeConfig } from '@rspress/core';

interface CopyrightConfig {
  companyName?: string;
  companyUrl?: string;
  startYear?: number;
  endYear?: number;
}

interface ThemeConfig extends DefaultThemeConfig {
  copyright?: CopyrightConfig;
}

export function CopyrightFooter() {
  const { siteData, page } = usePageData();
  const themeConfig = siteData.themeConfig as ThemeConfig;
  const copyright = themeConfig?.copyright;

  // 获取默认值
  const currentYear = new Date().getFullYear();
  const startYear = copyright?.startYear ?? 2020;
  const endYear = copyright?.endYear ?? currentYear;
  
  // 公司名称：优先使用配置，其次使用站点 title，最后使用域名
  const companyName = copyright?.companyName || siteData.title || 'A公司';
  
  // 公司 URL：优先使用配置，其次使用当前域名
  const companyUrl = copyright?.companyUrl || (typeof window !== 'undefined' ? window.location.origin : '');

  // 构建年份显示文本
  const yearText = startYear === endYear ? String(startYear) : `${startYear}-${endYear}`;

  return (
    <div className="rspress-copyright-footer">
      <div className="rspress-copyright-content">
        <span>© {yearText} </span>
        {companyUrl ? (
          <a 
            href={companyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="rspress-copyright-link"
          >
            {companyName}
          </a>
        ) : (
          <span>{companyName}</span>
        )}
      </div>
    </div>
  );
}
