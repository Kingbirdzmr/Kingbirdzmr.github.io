import type { Localized } from '../types';

export const profile = {
  name: 'Mingrui Zheng',
  nativeName: '郑铭睿',
  initials: 'MZ',
  role: {
    en: 'Ph.D. Student · Systems Science and Informatics',
    zh: '博士生 · 系统科学与信息学',
    ja: '博士課程 · システム科学・情報学'
  } satisfies Localized,
  affiliation: {
    en: 'Hokkaido University · Sapporo, Japan',
    zh: '北海道大学 · 日本札幌',
    ja: '北海道大学 · 札幌'
  } satisfies Localized,
  statement: {
    en: 'I study communication-control co-design for autonomous networked systems, with particular interests in multi-UAV systems, wireless networking, optimization, cyber-physical security, and learning-augmented decision making.',
    zh: '我的研究关注自主网络化系统中的通信与控制协同设计，主要涉及多无人机系统、无线网络、优化、信息物理安全以及学习增强的决策方法。',
    ja: '自律ネットワークシステムにおける通信・制御協調設計を研究しています。特に、マルチUAV、無線ネットワーク、最適化、サイバーフィジカルセキュリティ、学習支援型意思決定に関心があります。'
  } satisfies Localized,
  email: '',
  scholar: '',
  orcid: '',
  github: '',
  cvPdf: { en: '', zh: '', ja: '' }
};

export const researchKeywords = [
  { key: 'uav', label: { en: 'Multi-UAV Systems', zh: '多无人机系统', ja: 'マルチUAVシステム' } },
  { key: 'control', label: { en: 'Networked Control', zh: '网络化控制', ja: 'ネットワーク制御' } },
  { key: 'wireless', label: { en: 'Wireless Communications', zh: '无线通信', ja: '無線通信' } },
  { key: 'optimization', label: { en: 'Optimization', zh: '优化', ja: '最適化' } },
  { key: 'security', label: { en: 'Cyber-Physical Security', zh: '信息物理安全', ja: 'サイバーフィジカルセキュリティ' } },
  { key: 'learning', label: { en: 'Learning for Optimization', zh: '面向优化的学习', ja: '最適化のための学習' } }
];
