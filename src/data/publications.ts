import type { Publication } from '../types';

// Add new papers here. Shared facts (year, authors, venue, DOI) appear once;
// language-specific title/abstract/status stay synchronized in the same object.
export const publications: Publication[] = [
  {
    slug: 'distributed-mpc-ddos-uav-iot',
    year: 2026,
    type: 'journal',
    featured: true,
    title: {
      en: 'Distributed MPC for DDoS-Resilient Control and Communication Optimization in Multi-UAV Assisted IoT Smart Agriculture Networks',
      zh: '面向多无人机辅助物联网智慧农业网络的DDoS韧性分布式MPC控制与通信优化',
      ja: 'マルチUAV支援IoTスマート農業ネットワークにおけるDDoS耐性分散MPC制御・通信最適化'
    },
    authors: ['Mingrui Zheng', 'Koichi Kobayashi', 'Yuh Yamashita', 'Hao Li', 'Tengjiao He'],
    venue: 'IEEE Internet of Things Journal',
    status: {
      en: 'Accepted',
      zh: '已录用',
      ja: '採録'
    },
    abstract: {
      en: 'This work studies distributed model predictive control and communication optimization for resilient multi-UAV assisted IoT systems under DDoS attacks. Replace this short website abstract with the final public abstract when convenient.',
      zh: '本文研究DDoS攻击下多无人机辅助物联网系统中的分布式模型预测控制与通信优化。建议在正式公开主页前，将此处替换为论文最终公开摘要。',
      ja: 'DDoS攻撃下のマルチUAV支援IoTシステムを対象に、分散モデル予測制御と通信最適化を扱います。公開前に最終版の公開アブストラクトへ差し替えてください。'
    },
    tags: ['MPC', 'Multi-UAV', 'IoT', 'Security'],
    links: {
      doi: 'https://doi.org/10.1109/JIOT.2026.3719293'
    },
    bibtex: `@article{zheng2026distributed,\n  author  = {Mingrui Zheng and Koichi Kobayashi and Yuh Yamashita and Hao Li and Tengjiao He},\n  title   = {Distributed MPC for DDoS-Resilient Control and Communication Optimization in Multi-UAV Assisted IoT Smart Agriculture Networks},\n  journal = {IEEE Internet of Things Journal},\n  year    = {2026},\n  doi     = {10.1109/JIOT.2026.3719293}\n}`
  }
];
