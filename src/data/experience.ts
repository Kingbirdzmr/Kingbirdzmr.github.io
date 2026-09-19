import type { Localized } from '../types';

export const education: { period: string; institution: Localized; degree: Localized; detail?: Localized }[] = [
  {
    period: '2025 — Present',
    institution: { en: 'Hokkaido University', zh: '北海道大学', ja: '北海道大学' },
    degree: { en: 'Ph.D. Student', zh: '博士研究生', ja: '博士課程' },
    detail: {
      en: 'Systems Science and Informatics',
      zh: '系统科学与信息学',
      ja: 'システム科学・情報学'
    }
  },
  {
    period: '2022 — 2025',
    institution: { en: 'Jinan University', zh: '暨南大学', ja: '暨南大学' },
    degree: { en: 'M.S. in Cyberspace Security', zh: '网络空间安全硕士', ja: 'サイバーセキュリティ 修士' },
    detail: {
      en: 'Research on UAV-assisted secure IoT communication and optimization.',
      zh: '研究无人机辅助安全物联网通信与优化。',
      ja: 'UAV支援型セキュアIoT通信と最適化を研究。'
    }
  }
];
