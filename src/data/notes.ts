import type { Localized } from '../types';

export type StudyNoteSection = {
  title: Localized;
  body: Localized;
  bullets?: Localized[];
  formula?: string;
};

export type StudyNote = {
  slug: string;
  order: number;
  title: Localized;
  category: Localized;
  summary: Localized;
  tags: string[];
  sections: StudyNoteSection[];
};

const L = (en:string, zh:string, ja:string):Localized => ({en,zh,ja});

export const studyNotes: StudyNote[] = [
  {
    slug: 'reinforcement-learning',
    order: 1,
    title: L('Reinforcement Learning Study Notes','强化学习学习笔记','強化学習 学習ノート'),
    category: L('Learning & Decision Making','学习与决策','学習・意思決定'),
    summary: L(
      'A structured review of MDPs, Bellman equations, value-based learning, policy gradients, actor–critic methods, and the bridge from reinforcement learning to constrained control.',
      '系统整理 MDP、Bellman 方程、价值学习、策略梯度、Actor–Critic，以及强化学习与约束控制之间的联系。',
      'MDP、ベルマン方程式、価値学習、方策勾配、Actor–Critic、さらに強化学習と制約付き制御の接点を体系的に整理します。'
    ),
    tags: ['MDP','Bellman','Q-Learning','Actor–Critic','PPO','Safe RL'],
    sections: [
      {
        title: L('1. Markov Decision Process','1. 马尔可夫决策过程','1. マルコフ決定過程'),
        body: L(
          'An MDP models sequential decision making with a state s, action a, transition kernel P, reward r, and discount factor γ. A policy maps the observed state to an action distribution. The Markov property means that the current state contains all information needed to predict the next state distribution.',
          'MDP 用状态 s、动作 a、状态转移 P、奖励 r 和折扣因子 γ 描述序贯决策。策略把当前状态映射到动作或动作分布；马尔可夫性意味着当前状态已经包含预测下一状态所需的信息。',
          'MDP は状態 s、行動 a、遷移確率 P、報酬 r、割引率 γ により逐次意思決定を表します。方策は状態から行動分布への写像であり、マルコフ性は現在状態が次状態予測に必要な情報を含むことを意味します。'
        ),
        formula: 'M = (S, A, P, r, γ)'
      },
      {
        title: L('2. Value Functions and Bellman Recursion','2. 价值函数与 Bellman 递推','2. 価値関数とベルマン再帰'),
        body: L(
          'The state-value and action-value functions measure expected discounted return. Bellman equations turn a long-horizon problem into a one-step recursion, which is the core algebra behind dynamic programming and temporal-difference learning.',
          '状态价值函数和动作价值函数衡量期望折扣回报。Bellman 方程把长时域问题转化为一步递推，是动态规划和时序差分学习背后的核心结构。',
          '状態価値関数と行動価値関数は期待割引収益を表します。ベルマン方程式は長期問題を1ステップの再帰へ変換し、動的計画法やTD学習の基礎となります。'
        ),
        formula: 'Vπ(s) = Eπ[rₜ + γVπ(sₜ₊₁) | sₜ=s]'
      },
      {
        title: L('3. From Q-Learning to Deep RL','3. 从 Q-Learning 到深度强化学习','3. Q-Learning から深層強化学習へ'),
        body: L(
          'Tabular Q-learning uses a bootstrapped target to update Q(s,a). Deep RL replaces the table by a neural approximator, which introduces stability issues such as moving targets and correlated samples. Replay buffers and target networks are common remedies.',
          '表格型 Q-learning 使用自举目标更新 Q(s,a)。深度强化学习用神经网络替代表格后，会出现目标移动和样本相关等稳定性问题，因此常使用经验回放和目标网络。',
          '表形式 Q-learning はブートストラップ目標で Q(s,a) を更新します。深層RLではテーブルをニューラル近似器に置き換えるため、移動目標や相関サンプルによる不安定性が生じ、経験再生やターゲットネットワークが用いられます。'
        ),
        formula: 'Q(s,a) ← Q(s,a) + α[r + γ maxₐ′Q(s′,a′) − Q(s,a)]'
      },
      {
        title: L('4. Policy Gradient and Actor–Critic','4. 策略梯度与 Actor–Critic','4. 方策勾配と Actor–Critic'),
        body: L(
          'Policy-gradient methods optimize the policy parameters directly. Actor–critic methods combine a policy actor with a value-function critic, reducing variance while preserving direct policy optimization. PPO stabilizes updates by limiting how far a new policy moves from the old one.',
          '策略梯度直接优化策略参数。Actor–Critic 将负责决策的 Actor 与估计价值的 Critic 结合，在保留直接策略优化的同时降低梯度方差。PPO 通过限制新旧策略变化幅度提高训练稳定性。',
          '方策勾配法は方策パラメータを直接最適化します。Actor–Critic は方策を出力する Actor と価値を推定する Critic を組み合わせ、分散を抑えます。PPO は新旧方策の変化を制限して学習を安定化します。'
        ),
        formula: '∇θJ(θ) = E[∇θ log πθ(a|s) · Â(s,a)]'
      },
      {
        title: L('5. RL for Constrained Networked Control','5. 强化学习与约束网络化控制','5. 制約付きネットワーク制御へのRL'),
        body: L(
          'For communication–control systems, pure reward maximization is often insufficient because safety, energy, latency, and queue constraints are hard requirements. Practical designs therefore combine RL with constrained MDPs, safety filters, model predictive control, or optimization-based repair layers.',
          '在通信—控制系统中，仅最大化奖励往往不够，因为安全、能量、时延和队列约束通常是硬要求。因此实际设计更适合将 RL 与 CMDP、安全过滤器、MPC 或基于优化的可行性修复层结合。',
          '通信・制御システムでは、報酬最大化だけでは安全、エネルギー、遅延、キューなどのハード制約を扱えません。そのため CMDP、安全フィルタ、MPC、最適化ベースの修復層との組合せが重要です。'
        )
      }
    ]
  },
  {
    slug: 'model-predictive-control',
    order: 2,
    title: L('MPC Study Notes','MPC学习笔记','MPC 学習ノート'),
    category: L('Optimization & Control','优化与控制','最適化・制御'),
    summary: L(
      'From finite-horizon optimal control to receding-horizon implementation, with emphasis on constraints, terminal ingredients, robustness, and distributed MPC.',
      '从有限时域最优控制到滚动时域实现，重点整理约束、终端设计、鲁棒 MPC 与分布式 MPC。',
      '有限時間最適制御からリシーディングホライズン実装まで、制約、終端設計、ロバストMPC、分散MPCを重点的に整理します。'
    ),
    tags: ['MPC','QP','Constraints','Stability','Tube MPC','Distributed MPC'],
    sections: [
      {
        title: L('1. Core Idea of Receding Horizon Control','1. 滚动时域控制的核心思想','1. リシーディングホライズン制御の基本'),
        body: L(
          'At each sampling instant, MPC predicts system evolution over a finite horizon, solves an optimal control problem, applies only the first input, then shifts the horizon and solves again. This repeated optimization turns future prediction into feedback.',
          '在每个采样时刻，MPC 预测有限时域内的系统演化，求解一次最优控制问题，只执行第一个控制输入，然后时域向前滚动并重新求解。不断重算使预测控制具备反馈能力。',
          '各サンプリング時刻で有限ホライズンの状態を予測し、最適制御問題を解き、最初の入力だけを適用します。その後ホライズンを移動して再び解くことで、予測をフィードバックへ変換します。'
        )
      },
      {
        title: L('2. Standard Linear MPC Formulation','2. 标准线性 MPC 建模','2. 標準線形MPC定式化'),
        body: L(
          'For a linear system, a quadratic state/input cost with linear constraints leads to a quadratic program. Prediction matrices can stack the entire horizon into one compact optimization problem.',
          '对于线性系统，二次型状态/控制代价配合线性约束可形成二次规划。通过预测矩阵，可以把整个时域的状态和输入堆叠为一个紧凑的优化问题。',
          '線形システムに二次状態・入力コストと線形制約を組み合わせると二次計画問題になります。予測行列によりホライズン全体を1つのコンパクトな最適化問題へまとめられます。'
        ),
        formula: 'xₖ₊₁ = Axₖ + Buₖ,   min Σ(xᵀQx + uᵀRu) + x_NᵀPx_N'
      },
      {
        title: L('3. Constraints, Terminal Cost, and Stability','3. 约束、终端代价与稳定性','3. 制約・終端コスト・安定性'),
        body: L(
          'MPC naturally handles input and state constraints. Terminal cost and terminal sets are commonly introduced to recover recursive feasibility and closed-loop stability. The exact conditions depend on the model and controller construction.',
          'MPC 的优势之一是可以显式处理输入和状态约束。为了获得递归可行性与闭环稳定性，通常引入终端代价与终端集合；具体条件取决于系统模型和控制器设计。',
          'MPC は入力・状態制約を明示的に扱えます。再帰的実行可能性と閉ループ安定性のため、終端コストと終端集合を導入することが一般的です。'
        )
      },
      {
        title: L('4. Robust / Tube MPC','4. 鲁棒 MPC 与 Tube MPC','4. ロバストMPC / Tube MPC'),
        body: L(
          'Under bounded disturbances, tube MPC separates a nominal trajectory from a local feedback correction. The nominal plan stays inside tightened constraints, while the feedback controller keeps the real state inside a robust tube around the nominal state.',
          '存在有界扰动时，Tube MPC 将名义轨迹与局部反馈修正分离。名义系统在收紧后的约束中规划，而局部反馈把真实状态限制在名义状态周围的鲁棒管束中。',
          '有界外乱下では、Tube MPC は公称軌道と局所フィードバック補正を分離します。公称系は収縮制約内で計画し、実状態は公称状態周りのロバストチューブ内に保たれます。'
        )
      },
      {
        title: L('5. Distributed MPC','5. 分布式 MPC','5. 分散MPC'),
        body: L(
          'For multi-agent systems, centralized MPC can become computationally and communication intensive. Distributed MPC decomposes the global problem into local subproblems that exchange predicted trajectories, coupling variables, or dual information.',
          '在多智能体系统中，集中式 MPC 的计算和通信开销可能很高。分布式 MPC 将全局问题分解为局部子问题，通过交换预测轨迹、耦合变量或对偶信息完成协调。',
          'マルチエージェント系では集中MPCの計算・通信負荷が大きくなります。分散MPCは全体問題を局所部分問題へ分解し、予測軌道、結合変数、双対情報などを交換して協調します。'
        )
      }
    ]
  },
  {
    slug: 'control-theory',
    order: 3,
    title: L('Control Theory Study Notes','控制理论学习笔记','制御理論 学習ノート'),
    category: L('Systems & Control','系统与控制','システム・制御'),
    summary: L(
      'A compact path through state-space models, controllability, observability, stability, state feedback, LQR, and state estimation.',
      '从状态空间模型出发，整理可控性、可观性、稳定性、状态反馈、LQR 与状态估计。',
      '状態空間モデルから、可制御性、可観測性、安定性、状態フィードバック、LQR、状態推定までを整理します。'
    ),
    tags: ['State Space','Stability','Controllability','Observability','LQR','Kalman Filter'],
    sections: [
      {
        title: L('1. State-Space Representation','1. 状态空间表示','1. 状態空間表現'),
        body: L(
          'State-space models represent the internal dynamics of a system by a state vector. They are especially useful for multi-input multi-output systems and provide the language used by modern control, estimation, and MPC.',
          '状态空间模型用状态向量表示系统内部动态，尤其适合多输入多输出系统，也是现代控制、状态估计和 MPC 的统一语言。',
          '状態空間モデルは状態ベクトルで内部ダイナミクスを表し、多入力多出力系に適しています。現代制御、状態推定、MPCの共通言語でもあります。'
        ),
        formula: 'ẋ = Ax + Bu,   y = Cx + Du'
      },
      {
        title: L('2. Controllability and Observability','2. 可控性与可观性','2. 可制御性と可観測性'),
        body: L(
          'Controllability asks whether the input can drive the system state to a desired point. Observability asks whether the internal state can be reconstructed from output measurements. Rank tests provide convenient criteria for linear systems.',
          '可控性关注输入能否把系统状态驱动到目标位置；可观性关注能否从输出测量重构内部状态。对于线性系统，可通过相应矩阵的秩进行判断。',
          '可制御性は入力で状態を目標へ移せるか、可観測性は出力から内部状態を再構成できるかを表します。線形系ではランク条件で判定できます。'
        ),
        formula: 'rank[B AB … Aⁿ⁻¹B] = n,   rank[C; CA; …; CAⁿ⁻¹] = n'
      },
      {
        title: L('3. Stability and Lyapunov Analysis','3. 稳定性与 Lyapunov 分析','3. 安定性とLyapunov解析'),
        body: L(
          'Lyapunov analysis studies stability without explicitly solving the system trajectory. For linear continuous-time systems, the existence of a positive-definite P satisfying a Lyapunov inequality provides a practical stability certificate.',
          'Lyapunov 方法无需显式求出系统轨迹即可分析稳定性。对于连续时间线性系统，若存在正定矩阵 P 满足 Lyapunov 不等式，就可以得到实用的稳定性证书。',
          'Lyapunov解析は軌道を明示的に解かずに安定性を判定します。連続時間線形系では、正定値行列 P がLyapunov不等式を満たすことが安定性証明になります。'
        ),
        formula: 'AᵀP + PA ≺ 0,   P ≻ 0'
      },
      {
        title: L('4. State Feedback and LQR','4. 状态反馈与 LQR','4. 状態フィードバックとLQR'),
        body: L(
          'State feedback reshapes closed-loop dynamics through u = −Kx. LQR chooses K by minimizing a quadratic performance index, balancing state regulation against control effort through Q and R.',
          '状态反馈通过 u = −Kx 重塑闭环动态。LQR 通过最小化二次型性能指标求取反馈增益 K，并利用 Q、R 在状态调节与控制能耗之间权衡。',
          '状態フィードバック u = −Kx により閉ループ極を設計できます。LQR は二次評価関数を最小化し、Q と R によって状態偏差と制御入力の重みを調整します。'
        ),
        formula: 'J = ∫(xᵀQx + uᵀRu)dt,   u = −Kx'
      },
      {
        title: L('5. State Estimation','5. 状态估计','5. 状態推定'),
        body: L(
          'When the full state is not measured, an observer or Kalman filter estimates it from the model and outputs. The estimator and controller can often be designed separately for linear systems, leading to the separation principle.',
          '当系统完整状态无法直接测量时，可使用观测器或 Kalman 滤波器结合模型与输出估计状态。在线性系统中，估计器与控制器通常可以分开设计，对应分离原理。',
          '全状態を直接観測できない場合は、オブザーバやカルマンフィルタでモデルと出力から状態を推定します。線形系では推定器と制御器を分離して設計できる場合があります。'
        )
      }
    ]
  },
  {
    slug: 'frank-wolfe',
    order: 4,
    title: L('Frank–Wolfe Algorithm Study Notes','Frank–Wolfe算法学习笔记','Frank–Wolfe アルゴリズム 学習ノート'),
    category: L('Convex Optimization','凸优化','凸最適化'),
    summary: L(
      'A projection-free view of constrained convex optimization: linear minimization oracle, update rules, convergence intuition, and common variants.',
      '从无投影约束优化的角度整理线性最小化 Oracle、迭代更新、收敛直觉及常见变体。',
      '射影を用いない制約付き凸最適化として、線形最小化オラクル、更新則、収束の直感、代表的な変種を整理します。'
    ),
    tags: ['Convex Optimization','LMO','Projection-Free','Line Search','Away-Step'],
    sections: [
      {
        title: L('1. Why Frank–Wolfe?','1. 为什么使用 Frank–Wolfe？','1. なぜ Frank–Wolfe なのか'),
        body: L(
          'Projected gradient methods require a projection back onto the feasible set after every gradient step. When projection is expensive but linear optimization over the feasible set is cheap, Frank–Wolfe replaces projection by a linear minimization oracle.',
          '投影梯度法每次梯度更新后都要投影回可行域。当投影代价高、但在可行域上求线性最小化较容易时，Frank–Wolfe 可以用线性最小化 Oracle 替代投影。',
          '射影勾配法では毎回可行集合へ射影する必要があります。射影が高コストで、可行集合上の線形最適化が容易な場合、Frank–Wolfe は線形最小化オラクルで射影を置き換えます。'
        )
      },
      {
        title: L('2. Basic Iteration','2. 基本迭代','2. 基本反復'),
        body: L(
          'At iteration t, the algorithm linearizes the objective around xₜ, finds the feasible point sₜ minimizing the linear model, and moves from xₜ toward sₜ. The update remains in the convex feasible set automatically.',
          '在第 t 次迭代中，算法在 xₜ 处线性化目标函数，求解使线性模型最小的可行点 sₜ，然后从 xₜ 向 sₜ 移动。由于使用凸组合，更新点会自动保持在凸可行域内。',
          '反復 t では xₜ 周りで目的関数を線形化し、その線形モデルを最小にする可行点 sₜ を求め、xₜ から sₜ へ移動します。凸結合なので更新点は自動的に可行集合内に残ります。'
        ),
        formula: 'sₜ = arg minₛ∈D ⟨∇f(xₜ), s⟩,   xₜ₊₁ = (1−γₜ)xₜ + γₜsₜ'
      },
      {
        title: L('3. Step Size and Dual Gap','3. 步长与对偶间隙','3. ステップサイズと双対ギャップ'),
        body: L(
          'The step size can be chosen by line search or by a predefined schedule such as 2/(t+2). The Frank–Wolfe gap is a computable optimality certificate and is frequently used as a stopping criterion.',
          '步长可以通过线搜索确定，也可以采用 2/(t+2) 等预定义规则。Frank–Wolfe gap 是可计算的最优性证书，常用于停止条件。',
          'ステップサイズは線形探索または 2/(t+2) などの規則で決められます。Frank–Wolfe gap は計算可能な最適性証明であり、停止判定に利用されます。'
        ),
        formula: 'gFW(xₜ) = ⟨∇f(xₜ), xₜ − sₜ⟩'
      },
      {
        title: L('4. Convergence Intuition','4. 收敛直觉','4. 収束の直感'),
        body: L(
          'For smooth convex objectives over compact convex domains, the classical Frank–Wolfe method has a sublinear O(1/t) convergence rate in objective error. Stronger assumptions and enhanced variants can improve practical convergence.',
          '对于紧致凸域上的光滑凸目标，经典 Frank–Wolfe 的目标误差通常具有 O(1/t) 的次线性收敛速度。更强的假设和改进变体可以提升实际收敛表现。',
          'コンパクト凸集合上の滑らかな凸目的関数に対し、古典 Frank–Wolfe は目的誤差で O(1/t) の劣線形収束を持ちます。より強い仮定や改良法により実用上の収束を改善できます。'
        )
      },
      {
        title: L('5. Common Variants','5. 常见变体','5. 代表的な変種'),
        body: L(
          'Away-step and pairwise Frank–Wolfe methods can remove weight from previously selected atoms and are often much faster on polytopes. Stochastic and block-coordinate variants target large-scale learning and structured optimization problems.',
          'Away-step 和 Pairwise Frank–Wolfe 可以从已经选择的原子上移除权重，在多面体约束下通常收敛更快。随机化和块坐标变体则面向大规模学习与结构化优化问题。',
          'Away-step や Pairwise Frank–Wolfe は既に選択した原子から重みを減らせるため、多面体制約で高速化しやすいです。確率的・ブロック座標型の変種は大規模学習や構造最適化に適しています。'
        )
      }
    ]
  }
];

export const getStudyNote = (slug:string) => studyNotes.find(note => note.slug === slug);
