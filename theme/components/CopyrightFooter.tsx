import { usePageData } from '@rspress/core/runtime';
import type { DefaultThemeConfig } from '@rspress/core';

interface ThemeConfig extends DefaultThemeConfig {
  companyName?: string;
  companyUrl?: string;
  startYear?: number;
  endYear?: number;
  icpNumber?: string;
}

export function CopyrightFooter() {
  const { siteData } = usePageData();
  const themeConfig = siteData.themeConfig as ThemeConfig;

  // 获取默认值
  const currentYear = new Date().getFullYear();
  const startYear = themeConfig?.startYear ?? 2020;
  const endYear = themeConfig?.endYear ?? currentYear;
  
  // 公司名称：优先使用配置，其次使用站点 title
  const companyName = themeConfig?.companyName || siteData.title || 'A公司';
  
  // 公司 URL：优先使用配置，其次使用当前域名
  const companyUrl = themeConfig?.companyUrl || (typeof window !== 'undefined' ? window.location.origin : '');

  // ICP 备案号
  const icpNumber = themeConfig?.icpNumber;

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
      {icpNumber && (
        <div className="rspress-copyright-icp">
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rspress-copyright-link"
          >
            {icpNumber}
          </a>
        </div>
      )}
    </div>
  );
}
