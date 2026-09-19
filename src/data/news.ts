import type { Localized } from '../types';

export const news: { date: string; text: Localized }[] = [
  {
    date: '2026-07-26',
    text: {
      en: 'Our paper on DDoS-resilient distributed MPC for multi-UAV assisted IoT networks was accepted by IEEE Internet of Things Journal.',
      zh: '关于多无人机辅助物联网网络中DDoS韧性分布式MPC的论文被 IEEE Internet of Things Journal 录用。',
      ja: 'マルチUAV支援IoTネットワーク向けDDoS耐性分散MPCに関する論文が IEEE Internet of Things Journal に採録されました。'
    }
  },
  {
    date: '2025-11-01',
    text: {
      en: 'Started doctoral research at Hokkaido University.',
      zh: '开始在北海道大学进行博士阶段研究。',
      ja: '北海道大学で博士課程の研究を開始しました。'
    }
  }
];
