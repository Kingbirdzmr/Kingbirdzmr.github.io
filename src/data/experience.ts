import type { Localized } from '../types';

type EducationEntry = {
  period: Localized;
  institution: Localized;
  degree: Localized;
  organization?: Localized;
  laboratory?: Localized;
  advisor?: Localized;
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
    organization: {
      en: 'Graduate School of Information Science and Technology · Division of Information Science and Technology · Course of Systems Science and Informatics',
      zh: '信息科学院 · 信息科学专业 · 系统信息科学课程',
      ja: '大学院情報科学院 · 情報科学専攻 · システム情報科学コース'
    },
    laboratory: {
      en: 'Dynamical Systems and Control Laboratory',
      zh: '系统控制理论研究室',
      ja: 'システム制御理論研究室'
    },
    advisor: {
      en: 'Advisor: Koichi Kobayashi',
      zh: '导师：小林孝一',
      ja: '指導教員：小林 孝一'
    }
  },
  {
    period: {
      en: 'Sep. 2022 — Jun. 2025',
      zh: '2022.09 — 2025.06',
      ja: '2022.09 — 2025.06'
    },
    institution: { en: 'Jinan University', zh: '暨南大学', ja: '暨南大学' },
    degree: { en: 'M.S. in Cyberspace Security', zh: '网络空间安全硕士', ja: 'サイバー空間セキュリティ 修士' },
    organization: {
      en: 'College of Cyberspace Security',
      zh: '网络空间安全学院',
      ja: 'サイバー空間セキュリティ学院'
    },
    advisor: {
      en: 'Advisors: Jinming Wen and Tengjiao He',
      zh: '导师：温金明、何腾蛟',
      ja: '指導教員：温 金明、何 騰蛟'
    },
    detail: {
      en: 'Research on UAV-assisted secure IoT communications and optimization.',
      zh: '研究无人机辅助安全物联网通信与优化。',
      ja: 'UAV支援型セキュアIoT通信と最適化を研究。'
    }
  }
];
