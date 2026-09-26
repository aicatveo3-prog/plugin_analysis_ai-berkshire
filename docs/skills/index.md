---
title: 스킬 21개 한눈에 보기
description: AI Berkshire의 스킬 21개를 용도별로 정리한 목록입니다.
---

# 스킬 21개 한눈에 보기

스킬은 AI에게 주는 **작업 지시서**예요. Claude Code에서 `/스킬이름 대상`처럼 입력하면 AI가 그 지시서의 절차대로 리서치를 해요. 각 페이지에는 '한눈에 보기' 요약과 지시서 **전문 번역**이 있어요.

::: tip 어디서부터 볼까요?
- **처음이라면:** [`/investment-checklist`](./investment-checklist)(10분 매수 전 점검)와 [`/quality-screen`](./quality-screen)(부실 기업 거르기)이 가장 이해하기 쉬워요.
- **이 프레임워크의 핵심을 보고 싶다면:** [`/investment-team`](./investment-team)(에이전트 4개 병렬 리서치)을 보세요.
:::

## 🔬 심층 리서치

| 스킬 | 용도 | 이럴 때 써요 |
|-------|------|---------|
| [`/investment-research`](./investment-research) | 네 대가 종합 심층 분석 | 상장사 한 곳을 전방위로 깊이 연구할 때 |
| [`/investment-team`](./investment-team) | 멀티 에이전트 리서치 팀 | 에이전트 4개가 병렬로 연구해 가장 빠르고 넓게 보고 싶을 때 |
| [`/management-deep-dive`](./management-deep-dive) | 경영진 심층 분석 | "주식을 사는 건 사람을 사는 것" — 경영진이 핵심 변수일 때 |
| [`/private-company-research`](./private-company-research) | 비상장 기업 심층 분석 | 앤트, SpaceX처럼 정보가 적은 비상장 기업을 연구할 때 |
| [`/deep-company-series`](./deep-company-series) | 8편 장문 기업 시리즈 | 공개 연재용으로 한 회사를 3~8편, 최대 약 12만 자로 해부할 때 |

## 📊 실적 분석

| 스킬 | 용도 | 이럴 때 써요 |
|-------|------|---------|
| [`/earnings-review`](./earnings-review) | 실적 보고서 정독 (1차 자료) | 증권사 리포트 대신 원본 보고서만 읽고, 버핏처럼 연차보고서를 볼 때 |
| [`/earnings-team`](./earnings-team) | 실적 정독 팀 + 게시용 글 | 네 대가 병렬 해석 → 편집 → 독자 평가 → 게시용 글까지 만들 때 |

## 🏭 산업·종목 선별

| 스킬 | 용도 | 이럴 때 써요 |
|-------|------|---------|
| [`/industry-research`](./industry-research) | 산업 공급망 전경 분석 | 한 산업의 모든 투자 기회를 공급망 단계별로 훑을 때 |
| [`/industry-funnel`](./industry-funnel) | 업종 깔때기 선별 | 전체 시장 → 1차 선별 10곳 이하 → 최종 3곳 심층 분석 |
| [`/quality-screen`](./quality-screen) | 7개 지표 부실 기업 거르기 | 일류가 아닌 회사를 빠르게 제외할 때. 종목·산업·지수·테마 단위 일괄 선별 가능 |
| [`/bottleneck-hunter`](./bottleneck-hunter) | 공급망 병목 사냥꾼 | 거대 트렌드에서 출발해 공급망의 물리적 병목과 기회를 찾을 때 |
| [`/era-alpha`](./era-alpha) | 시대의 알파 포착 | 시대급 고성장 분야의 핵심 기업을 찾고, 성장 지속성을 검증하고, 진입·청산 원칙을 정할 때 |
| [`/investment-checklist`](./investment-checklist) | 버핏식 매수 전 체크리스트 | 6개 관문으로 10분 안에 더 파고들 가치가 있는지 정할 때 |

## 📈 보유 종목 관리

| 스킬 | 용도 | 이럴 때 써요 |
|-------|------|---------|
| [`/income-investment`](./income-investment) | 배당·인컴 주식 분석 | 지속 가능한 배당인지, 기회형 고배당인지, 배당 함정인지 가릴 때 |
| [`/portfolio-review`](./portfolio-review) | 포트폴리오 점검·최적화 | "회사 연구"에서 "포트폴리오 관리"로 — 비중, 집중도, 리밸런싱 |
| [`/thesis-tracker`](./thesis-tracker) | 투자 논리 추적 | 매수 후 규율: 투자 논리가 반증되었는지 계속 추적할 때 |
| [`/thesis-drift`](./thesis-drift) | 투자 논리 변화 감지 | 두 보고서를 비교해 사실·가치평가·표현 중 무엇이 바뀌었는지 가릴 때 |
| [`/news-pulse`](./news-pulse) | 주가 급등락 원인 파악 | 주가가 크게 오르거나 떨어졌을 때 10분 안에 "무슨 일인지" 파악할 때 |

## 🧠 사고 도구

| 스킬 | 용도 | 이럴 때 써요 |
|-------|------|---------|
| [`/dyp-ask`](./dyp-ask) | 돤융핑에게 묻기 | 사업·투자·인생 질문을 돤융핑의 방식으로 생각해 보고 싶을 때 |
| [`/financial-data`](./financial-data) | 재무 데이터 교차 검증 규칙 | 핵심 데이터를 독립 출처 두 곳에서 가져오고, 오차가 1%를 넘으면 경고하는 공통 규범 |
| [`/wechat-article`](./wechat-article) | 위챗 공식계정 글 작성 | 작가·편집자·독자 세 에이전트가 협업해 게시용 글을 만들 때 |

## 상황별로 고르기

| 이런 상황이라면 | 이 스킬 |
|---|---|
| 한 회사를 처음부터 제대로 연구하고 싶다 | `/investment-team` 또는 `/investment-research` |
| 살지 말지 빨리 판단하고 싶다 | `/investment-checklist` |
| 후보가 너무 많아 먼저 걸러 내고 싶다 | `/quality-screen` → `/industry-funnel` |
| 실적이 막 나왔다 | `/earnings-review` |
| 주가가 갑자기 크게 움직였다 | `/news-pulse` |
| 산 뒤에 계속 들고 가도 되는지 점검하고 싶다 | `/thesis-tracker` → `/thesis-drift` |
| 포트폴리오 전체를 점검하고 싶다 | `/portfolio-review` |

## 함께 쓰면 좋은 기능: Claude Code 내장 `/deep-research`

원본 README에 따르면, 위 스킬과 별개로 Claude Code에는 `/deep-research`라는 심층 조사 기능이 내장되어 있어요(이 저장소가 배포하는 것이 아니라 Claude Code 클라이언트에 포함). 흐름은 이래요.

1. 질문을 5개 검색 각도로 나눠 병렬 검색
2. 출처를 가져와 반증 가능한 주장을 추출
3. 주장마다 독립 에이전트 3개가 반박 검증 (3표 중 2표가 반증하면 제외)
4. 신뢰도에 따라 출처가 달린 보고서로 종합

모든 결론이 "누군가 뒤집으려 시도한 뒤에도 살아남은 것"이라는 게 핵심 가치예요. 이 저장소의 종목·산업 스킬을 돌리기 전에 핵심 사실 판단 하나를 독립적으로 검증하는 용도로 쓰기 좋아요.
