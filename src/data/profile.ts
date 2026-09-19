import type { Localized } from '../types';

export const profile = {
  // Canonical English name used for metadata / document titles.
  name: 'Mingrui Zheng',

  // Name shown in the site header for each language.
  displayName: {
    en: 'Mingrui Zheng',
    zh: '郑铭睿',
    ja: '鄭　銘睿'
  } satisfies Localized,

  // Smaller name shown below the large hero title.
  nativeName: {
    en: '郑铭睿',
    zh: '郑铭睿',
    ja: '鄭　銘睿'
  } satisfies Localized,

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
  { key: 'uav', label: { en: 'Multi-UAV Autonomy', zh: '多无人机自主系统', ja: 'マルチUAV自律システム' } },
  { key: 'codesign', label: { en: 'Communication–Control Co-Design', zh: '通信—控制协同设计', ja: '通信・制御協調設計' } },
  { key: 'wireless-iot', label: { en: 'Secure Wireless IoT', zh: '安全无线物联网', ja: 'セキュア無線IoT' } },
  { key: 'edge', label: { en: 'Edge Intelligence & VNF', zh: '边缘智能与VNF', ja: 'エッジ知能・VNF' } },
  { key: 'security', label: { en: 'Cyber-Physical Security', zh: '信息物理安全', ja: 'サイバーフィジカルセキュリティ' } },
  { key: 'learning', label: { en: 'Learning-Augmented Optimization', zh: '学习增强优化', ja: '学習拡張型最適化' } }
];
