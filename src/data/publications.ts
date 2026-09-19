import type { Localized, Publication } from '../types';

const L = (en: string, zh: string, ja: string): Localized => ({ en, zh, ja });

// Publication records follow the latest 論文リスト supplied in September 2026.
// Chinese-only journal quartiles / CCF classifications are taken from the 2026.10 report.
// A name listed in correspondingAuthors is rendered with a superscript * on the website.
// Under-review papers intentionally have no detail page, abstract, or BibTeX entry.
export const publications: Publication[] = [
  // Journal Papers
  {
    slug: 'max-min-secrecy-rate-uav-eh-iot',
    year: 2025,
    type: 'journal',
    statusKind: 'published',
    status: L('Published', '已发表', '掲載済み'),
    title: L(
      'Max-Min Secrecy Rate for UAV-Assisted Energy Harvesting IoT Networks',
      '无人机辅助能量采集物联网中的最大最小保密速率',
      'UAV支援型エネルギーハーベスティングIoTネットワークにおける最大最小秘匿レート'
    ),
    authors: ['Mingrui Zheng', 'Tianrui Feng', 'Tengjiao He'],
    correspondingAuthors: ['Tengjiao He'],
    venue: 'Information',
    details: L('Vol. 16, No. 2: 158 (2025)', '第16卷，第2期，158（2025）', 'Vol. 16, No. 2, 158 (2025)'),
    abstract: L(
      'This work studies fair and secure data collection in an energy-harvesting IoT network with a server UAV and an eavesdropping UAV. It formulates the max-min secrecy-rate problem as a mixed-integer nonlinear program, derives a mixed-integer linear reformulation, and proposes the Fly Nearest Location heuristic for lower-complexity operation. The reported results show that the heuristic attains about 78.15% of the MILP benchmark on average.',
      '本文研究由服务器无人机和窃听无人机参与的能量采集物联网中的公平安全数据采集问题。工作以最大化最小保密速率为目标，首先建立混合整数非线性规划模型并进一步线性化为混合整数线性规划，同时提出低复杂度的 Fly Nearest Location 启发式算法。实验结果表明，该启发式方法平均可达到 MILP 基准约 78.15% 的性能。',
      '本研究は、サーバUAVと盗聴UAVを含むエネルギーハーベスティングIoTネットワークにおける公平かつ安全なデータ収集を対象とする。最大最小秘匿レート問題を混合整数非線形計画として定式化し、混合整数線形計画への変換と低計算量の Fly Nearest Location ヒューリスティックを提案する。報告された結果では、同ヒューリスティックは平均してMILP基準の約78.15%の性能を達成している。'
    ),
    tags: ['UAV', 'IoT', 'Physical-Layer Security'],
    links: {
      doi: 'https://doi.org/10.3390/info16020158'
    },
    bibtex: `@article{Zheng2025MaxMinSecrecy,
  author  = {Mingrui Zheng and Tianrui Feng and Tengjiao He},
  title   = {Max-Min Secrecy Rate for UAV-Assisted Energy Harvesting IoT Networks},
  journal = {Information},
  volume  = {16},
  number  = {2},
  pages   = {158},
  year    = {2025},
  doi     = {10.3390/info16020158}
}`
  },
  {
    slug: 'risk-aware-secure-vehicle-platoons',
    year: 2026,
    type: 'journal',
    statusKind: 'published',
    status: L('Published', '已发表', '掲載済み'),
    title: L(
      'Risk-Aware Joint Communication and Control Resource Allocation for Secure Vehicle Platoons',
      '面向安全车辆编队的风险感知通信与控制联合资源分配',
      'セキュアな車両隊列のためのリスク認識型通信・制御統合リソース割当て'
    ),
    authors: ['Zhiwei Lin', 'Mingrui Zheng', 'Zebin Huang', 'Shuaiyu Zhou'],
    correspondingAuthors: ['Mingrui Zheng'],
    venue: 'IEEE Wireless Communications Letters',
    details: L('Vol. 15, pp. 835–839 (2026)', '第15卷，835–839页（2026）', 'Vol. 15, pp. 835–839 (2026)'),
    classificationZh: ['中科院二区期刊'],
    abstract: L(
      'This letter jointly models control performance, communication resources, authentication delay, edge processing, and attack uncertainty in secure vehicle platoons. It develops a risk-aware optimization framework and a practical DR–PDA solver that combines control updates, convex approximation, and Wasserstein–CVaR robustness. Numerical results demonstrate favorable cost, leakage-risk, attack-resilience, and runtime trade-offs, while the ablation study highlights the importance of tail-risk protection and explicit authentication-delay modeling.',
      '本文面向安全车辆编队，将控制性能、通信资源、认证时延、边缘处理以及攻击不确定性纳入统一建模。工作构建风险感知联合优化框架，并设计 DR–PDA 求解方法，将控制更新、凸近似以及 Wasserstein–CVaR 鲁棒机制结合起来。数值结果表明，该方法能够在系统代价、信息泄露风险、抗攻击能力和计算时间之间取得较好的折中，同时消融实验说明尾部风险保护与认证时延建模具有重要作用。',
      '本レターは、安全な車両隊列を対象に、制御性能、通信資源、認証遅延、エッジ処理、および攻撃不確実性を統合的に扱う。リスク認識型の共同最適化フレームワークと、制御更新・凸近似・Wasserstein–CVaRロバスト化を組み合わせたDR–PDAソルバを提案する。数値評価では、総コスト、情報漏えいリスク、耐攻撃性、計算時間の良好なトレードオフが示され、アブレーションによりテールリスク保護と認証遅延モデルの重要性も確認されている。'
    ),
    tags: ['Communication-Control Co-Design', 'Security', 'Vehicle Platoons'],
    links: {
      doi: 'https://doi.org/10.1109/LWC.2025.3637860'
    },
    bibtex: `@article{Lin2026RiskAware,
  author  = {Zhiwei Lin and Mingrui Zheng and Zebin Huang and Shuaiyu Zhou},
  title   = {Risk-Aware Joint Communication and Control Resource Allocation for Secure Vehicle Platoons},
  journal = {IEEE Wireless Communications Letters},
  volume  = {15},
  pages   = {835--839},
  year    = {2026},
  doi     = {10.1109/LWC.2025.3637860}
}`
  },
  {
    slug: 'malware-aware-uav-solar-iot',
    year: 2026,
    type: 'journal',
    featured: true,
    statusKind: 'published',
    status: L('Published', '已发表', '掲載済み'),
    title: L(
      'Malware Aware UAV-Assisted Data Collection and Processing in Solar-Powered IoT Networks',
      '太阳能供电物联网中面向恶意软件感知的无人机辅助数据采集与处理',
      '太陽光発電IoTネットワークにおけるマルウェア認識型UAV支援データ収集・処理'
    ),
    authors: ['Tengjiao He', 'Mingrui Zheng', 'Kwan-Wu Chin', 'Tianle Liu', 'Yizhou Luo'],
    correspondingAuthors: ['Tengjiao He'],
    venue: 'IEEE Transactions on Industrial Informatics',
    details: L('Vol. 22, No. 4, pp. 2875–2885 (2026)', '第22卷，第4期，2875–2885页（2026）', 'Vol. 22, No. 4, pp. 2875–2885 (2026)'),
    classificationZh: ['中科院一区 Top 期刊'],
    abstract: L(
      'This paper addresses malware-contaminated data collection in solar-powered IoT networks by equipping a UAV with a virtual network function for traffic inspection. A MILP jointly optimizes UAV placement and trajectory, data processing, channel allocation, and device energy use. For online operation, a neural-network mapping method stores integer decisions offline and retrieves them during flight, enabling fast linear-program refinement and reducing malware traffic reaching the gateway.',
      '本文针对太阳能供电物联网中终端感染恶意软件后产生异常流量的问题，在无人机上部署虚拟网络功能进行流量检测。所建立的 MILP 联合优化无人机位置与轨迹、数据处理、信道分配以及设备能量使用。为支持在线决策，论文提出神经网络映射方法，在离线阶段学习并存储整数决策，飞行过程中快速检索后再求解线性规划，从而降低到达网关的恶意流量。',
      '本研究は、太陽光発電IoTネットワークにおいて端末がマルウェアに感染し不正データを生成する状況を対象に、UAVへ仮想ネットワーク機能を搭載してトラフィックを検査する。MILPによりUAV配置・軌道、データ処理、チャネル割当て、端末エネルギー利用を共同最適化する。オンライン運用のため、整数決定をオフラインで記憶するニューラルネットワークマッピングを導入し、飛行中に対応する決定を取得して高速な線形計画更新を行うことで、ゲートウェイへ到達するマルウェアトラフィックを抑制する。'
    ),
    tags: ['UAV', 'IoT', 'Security'],
    links: {
      doi: 'https://doi.org/10.1109/TII.2025.3644942'
    },
    bibtex: `@article{He2026MalwareAware,
  author  = {Tengjiao He and Mingrui Zheng and Kwan-Wu Chin and Tianle Liu and Yizhou Luo},
  title   = {Malware Aware UAV-Assisted Data Collection and Processing in Solar-Powered IoT Networks},
  journal = {IEEE Transactions on Industrial Informatics},
  volume  = {22},
  number  = {4},
  pages   = {2875--2885},
  year    = {2026},
  doi     = {10.1109/TII.2025.3644942}
}`
  },
  {
    slug: 'serverless-edge-multislot-offloading',
    year: 2026,
    type: 'journal',
    statusKind: 'published',
    status: L('Published', '已发表', '掲載済み'),
    title: L(
      'Joint Function Configuration and Multislot Offloading in Solar-Powered Serverless Edge Computing',
      '太阳能供电无服务器边缘计算中的函数配置与多时隙卸载联合优化',
      '太陽光発電サーバレス・エッジコンピューティングにおける機能構成とマルチスロットオフローディングの共同最適化'
    ),
    authors: ['Benyu Chen', 'Tengjiao He', 'Mingrui Zheng', 'Junfei Zhan', 'Bing He'],
    correspondingAuthors: ['Tengjiao He'],
    venue: 'IEEE Internet of Things Journal',
    details: L('Vol. 13, No. 9, pp. 19616–19628 (2026)', '第13卷，第9期，19616–19628页（2026）', 'Vol. 13, No. 9, pp. 19616–19628 (2026)'),
    classificationZh: ['中科院一区 Top 期刊'],
    abstract: L(
      'This work jointly considers dynamic function configuration, function-download delay, multi-slot task offloading, and energy harvesting in serverless edge computing. It formulates a MILP that maximizes the number of processed tasks by coordinating offloading, function configuration and scheduling, download decisions, energy use, and channel allocation. A distributed D-TOEH protocol is then proposed for scalable operation and is reported to achieve 71.36% of the MILP benchmark on average with low polynomial complexity.',
      '本文在无服务器边缘计算中联合考虑动态函数配置、函数下载时延、多时隙任务卸载以及能量采集。工作建立 MILP，通过协调任务卸载、函数配置与调度、函数下载决策、能量使用和信道分配来最大化完成任务数量；随后提出可扩展的分布式 D-TOEH 协议。实验结果表明，D-TOEH 在保持较低多项式复杂度的同时，平均可达到 MILP 基准 71.36% 的性能。',
      '本研究は、サーバレス・エッジコンピューティングにおいて、動的機能構成、機能ダウンロード遅延、マルチスロットタスクオフローディング、エネルギーハーベスティングを共同で扱う。タスク処理数を最大化するMILPを構築し、オフローディング、機能構成・スケジューリング、ダウンロード判断、エネルギー利用、チャネル割当てを統合的に最適化する。さらにスケーラブルな分散型D-TOEHを提案し、低い多項式計算量で平均71.36%のMILP基準性能を達成すると報告している。'
    ),
    tags: ['Edge Computing', 'Serverless', 'Offloading'],
    links: {
      doi: 'https://doi.org/10.1109/JIOT.2026.3664487'
    },
    bibtex: `@article{Chen2026JointFunction,
  author  = {Benyu Chen and Tengjiao He and Mingrui Zheng and Junfei Zhan and Bing He},
  title   = {Joint Function Configuration and Multislot Offloading in Solar-Powered Serverless Edge Computing},
  journal = {IEEE Internet of Things Journal},
  volume  = {13},
  number  = {9},
  pages   = {19616--19628},
  year    = {2026},
  doi     = {10.1109/JIOT.2026.3664487}
}`
  },
  {
    slug: 'doc2control',
    year: 2026,
    type: 'journal',
    statusKind: 'early-access',
    status: L('Early Access', '在线发表', 'オンライン公開'),
    title: L(
      'Doc2Control: LLM-Guided Scheduling and Control for UAV-Assisted Campus Vehicles',
      'Doc2Control：面向无人机辅助校园车辆的大语言模型引导调度与控制',
      'Doc2Control：UAV支援キャンパス車両のためのLLM誘導型スケジューリングと制御'
    ),
    authors: ['Zebin Huang', 'Mingrui Zheng', 'Hao Li', 'Yefeng Wu'],
    correspondingAuthors: ['Mingrui Zheng'],
    venue: 'IEEE Transactions on Vehicular Technology',
    details: L('Early Access (2026)', 'Early Access（2026）', 'Early Access（2026）'),
    classificationZh: ['中科院二区 Top 期刊'],
    abstract: L(
      'Doc2Control connects natural-language task descriptions with scheduling and control decisions for UAV-assisted campus vehicle systems. It models uncertainty in LLM-derived priorities, maintains minimum service frequencies for control-critical tasks, and jointly allocates scheduling, communication, computing, and battery resources through a relaxed mixed-integer formulation with receding-horizon control. Reported simulations show improvements in semantic-control utility, critical-task service, safety, and energy efficiency under constrained resources.',
      'Doc2Control 将自然语言任务描述与无人机辅助校园车辆系统中的调度和控制决策连接起来。该方法对大语言模型生成的任务优先级不确定性进行建模，为控制关键任务设置最低服务频率，并通过松弛的混合整数优化与滚动时域控制联合分配调度、通信、计算和电池资源。仿真结果显示，在资源受限条件下，该方法可提升语义控制效用、关键任务满足率、安全性以及能源效率。',
      'Doc2Controlは、自然言語で記述されたタスクとUAV支援キャンパス車両システムのスケジューリング・制御判断を接続する。LLMから得られる優先度の不確実性をモデル化し、制御上重要なタスクに最低サービス頻度を課したうえで、緩和混合整数最適化とリシーディングホライズン制御により、スケジューリング、通信、計算、バッテリ資源を共同配分する。報告されたシミュレーションでは、資源制約下で意味・制御効用、重要タスクの充足、安全性、エネルギー効率が改善している。'
    ),
    tags: ['LLM', 'Scheduling', 'Control', 'UAV'],
    links: {
      doi: 'https://doi.org/10.1109/TVT.2026.3720280'
    }
  },
  {
    slug: 'distributed-mpc-ddos-uav-iot',
    year: 2026,
    type: 'journal',
    featured: true,
    statusKind: 'accepted',
    status: L('Accepted', '已录用', '採択済み'),
    title: L(
      'Distributed MPC for DDoS-Resilient Control and Communication Optimization in Multi-UAV Assisted IoT Smart Agriculture Networks',
      '面向多无人机辅助物联网智慧农业网络的DDoS韧性分布式MPC通信控制联合优化',
      'マルチUAV支援IoTスマート農業ネットワークにおけるDDoS耐性分散MPCによる制御・通信最適化'
    ),
    authors: ['Mingrui Zheng', 'Koichi Kobayashi', 'Yuh Yamashita', 'Hao Li', 'Tengjiao He'],
    correspondingAuthors: ['Mingrui Zheng'],
    venue: 'IEEE Internet of Things Journal',
    details: L('Accepted (2026)', '已录用（2026）', '採択済み（2026）'),
    classificationZh: ['中科院一区 Top 期刊'],
    abstract: L(
      'This paper studies a multi-UAV-assisted smart-agriculture IoT control system whose access-link capacity is degraded by DDoS attacks. It formulates an attack-aware constrained co-optimization problem that jointly determines applied control commands, UAV–IoT associations, communication resources, and UAV mobility while accounting for packet-delivery reliability and subsystem safety. A distributed model predictive control framework is used to coordinate control and communication decisions under attack-induced capacity loss.',
      '本文研究分布式拒绝服务攻击导致接入链路容量下降时的多无人机辅助智慧农业物联网控制系统。工作建立攻击感知的约束联合优化问题，在考虑数据包传输可靠性与子系统安全约束的同时，联合决定实际控制输入、无人机与物联网设备关联、通信资源以及无人机移动决策，并通过分布式模型预测控制协调攻击条件下的控制与通信优化。',
      '本研究は、DDoS攻撃によりアクセスリンク容量が低下するマルチUAV支援スマート農業IoT制御システムを対象とする。パケット配送信頼性とサブシステムの安全制約を考慮しつつ、適用制御入力、UAV–IoT関連付け、通信資源、UAV移動を共同決定する攻撃認識型制約付き最適化問題を構築する。分散モデル予測制御により、攻撃による容量低下の下で制御と通信の意思決定を協調させる。'
    ),
    tags: ['MPC', 'Multi-UAV', 'IoT', 'Security'],
    links: {
      doi: 'https://doi.org/10.1109/JIOT.2026.3719293'
    }
  },
  {
    slug: 'gima-uav-edge-computing',
    year: 2026,
    type: 'journal',
    statusKind: 'under-review',
    status: L('Under Review', '在审', '査読中'),
    detailPage: false,
    title: L(
      'GIMA: Scalable GNN-Assisted VNF-Aware UAV Deployment in Post-Disaster Edge Computing',
      'GIMA：灾后边缘计算中可扩展的GNN辅助VNF感知无人机部署',
      'GIMA：災害後エッジコンピューティングにおけるスケーラブルなGNN支援VNF認識型UAV配置'
    ),
    authors: ['Mingrui Zheng', 'Tengjiao He', 'Hao Li', 'Koichi Kobayashi', 'Yizhou Luo'],
    venue: 'IEEE Transactions on Mobile Computing',
    details: L('2026', '2026', '2026'),
    classificationZh: ['中科院一区 Top 期刊', '计算机网络 CCF-A 期刊'],
    tags: ['GNN', 'VNF', 'UAV', 'Edge Computing']
  },

  // Conference Papers
  {
    slug: 'wearable-fatigue-risk-scoring',
    year: 2026,
    type: 'conference',
    statusKind: 'accepted-unpublished',
    status: L('Accepted · Proceedings forthcoming', '已录用 · 尚未见刊', '採択済み・プロシーディングス未刊行'),
    title: L(
      'Wearable Fatigue-Related Risk Scoring under Domain Shift: Dual-Stream Fusion with Energy-Adaptive Soft Gating',
      '领域偏移下的可穿戴疲劳相关风险评分：基于能量自适应软门控的双流融合',
      'ドメインシフト下のウェアラブル疲労関連リスクスコアリング：エネルギー適応型ソフトゲーティングによるデュアルストリーム融合'
    ),
    authors: ['Hao Li', 'Mingrui Zheng', 'Yasuyuki Tahara', 'Yuichi Sei'],
    correspondingAuthors: ['Yuichi Sei'],
    venue: 'The 48th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC 2026)',
    details: L('Toronto (2026)', '多伦多（2026）', 'トロント（2026）'),
    unavailableNote: L(
      'This paper has been accepted by EMBC 2026, but the proceedings have not yet been published. The abstract and official BibTeX citation will be added after publication metadata becomes available.',
      '该论文已被 EMBC 2026 录用，但会议论文集尚未正式见刊。待正式出版信息可用后，将补充摘要和官方 BibTeX 引用。',
      '本論文はEMBC 2026に採択済みですが、プロシーディングスはまだ刊行されていません。正式な出版メタデータが公開され次第、概要と公式BibTeXを追加します。'
    ),
    tags: ['Wearable Computing', 'Domain Shift', 'Risk Scoring']
  },
  {
    slug: 'gausslink',
    year: 2027,
    type: 'conference',
    statusKind: 'under-review',
    status: L('Under Review', '在审', '査読中'),
    detailPage: false,
    title: L(
      'GaussLink: Control-Oriented 3D Gaussian Map Sharing for Safe Multi-UAV Exploration under Limited Bandwidth',
      'GaussLink：受限带宽下面向安全多无人机探索的控制导向3D高斯地图共享',
      'GaussLink：帯域制約下の安全なマルチUAV探索に向けた制御指向3D Gaussianマップ共有'
    ),
    authors: ['Mingrui Zheng', 'Hao Li', 'Koichi Kobayashi', 'A. Yonezawa', 'Yuh Yamashita', 'Tengjiao He'],
    correspondingAuthors: ['Mingrui Zheng'],
    venue: '2027 IEEE International Conference on Robotics and Automation (ICRA 2027)',
    details: L('2027', '2027', '2027'),
    classificationZh: ['人工智能 CCF-B 会议'],
    tags: ['Multi-UAV', '3D Gaussian', 'Control', 'Communication']
  },
  {
    slug: 'solar-aware-dnn-split-inference',
    year: 2026,
    type: 'conference',
    statusKind: 'under-review',
    status: L('Under Review', '在审', '査読中'),
    detailPage: false,
    title: L(
      'Solar-Aware DNN Split Inference and Resource Allocation in MEC Networks',
      'MEC网络中的太阳能感知DNN分割推理与资源分配',
      'MECネットワークにおける太陽光発電認識型DNN分割推論とリソース割当て'
    ),
    authors: ['Z. Tan', 'Mingrui Zheng', 'Tengjiao He', 'Bing He'],
    correspondingAuthors: ['Mingrui Zheng'],
    venue: 'The 22nd International Conference on Mobility, Sensing and Networking (MSN 2026)',
    details: L('2026', '2026', '2026'),
    classificationZh: ['计算机网络 CCF-C 会议'],
    tags: ['MEC', 'DNN Split Inference', 'Resource Allocation']
  },
  {
    slug: 'residual-structure-sparse-moe-routing',
    year: 2027,
    type: 'conference',
    statusKind: 'under-review',
    status: L('Under Review', '在审', '査読中'),
    detailPage: false,
    title: L(
      'Beyond the Previous Layer: Residual Structure and Conditional Complementarity in Sparse MoE Routing',
      '超越前一层：稀疏MoE路由中的残差结构与条件互补性',
      '前層を超えて：Sparse MoEルーティングにおける残差構造と条件付き相補性'
    ),
    authors: ['Hao Li', 'Mingrui Zheng', 'Yasuyuki Tahara', 'Yuichi Sei'],
    correspondingAuthors: ['Hao Li'],
    venue: 'The 15th International Conference on Learning Representations (ICLR 2027)',
    details: L('2027', '2027', '2027'),
    classificationZh: ['人工智能 CCF-A 会议'],
    tags: ['Mixture of Experts', 'Routing', 'Deep Learning']
  },

  // Preprints
  {
    slug: 'gravity-aware-sensorllm-routing',
    year: 2026,
    type: 'preprint',
    statusKind: 'preprint',
    title: L(
      'Gravity-Aware Hierarchical Routing for Lightweight SensorLLM on Human Activity Recognition',
      '面向人体活动识别的轻量级SensorLLM重力感知分层路由',
      '人間行動認識向け軽量SensorLLMのための重力認識型階層ルーティング'
    ),
    authors: ['Hao Li', 'Mingrui Zheng', 'Yasuyuki Tahara', 'Yuichi Sei'],
    correspondingAuthors: ['Yuichi Sei'],
    venue: 'arXiv preprint',
    details: L('arXiv:2606.04019 (2026)', 'arXiv:2606.04019（2026）', 'arXiv:2606.04019（2026）'),
    abstract: L(
      'This preprint examines a failure mode of compact SensorLLM-style models in which dynamic activities remain recognizable while low-motion static postures become difficult to distinguish. It introduces a lightweight gravity-aware hierarchical routing head that uses statistics from the tokenizer state to route between static and full experts. On the MHealth dataset, the method improves macro-F1 mainly on static classes while retaining strong performance on dynamic activities with little parameter overhead.',
      '该预印本关注轻量级 SensorLLM 类模型的一种典型问题：动态活动仍较容易识别，但站立、坐姿和躺卧等低运动静态姿态的区分能力明显下降。论文提出轻量级重力感知分层路由头，利用 tokenizer 状态中的统计特征在静态专家与全量专家之间进行软路由。在 MHealth 数据集上，该方法主要提升静态类别的 macro-F1，同时以较小参数开销保持动态活动的识别性能。',
      '本プレプリントは、軽量なSensorLLM系モデルにおいて、動的行動は比較的良好に識別できる一方、立位・座位・臥位など低動作の静的姿勢の識別性能が低下する問題を扱う。tokenizer状態の統計量を用いて静的エキスパートと全体エキスパートをソフトに切り替える軽量な重力認識型階層ルーティングヘッドを提案する。MHealthデータセットでは、少ないパラメータ増加で動的行動の性能を維持しつつ、主に静的クラスのmacro-F1を改善している。'
    ),
    tags: ['SensorLLM', 'Human Activity Recognition', 'Routing'],
    links: {
      arxiv: 'https://arxiv.org/abs/2606.04019'
    },
    bibtex: `@article{Li2026GravityAware,
  author  = {Hao Li and Mingrui Zheng and Yasuyuki Tahara and Yuichi Sei},
  title   = {Gravity-Aware Hierarchical Routing for Lightweight SensorLLM on Human Activity Recognition},
  journal = {arXiv preprint arXiv:2606.04019},
  year    = {2026},
  doi     = {10.48550/arXiv.2606.04019},
  url     = {https://arxiv.org/abs/2606.04019}
}`
  },

  // Patents
  {
    slug: 'gnn-post-disaster-uav-deployment-patent',
    year: 2026,
    type: 'patent',
    statusKind: 'patent',
    status: L('Under Examination', '已进入审查', '審査中'),
    title: L(
      'A Graph Neural Network-Based Method for Collaborative Post-Disaster UAV Deployment',
      '一种基于图神经网络的灾后无人机协同部署方法',
      'グラフニューラルネットワークに基づく災害後UAV協調配置方法'
    ),
    authors: ['Tengjiao He', 'Mingrui Zheng'],
    venue: 'Chinese Patent',
    details: L(
      'Chinese Patent Application No. 202611133087.9, Under Examination (2026)',
      '中国发明专利申请号：202611133087.9，已进入审查（2026）',
      '中国特許出願番号：202611133087.9、審査中（2026）'
    ),
    tags: ['GNN', 'UAV Deployment', 'Post-Disaster Networks']
  }
];
