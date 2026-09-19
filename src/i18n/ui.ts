import type { Lang, Localized } from '../types';

export const langs: Lang[] = ['en', 'zh', 'ja'];
export const languageNames: Record<Lang, string> = { en: 'EN', zh: '中文', ja: '日本語' };

export const ui = {
  nav: {
    home: { en: 'Home', zh: '首页', ja: 'ホーム' },
    research: { en: 'Research', zh: '研究', ja: '研究' },
    publications: { en: 'Publications', zh: '论文', ja: '研究業績' },
    projects: { en: 'Projects', zh: '项目', ja: 'プロジェクト' },
    experience: { en: 'Experience', zh: '经历', ja: '経歴' },
    notes: { en: 'Notes', zh: '学术笔记', ja: 'ノート' },
    cv: { en: 'CV', zh: '简历', ja: 'CV' }
  },
  common: {
    selectedResearch: { en: 'Selected Research', zh: '研究方向', ja: '主な研究テーマ' },
    selectedPublications: { en: 'Selected Publications', zh: '代表性论文', ja: '主な研究業績' },
    latestNews: { en: 'Latest News', zh: '近期动态', ja: '最新情報' },
    explore: { en: 'Explore', zh: '查看', ja: '見る' },
    viewAll: { en: 'View all', zh: '查看全部', ja: 'すべて見る' },
    abstract: { en: 'Abstract', zh: '摘要', ja: '概要' },
    bibtex: { en: 'BibTeX', zh: 'BibTeX', ja: 'BibTeX' },
    copy: { en: 'Copy', zh: '复制', ja: 'コピー' },
    copied: { en: 'Copied', zh: '已复制', ja: 'コピーしました' },
    current: { en: 'Currently', zh: '目前', ja: '現在' },
    basedIn: { en: 'Based in', zh: '所在地', ja: '拠点' },
    sapporo: { en: 'Sapporo, Japan', zh: '日本札幌', ja: '札幌' },
    researchOn: { en: 'Researching', zh: '研究主题', ja: '研究中' },
    researchNow: { en: 'Communication-control co-design for autonomous networked systems', zh: '自主网络化系统中的通信与控制协同设计', ja: '自律ネットワークシステムの通信・制御協調設計' },
    openSearch: { en: 'Search', zh: '搜索', ja: '検索' },
    backTop: { en: 'Back to top', zh: '返回顶部', ja: 'トップへ' },
    noItems: { en: 'No items yet.', zh: '暂无内容。', ja: 'まだ項目がありません。' }
  }
} as const;

export function t(value: Localized, lang: Lang) {
  return value[lang] ?? value.en;
}
