import type { Localized } from '../types';

export type StudyNoteExample = {
  title: Localized;
  body: Localized;
  formula?: string;
};

export type StudyNoteSection = {
  title: Localized;
  body: Localized;
  bullets?: Localized[];
  formula?: string;
  formulas?: string[];
  example?: StudyNoteExample;
  pitfalls?: Localized[];
  takeaway?: Localized;
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

export const studyNotes: StudyNote[] = [
  {
    "slug": "reinforcement-learning",
    "order": 1,
    "title": {
      "en": "Reinforcement Learning Study Notes",
      "zh": "强化学习学习笔记",
      "ja": "強化学習 学習ノート"
    },
    "category": {
      "en": "Learning & Decision Making",
      "zh": "学习与决策",
      "ja": "学習・意思決定"
    },
    "summary": {
      "en": "A from-first-principles guide to reinforcement learning: MDPs, returns, Bellman equations, temporal-difference learning, DQN, policy gradients, actor–critic, PPO, and constrained/safe RL.",
      "zh": "从零建立强化学习完整知识链：MDP、回报与价值函数、Bellman 方程、TD 学习、DQN、策略梯度、Actor–Critic、PPO，以及约束/安全强化学习。",
      "ja": "MDP、収益・価値関数、ベルマン方程式、TD 学習、DQN、方策勾配、Actor–Critic、PPO、制約付き・安全な強化学習までを基礎からつなげて理解するノートです。"
    },
    "tags": [
      "MDP",
      "Bellman",
      "TD Learning",
      "DQN",
      "Actor–Critic",
      "PPO",
      "Safe RL"
    ],
    "sections": [
      {
        "title": {
          "en": "1. The Mental Model: What RL Is Actually Solving",
          "zh": "1. 先建立直觉：强化学习到底在解决什么",
          "ja": "1. まず直感：強化学習は何を解くのか"
        },
        "body": {
          "en": "Reinforcement learning studies an agent that repeatedly observes a situation, chooses an action, receives a reward, and changes the future situation. Unlike supervised learning, the correct action is not given directly. The agent must learn from consequences, and an action that looks good immediately may be bad in the long run. The central difficulty is therefore sequential credit assignment under uncertainty.",
          "zh": "强化学习研究的是一个不断循环的决策过程：智能体观察当前状态，选择动作，环境发生变化并给出奖励，然后智能体继续决策。它和监督学习最根本的区别是：训练数据里没有直接给出“正确动作”。动作的好坏要通过后续结果判断，而且眼前奖励高的动作未必长期最优。因此，强化学习真正解决的是“不确定环境中的长期序贯决策与信用分配”。",
          "ja": "強化学習では、エージェントが状態を観測し、行動を選び、報酬を受け、次の状態へ進むという循環を扱います。教師あり学習と異なり、正解行動は直接与えられません。今すぐ高い報酬を得る行動が長期的に良いとは限らないため、中心課題は不確実性の下での逐次意思決定と長期的な信用割当です。"
        },
        "bullets": [
          {
            "en": "State tells the agent what situation it is in; action is what it can choose; reward is an immediate scalar signal; return is the cumulative future reward.",
            "zh": "状态描述“现在处于什么情况”；动作描述“现在能做什么”；奖励是即时标量反馈；回报是未来累计奖励。",
            "ja": "状態は現在の状況、行動は選択可能な操作、報酬は即時のスカラー信号、収益は将来報酬の累積です。"
          },
          {
            "en": "A policy is the decision rule. Learning a policy means learning how actions should change with state.",
            "zh": "策略是决策规则。学习策略，本质上就是学习“在不同状态下应该如何选动作”。",
            "ja": "方策は意思決定規則であり、方策学習とは状態に応じた行動選択規則を学ぶことです。"
          },
          {
            "en": "The environment is not just a dataset: the action changes what data the agent will see next.",
            "zh": "环境不是静态数据集：智能体的动作会改变下一步看到的数据分布。",
            "ja": "環境は固定データセットではなく、行動によって次に観測するデータ分布そのものが変化します。"
          },
          {
            "en": "Exploration asks whether to try uncertain actions; exploitation uses actions currently believed to be best.",
            "zh": "探索决定是否尝试不确定的动作；利用则选择当前认为最好的动作。",
            "ja": "探索は未知の行動を試すか、活用は現在最良と思われる行動を選ぶか、という問題です。"
          }
        ],
        "takeaway": {
          "en": "If you remember only one sentence: RL learns a feedback decision rule from delayed consequences, not from labeled correct actions.",
          "zh": "只记一句话：强化学习不是从标准答案学动作，而是从延迟后果中学习一个反馈决策规则。",
          "ja": "一文で言えば、強化学習は正解ラベルではなく遅延した結果からフィードバック方策を学びます。"
        }
      },
      {
        "title": {
          "en": "2. Markov Decision Process: The Mathematical Language",
          "zh": "2. MDP：强化学习的数学语言",
          "ja": "2. MDP：強化学習の数学言語"
        },
        "body": {
          "en": "A Markov decision process (MDP) is the standard mathematical model for RL. At time t the agent observes state s_t, samples an action a_t from policy π(a|s), receives reward r_t, and the environment samples the next state according to P(s_{t+1}|s_t,a_t). The Markov property does not mean the world has no history; it means the chosen state representation already summarizes all history needed to predict the future under an action.",
          "zh": "马尔可夫决策过程（MDP）是强化学习最常用的数学模型。在时刻 t，智能体观察状态 s_t，按照策略 π(a|s) 选择动作 a_t，获得奖励 r_t，然后环境按照转移概率 P(s_{t+1}|s_t,a_t) 产生下一状态。马尔可夫性并不是说真实世界“没有历史”，而是说：如果状态设计得正确，当前状态已经汇总了预测未来所需的历史信息。",
          "ja": "マルコフ決定過程（MDP）は強化学習の標準モデルです。時刻 t で状態 s_t を観測し、方策 π(a|s) から行動 a_t を選び、報酬 r_t を得て、環境は P(s_{t+1}|s_t,a_t) に従って次状態を生成します。マルコフ性は「履歴が存在しない」という意味ではなく、「現在の状態表現が将来予測に必要な履歴を要約している」という意味です。"
        },
        "formula": "M = (S, A, P, r, γ),    P(sₜ₊₁ | s₀:aₜ) = P(sₜ₊₁ | sₜ, aₜ)",
        "bullets": [
          {
            "en": "S is the state space and A is the action space. Either can be discrete or continuous.",
            "zh": "S 是状态空间，A 是动作空间；二者都可以是离散或连续的。",
            "ja": "S は状態空間、A は行動空間で、離散・連続のどちらでも構いません。"
          },
          {
            "en": "P is the transition model. Model-free RL does not require P to be known explicitly; model-based RL learns or uses it.",
            "zh": "P 是状态转移模型。无模型 RL 不要求显式知道 P；基于模型的 RL 则会学习或直接使用它。",
            "ja": "P は遷移モデルです。モデルフリーRLでは明示的に既知でなくてもよく、モデルベースRLでは学習または利用します。"
          },
          {
            "en": "If the observation does not make the process Markov, the problem is better described as a POMDP; history or belief state may then be needed.",
            "zh": "如果当前观测不足以满足马尔可夫性，就更接近 POMDP，需要历史信息、RNN 或 belief state。",
            "ja": "観測だけでマルコフ性が満たされない場合は POMDP と考え、履歴、RNN、belief state などが必要になります。"
          }
        ],
        "example": {
          "title": {
            "en": "Mini example",
            "zh": "小例子",
            "ja": "小さな例"
          },
          "body": {
            "en": "For a mobile robot, state can be position and velocity, action can be acceleration, reward can penalize distance to the goal and energy use, and transition dynamics describe how acceleration changes motion.",
            "zh": "对移动机器人，可把位置和速度作为状态，把加速度作为动作，把“距离目标的误差 + 能耗”写进奖励，转移模型则描述加速度如何改变运动。",
            "ja": "移動ロボットなら、位置・速度を状態、加速度を行動、目標距離とエネルギー消費を報酬にし、運動方程式を遷移モデルとします。"
          }
        }
      },
      {
        "title": {
          "en": "3. Reward, Return, Discounting, and Episodes",
          "zh": "3. 奖励、回报、折扣与 Episode",
          "ja": "3. 報酬・収益・割引・エピソード"
        },
        "body": {
          "en": "The reward r_t is local, while the return G_t evaluates the future consequence of a decision. Discounting with γ∈[0,1) gives near-term rewards more weight and keeps infinite-horizon sums finite. In episodic tasks the process terminates; in continuing tasks it may run indefinitely. Choosing reward and γ changes the task the agent is actually optimizing, so reward design is part of system design rather than a cosmetic detail.",
          "zh": "奖励 r_t 只反映当前一步，而回报 G_t 用来评价一个动作未来会带来什么后果。折扣因子 γ∈[0,1) 让近期奖励权重更高，也能保证无限时域的累计和有限。任务可以是有限 Episode，也可以持续运行。奖励函数与 γ 的选择会直接改变智能体实际优化的目标，因此 reward design 本身就是系统设计的一部分。",
          "ja": "報酬 r_t は局所的な信号で、収益 G_t は将来の結果まで含めて行動を評価します。割引率 γ∈[0,1) により近い将来を重くし、無限ホライズンの和を有限にできます。エピソード型と継続型があり、報酬設計と γ の選択は学習するタスクそのものを変えます。"
        },
        "formula": "Gₜ = rₜ + γrₜ₊₁ + γ²rₜ₊₂ + ··· = Σₖ₌₀^∞ γᵏ rₜ₊ₖ",
        "bullets": [
          {
            "en": "γ near 0 makes the agent myopic; γ near 1 emphasizes long-term consequences.",
            "zh": "γ 接近 0 时更短视；γ 接近 1 时更重视长期后果。",
            "ja": "γ が 0 に近いと近視眼的、1 に近いと長期的になります。"
          },
          {
            "en": "Reward shaping can accelerate learning, but a poorly shaped reward can create unintended behavior.",
            "zh": "奖励塑形可以加速学习，但设计不当会产生“钻奖励漏洞”的行为。",
            "ja": "報酬整形は学習を速めますが、設計が悪いと意図しない最適化を起こします。"
          },
          {
            "en": "For control problems, it is common to use negative cost as reward: r_t = −(state error + control effort + penalties).",
            "zh": "在控制问题中，经常把“负代价”作为奖励，例如状态误差、控制能耗和违约惩罚的负值。",
            "ja": "制御では負のコストを報酬として、状態偏差・制御入力・制約違反などを罰することが一般的です。"
          }
        ],
        "example": {
          "title": {
            "en": "Numerical intuition",
            "zh": "数值直觉",
            "ja": "数値的な直感"
          },
          "body": {
            "en": "If rewards are 1,1,1 and γ=0.9, then G_0=1+0.9+0.81=2.71. The same future reward contributes less when it is farther away.",
            "zh": "若未来三步奖励都是 1，γ=0.9，则 G_0=1+0.9+0.81=2.71。越远的奖励权重越小。",
            "ja": "3 ステップの報酬がすべて 1、γ=0.9 なら G_0=1+0.9+0.81=2.71 です。遠い報酬ほど寄与が小さくなります。"
          },
          "formula": "G₀ = 1 + 0.9 × 1 + 0.9² × 1 = 2.71"
        }
      },
      {
        "title": {
          "en": "4. Value Functions: V, Q, and Advantage",
          "zh": "4. 价值函数：V、Q 与 Advantage",
          "ja": "4. 価値関数：V・Q・Advantage"
        },
        "body": {
          "en": "A value function converts delayed future rewards into a quantity that can be evaluated at the current state. V^π(s) asks how good state s is when policy π is followed. Q^π(s,a) asks how good it is to take action a now and then follow π. The advantage A^π(s,a)=Q^π(s,a)−V^π(s) measures whether an action is better or worse than the policy's typical action at that state.",
          "zh": "价值函数的作用，是把延迟到未来的奖励压缩成当前可以评估的量。V^π(s) 表示“处于状态 s 并继续执行策略 π 时，未来平均能得到多少回报”；Q^π(s,a) 表示“当前先做动作 a，再继续执行 π 会怎样”；Advantage A^π(s,a)=Q^π(s,a)−V^π(s) 则表示这个动作相比当前策略在该状态下的平均水平好多少。",
          "ja": "価値関数は将来の遅延報酬を現在評価できる量へ圧縮します。V^π(s) は状態 s の良さ、Q^π(s,a) は今 a を選んだ後の良さ、Advantage A^π(s,a)=Q^π(s,a)−V^π(s) はその行動が平均的な方策行動よりどれだけ良いかを表します。"
        },
        "formulas": [
          "V^π(s) = E_π[Gₜ | sₜ=s]",
          "Q^π(s,a) = E_π[Gₜ | sₜ=s,aₜ=a]",
          "A^π(s,a) = Q^π(s,a) − V^π(s)"
        ],
        "bullets": [
          {
            "en": "Value-based methods learn V or Q and derive a policy by choosing high-value actions.",
            "zh": "价值型方法先学习 V 或 Q，再通过选择高价值动作得到策略。",
            "ja": "価値ベース法は V や Q を学び、高価値の行動を選ぶことで方策を得ます。"
          },
          {
            "en": "Policy-based methods parameterize the policy directly; a critic may still estimate V or Q to reduce variance.",
            "zh": "策略型方法直接参数化策略；即使如此，也常使用 Critic 估计 V/Q 来降低方差。",
            "ja": "方策ベース法は方策を直接パラメータ化し、分散低減のため Critic で V/Q を推定することがあります。"
          },
          {
            "en": "Advantage is especially important in actor–critic and PPO because it tells the actor which sampled actions deserve increased probability.",
            "zh": "Advantage 在 Actor–Critic 和 PPO 中尤其关键，它告诉 Actor 哪些采样动作应该提高概率、哪些应该降低概率。",
            "ja": "Advantage は Actor–Critic や PPO で、どの行動確率を上げ下げすべきかを示します。"
          }
        ]
      },
      {
        "title": {
          "en": "5. Bellman Equations: Turning Long Horizons into One-Step Recursions",
          "zh": "5. Bellman 方程：把长期问题变成一步递推",
          "ja": "5. ベルマン方程式：長期問題を1ステップ再帰へ"
        },
        "body": {
          "en": "The Bellman idea is the algebraic core of RL: the value of the current state equals the immediate reward plus the discounted value of the next state. This decomposition makes a long-horizon optimization problem recursively solvable. Bellman expectation equations evaluate a fixed policy, while Bellman optimality equations characterize the best possible value function.",
          "zh": "Bellman 思想是强化学习最核心的代数结构：当前状态的价值 = 当前一步奖励 + 下一状态价值的折扣。这样就把一个很长的时域问题拆成了“一步 + 剩余问题”的递推结构。Bellman expectation equation 用于评价固定策略，而 Bellman optimality equation 描述最优策略对应的价值。",
          "ja": "ベルマンの考え方は RL の中心です。現在価値を「即時報酬＋割引された次状態価値」に分解することで、長期問題を再帰的に扱えます。期待ベルマン方程式は固定方策の評価、最適ベルマン方程式は最適価値を特徴づけます。"
        },
        "formulas": [
          "V^π(s) = E_π[rₜ + γV^π(sₜ₊₁) | sₜ=s]",
          "Q*(s,a) = E[rₜ + γ maxₐ′ Q*(sₜ₊₁,a′) | sₜ=s,aₜ=a]"
        ],
        "bullets": [
          {
            "en": "Policy evaluation solves the expectation equation for a fixed policy.",
            "zh": "策略评估是在固定策略下求解 Bellman expectation equation。",
            "ja": "方策評価は固定方策に対する期待ベルマン方程式を解くことです。"
          },
          {
            "en": "Policy improvement makes the policy greedier with respect to the current value estimate.",
            "zh": "策略改进则根据当前价值估计，让策略更偏向高价值动作。",
            "ja": "方策改善は現在の価値推定に対してより greedy な方策へ更新します。"
          },
          {
            "en": "Dynamic programming alternates these operations when the model is known; TD methods approximate the same recursion from samples when the model is unknown.",
            "zh": "已知模型时可用动态规划交替做评估与改进；未知模型时，TD 方法从采样数据近似同样的递推关系。",
            "ja": "モデル既知なら動的計画法、未知ならサンプルから TD 法で同じ再帰構造を近似します。"
          }
        ],
        "takeaway": {
          "en": "Bellman recursion is the bridge from 'future cumulative reward' to a target that can be learned one transition at a time.",
          "zh": "Bellman 递推的意义，就是把“未来累计回报”变成每条状态转移都可以学习的局部目标。",
          "ja": "ベルマン再帰は「将来の累積報酬」を1遷移ずつ学べる局所ターゲットへ変える橋です。"
        }
      },
      {
        "title": {
          "en": "6. Dynamic Programming, Monte Carlo, and TD Learning",
          "zh": "6. DP、Monte Carlo 与 TD 学习",
          "ja": "6. 動的計画法・Monte Carlo・TD 学習"
        },
        "body": {
          "en": "Three families differ mainly in what they use as a learning target. Dynamic programming uses the known transition model and expected next-state values. Monte Carlo waits until an episode finishes and uses the realized return. Temporal-difference (TD) learning updates before termination by bootstrapping from the current estimate of the next state. TD is usually the practical bridge to modern RL.",
          "zh": "这三类方法最主要的区别，在于“用什么作为学习目标”。动态规划需要已知转移模型，使用期望下一状态价值；Monte Carlo 要等 Episode 结束后，用真实累计回报作为目标；时序差分（TD）无需等到结束，而是用“当前奖励 + 下一状态的当前价值估计”进行自举更新。现代强化学习的大量算法都可以看成 TD 思想的扩展。",
          "ja": "これらの違いは主に学習ターゲットです。動的計画法は既知の遷移モデルと期待値、Monte Carlo はエピソード終了後の実収益、TD は次状態の現在価値推定を使ってブートストラップします。現代 RL の多くは TD の拡張とみなせます。"
        },
        "formula": "TD error: δₜ = rₜ + γV(sₜ₊₁) − V(sₜ),    V(sₜ) ← V(sₜ) + αδₜ",
        "bullets": [
          {
            "en": "Monte Carlo has no bootstrap bias but often high variance and requires complete returns.",
            "zh": "Monte Carlo 不依赖自举，因此没有来自 bootstrap 的偏差，但方差通常较高，而且要等完整回报。",
            "ja": "Monte Carlo はブートストラップ偏りがありませんが、分散が大きく、完全な収益が必要です。"
          },
          {
            "en": "TD has lower variance and learns online, but bootstrapping can propagate estimation error.",
            "zh": "TD 方差通常更低且可在线学习，但自举也会传播价值估计误差。",
            "ja": "TD は低分散でオンライン学習できますが、推定誤差をブートストラップで伝播する可能性があります。"
          },
          {
            "en": "n-step returns and TD(λ) interpolate between one-step TD and Monte Carlo.",
            "zh": "n-step return 与 TD(λ) 可以在一步 TD 和 Monte Carlo 之间折中。",
            "ja": "n-step return と TD(λ) は 1-step TD と Monte Carlo の中間を実現します。"
          }
        ]
      },
      {
        "title": {
          "en": "7. SARSA and Q-Learning: On-Policy vs Off-Policy",
          "zh": "7. SARSA 与 Q-Learning：On-Policy 和 Off-Policy",
          "ja": "7. SARSA と Q-Learning：On-policy と Off-policy"
        },
        "body": {
          "en": "Both SARSA and Q-learning estimate action values, but their targets differ. SARSA uses the next action actually selected by the behavior policy, so it learns the value of that policy. Q-learning replaces the next action by the greedy maximum, so it learns toward an optimal greedy target even while behavior explores. This is the classic distinction between on-policy and off-policy learning.",
          "zh": "SARSA 和 Q-learning 都学习动作价值 Q(s,a)，但它们的目标不同。SARSA 使用行为策略下一步实际选择的动作，因此学习的是“当前行为策略”的价值；Q-learning 则直接使用下一状态中最大的 Q 值，因此即使行为策略还在探索，它的更新目标仍朝向贪心最优策略。这就是经典的 on-policy 与 off-policy 区别。",
          "ja": "SARSA と Q-learning はどちらも Q(s,a) を学びますが、ターゲットが異なります。SARSA は実際に次に選んだ行動を使うため on-policy、Q-learning は次状態の最大 Q を使って最適 greedy 方策へ向かうため off-policy です。"
        },
        "formulas": [
          "SARSA: Q ← Q + α[r + γQ(s′,a′) − Q(s,a)]",
          "Q-learning: Q ← Q + α[r + γ maxₐ′Q(s′,a′) − Q(s,a)]"
        ],
        "bullets": [
          {
            "en": "ε-greedy is a simple exploration rule: with probability ε take a random action, otherwise take argmax Q.",
            "zh": "ε-greedy 是最简单的探索规则：以 ε 概率随机探索，否则选择 Q 最大的动作。",
            "ja": "ε-greedy は確率 ε でランダム行動、それ以外は argmax Q を選ぶ探索法です。"
          },
          {
            "en": "Q-learning can learn from data generated by another behavior policy, which is useful for replay buffers and offline data.",
            "zh": "Q-learning 可以利用其他行为策略产生的数据，这为经验回放与离线数据利用提供了基础。",
            "ja": "Q-learning は別の行動方策が生成したデータからも学べるため、リプレイやオフラインデータに適します。"
          },
          {
            "en": "With function approximation, off-policy + bootstrapping + approximation can become unstable; this is one reason deep Q-learning needs stabilizing tricks.",
            "zh": "当引入函数逼近后，off-policy、自举和函数逼近叠加可能导致不稳定，这也是 DQN 需要一系列稳定技巧的原因。",
            "ja": "関数近似では off-policy・bootstrapping・approximation の組合せが不安定化しやすく、DQN に安定化技術が必要な理由です。"
          }
        ]
      },
      {
        "title": {
          "en": "8. DQN: Why Deep Q-Learning Needs Replay and Target Networks",
          "zh": "8. DQN：为什么深度 Q 学习需要经验回放与目标网络",
          "ja": "8. DQN：経験再生とターゲットネットワークが必要な理由"
        },
        "body": {
          "en": "DQN replaces the Q-table with a neural network Q_θ(s,a). The naive idea is simple, but training becomes unstable because consecutive samples are strongly correlated and the target itself changes whenever θ changes. Experience replay breaks short-range correlation by sampling old transitions, while a separate target network θ⁻ changes slowly and stabilizes the bootstrap target.",
          "zh": "DQN 用神经网络 Q_θ(s,a) 替代表格 Q。想法看似简单，但直接训练会很不稳定：连续采样的数据高度相关，而且 θ 一更新，学习目标本身也跟着移动。经验回放通过随机抽取历史 transition 减弱样本相关性；目标网络 θ⁻ 则以较慢频率更新，使 bootstrap target 相对稳定。",
          "ja": "DQN は Q-table をニューラルネット Q_θ(s,a) に置き換えます。しかし連続サンプルの相関と、θ 更新に伴うターゲットの移動が不安定性を生みます。経験再生で相関を弱め、ターゲットネットワーク θ⁻ をゆっくり更新して学習目標を安定化します。"
        },
        "formula": "y = r + γ(1−done) maxₐ′ Q_{θ⁻}(s′,a′),    L(θ)=E[(Q_θ(s,a)−y)²]",
        "bullets": [
          {
            "en": "Replay buffer stores (s,a,r,s′,done) and samples mini-batches approximately i.i.d.",
            "zh": "Replay buffer 保存 (s,a,r,s′,done)，训练时随机抽 mini-batch，使数据更接近独立同分布。",
            "ja": "Replay buffer に (s,a,r,s′,done) を保存し、ランダム mini-batch で相関を弱めます。"
          },
          {
            "en": "Target network can be hard-updated every C steps or soft-updated with Polyak averaging.",
            "zh": "目标网络可以每 C 步硬更新，也可以用 Polyak averaging 软更新。",
            "ja": "ターゲットネットワークは C step ごとの hard update、または Polyak averaging の soft update が使えます。"
          },
          {
            "en": "Double DQN reduces maximization bias by decoupling action selection and action evaluation.",
            "zh": "Double DQN 通过分离动作选择与动作评价来减小 max 运算带来的高估偏差。",
            "ja": "Double DQN は行動選択と評価を分離し、max による過大評価バイアスを軽減します。"
          },
          {
            "en": "DQN is naturally suited to discrete actions; continuous control usually uses policy-gradient or actor–critic methods.",
            "zh": "DQN 更适合离散动作；连续控制通常更适合策略梯度或 Actor–Critic。",
            "ja": "DQN は離散行動向けで、連続制御には方策勾配や Actor–Critic が一般的です。"
          }
        ],
        "example": {
          "title": {
            "en": "Training loop",
            "zh": "训练循环",
            "ja": "学習ループ"
          },
          "body": {
            "en": "Interact with the environment → append transition to replay → sample a batch → build y with the target network → minimize squared TD error → occasionally update the target network.",
            "zh": "与环境交互 → 把 transition 放入 replay buffer → 随机采样 batch → 用目标网络计算 y → 最小化 TD 平方误差 → 定期更新目标网络。",
            "ja": "環境と相互作用 → transition を replay に保存 → batch をサンプル → target network で y を作成 → TD 二乗誤差を最小化 → 定期的に target network を更新。"
          }
        }
      },
      {
        "title": {
          "en": "9. Policy Gradient: Optimizing the Policy Directly",
          "zh": "9. 策略梯度：直接优化策略",
          "ja": "9. 方策勾配：方策を直接最適化"
        },
        "body": {
          "en": "Instead of learning Q and then taking argmax, policy-gradient methods parameterize π_θ(a|s) directly and maximize expected return. The policy-gradient theorem turns this objective into an expectation that can be estimated from sampled trajectories. Multiplying log-probability gradients by return or advantage increases the probability of better-than-expected actions and decreases the probability of worse actions.",
          "zh": "策略梯度不再先学习 Q 再 argmax，而是直接参数化 π_θ(a|s)，最大化期望回报。Policy Gradient Theorem 把这个目标转化为可以通过轨迹采样估计的期望。直观上，∇logπ 乘上回报或 Advantage：如果某动作结果比预期好，就提高它的概率；如果更差，就降低它的概率。",
          "ja": "方策勾配法は Q を学んで argmax するのではなく、π_θ(a|s) を直接パラメータ化して期待収益を最大化します。log π の勾配に収益や Advantage を掛けることで、良かった行動の確率を上げ、悪かった行動の確率を下げます。"
        },
        "formula": "∇θJ(θ) = E_{πθ}[∇θ log πθ(a|s) · A^π(s,a)]",
        "bullets": [
          {
            "en": "For discrete actions, π may be a categorical distribution; for continuous actions, a Gaussian policy is common.",
            "zh": "离散动作常用 categorical policy；连续动作常用 Gaussian policy。",
            "ja": "離散行動では categorical、連続行動では Gaussian 方策が一般的です。"
          },
          {
            "en": "REINFORCE is unbiased in its basic form but can have very high variance.",
            "zh": "经典 REINFORCE 在基本形式下无偏，但梯度方差很高。",
            "ja": "REINFORCE は基本形では不偏ですが分散が大きくなります。"
          },
          {
            "en": "Subtracting a state-dependent baseline such as V(s) does not change the expected gradient but reduces variance; this leads naturally to advantage methods.",
            "zh": "减去 V(s) 这类只依赖状态的 baseline 不改变期望梯度，却能显著降低方差，这就自然引出了 Advantage。",
            "ja": "V(s) のような状態依存 baseline を引くと期待勾配を変えずに分散を減らせます。"
          }
        ]
      },
      {
        "title": {
          "en": "10. Actor–Critic and GAE",
          "zh": "10. Actor–Critic 与 GAE",
          "ja": "10. Actor–Critic と GAE"
        },
        "body": {
          "en": "Actor–critic methods split the job into two learned components. The actor π_θ chooses actions; the critic V_φ or Q_φ evaluates them. The critic supplies a lower-variance learning signal to the actor. Generalized Advantage Estimation (GAE) combines multi-step TD errors with a parameter λ, creating a practical bias–variance trade-off used by PPO and many modern on-policy algorithms.",
          "zh": "Actor–Critic 把任务拆成两个学习器：Actor π_θ 负责决策，Critic V_φ 或 Q_φ 负责评价。Critic 为 Actor 提供比完整 Monte Carlo return 方差更低的学习信号。GAE（Generalized Advantage Estimation）进一步用 λ 把多步 TD error 加权组合，在偏差和方差之间折中，是 PPO 等现代 on-policy 算法的常用组件。",
          "ja": "Actor–Critic は Actor π_θ が行動を選び、Critic V_φ/Q_φ が評価します。Critic により Actor の勾配分散を下げられます。GAE は複数ステップの TD error を λ で重み付けし、バイアスと分散を調整する方法で PPO などに使われます。"
        },
        "formulas": [
          "δₜ = rₜ + γV(sₜ₊₁) − V(sₜ)",
          "Âₜ^GAE = δₜ + (γλ)δₜ₊₁ + (γλ)²δₜ₊₂ + ···"
        ],
        "bullets": [
          {
            "en": "λ≈0 behaves like one-step TD: lower variance, more bootstrap bias.",
            "zh": "λ≈0 更接近一步 TD：方差低，但依赖 bootstrap，偏差更明显。",
            "ja": "λ≈0 は 1-step TD に近く、低分散だが bootstrap bias が増えます。"
          },
          {
            "en": "λ≈1 approaches Monte Carlo-style advantages: lower bias but higher variance.",
            "zh": "λ≈1 更接近 Monte Carlo：偏差更低，但方差更高。",
            "ja": "λ≈1 は Monte Carlo に近く、低バイアスだが高分散です。"
          },
          {
            "en": "The critic is not merely auxiliary: a poor value estimate can make the actor update noisy or systematically wrong.",
            "zh": "Critic 并不是无关紧要的辅助网络：价值估计差会让 Actor 的更新非常噪，甚至方向错误。",
            "ja": "Critic の質が低いと Actor 更新も不安定・誤方向になり得ます。"
          }
        ]
      },
      {
        "title": {
          "en": "11. PPO: Stable Policy Updates in Practice",
          "zh": "11. PPO：如何让策略更新更稳定",
          "ja": "11. PPO：実用的に安定した方策更新"
        },
        "body": {
          "en": "PPO is popular because it keeps the basic policy-gradient workflow while limiting destructive policy updates. It compares the probability of each sampled action under the new and old policies through the ratio r_t(θ). The clipped objective prevents this ratio from moving too far in a direction that would over-amplify the advantage signal. PPO is still an on-policy method: data should not be reused indefinitely after the policy has changed substantially.",
          "zh": "PPO 流行的原因，是它保留了策略梯度的基本流程，同时限制过大的策略更新。它用概率比 r_t(θ) 比较同一个动作在新旧策略下的概率，并通过 clipped objective 限制这个比值不要沿着 Advantage 的方向变化得过头。PPO 仍然属于 on-policy 方法，因此同一批旧数据不能在策略变化很大以后无限重复使用。",
          "ja": "PPO が広く使われる理由は、方策勾配の単純さを保ちつつ、危険な大更新を制限できる点です。新旧方策の確率比 r_t(θ) を使い、clip 目的で Advantage による過大な変化を抑えます。PPO は on-policy なので、古いデータを無制限に再利用する方法ではありません。"
        },
        "formulas": [
          "rₜ(θ) = πθ(aₜ|sₜ) / πθ_old(aₜ|sₜ)",
          "L^CLIP = E[min(rₜÂₜ, clip(rₜ,1−ε,1+ε)Âₜ)]"
        ],
        "bullets": [
          {
            "en": "Typical PPO training alternates rollout collection and several epochs of mini-batch optimization on that rollout.",
            "zh": "典型 PPO 流程是先收集一批 rollout，再对这批数据做若干 epoch 的 mini-batch 更新，然后重新采样。",
            "ja": "典型的な PPO は rollout を収集し、そのデータで数 epoch mini-batch 更新した後、再び新しい rollout を集めます。"
          },
          {
            "en": "The total loss usually contains policy loss, value loss, and an entropy bonus that encourages exploration.",
            "zh": "总损失通常包括 policy loss、value loss 和鼓励探索的 entropy bonus。",
            "ja": "総損失は通常、policy loss、value loss、探索を促す entropy bonus からなります。"
          },
          {
            "en": "Advantage normalization, observation normalization, reward scaling, gradient clipping, and correct terminal handling often matter as much as the headline formula.",
            "zh": "Advantage 归一化、观测归一化、reward scale、梯度裁剪以及正确处理 terminal，往往和核心公式一样影响训练效果。",
            "ja": "Advantage 正規化、観測正規化、reward scale、gradient clipping、terminal 処理も実装上非常に重要です。"
          }
        ],
        "pitfalls": [
          {
            "en": "Treating PPO as off-policy and training too many epochs on stale data.",
            "zh": "把 PPO 当成 off-policy，反复训练过多 epoch，导致数据已经严重 stale。",
            "ja": "PPO を off-policy のように扱い、古いデータで過度に更新する。"
          },
          {
            "en": "Using reward magnitudes that differ by several orders, causing value loss or policy gradients to dominate.",
            "zh": "reward 各项量级差异太大，导致 value loss 或某类梯度完全主导训练。",
            "ja": "報酬項のスケール差が大きすぎて一部の勾配が支配する。"
          },
          {
            "en": "Ignoring action bounds for continuous control; a Gaussian sample may need squashing or clipping with the corresponding log-probability correction.",
            "zh": "连续控制中忽略动作边界；Gaussian 输出常需要 squash/clipping，并正确处理概率密度。",
            "ja": "連続制御で行動境界と squashing 後の log-prob 補正を無視する。"
          }
        ]
      },
      {
        "title": {
          "en": "12. Constrained and Safe RL: Connecting RL to Control",
          "zh": "12. 约束与安全强化学习：把 RL 接到控制问题上",
          "ja": "12. 制約付き・安全RL：制御との接続"
        },
        "body": {
          "en": "In engineering systems, reward maximization alone is rarely enough. Energy budgets, collision avoidance, latency limits, queue stability, and actuator bounds are constraints, not preferences. A constrained MDP separates reward from one or more cost signals and optimizes return subject to cost limits. In safety-critical applications, RL is often combined with model predictive control, control barrier functions, shielding, or optimization-based repair so that learned actions are filtered before execution.",
          "zh": "工程系统里通常不能只最大化奖励。能量预算、防碰撞、时延上限、队列稳定、执行器边界等往往是硬约束，而不是“违反一点也没关系”的偏好。CMDP 会把主奖励与约束代价分开，在约束期望代价不超过阈值的条件下优化回报。对于安全关键系统，常把 RL 和 MPC、Control Barrier Function、安全 shield 或优化修复层结合，在执行动作之前先检查和修正。",
          "ja": "工学システムでは報酬最大化だけでは不十分です。エネルギー、衝突回避、遅延、キュー安定性、入力制限はハード制約です。CMDP は報酬と制約コストを分離し、コスト上限の下で収益を最適化します。安全クリティカル用途では MPC、CBF、shield、最適化修復層と組み合わせて実行前に行動を検証します。"
        },
        "formula": "max_π J_R(π)    s.t.    J_Cᵢ(π) ≤ dᵢ,  i=1,…,m",
        "bullets": [
          {
            "en": "Lagrangian methods turn constraints into adaptive penalties, but feasibility is usually not guaranteed at every time step.",
            "zh": "Lagrangian 方法把约束变成自适应惩罚项，但通常只能约束期望意义，不能自动保证每一步都可行。",
            "ja": "Lagrangian 法は制約を適応的ペナルティへ変えますが、各時刻の厳密な可行性までは保証しないことが多いです。"
          },
          {
            "en": "Safety layers solve a small optimization problem that minimally modifies the RL action to satisfy known constraints.",
            "zh": "Safety layer 可以解一个小型优化问题，在尽量少改变 RL 动作的前提下满足已知约束。",
            "ja": "Safety layer は小規模最適化で RL 行動を最小限修正し、既知制約を満たします。"
          },
          {
            "en": "Use model-free RL when a reliable model is unavailable and interaction is affordable; use MPC when a useful model and hard constraints dominate; hybrid methods are often attractive in networked control.",
            "zh": "当可靠模型难以获得、交互成本可接受时可考虑 model-free RL；当模型较可信且硬约束重要时 MPC 更自然；网络化控制中两者结合常更实用。",
            "ja": "信頼できるモデルがなく十分な相互作用が可能なら model-free RL、モデルとハード制約が重要なら MPC、ネットワーク制御ではハイブリッドが有力です。"
          }
        ],
        "takeaway": {
          "en": "After this note, you should be able to read a modern RL paper and identify its state/action/reward, value target, policy update, on/off-policy nature, exploration mechanism, and constraint-handling strategy.",
          "zh": "看完这篇后，你应该能拿到一篇现代 RL 论文，明确指出它的 state/action/reward、价值目标、策略更新方式、on/off-policy 属性、探索机制以及约束处理方法。",
          "ja": "このノート後には、現代 RL 論文の state/action/reward、価値ターゲット、方策更新、on/off-policy、探索、制約処理を読み解けることを目標とします。"
        }
      }
    ]
  },
  {
    "slug": "model-predictive-control",
    "order": 2,
    "title": {
      "en": "MPC Study Notes",
      "zh": "MPC 学习笔记",
      "ja": "MPC 学習ノート"
    },
    "category": {
      "en": "Optimization & Control",
      "zh": "优化与控制",
      "ja": "最適化・制御"
    },
    "summary": {
      "en": "A complete path from dynamic models and finite-horizon optimization to receding-horizon implementation, recursive feasibility, stability, robust/tube MPC, nonlinear MPC, and distributed MPC.",
      "zh": "从动态系统建模、有限时域优化一路讲到滚动时域执行、递归可行性、稳定性、鲁棒/Tube MPC、非线性 MPC 与分布式 MPC。",
      "ja": "動的モデルと有限ホライズン最適化から、リシーディングホライズン、再帰的可行性、安定性、Tube MPC、NMPC、分散MPCまでを一貫して整理します。"
    },
    "tags": [
      "MPC",
      "QP",
      "Constraints",
      "Recursive Feasibility",
      "Stability",
      "Tube MPC",
      "Distributed MPC"
    ],
    "sections": [
      {
        "title": {
          "en": "1. What MPC Really Does",
          "zh": "1. MPC 到底在做什么",
          "ja": "1. MPC は何をしているのか"
        },
        "body": {
          "en": "Model predictive control (MPC) repeatedly solves a finite-horizon optimal control problem online. At the current state, it predicts future system trajectories, chooses a sequence of control inputs that balances performance and constraints, executes only the first input, measures the new state, and solves again. Re-optimization is what turns an open-loop prediction into a closed-loop feedback controller.",
          "zh": "模型预测控制（MPC）的核心，是在线反复求解有限时域最优控制问题：根据当前状态预测未来轨迹，求一段满足约束且代价最小的控制序列，只执行第一个控制量，然后重新测量状态、向前滚动时域并再次求解。正是这种“每一步重新优化”把原本的开环预测变成了闭环反馈控制。",
          "ja": "MPC は現在状態から有限ホライズンの未来を予測し、制約を満たす最適入力列を求め、最初の入力だけを適用します。その後状態を再計測して再最適化します。この反復最適化が開ループ予測を閉ループフィードバックへ変えます。"
        },
        "bullets": [
          {
            "en": "Prediction uses a system model; optimization chooses the future input sequence; feedback comes from solving again after new measurements.",
            "zh": "预测依赖系统模型；优化负责选择未来输入序列；反馈则来自每次获得新测量后重新求解。",
            "ja": "予測はモデル、最適化は入力列選択、フィードバックは新しい観測後の再最適化から生まれます。"
          },
          {
            "en": "MPC is especially attractive when constraints are essential rather than optional.",
            "zh": "当状态、输入、能量、碰撞等约束必须严格考虑时，MPC 尤其有优势。",
            "ja": "状態・入力・エネルギー・衝突などの制約が重要な場合に MPC は特に有効です。"
          },
          {
            "en": "The horizon is finite for computation, but repeated receding-horizon execution creates an indefinitely running controller.",
            "zh": "优化时域有限是为了可计算，但不断滚动执行可以形成长期运行的控制器。",
            "ja": "有限ホライズンで計算しつつ、receding horizon により長時間動作する制御器になります。"
          }
        ],
        "example": {
          "title": {
            "en": "One-dimensional intuition",
            "zh": "一维直觉",
            "ja": "1次元の直感"
          },
          "body": {
            "en": "For a car approaching a stop line, MPC can predict position and speed for the next N steps, penalize distance and control effort, constrain speed and acceleration, and choose a braking sequence. Only the first braking command is sent before the problem is solved again.",
            "zh": "例如车辆接近停车线：MPC 预测未来 N 步位置和速度，把停车误差和控制能耗写进目标函数，把速度与加速度写成约束，求出一串制动量，但只执行第一步，然后下一采样时刻重新计算。",
            "ja": "停止線へ近づく車両なら、N ステップ先の位置・速度を予測し、停止誤差と制御入力を評価し、速度・加速度制約の下で制動列を求め、最初の制動だけ適用します。"
          }
        }
      },
      {
        "title": {
          "en": "2. System Model and Discretization",
          "zh": "2. 系统模型与离散化",
          "ja": "2. システムモデルと離散化"
        },
        "body": {
          "en": "MPC needs a prediction model. A common starting point is the continuous-time linear model ẋ=Ax+Bu, which is discretized at sampling period T_s into x_{k+1}=A_d x_k+B_d u_k. Nonlinear systems use x_{k+1}=f(x_k,u_k). State x should contain the minimum information needed to predict future evolution, while u contains variables the controller can directly choose.",
          "zh": "MPC 首先需要一个可用于预测的动态模型。常见起点是连续线性系统 ẋ=Ax+Bu，根据采样周期 T_s 离散化为 x_{k+1}=A_d x_k+B_d u_k；非线性系统则写成 x_{k+1}=f(x_k,u_k)。状态 x 应尽可能包含预测未来所需的信息，u 则是控制器能够直接决定的控制量。",
          "ja": "MPC には予測モデルが必要です。連続線形系 ẋ=Ax+Bu をサンプリング周期 T_s で x_{k+1}=A_d x_k+B_d u_k に離散化するのが代表例です。非線形なら x_{k+1}=f(x_k,u_k) を使います。状態 x は将来予測に必要な情報、u は直接操作可能な入力です。"
        },
        "formulas": [
          "Continuous: ẋ(t)=Ax(t)+Bu(t)",
          "Discrete: xₖ₊₁=A_d xₖ+B_d uₖ",
          "Zero-order hold: A_d=e^{AT_s},  B_d=∫₀^{T_s}e^{Aτ}B dτ"
        ],
        "bullets": [
          {
            "en": "Sampling too slowly loses dynamics; sampling too fast increases optimization frequency and may amplify noise.",
            "zh": "采样太慢会丢失动态特征；采样太快则增加求解频率，并可能放大测量噪声的影响。",
            "ja": "サンプリングが遅すぎると動特性を失い、速すぎると計算負荷やノイズ影響が増えます。"
          },
          {
            "en": "Model mismatch is inevitable; robust MPC, adaptive MPC, disturbance models, or frequent state feedback are used to mitigate it.",
            "zh": "模型失配不可避免；可通过鲁棒 MPC、自适应 MPC、扰动模型和高频反馈等方式缓解。",
            "ja": "モデル誤差は避けられず、robust/adaptive MPC、外乱モデル、頻繁なフィードバックで対処します。"
          },
          {
            "en": "For tracking, it is often useful to augment the model with disturbance or integral states to remove steady-state offset.",
            "zh": "跟踪任务中，常加入扰动状态或积分状态，以消除模型误差导致的稳态偏差。",
            "ja": "追従では外乱状態や積分状態を拡張し、定常偏差を除くことがよくあります。"
          }
        ]
      },
      {
        "title": {
          "en": "3. Multi-Step Prediction and Condensed Form",
          "zh": "3. 多步预测与矩阵堆叠",
          "ja": "3. 多段予測と condensed form"
        },
        "body": {
          "en": "For the linear discrete model, future states can be expanded recursively. After stacking N predicted states and N inputs, the complete prediction can be written as X=𝒜x_k+ℬU. This condensed representation is important because it converts dynamic constraints into one matrix relation and lets the MPC problem be written directly as a quadratic program in the decision vector U.",
          "zh": "对于离散线性系统，可以递推展开未来状态。把 N 步预测状态和控制量分别堆叠为 X 与 U 后，可写成 X=𝒜x_k+ℬU。这个 condensed form 很重要，因为它把整段动态约束压缩成一个矩阵关系，使 MPC 可以直接写成以 U 为决策变量的标准二次规划。",
          "ja": "離散線形系では未来状態を再帰展開できます。N ステップ分を積み上げると X=𝒜x_k+ℬU と書けます。この condensed form により動力学制約を行列関係にまとめ、U を変数とする QP として表せます。"
        },
        "formulas": [
          "xₖ₊₁=Axₖ+Buₖ",
          "xₖ₊₂=A²xₖ+ABuₖ+Buₖ₊₁",
          "X = 𝒜xₖ + ℬU"
        ],
        "bullets": [
          {
            "en": "The prediction matrix 𝒜 contains powers of A; ℬ contains A^iB terms describing how every future input affects every future state.",
            "zh": "预测矩阵 𝒜 由 A 的幂组成；ℬ 中的 A^iB 描述每个未来输入如何影响后续状态。",
            "ja": "𝒜 は A の累乗、ℬ は A^iB を含み、各入力が将来状態へ与える影響を表します。"
          },
          {
            "en": "Condensing reduces explicit state variables but can make matrices dense; sparse formulations keep states and dynamics explicitly and can be better for long horizons.",
            "zh": "Condensed 形式减少显式状态变量，但矩阵可能变稠密；长时域问题常保留状态与动态约束，利用稀疏求解器更高效。",
            "ja": "Condensing は状態変数を減らす一方で密行列化しやすく、長いホライズンでは sparse formulation が有利な場合があります。"
          }
        ]
      },
      {
        "title": {
          "en": "4. Objective Function: What the Controller Is Asked to Prefer",
          "zh": "4. 目标函数：控制器究竟在偏好什么",
          "ja": "4. 目的関数：制御器に何を望ませるか"
        },
        "body": {
          "en": "A standard tracking MPC penalizes predicted state or output error and control effort over the horizon, plus a terminal cost. Q determines which state errors matter, R penalizes aggressive actuation, and sometimes Δu is penalized to obtain smoother commands. The numerical scale of these weights changes closed-loop behavior, so tuning should be tied to physical units and control priorities rather than arbitrary large numbers.",
          "zh": "标准跟踪型 MPC 会在预测时域内惩罚状态/输出跟踪误差和控制能耗，并在末端加入 terminal cost。Q 决定哪些状态误差更重要，R 决定多大程度抑制激烈控制，有时还会惩罚 Δu 来获得更平滑的控制指令。权重尺度会直接改变闭环行为，因此最好根据物理量单位和控制优先级来调，而不是随意设很大的数字。",
          "ja": "標準追従 MPC は状態・出力誤差と入力エネルギー、終端コストを評価します。Q は状態誤差の重要度、R は入力の強さ、必要なら Δu を罰して滑らかにします。重みは物理単位と優先順位に基づいて調整すべきです。"
        },
        "formula": "J = Σ_{i=0}^{N−1}(‖x_{k+i|k}−x_ref‖²_Q + ‖u_{k+i|k}−u_ref‖²_R) + ‖x_{k+N|k}−x_ref‖²_P",
        "bullets": [
          {
            "en": "Large Q relative to R makes tracking aggressive; large R makes control conservative.",
            "zh": "Q 相对 R 较大时跟踪更激进；R 较大时控制更保守。",
            "ja": "Q が R より大きいほど追従は積極的、R が大きいほど入力は保守的です。"
          },
          {
            "en": "Normalize states with very different physical scales before interpreting weights.",
            "zh": "若不同状态物理量级相差很大，最好先做尺度归一化再讨论 Q 的权重。",
            "ja": "状態量のスケール差が大きい場合は正規化してから重みを解釈します。"
          },
          {
            "en": "Soft constraints introduce slack variables with penalties; this can prevent solver failure when occasional constraint relaxation is physically acceptable.",
            "zh": "软约束通过 slack variable 和惩罚项允许有限违约，可避免某些场景下一旦硬约束不可行就直接求解失败。",
            "ja": "soft constraint は slack と罰則で一時的な違反を許し、物理的に許容可能なら infeasible を避けられます。"
          }
        ]
      },
      {
        "title": {
          "en": "5. Constraints: The Main Practical Advantage of MPC",
          "zh": "5. 约束：MPC 最核心的工程优势",
          "ja": "5. 制約：MPC の実用上の強み"
        },
        "body": {
          "en": "MPC can impose state, input, rate, collision, energy, resource, and coupled constraints directly inside the optimization problem. Hard constraints must always be satisfied by the optimizer; soft constraints add slack and penalties. The important distinction is between constraints that describe physics and safety, which should usually remain hard, and comfort/performance preferences, which may be softened.",
          "zh": "MPC 可以把状态边界、输入边界、输入变化率、防碰撞、能量预算、资源容量以及多智能体耦合等约束直接写进优化问题。硬约束要求求解结果必须满足；软约束则引入松弛变量并付出惩罚。工程上需要区分“物理/安全约束”和“性能偏好”：前者通常应该保持硬约束，后者在必要时可以软化。",
          "ja": "MPC は状態、入力、入力変化率、衝突、エネルギー、資源、エージェント間結合などを最適化問題に直接入れられます。hard constraint は必ず満たす必要があり、soft constraint は slack と罰則で緩和します。物理・安全制約と性能上の希望を区別することが重要です。"
        },
        "formulas": [
          "x_min ≤ x_{k+i|k} ≤ x_max",
          "u_min ≤ u_{k+i|k} ≤ u_max",
          "Δu_min ≤ u_{k+i|k}−u_{k+i−1|k} ≤ Δu_max"
        ],
        "bullets": [
          {
            "en": "A finite-horizon problem can be infeasible even if the physical system is controllable; constraints and horizon length matter.",
            "zh": "即使系统本身可控，有限时域 MPC 也可能因约束和时域长度而不可行。",
            "ja": "系が可制御でも、制約とホライズン長によって有限ホライズン問題は infeasible になり得ます。"
          },
          {
            "en": "Constraint tightening is used in robust MPC to reserve margin for uncertainty.",
            "zh": "鲁棒 MPC 常通过约束收紧为不确定性预留安全裕度。",
            "ja": "robust MPC では不確かさの余裕を確保するため constraint tightening を使います。"
          },
          {
            "en": "Binary logic, mode switching, scheduling, and assignment produce mixed-integer MPC, which is much more computationally expensive than QP-based linear MPC.",
            "zh": "若引入开关逻辑、模式切换、调度或分配决策，问题会变成混合整数 MPC，计算复杂度远高于普通线性 QP-MPC。",
            "ja": "論理・モード切替・割当を入れると mixed-integer MPC となり、通常の QP-MPC より計算負荷が大きくなります。"
          }
        ]
      },
      {
        "title": {
          "en": "6. From Linear MPC to a Quadratic Program",
          "zh": "6. 从线性 MPC 到标准 QP",
          "ja": "6. 線形MPCからQPへ"
        },
        "body": {
          "en": "When dynamics are linear, costs are quadratic, and constraints are linear, the MPC problem is a convex quadratic program. After substituting X=𝒜x_k+ℬU into the objective and constraints, the online problem can be written in the standard form min 1/2 U^T H U + f(x_k)^T U subject to GU≤h+Ex_k. For positive-semidefinite H, modern QP solvers can solve this reliably and quickly.",
          "zh": "当系统动态线性、代价函数二次、约束线性时，MPC 就是凸二次规划（QP）。将 X=𝒜x_k+ℬU 代入目标与约束后，在线问题可以整理成标准形式：min 1/2 U^T H U + f(x_k)^T U，subject to GU≤h+Ex_k。若 H 半正定，这就是成熟求解器能够稳定快速处理的凸 QP。",
          "ja": "線形ダイナミクス、二次コスト、線形制約なら MPC は凸 QP です。X=𝒜x_k+ℬU を代入すると min 1/2 U^T H U + f(x_k)^T U, s.t. GU≤h+Ex_k の形になり、H が半正定値なら高信頼に解けます。"
        },
        "formula": "min_U  ½UᵀHU + f(xₖ)ᵀU    s.t.    GU ≤ h + Exₖ",
        "bullets": [
          {
            "en": "H is determined mainly by Q, R, P and prediction matrices; f changes with the current state/reference.",
            "zh": "H 主要由 Q、R、P 和预测矩阵决定；f 会随当前状态与参考轨迹变化。",
            "ja": "H は主に Q,R,P と予測行列で決まり、f は現在状態や参照値で変化します。"
          },
          {
            "en": "Warm-starting with the shifted previous solution can substantially reduce online solve time.",
            "zh": "把上一时刻的最优序列平移后作为 warm start，常能显著降低在线求解时间。",
            "ja": "前時刻解をシフトして warm start すると計算時間を大きく短縮できます。"
          },
          {
            "en": "For embedded deployment, solver worst-case time matters more than average time.",
            "zh": "嵌入式实时控制中，比平均求解时间更重要的是最坏情况下能否在采样周期内完成。",
            "ja": "組込み実装では平均時間より最悪計算時間がサンプリング周期内に収まることが重要です。"
          }
        ]
      },
      {
        "title": {
          "en": "7. The Receding-Horizon Algorithm Step by Step",
          "zh": "7. 滚动时域算法：每个采样时刻到底做什么",
          "ja": "7. Receding-horizon アルゴリズム"
        },
        "body": {
          "en": "The implementation loop is simple but must be executed in the correct order. At each sampling time: estimate the state, update references and predictions, build the optimization problem, solve it, check solver status, apply only the first control move, then repeat. The predicted trajectory is a plan, not a commitment; future planned inputs will normally be recomputed before they are used.",
          "zh": "MPC 的在线实现循环并不复杂，但顺序非常重要：每个采样时刻先获取或估计当前状态，更新参考值和外部预测，构造优化问题，求解并检查求解器状态，只应用最优序列中的第一个控制量，然后进入下一时刻重复。预测轨迹只是“当前计划”，不是未来必须照搬的承诺，因为后续输入在真正执行前通常都会重新计算。",
          "ja": "MPC 実装は各時刻で、状態推定 → 参照/予測更新 → 最適化構築 → 求解 → solver status 確認 → 最初の入力のみ適用 → 繰り返し、という流れです。予測軌道は計画であり、将来入力は実際に使う前に再計算されます。"
        },
        "bullets": [
          {
            "en": "State estimation is part of the loop if not all states are directly measured.",
            "zh": "若状态无法全部直接测量，状态估计器就是 MPC 在线循环的一部分。",
            "ja": "全状態を直接測定できない場合、状態推定器もループの一部です。"
          },
          {
            "en": "Always define a fallback action for solver timeout or infeasibility in a real system.",
            "zh": "真实系统里必须为求解超时或不可行定义 fallback control，而不能默认求解器永远成功。",
            "ja": "実システムでは timeout/infeasible 時の fallback control を必ず用意します。"
          },
          {
            "en": "Logging predicted constraint margins, objective terms, and solve status is essential for debugging.",
            "zh": "调试时应记录预测约束裕度、各目标项、求解器状态和求解时间，而不只看输出轨迹。",
            "ja": "デバッグでは制約余裕、目的関数各項、solver status、計算時間を記録します。"
          }
        ]
      },
      {
        "title": {
          "en": "8. Recursive Feasibility: Why Feasible Now Should Stay Feasible",
          "zh": "8. 递归可行性：为什么现在可行，下一步也要可行",
          "ja": "8. 再帰的可行性"
        },
        "body": {
          "en": "Feasibility at one time does not automatically imply feasibility at the next time. Recursive feasibility means that if the MPC problem is feasible now and the prescribed control is applied, the next MPC problem will also be feasible. A standard proof uses a shifting argument: shift the previously feasible control sequence by one step and append a terminal admissible control. Terminal sets and invariant controllers are designed so that this appended tail remains feasible.",
          "zh": "某一时刻优化问题可行，并不自动意味着下一时刻仍然可行。递归可行性要求：如果当前 MPC 可行并按照规定控制执行，那么下一时刻的 MPC 仍然可行。经典证明使用“移位论证”：把上一次可行控制序列丢掉第一项、整体向前平移，再在末尾补一个满足终端条件的控制动作。终端集合和局部不变控制器的作用，就是保证这个补上的尾部仍然可行。",
          "ja": "ある時刻で feasible でも次時刻も feasible とは限りません。再帰的可行性は、現在 feasible で制御を適用すれば次の MPC も feasible である性質です。典型証明では前回の可行入力列を1ステップシフトし、末尾に終端制御を追加します。終端集合と不変制御則がその末尾の可行性を保証します。"
        },
        "bullets": [
          {
            "en": "Recursive feasibility is a property of the controller construction, not merely of the numerical solver.",
            "zh": "递归可行性是控制器设计本身的性质，不是“求解器性能好”就能自动获得的。",
            "ja": "再帰的可行性は solver の性能ではなく制御器設計の性質です。"
          },
          {
            "en": "Disturbances break nominal shift arguments unless robustness or constraint margins are included.",
            "zh": "存在扰动时，名义移位论证可能失效，需要鲁棒不变集或约束裕度。",
            "ja": "外乱があると nominal shift argument は壊れるため、robust invariant set や margin が必要です。"
          },
          {
            "en": "Soft constraints improve numerical survivability but do not by themselves prove hard safety constraints remain satisfied.",
            "zh": "软约束可以减少优化不可行，但并不等价于证明硬安全约束始终满足。",
            "ja": "soft constraint は infeasible を減らしますが hard safety の保証とは別です。"
          }
        ]
      },
      {
        "title": {
          "en": "9. Stability, Terminal Cost, and Terminal Set",
          "zh": "9. 稳定性、Terminal Cost 与 Terminal Set",
          "ja": "9. 安定性・終端コスト・終端集合"
        },
        "body": {
          "en": "A short finite horizon may choose actions that look good within N steps but are bad afterward. Terminal ingredients approximate what happens beyond the horizon. A terminal cost V_f(x) estimates remaining infinite-horizon cost; a terminal set X_f requires the final predicted state to enter a region where a known local controller can keep the system feasible and decrease V_f. Under standard conditions, the optimal MPC cost becomes a Lyapunov function for the closed loop.",
          "zh": "有限预测时域会产生“只顾眼前 N 步”的风险。终端设计就是用来近似时域之外的后续影响：terminal cost V_f(x) 估计剩余无限时域代价；terminal set X_f 要求预测末端进入一个已知局部控制器可以保持可行并继续稳定的区域。在经典条件下，MPC 的最优值函数可以充当闭环系统的 Lyapunov 函数。",
          "ja": "短い有限ホライズンでは horizon 後を無視した行動を選ぶ可能性があります。terminal cost V_f は horizon 後のコストを近似し、terminal set X_f は局所制御器で可行性と安定化を保証できる領域です。標準条件下では MPC 最適値関数が Lyapunov 関数として使えます。"
        },
        "formulas": [
          "x_{k+N|k} ∈ X_f",
          "V_f(f(x,κ_f(x))) − V_f(x) ≤ −ℓ(x,κ_f(x))"
        ],
        "bullets": [
          {
            "en": "For linear quadratic MPC, an LQR solution often supplies a natural terminal controller K and terminal matrix P.",
            "zh": "在线性二次 MPC 中，LQR 常提供自然的终端反馈 K 与终端矩阵 P。",
            "ja": "線形二次 MPC では LQR から終端ゲイン K と行列 P を得ることがよくあります。"
          },
          {
            "en": "The terminal set should be positively invariant under the terminal controller and respect state/input constraints.",
            "zh": "终端集合通常要求在终端控制器下正不变，并满足状态与输入约束。",
            "ja": "終端集合は終端制御器の下で正不変かつ状態・入力制約を満たす必要があります。"
          },
          {
            "en": "Not every practical MPC uses an explicit terminal set, but omitting it changes what can be rigorously guaranteed.",
            "zh": "实际工程中并非所有 MPC 都显式使用 terminal set，但省略它会改变能否严格证明的稳定性与可行性性质。",
            "ja": "実務では terminal set を省略する場合もありますが、その場合に証明できる保証は変わります。"
          }
        ]
      },
      {
        "title": {
          "en": "10. Robust MPC and Tube MPC",
          "zh": "10. 鲁棒 MPC 与 Tube MPC",
          "ja": "10. Robust MPC と Tube MPC"
        },
        "body": {
          "en": "When the real system is x_{k+1}=Ax_k+Bu_k+w_k with bounded disturbance w_k∈W, a nominal MPC plan alone may violate constraints. Tube MPC decomposes the real state into a nominal state z_k and an error e_k=x_k−z_k. The optimizer plans z and a nominal input v inside tightened constraints, while a local feedback K e_k keeps the real state inside a robust invariant error tube around the nominal trajectory.",
          "zh": "若真实系统为 x_{k+1}=Ax_k+Bu_k+w_k，且扰动 w_k∈W 有界，那么只做名义 MPC 可能导致真实状态越界。Tube MPC 把真实状态分成名义状态 z_k 与误差 e_k=x_k−z_k：优化器只为 z 和名义输入 v 规划，并使用收紧后的约束；局部反馈 K e_k 则把真实状态保持在名义轨迹周围的鲁棒误差管束内。",
          "ja": "実系 x_{k+1}=Ax_k+Bu_k+w_k で w_k∈W のとき nominal MPC だけでは制約違反が起こり得ます。Tube MPC は x=z+e と分解し、名目軌道 z,v を tightened constraints 内で最適化し、局所フィードバック Ke で実状態を nominal trajectory 周辺の robust tube 内に保ちます。"
        },
        "formulas": [
          "uₖ = vₖ + K(xₖ−zₖ)",
          "eₖ₊₁ = (A+BK)eₖ + wₖ",
          "zₖ ∈ X ⊖ E,   vₖ ∈ U ⊖ KE"
        ],
        "bullets": [
          {
            "en": "E is a robust positively invariant set for the error dynamics.",
            "zh": "E 是误差动态的鲁棒正不变集合。",
            "ja": "E は誤差ダイナミクスの robust positively invariant set です。"
          },
          {
            "en": "Constraint tightening reserves exactly the margin needed for worst-case tracking error.",
            "zh": "约束收紧的本质，是为最坏情况下的误差预留可行裕度。",
            "ja": "constraint tightening は最悪誤差分の余裕を確保します。"
          },
          {
            "en": "Tube MPC is usually less conservative than planning directly against all disturbance realizations, while remaining computationally practical for linear systems.",
            "zh": "相比直接对所有扰动序列做 worst-case 优化，Tube MPC 往往更实用，并在很多线性系统中保持可接受的保守性。",
            "ja": "すべての外乱系列を直接最適化するより実用的で、線形系では計算可能性とロバスト性のバランスが良い方法です。"
          }
        ]
      },
      {
        "title": {
          "en": "11. Nonlinear MPC and Distributed MPC",
          "zh": "11. 非线性 MPC 与分布式 MPC",
          "ja": "11. 非線形MPCと分散MPC"
        },
        "body": {
          "en": "Nonlinear MPC (NMPC) keeps nonlinear dynamics or constraints and therefore solves a nonlinear program rather than a QP. It can be much more accurate but is harder to solve globally and in real time. Distributed MPC (DMPC) addresses multi-agent or networked systems by decomposing the global problem into local optimizations that exchange trajectories, coupling variables, or dual messages. The main design question becomes how to coordinate coupling while keeping communication and computation manageable.",
          "zh": "非线性 MPC（NMPC）直接保留非线性动态或约束，因此在线求解的是非线性规划，而不是凸 QP。它可以更准确，但实时求解和全局最优性更困难。分布式 MPC（DMPC）则面向多智能体/网络化系统，把全局优化拆成多个局部子问题，通过交换预测轨迹、耦合变量或对偶信息实现协调。其核心难点变成：如何在保证耦合约束的同时控制通信与计算开销。",
          "ja": "NMPC は非線形ダイナミクス・制約を保持して NLP を解くため高精度ですが、実時間計算や大域最適性が難しくなります。DMPC は多エージェント系を局所問題へ分解し、予測軌道、結合変数、双対情報などを交換して協調します。"
        },
        "bullets": [
          {
            "en": "Sequential quadratic programming and interior-point methods are common NMPC solvers; warm starts are very important.",
            "zh": "SQP 和 interior-point 是常见 NMPC 求解方法，warm start 对实时性非常重要。",
            "ja": "SQP や interior-point が NMPC でよく使われ、warm start が重要です。"
          },
          {
            "en": "DMPC can be cooperative, noncooperative/game-theoretic, hierarchical, or consensus/ADMM-based.",
            "zh": "DMPC 可以是协作式、博弈式、分层式，也可以基于 consensus/ADMM 分解。",
            "ja": "DMPC には協調型、ゲーム型、階層型、consensus/ADMM 型などがあります。"
          },
          {
            "en": "Communication delay and packet loss become part of the controller design, not merely networking details.",
            "zh": "在网络化控制里，通信时延和丢包不再只是“网络问题”，而会直接影响控制器设计。",
            "ja": "ネットワーク制御では遅延やパケット損失自体が制御設計の一部になります。"
          }
        ]
      },
      {
        "title": {
          "en": "12. Tuning and Debugging Checklist",
          "zh": "12. MPC 调参和排错清单",
          "ja": "12. MPC の調整・デバッグ"
        },
        "body": {
          "en": "When an MPC behaves badly, debugging should proceed from model and feasibility before changing weights. First verify the discretized model and state estimate, then test unconstrained prediction, then add constraints, and only afterward tune Q/R/P and the horizon. Separate numerical problems from control-design problems by logging condition numbers, solver status, active constraints, and prediction error.",
          "zh": "MPC 表现不好时，不应该第一反应就乱改 Q/R。更可靠的排错顺序是：先确认离散模型和状态估计正确，再检查无约束预测，再逐步加入约束，最后才调 Q/R/P 与 horizon。要通过 condition number、solver status、active constraints、预测误差等日志，把数值问题与控制设计问题分开。",
          "ja": "MPC がうまく動かない場合、まず Q/R を変えるのではなく、離散モデルと状態推定 → 無制約予測 → 制約追加 → 重みと horizon 調整の順で確認します。condition number、solver status、active constraint、予測誤差を記録し、数値問題と制御設計問題を分離します。"
        },
        "bullets": [
          {
            "en": "If the optimizer is infeasible, inspect which constraint is conflicting before increasing penalties.",
            "zh": "若 infeasible，应先定位是哪类约束冲突，而不是盲目增加惩罚。",
            "ja": "infeasible の場合は、罰則を大きくする前にどの制約が衝突しているか確認します。"
          },
          {
            "en": "If control is oscillatory, check sampling, model mismatch, overly aggressive Q/R ratio, and missing input-rate penalties.",
            "zh": "若控制振荡，检查采样周期、模型失配、过激的 Q/R 比例以及是否缺少 Δu 惩罚。",
            "ja": "振動する場合はサンプリング、モデル誤差、Q/R、Δu 罰則を確認します。"
          },
          {
            "en": "If solve time is too high, reduce horizon, exploit sparsity, warm-start, simplify nonlinearities, or move slow combinatorial decisions to a higher layer.",
            "zh": "若求解太慢，可缩短 horizon、利用稀疏结构、warm start、简化非线性，或把慢速整数/组合决策放到更高层。",
            "ja": "計算が遅い場合、horizon 短縮、疎構造、warm start、非線形簡略化、組合せ決定の上位層化を検討します。"
          }
        ],
        "takeaway": {
          "en": "After this note, you should be able to derive a basic linear MPC QP, explain why receding-horizon feedback works, distinguish feasibility from stability, and understand what robust/tube and distributed MPC add.",
          "zh": "看完这篇后，你应该能够从线性系统推导基本 MPC-QP，解释滚动时域为什么形成反馈，区分“可行性”和“稳定性”，并说清 Tube MPC 与 DMPC 分别解决什么问题。",
          "ja": "このノート後には基本線形 MPC-QP を導出し、receding horizon の意味、可行性と安定性の違い、Tube MPC と DMPC の役割を説明できることを目標とします。"
        }
      }
    ]
  },
  {
    "slug": "control-theory",
    "order": 3,
    "title": {
      "en": "Control Theory Study Notes",
      "zh": "控制理论学习笔记",
      "ja": "制御理論 学習ノート"
    },
    "category": {
      "en": "Systems & Control",
      "zh": "系统与控制",
      "ja": "システム・制御"
    },
    "summary": {
      "en": "A self-contained route through state-space modeling, equilibria and linearization, eigenvalue stability, controllability, observability, state feedback, LQR, observers, Kalman filtering, and reference tracking.",
      "zh": "从状态空间建模、平衡点与线性化开始，系统学习特征值稳定性、可控性、可观性、状态反馈、LQR、观测器、Kalman 滤波与参考跟踪。",
      "ja": "状態空間、平衡点・線形化、固有値安定性、可制御性・可観測性、状態フィードバック、LQR、オブザーバ、Kalman filter、追従制御までを一貫して学びます。"
    },
    "tags": [
      "State Space",
      "Stability",
      "Controllability",
      "Observability",
      "Pole Placement",
      "LQR",
      "Kalman Filter"
    ],
    "sections": [
      {
        "title": {
          "en": "1. System, State, Input, and Output",
          "zh": "1. 系统、状态、输入和输出",
          "ja": "1. システム・状態・入力・出力"
        },
        "body": {
          "en": "Control theory starts by separating what evolves internally from what can be manipulated and what can be measured. The state x is the smallest set of variables that, together with future inputs, determines future system evolution. The input u is what the controller can change. The output y is what sensors or the task expose. This distinction is fundamental because the controller may need to regulate states that are not directly measured.",
          "zh": "控制理论首先要区分系统内部怎样演化、我们能操纵什么、我们能测到什么。状态 x 是这样一组最小变量：给定当前 x 和未来输入，就足以确定未来系统演化；输入 u 是控制器可以直接改变的量；输出 y 是传感器或任务真正暴露出来的量。三者不一定相同，因此控制器经常需要控制“无法直接测量”的状态。",
          "ja": "制御理論では内部で進化する量、操作できる量、測定できる量を分けます。状態 x は現在値と将来入力から未来を決定できる最小情報、入力 u は操作量、出力 y は測定・利用可能な量です。状態と出力が一致しないことが多いため状態推定が必要になります。"
        },
        "bullets": [
          {
            "en": "State is not the same as sensor readings; unmeasured state can still be essential to predict dynamics.",
            "zh": "状态不等于传感器读数；即使某状态测不到，也可能是预测动态不可缺少的内部变量。",
            "ja": "状態はセンサ値と同じではなく、未観測状態も将来予測に必要な場合があります。"
          },
          {
            "en": "A model can be continuous-time or discrete-time, linear or nonlinear, deterministic or stochastic.",
            "zh": "模型可以是连续/离散、线性/非线性、确定性/随机性。",
            "ja": "モデルは連続/離散、線形/非線形、決定論/確率論的に分類できます。"
          },
          {
            "en": "Feedback means the control action depends on measured or estimated current state, so disturbances can be corrected online.",
            "zh": "反馈意味着控制动作依赖当前测量或估计状态，因此能够在线纠正扰动和模型误差。",
            "ja": "フィードバックでは現在の測定・推定状態に応じて入力を変え、外乱やモデル誤差を補正します。"
          }
        ]
      },
      {
        "title": {
          "en": "2. State-Space Representation in Continuous and Discrete Time",
          "zh": "2. 连续与离散状态空间模型",
          "ja": "2. 連続・離散状態空間モデル"
        },
        "body": {
          "en": "A linear time-invariant (LTI) continuous-time model is ẋ=Ax+Bu, y=Cx+Du. Matrix A describes internal dynamics, B how inputs affect states, C which state combinations are measured, and D any direct input-to-output path. The discrete counterpart is x_{k+1}=Ax_k+Bu_k, y_k=Cx_k+Du_k. Most digital controllers ultimately operate on a discrete model.",
          "zh": "线性时不变（LTI）连续系统写成 ẋ=Ax+Bu, y=Cx+Du。A 描述内部状态之间如何相互作用，B 描述输入如何进入状态，C 描述输出测量哪些状态组合，D 表示输入是否直接影响输出。离散系统则为 x_{k+1}=Ax_k+Bu_k, y_k=Cx_k+Du_k。数字控制器最终通常工作在离散模型上。",
          "ja": "LTI 連続系は ẋ=Ax+Bu, y=Cx+Du です。A は内部ダイナミクス、B は入力影響、C は観測、D は直接入力出力経路を表します。離散系は x_{k+1}=Ax_k+Bu_k で、デジタル制御では最終的に離散モデルを扱うことが多いです。"
        },
        "formulas": [
          "ẋ = Ax + Bu,   y = Cx + Du",
          "xₖ₊₁ = A_dxₖ + B_duₖ"
        ],
        "bullets": [
          {
            "en": "The eigenvalues of A determine natural modes when u=0.",
            "zh": "当 u=0 时，A 的特征值决定系统自然模态。",
            "ja": "u=0 の自然モードは A の固有値で決まります。"
          },
          {
            "en": "Different state-space realizations can represent the same input-output transfer function.",
            "zh": "不同状态空间坐标可以表示同一个输入输出传递函数。",
            "ja": "異なる状態空間実現が同じ入出力伝達関数を表すことがあります。"
          },
          {
            "en": "State coordinates may be changed with an invertible transformation without changing physical input-output behavior.",
            "zh": "通过可逆坐标变换可以改变状态表示，但不会改变系统的物理输入输出行为。",
            "ja": "可逆座標変換で状態表現を変えても入出力挙動は変わりません。"
          }
        ]
      },
      {
        "title": {
          "en": "3. Equilibrium Points and Linearization",
          "zh": "3. 平衡点与线性化",
          "ja": "3. 平衡点と線形化"
        },
        "body": {
          "en": "Real systems are often nonlinear: ẋ=f(x,u). An equilibrium (x*,u*) satisfies f(x*,u*)=0, meaning the state remains constant under that input. Around an equilibrium, small perturbations δx=x−x* and δu=u−u* can often be approximated by a linear model whose A and B are Jacobians. Linear control theory then describes local behavior near the operating point.",
          "zh": "真实系统往往是非线性的 ẋ=f(x,u)。平衡点 (x*,u*) 满足 f(x*,u*)=0，也就是在该输入下状态保持不变。对平衡点附近的小偏差 δx=x−x*、δu=u−u* 做一阶 Taylor 展开，可得到线性近似，A 与 B 就是对应 Jacobian。之后使用线性控制理论分析的是“工作点附近的局部行为”。",
          "ja": "実システムは ẋ=f(x,u) のように非線形です。平衡点 (x*,u*) は f(x*,u*)=0 を満たします。その周辺で δx,δu に対して一次 Taylor 展開すると Jacobian から A,B を得て線形化でき、線形制御理論で局所挙動を解析できます。"
        },
        "formula": "δẋ ≈ Aδx + Bδu,    A=∂f/∂x |_(x*,u*),  B=∂f/∂u |_(x*,u*)",
        "bullets": [
          {
            "en": "Linearization is local; large excursions may invalidate the approximation.",
            "zh": "线性化是局部近似，状态偏离工作点过大时模型可能失效。",
            "ja": "線形化は局所近似なので、大きく離れると精度が失われます。"
          },
          {
            "en": "For trajectory tracking, time-varying linearization along a nominal trajectory leads to linear time-varying models.",
            "zh": "轨迹跟踪中可沿参考轨迹不断线性化，得到线性时变模型。",
            "ja": "軌道追従では nominal trajectory に沿って線形化し LTV model を使えます。"
          },
          {
            "en": "Always define the operating point before discussing local stability of a nonlinear system.",
            "zh": "讨论非线性系统局部稳定性之前，必须明确是围绕哪个平衡点。",
            "ja": "非線形系の局所安定性を議論する前に平衡点を明示します。"
          }
        ]
      },
      {
        "title": {
          "en": "4. Natural Response, Eigenvalues, and Modes",
          "zh": "4. 自然响应、特征值与系统模态",
          "ja": "4. 自然応答・固有値・モード"
        },
        "body": {
          "en": "For the autonomous linear system ẋ=Ax, the solution is x(t)=e^{At}x(0). Eigenvalues of A determine whether modes grow, decay, or oscillate. In continuous time, a mode e^{λt} decays when Re(λ)<0. In discrete time, λ^k decays when |λ|<1. Complex-conjugate eigenvalues create oscillatory modes, while their real part or magnitude determines damping.",
          "zh": "对于无输入线性系统 ẋ=Ax，解为 x(t)=e^{At}x(0)。A 的特征值决定每个系统模态是增长、衰减还是振荡。连续时间中，e^{λt} 在 Re(λ)<0 时衰减；离散时间中，λ^k 在 |λ|<1 时衰减。复共轭特征值对应振荡模态，其实部或模长决定衰减速度。",
          "ja": "自律線形系 ẋ=Ax の解は x(t)=e^{At}x(0) です。A の固有値がモードの増大・減衰・振動を決めます。連続時間では Re(λ)<0、離散時間では |λ|<1 でモードが減衰します。"
        },
        "formulas": [
          "Continuous: x(t)=e^{At}x(0)",
          "Discrete: xₖ=A^k x₀",
          "CT stable mode: Re(λ)<0; DT stable mode: |λ|<1"
        ],
        "bullets": [
          {
            "en": "Eigenvectors describe modal directions; eigenvalues describe modal time behavior.",
            "zh": "特征向量描述模态方向，特征值描述该模态随时间如何变化。",
            "ja": "固有ベクトルはモード方向、固有値は時間挙動を表します。"
          },
          {
            "en": "Fast negative poles decay quickly; poles near the imaginary axis decay slowly.",
            "zh": "连续系统中，实部更负的极点衰减更快；靠近虚轴的极点衰减慢。",
            "ja": "連続系ではより左の極は速く、虚軸近くは遅く減衰します。"
          },
          {
            "en": "A stable eigenvalue set does not by itself quantify transient amplification in highly non-normal systems.",
            "zh": "即使所有特征值稳定，高度 non-normal 的系统仍可能出现显著瞬态放大。",
            "ja": "固有値が安定でも non-normal 系では大きな過渡増幅が起こる場合があります。"
          }
        ]
      },
      {
        "title": {
          "en": "5. Stability and Lyapunov Analysis",
          "zh": "5. 稳定性与 Lyapunov 分析",
          "ja": "5. 安定性と Lyapunov 解析"
        },
        "body": {
          "en": "Stability asks what happens to trajectories that start near an equilibrium. Lyapunov stability means they remain near; asymptotic stability additionally requires convergence to the equilibrium. A Lyapunov function V(x) acts like a generalized energy: if V is positive away from equilibrium and decreases along trajectories, the equilibrium is stable. For LTI systems, a quadratic Lyapunov function V=x^TPx leads to a matrix inequality/equation.",
          "zh": "稳定性研究的是：系统从平衡点附近出发后会怎样。Lyapunov 稳定要求轨迹一直留在附近；渐近稳定还要求最终收敛到平衡点。Lyapunov 函数 V(x) 可以理解为广义“能量”：若 V 在平衡点外为正，并且沿系统轨迹持续下降，则可以证明稳定。对 LTI 系统，常用二次型 V=x^TPx，并得到 Lyapunov 方程或矩阵不等式。",
          "ja": "安定性は平衡点近傍から始めた軌道の挙動を問います。Lyapunov 安定は近傍に留まり、漸近安定はさらに平衡点へ収束します。V(x) を一般化エネルギーとして、正定かつ軌道に沿って減少すれば安定性を証明できます。LTI では V=x^TPx が典型です。"
        },
        "formulas": [
          "V(x)=xᵀPx,  P≻0",
          "AᵀP+PA = −Q,  Q≻0"
        ],
        "bullets": [
          {
            "en": "For continuous-time LTI systems, A is Hurwitz iff for every Q≻0 there exists P≻0 solving A^TP+PA=−Q.",
            "zh": "连续 LTI 系统中，A Hurwitz 等价于：对任意 Q≻0，都存在 P≻0 满足 A^TP+PA=−Q。",
            "ja": "連続 LTI では A が Hurwitz であることと Lyapunov 方程式の正定値解の存在が対応します。"
          },
          {
            "en": "Lyapunov methods generalize beyond linear systems and do not require an explicit trajectory solution.",
            "zh": "Lyapunov 方法可推广到非线性系统，而且不需要显式求出系统轨迹。",
            "ja": "Lyapunov 法は非線形系にも拡張でき、軌道の明示解を必要としません。"
          },
          {
            "en": "Stability is distinct from performance: a stable controller can still be too slow, oscillatory, or energy-intensive.",
            "zh": "稳定不等于性能好：一个稳定控制器仍可能过慢、振荡大或能耗很高。",
            "ja": "安定であっても遅い、振動的、入力が大きいなど性能が悪いことがあります。"
          }
        ]
      },
      {
        "title": {
          "en": "6. Controllability",
          "zh": "6. 可控性",
          "ja": "6. 可制御性"
        },
        "body": {
          "en": "Controllability asks whether the input has enough authority to move the state through all independent state directions. For an n-dimensional LTI system, construct the controllability matrix 𝒞=[B,AB,…,A^{n−1}B]. Full rank n means every state can be reached from any initial state in finite time in the ideal linear model. If a mode is uncontrollable, no state-feedback gain can arbitrarily move that mode's eigenvalue.",
          "zh": "可控性问的是：输入有没有足够的“控制权限”，把状态沿所有独立方向驱动。对 n 维 LTI 系统，构造可控矩阵 𝒞=[B,AB,…,A^{n−1}B]；若 rank(𝒞)=n，则理想线性模型中所有状态方向都可被输入影响。如果某个模态不可控，那么无论怎样设计状态反馈，都无法任意移动该模态的极点。",
          "ja": "可制御性は入力で全状態方向を操作できるかを表します。n 次元 LTI 系では 𝒞=[B,AB,…,A^{n−1}B] の rank が n なら可制御です。不可制御モードの極は状態フィードバックで自由に移動できません。"
        },
        "formula": "𝒞 = [B  AB  A²B  …  Aⁿ⁻¹B],    rank(𝒞)=n",
        "bullets": [
          {
            "en": "Controllability is a structural property of (A,B), independent of a particular feedback gain.",
            "zh": "可控性是 (A,B) 的结构性质，与具体选择哪个反馈增益无关。",
            "ja": "可制御性は (A,B) の構造的性質で、特定のゲインとは独立です。"
          },
          {
            "en": "Poor controllability can be numerical as well as binary: a theoretically controllable mode may require enormous input energy.",
            "zh": "可控性不只有“可/不可”的二值问题：理论可控但 Gramian 很差的模态可能需要巨大控制能量。",
            "ja": "理論上可制御でも Gramian が悪いと非常に大きな入力エネルギーを要する場合があります。"
          },
          {
            "en": "The controllability Gramian quantifies how difficult different state directions are to reach.",
            "zh": "可控 Gramian 可进一步衡量不同状态方向到底有多难驱动。",
            "ja": "可制御 Gramian は各方向への到達の難しさを定量化します。"
          }
        ]
      },
      {
        "title": {
          "en": "7. Observability",
          "zh": "7. 可观性",
          "ja": "7. 可観測性"
        },
        "body": {
          "en": "Observability is the dual question: can the internal state be reconstructed from measured outputs over time? For an n-dimensional LTI system, the observability matrix 𝒪=[C;CA;…;CA^{n−1}] has rank n exactly when all state directions can be inferred. An unobservable unstable mode is especially problematic because it can grow without being detectable from the measurements used by the controller.",
          "zh": "可观性是可控性的对偶问题：能否根据一段时间内的输出测量重构内部状态？对 n 维 LTI 系统，构造 𝒪=[C;CA;…;CA^{n−1}]，若 rank(𝒪)=n，则所有状态方向都可被输出推断。尤其危险的是“不可观的非稳定模态”，因为它可能不断发散，但传感器看不出来。",
          "ja": "可観測性は出力履歴から内部状態を再構成できるかを表します。𝒪=[C;CA;…;CA^{n−1}] の rank が n なら可観測です。特に不安定な不可観測モードは測定から見えないまま発散し得るため危険です。"
        },
        "formula": "𝒪 = [C; CA; CA²; …; CAⁿ⁻¹],    rank(𝒪)=n",
        "bullets": [
          {
            "en": "Observability depends on both the dynamics A and sensor placement C.",
            "zh": "可观性由系统动态 A 与传感器布局 C 共同决定。",
            "ja": "可観測性は A とセンサ配置 C の両方で決まります。"
          },
          {
            "en": "Detectability is weaker than observability: unobservable modes are allowed as long as they are already stable.",
            "zh": "Detectability 比完全可观更弱：允许存在不可观模态，只要这些模态本身是稳定的。",
            "ja": "Detectability は可観測性より弱く、不可観測モードが安定なら許容します。"
          },
          {
            "en": "State estimation quality depends on noise and conditioning, not only on binary rank tests.",
            "zh": "实际估计效果还受噪声和数值条件影响，不能只看 rank 是否满秩。",
            "ja": "実際の推定精度はノイズや条件数にも依存し、rank 判定だけでは不十分です。"
          }
        ]
      },
      {
        "title": {
          "en": "8. State Feedback and Pole Placement",
          "zh": "8. 状态反馈与极点配置",
          "ja": "8. 状態フィードバックと極配置"
        },
        "body": {
          "en": "With state feedback u=−Kx, the closed-loop dynamics become ẋ=(A−BK)x. If (A,B) is controllable, K can be chosen to place the closed-loop poles at desired locations. Pole placement directly shapes decay rate and oscillation, but it does not explicitly optimize control effort or robustness; very aggressive pole locations may demand unrealistic inputs.",
          "zh": "采用状态反馈 u=−Kx 后，闭环动态变为 ẋ=(A−BK)x。若 (A,B) 可控，就可以设计 K 把闭环极点放到希望的位置。极点配置能直接调节衰减速度和振荡特征，但它并没有显式优化控制能量或鲁棒性；把极点放得过快，可能需要不现实的大输入。",
          "ja": "状態フィードバック u=−Kx により閉ループは A−BK になります。(A,B) が可制御なら極を望む位置へ配置できます。ただし制御入力やロバスト性を直接最適化する方法ではなく、速すぎる極配置は大入力を要求します。"
        },
        "formula": "u = −Kx,    ẋ = (A−BK)x",
        "bullets": [
          {
            "en": "Pole placement specifies dynamics first and solves for K; LQR specifies a cost and lets the optimal poles emerge.",
            "zh": "极点配置是先指定希望的动态，再求 K；LQR 则先指定性能代价，由优化结果决定闭环极点。",
            "ja": "極配置は望む極を先に指定し、LQR はコストを指定して最適極を得ます。"
          },
          {
            "en": "For multi-input systems there can be many gains realizing the same poles.",
            "zh": "多输入系统中，实现同一组闭环极点的 K 可能并不唯一。",
            "ja": "多入力系では同じ極を実現する K が一意でないことがあります。"
          },
          {
            "en": "Actuator saturation breaks the linear closed-loop model and can cause windup or performance degradation.",
            "zh": "执行器饱和会破坏理想线性闭环模型，必须单独考虑饱和和 anti-windup 等问题。",
            "ja": "アクチュエータ飽和は理想的な線形閉ループを崩し、性能低下を招きます。"
          }
        ]
      },
      {
        "title": {
          "en": "9. LQR: Optimal State Feedback",
          "zh": "9. LQR：最优状态反馈",
          "ja": "9. LQR：最適状態フィードバック"
        },
        "body": {
          "en": "The linear quadratic regulator (LQR) chooses state feedback by minimizing a quadratic infinite-horizon cost. Q penalizes undesirable state deviation and R penalizes control effort. Solving the algebraic Riccati equation gives P, then K=R^{-1}B^TP for continuous time. Under stabilizability/detectability conditions, the resulting feedback stabilizes the system and provides a principled trade-off instead of manually placing every pole.",
          "zh": "线性二次调节器（LQR）通过最小化无限时域二次代价来自动选择状态反馈。Q 惩罚不希望出现的状态偏差，R 惩罚控制能耗。连续时间中求解代数 Riccati 方程得到 P，再计算 K=R^{-1}B^TP。在 stabilizable/detectable 等条件下，得到的反馈能够稳定系统，并以优化方式平衡“状态收敛快”和“控制不能太大”。",
          "ja": "LQR は無限ホライズン二次コストを最小化して状態フィードバックを決めます。Q は状態偏差、R は入力を罰します。連続時間では Riccati 方程式から P を求め、K=R^{-1}B^TP とします。手動極配置より性能と入力のトレードオフを体系的に扱えます。"
        },
        "formulas": [
          "J=∫₀^∞(xᵀQx+uᵀRu)dt",
          "AᵀP+PA−PBR⁻¹BᵀP+Q=0",
          "K=R⁻¹BᵀP,   u=−Kx"
        ],
        "bullets": [
          {
            "en": "Increasing a diagonal Q weight generally makes the corresponding state more expensive, but cross-coupling means the effect on poles is not one-to-one.",
            "zh": "提高 Q 中某状态权重通常会更积极抑制该状态，但耦合系统中它与闭环极点并不是一一对应。",
            "ja": "Q の特定重みを増やすとその状態を強く抑える傾向がありますが、極への影響は結合により単純ではありません。"
          },
          {
            "en": "Increasing R discourages control effort and usually slows the response.",
            "zh": "增大 R 会抑制控制输入，通常使响应更保守、更慢。",
            "ja": "R を大きくすると入力を抑え、一般に応答は遅くなります。"
          },
          {
            "en": "LQR assumes the full state is available; with estimated state it becomes LQG when combined with a Kalman filter under standard assumptions.",
            "zh": "LQR 默认全状态可用；与 Kalman filter 结合并满足相应假设时，就形成经典 LQG。",
            "ja": "LQR は全状態を仮定し、Kalman filter と組み合わせると標準条件下で LQG になります。"
          }
        ]
      },
      {
        "title": {
          "en": "10. Observers and Kalman Filtering",
          "zh": "10. 状态观测器与 Kalman 滤波",
          "ja": "10. オブザーバと Kalman filter"
        },
        "body": {
          "en": "When x is not measured directly, a state observer runs a copy of the model and corrects it using the output residual y−C x̂. A Luenberger observer uses a fixed gain L. The Kalman filter derives a time-varying or steady-state gain from process-noise covariance Q_w and measurement-noise covariance R_v, producing the minimum-variance linear estimate under Gaussian linear assumptions.",
          "zh": "当 x 不能直接测量时，状态观测器会在内部运行一份模型预测，并利用输出残差 y−C x̂ 对估计进行纠正。Luenberger observer 使用固定增益 L；Kalman filter 则根据过程噪声协方差 Q_w 和测量噪声协方差 R_v 计算增益，在经典线性高斯假设下得到最小方差线性估计。",
          "ja": "x を直接測れない場合、オブザーバはモデルで予測し、出力残差 y−C x̂ で補正します。Luenberger observer は固定ゲイン L、Kalman filter はプロセスノイズ Q_w と測定ノイズ R_v からゲインを求め、線形 Gaussian 条件下で最小分散推定を行います。"
        },
        "formulas": [
          "x̂̇ = Ax̂+Bu + L(y−Cx̂)",
          "ė=(A−LC)e"
        ],
        "bullets": [
          {
            "en": "Observer pole placement is the dual of controller pole placement; observability enables arbitrary observer pole assignment.",
            "zh": "观测器极点配置与控制器极点配置互为对偶；可观性允许任意配置观测误差极点。",
            "ja": "オブザーバ極配置は制御極配置の双対で、可観測なら誤差極を配置できます。"
          },
          {
            "en": "A larger assumed process noise makes the Kalman filter trust measurements more; larger measurement noise makes it trust the model more.",
            "zh": "Kalman filter 中，假设过程噪声更大时更信测量；假设测量噪声更大时更信模型。",
            "ja": "process noise を大きく仮定すると測定を、measurement noise を大きくするとモデルをより信頼します。"
          },
          {
            "en": "For nonlinear systems, EKF linearizes the model and UKF propagates sigma points; particle filters handle more general distributions at higher cost.",
            "zh": "非线性系统中常见 EKF、UKF；更一般的非高斯场景可用 particle filter，但代价更高。",
            "ja": "非線形では EKF、UKF、さらに一般的な分布には particle filter が使われます。"
          }
        ]
      },
      {
        "title": {
          "en": "11. Separation Principle, Reference Tracking, and Integral Action",
          "zh": "11. 分离原理、参考跟踪与积分作用",
          "ja": "11. 分離原理・参照追従・積分動作"
        },
        "body": {
          "en": "For suitable linear systems, controller and observer can be designed separately: if A−BK and A−LC are both stable, the observer-based feedback is stable. This is the separation principle. Regulation to zero is not the same as tracking a nonzero reference. Reference feedforward, state augmentation, and integral action are common ways to remove steady-state tracking error, especially under constant disturbances or model mismatch.",
          "zh": "对满足条件的线性系统，可以把控制器和观测器分开设计：只要 A−BK 与 A−LC 都稳定，基于状态估计的闭环也可稳定，这就是分离原理。需要注意，稳定到 0 与跟踪非零参考并不是同一问题。为了消除恒定扰动或模型失配导致的稳态误差，常采用参考前馈、状态增广或积分作用。",
          "ja": "適切な線形系では controller と observer を別々に設計でき、A−BK と A−LC が安定なら observer-based feedback も安定です。これは分離原理です。ゼロへの regulation と非ゼロ reference tracking は異なり、定常偏差を消すには feedforward や積分状態の拡張を使います。"
        },
        "bullets": [
          {
            "en": "Integral action adds accumulated tracking error as a state and forces constant steady-state error toward zero when the augmented system is controllable.",
            "zh": "积分控制把累计跟踪误差增广为状态，在增广系统可控等条件下可消除恒定稳态误差。",
            "ja": "積分状態を追加すると、条件が満たされれば定常追従誤差をゼロへ押し下げられます。"
          },
          {
            "en": "Feedforward uses a model to generate the nominal input required by a reference; feedback corrects deviations.",
            "zh": "前馈根据模型计算维持参考所需的名义输入，反馈再负责纠正偏差。",
            "ja": "feedforward は参照に必要な nominal input をモデルから求め、feedback が偏差を補正します。"
          },
          {
            "en": "This feedforward + feedback structure also appears inside tracking MPC.",
            "zh": "“前馈 + 反馈”的思想同样存在于 tracking MPC 中。",
            "ja": "feedforward + feedback の考え方は tracking MPC にも現れます。"
          }
        ]
      },
      {
        "title": {
          "en": "12. A Practical Control-Design Workflow",
          "zh": "12. 一套真正可用的控制系统设计流程",
          "ja": "12. 実用的な制御設計フロー"
        },
        "body": {
          "en": "A reliable workflow is: define states/inputs/outputs and operating point; derive or identify the model; discretize if needed; verify stability, controllability, and observability; choose feedback design such as pole placement, LQR, or MPC; design an observer if states are missing; simulate with constraints/noise/model mismatch; only then deploy and retune. Each theoretical test answers a different question and should not be skipped simply because a numerical controller appears to work in one simulation.",
          "zh": "一套可靠流程是：明确状态/输入/输出和工作点 → 推导或辨识模型 → 必要时离散化 → 检查稳定性、可控性、可观性 → 选择 pole placement、LQR 或 MPC 等反馈方法 → 若状态不可测则设计 observer → 在约束、噪声和模型失配下仿真 → 最后才上真实系统并调参。每个理论检查回答的问题不同，不能因为一次仿真“看起来能跑”就跳过。",
          "ja": "実用フローは、状態/入力/出力と平衡点定義 → モデル導出/同定 → 離散化 → 安定性・可制御性・可観測性確認 → pole placement/LQR/MPC 選択 → 必要なら observer → 制約・ノイズ・モデル誤差を含むシミュレーション → 実装、です。"
        },
        "bullets": [
          {
            "en": "Ask 'is it stabilizable?' before asking 'which K is best?'.",
            "zh": "先问“系统是否可稳定”，再问“哪个 K 最好”。",
            "ja": "まず stabilizable かを確認してから最適 K を考えます。"
          },
          {
            "en": "Ask 'is the state observable/detectable?' before assuming a state-feedback law can be implemented.",
            "zh": "在假设状态反馈可实现之前，先检查状态是否可观/可检测。",
            "ja": "状態フィードバック実装前に observable/detectable を確認します。"
          },
          {
            "en": "Use LQR when quadratic performance and unconstrained linear feedback are adequate; use MPC when explicit constraints or previewed references are central.",
            "zh": "若线性系统、二次性能且约束不关键，LQR 往往够用；若显式约束或未来参考信息很重要，MPC 更合适。",
            "ja": "線形二次で制約が重要でなければ LQR、明示制約や未来参照が重要なら MPC が自然です。"
          }
        ],
        "takeaway": {
          "en": "After this note, you should be able to look at (A,B,C), explain stability/controllability/observability, design basic state feedback and an observer, and understand how LQR, Kalman filtering, and MPC fit into one control-theory picture.",
          "zh": "看完这篇后，你应该能面对一组 (A,B,C) 判断和解释稳定性、可控性、可观性，设计基础状态反馈和观测器，并理解 LQR、Kalman filter 与 MPC 在同一控制理论框架中的位置。",
          "ja": "このノート後には (A,B,C) から安定性・可制御性・可観測性を説明し、基本状態フィードバックと observer を設計し、LQR/Kalman/MPC の関係を理解できることを目標とします。"
        }
      }
    ]
  },
  {
    "slug": "frank-wolfe",
    "order": 4,
    "title": {
      "en": "Frank–Wolfe Algorithm Study Notes",
      "zh": "Frank–Wolfe 算法学习笔记",
      "ja": "Frank–Wolfe アルゴリズム 学習ノート"
    },
    "category": {
      "en": "Convex Optimization",
      "zh": "凸优化",
      "ja": "凸最適化"
    },
    "summary": {
      "en": "A from-first-principles guide to projection-free constrained convex optimization: geometry, linear minimization oracles, step sizes, the Frank–Wolfe gap, convergence, active sets, away/pairwise variants, and practical use cases.",
      "zh": "从零理解无投影凸优化：几何直觉、线性最小化 Oracle、步长、Frank–Wolfe gap、收敛、active set、Away/Pairwise 变体以及实际应用。",
      "ja": "射影を使わない制約付き凸最適化を、幾何、LMO、step size、FW gap、収束、active set、Away/Pairwise 変種、応用まで基礎から整理します。"
    },
    "tags": [
      "Convex Optimization",
      "Projection-Free",
      "LMO",
      "FW Gap",
      "Line Search",
      "Away-Step",
      "Pairwise FW"
    ],
    "sections": [
      {
        "title": {
          "en": "1. The Problem Frank–Wolfe Is Designed For",
          "zh": "1. Frank–Wolfe 到底解决哪类问题",
          "ja": "1. Frank–Wolfe が対象とする問題"
        },
        "body": {
          "en": "Frank–Wolfe (FW), also called the conditional gradient method, solves constrained smooth convex optimization problems min_{x∈D} f(x) when projecting onto D is expensive but minimizing a linear function over D is easy. Instead of taking a gradient step and projecting back, FW asks a linear minimization oracle for an extreme feasible direction and moves toward it by a convex combination.",
          "zh": "Frank–Wolfe（也叫 conditional gradient）主要解决光滑凸约束优化 min_{x∈D} f(x)。它特别适合这样一种结构：把点投影回可行域 D 很贵，但在 D 上求一个线性目标的最小值却很容易。它不做“梯度一步 + 投影”，而是调用线性最小化 Oracle 找到一个有利的可行极点，再用凸组合向它移动。",
          "ja": "Frank–Wolfe（conditional gradient）は min_{x∈D} f(x) を解く手法で、D への射影は高価だが D 上の線形最小化は容易な場合に有効です。勾配ステップ後に射影する代わりに、線形最小化オラクルで有利な極点を選び、凸結合でそこへ移動します。"
        },
        "formula": "minimize f(x)   subject to x ∈ D,    f convex and differentiable, D compact and convex",
        "bullets": [
          {
            "en": "FW is not 'better gradient descent' in general; it exploits a specific feasible-set geometry.",
            "zh": "FW 并不是普遍意义上“更好的梯度下降”，而是利用了某些可行域的特殊几何结构。",
            "ja": "FW は一般に gradient descent より優れているのではなく、可行集合の幾何構造を利用する方法です。"
          },
          {
            "en": "Typical domains include simplices, ℓ1 balls, flow polytopes, matroid polytopes, and nuclear-norm balls.",
            "zh": "典型可行域包括 simplex、ℓ1 ball、flow polytope、matroid polytope、nuclear-norm ball 等。",
            "ja": "simplex、ℓ1 ball、flow polytope、matroid polytope、nuclear-norm ball などが典型です。"
          },
          {
            "en": "The method is especially attractive when sparse/low-rank iterates are valuable.",
            "zh": "当稀疏解或低秩迭代本身有价值时，FW 往往格外合适。",
            "ja": "疎解・低ランク解を自然に維持したい場合にも有利です。"
          }
        ]
      },
      {
        "title": {
          "en": "2. Why Projection Can Be the Bottleneck",
          "zh": "2. 为什么投影可能比求梯度还贵",
          "ja": "2. なぜ射影がボトルネックになるのか"
        },
        "body": {
          "en": "Projected gradient descent computes y_t=x_t−η∇f(x_t) and then solves a projection problem min_{x∈D} ‖x−y_t‖². For simple boxes this projection is trivial, but for structured domains it may require a full optimization or matrix decomposition. FW replaces this potentially expensive projection by a linear optimization problem over the same domain.",
          "zh": "投影梯度法先计算 y_t=x_t−η∇f(x_t)，然后还要解一个投影问题 min_{x∈D} ‖x−y_t‖²。若 D 是 box，投影很简单；但对复杂结构域，投影本身可能就是一次不小的优化，甚至需要完整矩阵分解。FW 用同一个可行域上的线性优化替代了投影。",
          "ja": "射影勾配法は y_t=x_t−η∇f(x_t) の後に min_{x∈D} ‖x−y_t‖² を解きます。box なら簡単ですが、構造化集合では射影が高価な最適化や行列分解になることがあります。FW はこれを線形最適化に置き換えます。"
        },
        "formulas": [
          "Projected GD: yₜ=xₜ−η∇f(xₜ),   xₜ₊₁=Π_D(yₜ)",
          "FW: sₜ=argmin_{s∈D}⟨∇f(xₜ),s⟩"
        ],
        "bullets": [
          {
            "en": "On an ℓ1 ball, Euclidean projection requires thresholding/sorting-like operations, while the LMO simply chooses one signed coordinate.",
            "zh": "在 ℓ1 ball 上，欧氏投影要做阈值/排序类操作，而 LMO 只需找到绝对梯度最大的坐标及其符号。",
            "ja": "ℓ1 ball では射影に thresholding が必要ですが、LMO は最大絶対勾配の座標と符号を選ぶだけです。"
          },
          {
            "en": "On a nuclear-norm ball, projection needs a full or large SVD, while the LMO only needs a leading singular-vector pair.",
            "zh": "在 nuclear-norm ball 上，投影往往需要完整或大规模 SVD；LMO 只需最大奇异向量对。",
            "ja": "nuclear-norm ball では射影に大規模 SVD が必要ですが、LMO は先頭 singular vector pair だけで済みます。"
          }
        ]
      },
      {
        "title": {
          "en": "3. Linear Minimization Oracle: The Key Primitive",
          "zh": "3. 线性最小化 Oracle：整个算法的核心",
          "ja": "3. Linear Minimization Oracle：中心となる演算"
        },
        "body": {
          "en": "At x_t, convexity suggests that the gradient is the local direction of increase. FW therefore solves s_t=argmin_{s∈D}⟨∇f(x_t),s⟩, asking which feasible point looks best under the first-order linear approximation. Because a linear objective over a compact convex polytope achieves its optimum at an extreme point, s_t is often an atom or vertex of D.",
          "zh": "在当前点 x_t，梯度给出局部上升方向，因此 FW 求 s_t=argmin_{s∈D}⟨∇f(x_t),s⟩，也就是问：在一阶线性近似下，可行域里哪个点最有利？对紧致凸多面体，线性目标的最优点通常位于极点，因此 s_t 往往就是一个 atom/vertex。",
          "ja": "x_t で勾配は局所増加方向なので、FW は s_t=argmin_{s∈D}⟨∇f(x_t),s⟩ を解きます。これは一次近似の下で最良の可行点を選ぶ操作です。凸多面体では線形目的の最適解は通常極点にあり、s_t は atom/vertex になります。"
        },
        "formula": "sₜ = LMO(∇f(xₜ)) = arg min_{s∈D} ⟨∇f(xₜ), s⟩",
        "bullets": [
          {
            "en": "The LMO depends only on the feasible set and the current gradient, so it can often exploit specialized combinatorial solvers.",
            "zh": "LMO 只依赖可行域与当前梯度，因此可以复用针对该结构的专用组合优化算法。",
            "ja": "LMO は可行集合と勾配だけに依存し、専用の組合せ最適化を利用できます。"
          },
          {
            "en": "For the probability simplex, the LMO chooses the coordinate with the smallest gradient component.",
            "zh": "在概率 simplex 上，LMO 直接选择梯度分量最小的那个顶点。",
            "ja": "確率 simplex では最小勾配成分の頂点を選びます。"
          },
          {
            "en": "For a flow polytope, the LMO may reduce to a shortest-path or min-cost-flow problem.",
            "zh": "在某些 flow polytope 上，LMO 可以转化为最短路或最小费用流。",
            "ja": "flow polytope では shortest path や min-cost flow に帰着できる場合があります。"
          }
        ]
      },
      {
        "title": {
          "en": "4. Basic Frank–Wolfe Iteration",
          "zh": "4. Frank–Wolfe 的基本迭代",
          "ja": "4. 基本 Frank–Wolfe 反復"
        },
        "body": {
          "en": "After the LMO returns s_t, define direction d_t=s_t−x_t and move x_{t+1}=x_t+γ_t d_t with γ_t∈[0,1]. Because x_{t+1} is a convex combination of two feasible points, it stays feasible automatically. This is the projection-free property. Starting from a feasible x_0, every iterate is feasible without solving any projection problem.",
          "zh": "LMO 得到 s_t 后，定义方向 d_t=s_t−x_t，再用 x_{t+1}=x_t+γ_t d_t 更新，其中 γ_t∈[0,1]。由于新点是 x_t 与 s_t 的凸组合，而二者都在凸可行域中，因此 x_{t+1} 自动保持可行。这就是“projection-free”的本质：只要初始点可行，后续每一步都不需要再做投影。",
          "ja": "LMO で s_t を得たら d_t=s_t−x_t とし、x_{t+1}=x_t+γ_t d_t, γ_t∈[0,1] と更新します。凸結合なので可行性が自動的に保たれ、射影が不要です。"
        },
        "formulas": [
          "dₜ=sₜ−xₜ",
          "xₜ₊₁=(1−γₜ)xₜ+γₜsₜ"
        ],
        "bullets": [
          {
            "en": "One FW step adds at most one new atom to the active representation.",
            "zh": "每次 FW 最多向 active set 中加入一个新 atom。",
            "ja": "1回の FW step で active representation に追加される atom は高々1つです。"
          },
          {
            "en": "This incremental representation is why FW often produces sparse mixtures or low-rank matrices early.",
            "zh": "这种增量式表示使 FW 在较早迭代就能得到稀疏组合或低秩矩阵。",
            "ja": "この増分表現により早期から疎な混合や低ランク行列を得やすくなります。"
          },
          {
            "en": "If γ_t=1, the previous point is discarded and x_{t+1}=s_t; smaller γ keeps history through the convex combination.",
            "zh": "若 γ_t=1，旧点被完全丢弃；γ 较小时，则通过凸组合保留过去已选 atom 的权重。",
            "ja": "γ_t=1 なら過去点を捨て、γ<1 なら過去 atom の重みを保持します。"
          }
        ]
      },
      {
        "title": {
          "en": "5. Step Size: Predefined Schedule vs Line Search",
          "zh": "5. 步长：固定规则还是线搜索",
          "ja": "5. Step size：規則か line search か"
        },
        "body": {
          "en": "The step size controls how much weight is transferred toward the new atom. A classical theoretical schedule is γ_t=2/(t+2). Exact line search chooses γ∈[0,1] minimizing f(x_t+γd_t), which can be very effective when the one-dimensional problem is cheap. Adaptive rules based on smoothness estimates are useful when exact line search is unavailable.",
          "zh": "步长决定本次更新把多少权重转移到新 atom 上。经典理论步长是 γ_t=2/(t+2)。精确 line search 则直接在 γ∈[0,1] 上最小化 f(x_t+γd_t)，如果一维优化很便宜，通常效果更好。无法精确 line search 时，也可以利用 smoothness/Lipschitz 常数做自适应步长。",
          "ja": "step size は新 atom へどれだけ移動するかを決めます。古典則 γ_t=2/(t+2)、1次元最適化が安ければ exact line search、あるいは smoothness 推定に基づく adaptive rule が使えます。"
        },
        "formula": "γₜ^LS = arg min_{γ∈[0,1]} f(xₜ + γ(sₜ−xₜ))",
        "bullets": [
          {
            "en": "Too small a step wastes LMO calls; too large a step can bounce between vertices.",
            "zh": "步长太小会浪费昂贵的 LMO 调用；太大则可能在顶点之间来回跳动。",
            "ja": "step が小さすぎると LMO を浪費し、大きすぎると頂点間で振動しやすくなります。"
          },
          {
            "en": "For a quadratic objective, line search often has a closed-form clipped scalar solution.",
            "zh": "二次目标下，line search 通常可以得到一个再截断到 [0,1] 的闭式标量解。",
            "ja": "二次目的では line search が閉形式のスカラー解になることが多いです。"
          },
          {
            "en": "Step-size choice affects constants and practical speed, but the geometry of the feasible set often dominates long-run behavior.",
            "zh": "步长会影响收敛常数和实际速度，但长期表现往往更受可行域几何结构影响。",
            "ja": "step size は定数や実速度に影響しますが、長期挙動には集合の幾何が大きく効きます。"
          }
        ]
      },
      {
        "title": {
          "en": "6. Frank–Wolfe Gap: A Computable Optimality Certificate",
          "zh": "6. Frank–Wolfe Gap：可计算的最优性证书",
          "ja": "6. Frank–Wolfe gap：計算可能な最適性証明"
        },
        "body": {
          "en": "The FW gap is g_FW(x_t)=⟨∇f(x_t),x_t−s_t⟩. Because s_t minimizes the linearized objective over D, convexity implies f(x_t)−f(x*)≤g_FW(x_t). Therefore the gap is both a stationarity measure and an upper bound on primal suboptimality for convex f. Crucially, it comes almost for free because s_t is already computed by the LMO.",
          "zh": "FW gap 定义为 g_FW(x_t)=⟨∇f(x_t),x_t−s_t⟩。由于 s_t 已经是线性化目标在 D 上的最小点，根据凸性可以证明 f(x_t)−f(x*)≤g_FW(x_t)。因此它既是当前是否接近一阶最优的指标，又是凸问题中可计算的 primal suboptimality 上界，而且几乎不增加计算成本，因为 s_t 本来就要由 LMO 算出来。",
          "ja": "FW gap は g_FW(x_t)=⟨∇f(x_t),x_t−s_t⟩ です。凸性から f(x_t)−f(x*)≤g_FW(x_t) が成り立つため、一階最適性指標かつ primal suboptimality の上界になります。LMO で s_t は既に求めるので追加コストも小さいです。"
        },
        "formula": "g_FW(xₜ)=⟨∇f(xₜ), xₜ−sₜ⟩ ≥ f(xₜ)−f(x*) ≥ 0",
        "bullets": [
          {
            "en": "A small objective change between iterations is not a reliable stopping rule; the FW gap has a clearer optimization meaning.",
            "zh": "相邻迭代目标值变化很小不一定说明接近最优；FW gap 具有更明确的最优性意义。",
            "ja": "目的値の変化が小さいだけでは最適性を保証できず、FW gap の方が意味が明確です。"
          },
          {
            "en": "For nonconvex smooth objectives, a FW-type gap can still measure first-order stationarity, but the global suboptimality bound no longer follows.",
            "zh": "对非凸光滑问题，类似 FW gap 仍可用于一阶驻点判据，但不再能作为全局最优差距上界。",
            "ja": "非凸では FW gap は一階停留性の指標にはなりますが、大域 suboptimality 上界ではありません。"
          }
        ]
      },
      {
        "title": {
          "en": "7. Why Classical FW Converges at O(1/t)",
          "zh": "7. 为什么经典 FW 是 O(1/t) 收敛",
          "ja": "7. 古典 FW が O(1/t) で収束する理由"
        },
        "body": {
          "en": "For smooth convex f over a compact convex domain, curvature controls how inaccurate the first-order model becomes when moving toward s_t. Combining the descent lemma with the LMO property yields a recurrence on the objective error h_t=f(x_t)−f(x*). With the classical step size, this gives h_t=O(1/t). The key point is that the method makes guaranteed progress without projections, but classical FW does not generally enjoy linear convergence on polytopes because it may have difficulty removing weight from previously chosen atoms.",
          "zh": "对紧致凸域上的光滑凸函数，一阶线性近似的误差可以由 curvature/smoothness 控制。把下降引理与 LMO 的最优性质结合，可得到目标误差 h_t=f(x_t)−f(x*) 的递推，再配合经典步长可证明 h_t=O(1/t)。关键点是：FW 在不投影的情况下仍然能保证进步；但经典版本在多面体上通常不能直接获得线性收敛，因为它“加新 atom 很容易，删旧 atom 很困难”。",
          "ja": "滑らかな凸関数とコンパクト凸集合では、curvature が一次近似誤差を制御します。descent lemma と LMO 性質から h_t=f(x_t)−f(x*) の再帰を得て、古典 step で O(1/t) が導かれます。ただし古典 FW は既存 atom の重みを減らしにくいため、polytope 上で一般に線形収束しません。"
        },
        "formula": "f(xₜ)−f(x*) ≤ 2C_f/(t+2)   (classical smooth convex bound)",
        "bullets": [
          {
            "en": "The curvature constant C_f combines objective smoothness and domain diameter in an affine-invariant way.",
            "zh": "curvature constant C_f 综合反映目标函数曲率和可行域尺度，是 FW 分析中的核心量。",
            "ja": "curvature constant C_f は目的関数の滑らかさと集合サイズを affine-invariant にまとめます。"
          },
          {
            "en": "O(1/t) means halving the optimization error may require roughly doubling the iteration count in the asymptotic regime.",
            "zh": "O(1/t) 意味着在渐近阶段，要把误差再减半，迭代次数大致需要再翻倍。",
            "ja": "O(1/t) では漸近的に誤差を半分にするのに反復数を概ね倍にする必要があります。"
          },
          {
            "en": "Whether FW is practically faster than projected methods depends on cost per iteration, not just iteration complexity.",
            "zh": "FW 是否实际更快不能只看迭代次数，还要比较一次 LMO 与一次投影到底谁更贵。",
            "ja": "実際の速度は iteration complexity だけでなく LMO と射影の1回コストで決まります。"
          }
        ]
      },
      {
        "title": {
          "en": "8. Active Sets, Sparsity, and the Zig-Zag Problem",
          "zh": "8. Active Set、稀疏性与 Zig-Zag 问题",
          "ja": "8. Active set・疎性・zig-zag 問題"
        },
        "body": {
          "en": "If D is the convex hull of atoms, an FW iterate can be represented as x_t=Σ_{v∈S_t} α_v v with nonnegative weights summing to one. The active set S_t stores atoms selected so far. This makes sparsity explicit, but classical FW can only move toward a new atom; it has no dedicated mechanism to quickly remove a bad old atom. Near a boundary optimum this can cause zig-zagging and slow progress.",
          "zh": "如果 D 是一组 atoms 的凸包，那么 FW 迭代点可写成 x_t=Σ_{v∈S_t} α_v v，其中权重非负且和为 1。Active set S_t 就是目前选入表示的 atoms。这个结构天然产生稀疏表示，但经典 FW 主要擅长“加入新 atom”，没有专门机制快速删除早期选错的 atom，因此在边界最优点附近容易出现 zig-zag，收敛很慢。",
          "ja": "D が atoms の凸包なら x_t=Σ α_v v と表せ、S_t が active set です。疎表現を自然に得られますが、古典 FW は新 atom 方向へ進むだけで古い悪い atom を素早く削れず、境界最適点付近で zig-zag が起こります。"
        },
        "formula": "xₜ = Σ_{v∈Sₜ} α_v v,    α_v ≥ 0,   Σ_v α_v = 1",
        "bullets": [
          {
            "en": "After t iterations, the representation uses at most t+1 atoms if no corrective compression is performed.",
            "zh": "若不做额外压缩，第 t 次迭代后最多只需 t+1 个 atom 表示当前解。",
            "ja": "補正をしなければ t 回後の表現 atom 数は高々 t+1 です。"
          },
          {
            "en": "This property is attractive for sparse mixtures, structured prediction, and low-rank matrix construction.",
            "zh": "这对稀疏混合、结构化预测和低秩矩阵构造非常有吸引力。",
            "ja": "疎混合、構造予測、低ランク行列構築に有利です。"
          },
          {
            "en": "The same sparsity can slow convergence when the correct optimum requires reducing coefficients on previously selected atoms.",
            "zh": "但同一结构也会带来问题：当需要大幅降低旧 atom 权重时，经典 FW 会比较慢。",
            "ja": "一方、既存 atom の係数を大きく減らす必要がある場合は遅くなります。"
          }
        ]
      },
      {
        "title": {
          "en": "9. Away-Step, Pairwise, and Fully Corrective FW",
          "zh": "9. Away-Step、Pairwise 与 Fully Corrective FW",
          "ja": "9. Away-step・Pairwise・Fully Corrective FW"
        },
        "body": {
          "en": "Away-step FW adds a second option: instead of moving toward a new atom, move away from an active atom whose gradient contribution is worst. Pairwise FW transfers weight directly from a bad active atom to the new LMO atom. Fully corrective FW periodically re-optimizes all active coefficients. These variants fix the main weakness of classical FW and can achieve linear convergence on suitable polytopes under stronger assumptions.",
          "zh": "Away-step FW 增加了第二种方向：除了朝新 atom 移动，还可以选择一个当前 active set 中最不合适的 atom，并“远离”它，从而降低其权重。Pairwise FW 更直接，把权重从坏的 active atom 转移到新的 LMO atom；Fully Corrective FW 则周期性地对 active set 中所有系数重新优化。这些方法针对的正是经典 FW 难以删除旧 atom 的缺点，并可在更强条件下对多面体获得线性收敛。",
          "ja": "Away-step FW は新 atom へ進むだけでなく、active set 中の悪い atom から離れる方向を追加します。Pairwise FW は悪い atom から新 atom へ直接重みを移し、Fully Corrective FW は active weights を再最適化します。適切な polytope と強い条件下では線形収束が可能です。"
        },
        "formulas": [
          "FW direction: d_FW=sₜ−xₜ",
          "Away direction: d_A=xₜ−vₜ,   vₜ=argmax_{v∈Sₜ}⟨∇f(xₜ),v⟩",
          "Pairwise: d_P=sₜ−vₜ"
        ],
        "bullets": [
          {
            "en": "Away steps have a maximum feasible step because an active coefficient cannot become negative.",
            "zh": "Away step 的最大步长受当前 atom 权重限制，因为系数不能变成负数。",
            "ja": "away step の最大 step は active weight が負にならない範囲に制限されます。"
          },
          {
            "en": "Pairwise FW often changes support more aggressively than classical FW.",
            "zh": "Pairwise FW 能更直接地替换 active set 中的质量分配，通常比经典 FW 更积极。",
            "ja": "Pairwise FW は support をより直接的に入れ替えられます。"
          },
          {
            "en": "Fully corrective methods may reduce iteration count but require a nontrivial subproblem over the current active set.",
            "zh": "Fully Corrective 可能显著减少迭代次数，但每次 correction 需要额外求一个 active-set 子问题。",
            "ja": "Fully Corrective は反復数を減らせますが active-set 上の追加最適化が必要です。"
          }
        ]
      },
      {
        "title": {
          "en": "10. Important Structured Examples",
          "zh": "10. 几个真正重要的结构化例子",
          "ja": "10. 重要な構造化例"
        },
        "body": {
          "en": "FW becomes most intuitive when the LMO has a concrete structure. On the simplex, the LMO returns one basis vector, so iterates are sparse probability mixtures. On an ℓ1 ball, it returns one signed coordinate, yielding sparse vectors. On a nuclear-norm ball, it returns a rank-one matrix from the leading singular vectors, so every iteration increases rank by at most one. These are not side examples—they explain why projection-free methods are used in large structured optimization.",
          "zh": "理解 FW 最好的方式，是看 LMO 在具体可行域上到底做什么。概率 simplex 上，LMO 返回一个标准基向量，因此迭代解是稀疏概率混合；ℓ1 ball 上，LMO 只返回一个带符号坐标，因此自然产生稀疏向量；nuclear-norm ball 上，LMO 返回由最大奇异向量构成的 rank-1 矩阵，因此每次迭代矩阵秩最多增加 1。这些不是边缘例子，而是 FW 在大规模结构优化中真正有价值的原因。",
          "ja": "FW の本質は具体的 LMO で理解しやすいです。simplex では基底ベクトル、ℓ1 ball では符号付き1座標、nuclear-norm ball では先頭特異ベクトルから rank-1 行列を返します。これにより疎・低ランク構造が自然に得られます。"
        },
        "bullets": [
          {
            "en": "Simplex D={x≥0, Σx_i=1}: choose e_j with j=argmin_i ∇_i f(x).",
            "zh": "Simplex D={x≥0, Σx_i=1}：选择梯度分量最小的顶点 e_j。",
            "ja": "simplex では最小勾配成分の e_j を選びます。"
          },
          {
            "en": "ℓ1 ball ‖x‖_1≤τ: choose s=−τ sign(∇_j f)e_j where j has the largest absolute gradient.",
            "zh": "ℓ1 ball ‖x‖_1≤τ：选择绝对梯度最大的坐标 j，s=−τ sign(∇_j f)e_j。",
            "ja": "ℓ1 ball では最大絶対勾配座標 j を選びます。"
          },
          {
            "en": "Nuclear-norm ball ‖X‖_*≤τ: choose s=−τ u_1v_1^T from the top singular vectors of ∇f(X).",
            "zh": "Nuclear-norm ball ‖X‖_*≤τ：取 ∇f(X) 的最大奇异向量 u_1,v_1，并令 s=−τu_1v_1^T。",
            "ja": "nuclear-norm ball では ∇f(X) の先頭特異ベクトルから rank-1 atom を選びます。"
          }
        ]
      },
      {
        "title": {
          "en": "11. Stochastic, Block-Coordinate, and Large-Scale Variants",
          "zh": "11. 随机、块坐标与大规模 Frank–Wolfe",
          "ja": "11. Stochastic・Block-coordinate・大規模 FW"
        },
        "body": {
          "en": "Large learning problems may make a full gradient or a global LMO expensive. Stochastic FW uses sampled gradients, block-coordinate FW updates only one subset of variables/atoms, and lazy/cached variants reuse previous LMO solutions when they remain sufficiently good. The algorithmic design should target whichever operation—gradient computation, LMO, communication, or active-set maintenance—is the actual bottleneck.",
          "zh": "大规模学习问题中，完整梯度或全局 LMO 都可能太贵。Stochastic FW 用随机梯度，Block-coordinate FW 每次只更新一个变量块，Lazy/Cached FW 则在旧 LMO 解仍足够好时复用它。实际设计时不应该机械追求某个“高级变体”，而要先确定真正瓶颈到底是梯度计算、LMO、通信还是 active-set 维护。",
          "ja": "大規模問題では full gradient や global LMO が高価になります。Stochastic FW、block-coordinate FW、lazy/cached FW などで gradient、LMO、通信、active-set のボトルネックを削減します。"
        },
        "bullets": [
          {
            "en": "Approximate LMOs can still preserve convergence if their approximation error is controlled relative to progress requirements.",
            "zh": "只要近似误差受控，approximate LMO 也能保留相应的收敛保证。",
            "ja": "approximate LMO でも誤差を制御すれば収束保証を保てます。"
          },
          {
            "en": "Distributed FW is attractive when the LMO decomposes across agents or data blocks, but communication can dominate.",
            "zh": "当 LMO 可在智能体或数据块之间分解时，Distributed FW 很有吸引力，但通信可能成为新瓶颈。",
            "ja": "LMO が agent/data block に分解できる場合 distributed FW は有効ですが通信が支配的になることがあります。"
          },
          {
            "en": "For matrix problems, randomized leading singular-vector methods can accelerate the LMO dramatically.",
            "zh": "矩阵问题中，可以使用随机化最大奇异向量算法显著加速 nuclear-norm LMO。",
            "ja": "行列問題では randomized leading singular-vector 法で LMO を高速化できます。"
          }
        ]
      },
      {
        "title": {
          "en": "12. When to Use Frank–Wolfe: Decision and Debugging Guide",
          "zh": "12. 什么时候该用 Frank–Wolfe：选择与排错指南",
          "ja": "12. Frank–Wolfe を使う判断基準"
        },
        "body": {
          "en": "Choose FW when the feasible set has a cheap linear optimization oracle, projection is significantly more expensive, and sparse/extreme-point structure is useful. Do not choose it merely because the problem has constraints. If projection is trivial, projected gradient or proximal methods may be faster. If classical FW stagnates near the boundary, inspect the active set and try away-step or pairwise variants before concluding that the entire projection-free approach is unsuitable.",
          "zh": "适合使用 FW 的典型条件是：可行域上线性优化很便宜、投影明显更贵，而且稀疏/极点表示本身有价值。不能因为“问题有约束”就默认 FW 合适；若投影本来就很简单，Projected Gradient 或 proximal 方法可能更快。如果经典 FW 在边界附近停滞，应先检查 active set，并尝试 Away-step/Pairwise，而不是直接认为 projection-free 思路不行。",
          "ja": "FW を選ぶのは、LMO が安く、射影が高価で、疎・極点表現に価値がある場合です。制約があるだけで FW を選ぶべきではありません。射影が簡単なら projected/proximal 法が速いこともあります。境界で停滞するなら away/pairwise を検討します。"
        },
        "bullets": [
          {
            "en": "Monitor objective value, FW gap, LMO time, step size, and active-set size separately.",
            "zh": "分别监控 objective、FW gap、LMO 耗时、步长和 active-set size。",
            "ja": "objective、FW gap、LMO 時間、step size、active-set size を別々に記録します。"
          },
          {
            "en": "If the gap is large but objective barely changes, the step-size rule may be too conservative.",
            "zh": "若 FW gap 仍很大但 objective 几乎不动，步长规则可能过于保守。",
            "ja": "gap が大きいのに objective が動かないなら step が保守的すぎる可能性があります。"
          },
          {
            "en": "If the LMO dominates runtime, improving the oracle may matter more than changing the outer FW variant.",
            "zh": "若运行时间主要花在 LMO，上层 FW 变体怎么换可能都不如先优化 Oracle 本身。",
            "ja": "LMO が計算時間を支配するなら outer variant より oracle 改善が重要です。"
          },
          {
            "en": "If active-set size grows too much, use corrective steps, atom dropping, or compression strategies.",
            "zh": "若 active set 过大，可考虑 corrective step、drop atom 或表示压缩。",
            "ja": "active set が大きくなりすぎる場合は corrective/drop/compression を使います。"
          }
        ],
        "takeaway": {
          "en": "After this note, you should be able to derive the FW step, build an LMO for common domains, use the FW gap as a stopping certificate, explain the O(1/t) rate, and know when away-step or pairwise variants are needed.",
          "zh": "看完这篇后，你应该能够自己推导 FW 更新，为常见可行域写出 LMO，用 FW gap 做停止判据，解释经典 O(1/t) 收敛，并判断什么时候应该使用 Away-step 或 Pairwise 变体。",
          "ja": "このノート後には FW 更新と代表的 LMO を導出し、FW gap を停止判定に使い、O(1/t) を説明し、away/pairwise が必要な状況を判断できることを目標とします。"
        }
      }
    ]
  }
];

export const getStudyNote = (slug:string) => studyNotes.find(note => note.slug === slug);
