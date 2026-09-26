---
title: 빠른 시작
description: AI Berkshire 스킬을 Claude Code 또는 Codex에 설치하고 사용하는 방법입니다.
---

# 빠른 시작

## 먼저 알아둘 것: 비용과 모델 선택

심층 리서치 스킬은 여러 차례의 조사, 교차 검증, 여러 에이전트의 종합 판단을 거치기 때문에 **토큰 소모가 많아요.** 사업·재무·산업·리스크 분석을 더 완전하게 하려는 대가예요.

- 실제 투자 결정처럼 위험하고 중요한 판단이라면, 원작자는 **가장 강력한 모델**을 쓰는 편이 분석 효율이 더 좋다고 봐요. 모델 비용을 아끼려고 핵심 판단의 질을 희생하는 건 권하지 않아요.
- 가벼운 모델은 1차 선별, 요약, 위험이 낮은 질문에 더 적합해요.
- 비용을 줄이고 싶다면 심층 리서치를 싸게 돌리려 하기보다 **작업 순서를 조정**하세요.
  1. 먼저 [`/quality-screen`](/skills/quality-screen)으로 빠르게 걸러 내거나, 주가 급등락 원인은 [`/news-pulse`](/skills/news-pulse)로 파악해요.
  2. 더 파고들 가치가 있을 때만 [`/investment-research`](/skills/investment-research)나 [`/investment-team`](/skills/investment-team)을 실행해요.

## 1. AI 클라이언트 설치

쓰는 도구에 맞게 하나를 설치하면 돼요.

**Claude Code 사용자**

```bash
npm install -g @anthropic-ai/claude-code
```

**Codex 사용자**

```bash
# macOS / Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh

# 또는 npm
npm install -g @openai/codex

# 또는 Homebrew
brew install --cask codex

# 설치 확인
codex --version
```

Windows에서는 공식 PowerShell 설치 명령을 쓸 수 있어요: `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`

### 권한 확인 창 줄이기 (Claude Code)

스킬들은 도구를 자주 호출해서, Claude Code가 기본적으로 매번 권한 확인을 물어요. 이건 Claude Code 클라이언트의 권한 기능이라 저장소에서 바꿀 수 있는 설정이 아니에요.

워크플로를 신뢰하고 안전한 환경에서 실행한다면, 권한 확인을 건너뛰는 모드로 시작할 수 있어요.

```bash
claude --dangerously-skip-permissions
```

::: danger 주의
이 모드는 Claude Code의 도구 승인 보호를 끕니다. 저장소, 명령, 작업 폴더를 모두 신뢰할 때만 쓰세요.
:::

::: tip 웹 검색 권한
`/investment-team`처럼 백그라운드 에이전트를 쓰는 스킬은 **WebSearch 권한**이 허용 목록에 있어야 제대로 동작해요. 없으면 에이전트가 인터넷 없이 학습 지식만으로 그럴듯한 보고서를 만들 수 있어요. `.claude/settings.local.json`의 `permissions.allow`에 `"WebSearch"`를 추가하거나 `/permissions`에서 체크하세요.
:::

## 2. 스킬 설치

**Claude Code (macOS / Linux)**

```bash
git clone https://github.com/xbtlin/ai-berkshire.git
cd ai-berkshire
./scripts/install-claude-commands.sh
```

**Claude Code (Windows PowerShell / 명령 프롬프트)**

```bat
git clone https://github.com/xbtlin/ai-berkshire.git
cd ai-berkshire
.\scripts\install-claude-commands.bat
```

**Codex (macOS / Linux)**

```bash
git clone https://github.com/xbtlin/ai-berkshire.git
cd ai-berkshire

# Codex 스킬을 ~/.codex/skills 에 생성·설치
./scripts/install-codex-skills.sh

# 선택: Codex 슬래시 프롬프트를 ~/.codex/prompts 에 설치
# (Claude Code의 /investment-research 와 비슷한 사용감)
./scripts/install-codex-prompts.sh
```

**Codex (Windows)**

```bat
git clone https://github.com/xbtlin/ai-berkshire.git
cd ai-berkshire
.\scripts\install-codex-skills.bat

REM 선택: Codex 슬래시 프롬프트 설치
.\scripts\install-codex-prompts.bat
```

원본 저장소는 세 가지 입구를 함께 관리해요.

- `skills/*.md` — Claude Code 명령 원본
- `codex-skills/*/SKILL.md` — `skills/*.md`에서 자동 생성한 Codex 스킬 패키지
- `codex-prompts/*.md` — 선택 사항인 Codex 슬래시 프롬프트 호환 버전

## 3. 사용하기

Claude Code에서는 명령어를 바로 입력해요. (원문 예시의 중국 회사명은 한국어로 바꿔 적었어요.)

```bash
# 심층 리서치
/investment-research 텐센트
/investment-team 메이퇀
/management-deep-dive 왕싱 메이퇀
/private-company-research SpaceX
/deep-company-series 핀둬둬

# 실적 분석
/earnings-review 텐센트 2025Q4
/earnings-team PDD 2025년 연차보고서

# 산업·종목 선별
/industry-research 원자력 발전
/industry-funnel AI 컴퓨팅 파워
/quality-screen 항셍지수 구성 종목
/bottleneck-hunter AI 인프라
/investment-checklist 마오타이, 엔비디아, 애플

# 보유 종목 관리
/income-investment Verizon mode=existing role=core-income quantity=100 cost_basis=39.50 tax_residence=France horizon=5y
/portfolio-review 텐센트30%, 메이퇀20%, 마오타이20%, 현금30%
/thesis-tracker 핀둬둬
/thesis-drift 핀둬둬 reports/拼多多-thesis-2025Q4.md reports/拼多多-thesis-2026Q1.md
/news-pulse 텐센트

# 사고 도구
/dyp-ask 핀둬둬의 해자는 도대체 어디에 있나요?
/wechat-article 메이퇀
```

::: warning 보고서 언어
스킬 지시서 원문은 **보고서를 중국어로 쓰라고** 지시해요. 한국어 보고서를 원하면 명령 뒤에 "보고서는 한국어로 작성해 줘"처럼 덧붙이세요.
:::

Codex에서는 설치 후 Codex를 다시 시작하고, 스킬 이름으로 작업을 설명하면 돼요.

```text
investment-research 를 사용해 텐센트를 연구해 줘
earnings-review 를 사용해 PDD 2025년 연차보고서를 분석해 줘
industry-funnel 을 사용해 AI 컴퓨팅 파워를 선별해 줘
```

슬래시 프롬프트를 설치했다면 `/` 메뉴에서 찾을 수 있어요. Codex의 사용자 정의 프롬프트는 보통 `prompts:이름` 형태로 보여요.

```text
/prompts:investment-research 텐센트
```

## 다음 단계

- 어떤 스킬이 있는지 보려면 [스킬 21개 한눈에 보기](/skills/)
- 처음이라면 가볍게 [`/investment-checklist`](/skills/investment-checklist)나 [`/quality-screen`](/skills/quality-screen)부터 읽어 보세요.
