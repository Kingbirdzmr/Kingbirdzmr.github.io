import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'communication-control-codesign',
    title: {
      en: 'Communication–Control Co-Design',
      zh: '通信—控制协同设计',
      ja: '通信・制御協調設計'
    },
    featured: true,
    eyebrow: { en: 'Research Direction 01', zh: '研究方向 01', ja: '研究テーマ 01' },
    summary: {
      en: 'Jointly optimize wireless communication, computation, and control decisions according to control urgency, uncertainty, and risk.',
      zh: '依据控制紧迫性、不确定性与风险，联合优化无线通信、计算与控制决策。',
      ja: '制御の緊急度、不確実性、リスクに応じて、無線通信・計算・制御の意思決定を統合的に最適化します。'
    },
    tags: ['MPC', 'Resource Allocation', 'Wireless']
  },
  {
    slug: 'multi-uav-autonomy',
    title: {
      en: 'Multi-UAV Systems & Autonomous Exploration',
      zh: '多无人机系统与自主探索',
      ja: 'マルチUAVシステム・自律探索'
    },
    featured: true,
    eyebrow: { en: 'Research Direction 02', zh: '研究方向 02', ja: '研究テーマ 02' },
    summary: {
      en: 'Study scalable coordination, mobility, map sharing, and safety-aware planning for teams of autonomous UAVs.',
      zh: '研究面向自主无人机集群的可扩展协同、移动、地图共享与安全感知规划。',
      ja: '自律UAV群を対象に、スケーラブルな協調、移動、地図共有、安全性を考慮した計画を研究します。'
    },
    tags: ['Multi-UAV', 'Mapping', 'Trajectory Planning']
  },
  {
    slug: 'learning-optimization',
    title: {
      en: 'Learning-Augmented Optimization',
      zh: '学习增强优化',
      ja: '学習拡張型最適化'
    },
    featured: true,
    eyebrow: { en: 'Research Direction 03', zh: '研究方向 03', ja: '研究テーマ 03' },
    summary: {
      en: 'Use graph learning, imitation learning, and expert-guided prediction to accelerate difficult combinatorial optimization while preserving feasibility.',
      zh: '利用图学习、模仿学习和专家引导预测加速困难的组合优化，同时保持解的可行性。',
      ja: 'グラフ学習、模倣学習、専門家誘導型予測により、実行可能性を保ちながら難しい組合せ最適化を高速化します。'
    },
    tags: ['GNN', 'MILP', 'Imitation Learning']
  },
  {
    slug: 'cyber-physical-security',
    title: {
      en: 'Cyber-Physical Security & Resilience',
      zh: '信息物理安全与韧性',
      ja: 'サイバーフィジカルセキュリティ・レジリエンス'
    },
    featured: true,
    eyebrow: { en: 'Research Direction 04', zh: '研究方向 04', ja: '研究テーマ 04' },
    summary: {
      en: 'Model attacks, authentication overhead, and network uncertainty inside control and resource-allocation problems for resilient connected systems.',
      zh: '将攻击、认证开销与网络不确定性纳入控制和资源分配问题，为互联自主系统构建韧性决策机制。',
      ja: '攻撃、認証オーバーヘッド、ネットワーク不確実性を制御・資源配分問題へ組み込み、接続型自律システムのレジリエントな意思決定を設計します。'
    },
    tags: ['DDoS', 'Risk', 'Resilience']
  },
  {
    slug: 'uav-edge-vnf',
    title: {
      en: 'UAV/IoT Edge Computing & VNF Orchestration',
      zh: '无人机/物联网边缘计算与 VNF 编排',
      ja: 'UAV/IoTエッジコンピューティング・VNFオーケストレーション'
    },
    featured: false,
    eyebrow: { en: 'Research Direction 05', zh: '研究方向 05', ja: '研究テーマ 05' },
    summary: {
      en: 'Coordinate UAV deployment, service-function placement, task offloading, routing, and energy constraints in edge networks.',
      zh: '联合研究边缘网络中的无人机部署、服务功能配置、任务卸载、路由与能源约束。',
      ja: 'エッジネットワークにおけるUAV配置、サービス機能配置、タスクオフローディング、ルーティング、エネルギー制約を統合的に扱います。'
    },
    tags: ['Edge Computing', 'VNF', 'Offloading']
  },
  {
    slug: 'llm-guided-control',
    title: {
      en: 'LLM-Guided Scheduling & Control',
      zh: '大语言模型引导的调度与控制',
      ja: 'LLM誘導型スケジューリング・制御'
    },
    featured: false,
    eyebrow: { en: 'Research Direction 06', zh: '研究方向 06', ja: '研究テーマ 06' },
    summary: {
      en: 'Connect natural-language task descriptions with scheduling, resource allocation, and receding-horizon control for cyber-physical systems.',
      zh: '将自然语言任务描述与信息物理系统中的调度、资源分配和滚动时域控制相连接。',
      ja: '自然言語によるタスク記述を、サイバーフィジカルシステムのスケジューリング、資源配分、リシーディングホライズン制御へ接続します。'
    },
    tags: ['LLM', 'Scheduling', 'Receding-Horizon Control']
  },
  {
    slug: 'secure-energy-aware-iot',
    title: {
      en: 'Secure & Energy-Aware Wireless IoT',
      zh: '安全与能量感知无线物联网',
      ja: 'セキュア・エネルギー認識型無線IoT'
    },
    featured: false,
    eyebrow: { en: 'Research Direction 07', zh: '研究方向 07', ja: '研究テーマ 07' },
    summary: {
      en: 'Study physical-layer security, energy harvesting, solar-powered networking, and secure data collection in resource-constrained IoT systems.',
      zh: '研究资源受限物联网中的物理层安全、能量采集、太阳能供电网络与安全数据采集。',
      ja: '資源制約のあるIoTシステムにおける物理層セキュリティ、エネルギーハーベスティング、太陽光発電ネットワーク、安全なデータ収集を研究します。'
    },
    tags: ['Physical-Layer Security', 'Energy Harvesting', 'IoT']
  },
  {
    slug: 'intelligent-sensing',
    title: {
      en: 'Intelligent Sensing & Lightweight AI',
      zh: '智能感知与轻量人工智能',
      ja: 'インテリジェントセンシング・軽量AI'
    },
    featured: false,
    eyebrow: { en: 'Research Direction 08', zh: '研究方向 08', ja: '研究テーマ 08' },
    summary: {
      en: 'Explore lightweight learning, hierarchical routing, and domain-robust inference for wearable and sensor-driven intelligent systems.',
      zh: '探索面向可穿戴设备与传感智能系统的轻量学习、分层路由与跨域鲁棒推理。',
      ja: 'ウェアラブル・センサ駆動型知能システムに向けて、軽量学習、階層ルーティング、ドメインロバスト推論を研究します。'
    },
    tags: ['SensorLLM', 'Wearable Computing', 'Lightweight AI']
  }
];
