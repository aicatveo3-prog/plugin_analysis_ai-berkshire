// 스킬 목록: 사이드바와 스킬 목록 페이지가 함께 사용합니다.
export interface Skill {
  slug: string
  name: string
}

export interface SkillGroup {
  title: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: '🔬 심층 리서치',
    items: [
      { slug: 'investment-research', name: '네 대가 종합 심층 분석' },
      { slug: 'investment-team', name: '멀티 에이전트 리서치 팀' },
      { slug: 'management-deep-dive', name: '경영진 심층 분석' },
      { slug: 'private-company-research', name: '비상장 기업 심층 분석' },
      { slug: 'deep-company-series', name: '8편 장문 기업 시리즈' }
    ]
  },
  {
    title: '📊 실적 분석',
    items: [
      { slug: 'earnings-review', name: '실적 보고서 정독' },
      { slug: 'earnings-team', name: '실적 정독 팀 + 게시용 글' }
    ]
  },
  {
    title: '🏭 산업·종목 선별',
    items: [
      { slug: 'industry-research', name: '산업 공급망 전경 분석' },
      { slug: 'industry-funnel', name: '업종 깔때기 선별' },
      { slug: 'quality-screen', name: '7개 지표 부실 기업 거르기' },
      { slug: 'bottleneck-hunter', name: '공급망 병목 사냥꾼' },
      { slug: 'era-alpha', name: '시대의 알파 포착' },
      { slug: 'investment-checklist', name: '버핏식 매수 전 체크리스트' }
    ]
  },
  {
    title: '📈 보유 종목 관리',
    items: [
      { slug: 'income-investment', name: '배당·인컴 주식 분석' },
      { slug: 'portfolio-review', name: '포트폴리오 점검·최적화' },
      { slug: 'thesis-tracker', name: '투자 논리 추적' },
      { slug: 'thesis-drift', name: '투자 논리 변화 감지' },
      { slug: 'news-pulse', name: '주가 급등락 원인 파악' }
    ]
  },
  {
    title: '🧠 사고 도구',
    items: [
      { slug: 'dyp-ask', name: '돤융핑에게 묻기' },
      { slug: 'financial-data', name: '재무 데이터 교차 검증 규칙' },
      { slug: 'wechat-article', name: '위챗 공식계정 글 작성' }
    ]
  }
]
