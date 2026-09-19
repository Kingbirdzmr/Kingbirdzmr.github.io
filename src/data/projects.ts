import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'communication-control-codesign',
    title: 'Communication × Control',
    featured: true,
    eyebrow: {
      en: 'Research Direction 01',
      zh: '研究方向 01',
      ja: '研究テーマ 01'
    },
    summary: {
      en: 'Jointly allocate wireless, computation, and control resources according to control urgency, uncertainty, and risk.',
      zh: '依据控制紧迫性、不确定性与风险，联合分配无线、计算与控制资源。',
      ja: '制御の緊急度、不確実性、リスクに応じて、無線・計算・制御資源を統合的に配分します。'
    },
    tags: ['MPC', 'Resource Allocation', 'Wireless']
  },
  {
    slug: 'multi-uav-autonomy',
    title: 'Multi-UAV Autonomy',
    featured: true,
    eyebrow: {
      en: 'Research Direction 02',
      zh: '研究方向 02',
      ja: '研究テーマ 02'
    },
    summary: {
      en: 'Design scalable coordination, mapping, edge computing, and resilient networking mechanisms for autonomous UAV teams.',
      zh: '面向自主无人机集群设计可扩展的协同、建图、边缘计算与韧性网络机制。',
      ja: '自律UAV群のためのスケーラブルな協調、マッピング、エッジ計算、耐障害ネットワークを設計します。'
    },
    tags: ['Multi-UAV', 'Edge Computing', 'Mapping']
  },
  {
    slug: 'learning-optimization',
    title: 'Learning-Augmented Optimization',
    featured: true,
    eyebrow: {
      en: 'Research Direction 03',
      zh: '研究方向 03',
      ja: '研究テーマ 03'
    },
    summary: {
      en: 'Use graph learning and expert-guided prediction to accelerate hard combinatorial optimization while preserving feasibility.',
      zh: '利用图学习与专家引导预测加速困难的组合优化，同时保持可行性。',
      ja: 'グラフ学習と専門家誘導型予測により、実行可能性を保ちながら難しい組合せ最適化を高速化します。'
    },
    tags: ['GNN', 'MILP', 'Imitation Learning']
  },
  {
    slug: 'cyber-physical-security',
    title: 'Cyber-Physical Security',
    featured: true,
    eyebrow: {
      en: 'Research Direction 04',
      zh: '研究方向 04',
      ja: '研究テーマ 04'
    },
    summary: {
      en: 'Model attacks as control-and-network uncertainty and design resilient decision-making mechanisms for connected autonomous systems.',
      zh: '将攻击建模为控制与网络不确定性，并为互联自主系统设计韧性决策机制。',
      ja: '攻撃を制御・ネットワーク不確実性としてモデル化し、接続型自律システムのレジリエントな意思決定を設計します。'
    },
    tags: ['DDoS', 'Risk', 'Resilience']
  }
];
