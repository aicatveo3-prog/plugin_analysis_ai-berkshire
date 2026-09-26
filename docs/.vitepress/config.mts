import { defineConfig, type DefaultTheme } from 'vitepress'
import { skillGroups } from './skills'

const REPO = 'https://github.com/aicatveo3-prog/plugin_analysis_ai-berkshire'
const ORIGINAL = 'https://github.com/xbtlin/ai-berkshire'

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '📖 소개',
    items: [
      { text: 'AI Berkshire란?', link: '/intro/' },
      { text: '설계 철학: 네 대가와 정밀 계산', link: '/intro/philosophy' },
      { text: '전체 구조', link: '/intro/architecture' },
      { text: '빠른 시작', link: '/intro/quick-start' }
    ]
  },
  {
    text: '🧰 스킬 목록',
    items: [{ text: '스킬 21개 한눈에 보기', link: '/skills/' }]
  },
  ...skillGroups.map((group) => ({
    text: group.title,
    collapsed: false,
    items: group.items.map((s) => ({
      text: `${s.name}`,
      link: `/skills/${s.slug}`
    }))
  })),
  {
    text: 'ℹ️ 기타',
    items: [{ text: '출처·라이선스·면책', link: '/about' }]
  }
]

export default defineConfig({
  lang: 'ko-KR',
  title: 'AI Berkshire 한국어 가이드',
  description:
    'AI로 가치투자 리서치를 하는 오픈소스 프레임워크 AI Berkshire의 소개와 스킬을 한국어로 정리했습니다.',
  base: '/plugin_analysis_ai-berkshire/',
  cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#1e3a8a' }]],

  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '소개', link: '/intro/' },
      { text: '스킬', link: '/skills/' },
      { text: '출처·면책', link: '/about' },
      { text: '원본 저장소', link: ORIGINAL }
    ],

    sidebar,

    socialLinks: [{ icon: 'github', link: REPO }],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '검색' },
          modal: {
            displayDetails: '상세 보기',
            resetButtonTitle: '검색어 지우기',
            backButtonTitle: '닫기',
            noResultsText: '검색 결과가 없습니다',
            footer: {
              selectText: '선택',
              navigateText: '이동',
              closeText: '닫기'
            }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '이 페이지 목차' },
    docFooter: { prev: '이전 페이지', next: '다음 페이지' },
    darkModeSwitchLabel: '다크 모드',
    lightModeSwitchTitle: '라이트 모드로 전환',
    darkModeSwitchTitle: '다크 모드로 전환',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로',
    langMenuLabel: '언어',
    notFound: {
      title: '페이지를 찾을 수 없습니다',
      quote: '주소가 바뀌었거나 없는 페이지예요.',
      linkText: '홈으로 가기'
    },

    footer: {
      message: `원본: <a href="${ORIGINAL}">xbtlin/ai-berkshire</a> (MIT License) · 한국어 번역·정리본`,
      copyright: '투자 권유가 아닌 학습·연구용 자료입니다.'
    }
  }
})
