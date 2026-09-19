import type { Localized } from '../types';

type EducationEntry = {
  period: Localized;
  institution: Localized;
  degree: Localized;
  detail?: Localized;
};

export const education: EducationEntry[] = [
  {
    period: {
      en: 'Oct. 2025 — Present',
      zh: '2025.10 — 至今',
      ja: '2025.10 — 現在'
    },
    institution: { en: 'Hokkaido University', zh: '北海道大学', ja: '北海道大学' },
    degree: { en: 'Ph.D. Student', zh: '博士研究生', ja: '博士課程' },
    detail: {
      en: 'Systems Science and Informatics',
      zh: '系统科学与信息学',
      ja: 'システム科学・情報学'
    }
  },
  {
    period: {
      en: 'Sep. 2022 — Jun. 2025',
      zh: '2022.09 — 2025.06',
      ja: '2022.09 — 2025.06'
    },
    institution: { en: 'Jinan University', zh: '暨南大学', ja: '暨南大学' },
    degree: { en: 'M.S. in Cyberspace Security', zh: '网络空间安全硕士', ja: 'サイバーセキュリティ 修士' },
    detail: {
      en: 'Research on UAV-assisted secure IoT communication and optimization.',
      zh: '研究无人机辅助安全物联网通信与优化。',
      ja: 'UAV支援型セキュアIoT通信と最適化を研究。'
    }
  }
];
