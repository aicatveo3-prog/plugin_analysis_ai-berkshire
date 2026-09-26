# AI Berkshire 한국어 가이드

[xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire)(MIT License)의 소개와 스킬 21개를 한국어로 번역·정리한 VitePress 사이트입니다.

- 사이트: https://aicatveo3-prog.github.io/plugin_analysis_ai-berkshire/
- 원본: https://github.com/xbtlin/ai-berkshire

## 구성

```
docs/
├── index.md              홈
├── intro/                소개 (AI Berkshire란?, 설계 철학, 전체 구조, 빠른 시작)
├── skills/               스킬 목록 + 스킬 21개 전문 번역
├── about.md              출처·라이선스·면책
└── .vitepress/           사이트 설정 (config.mts, skills.ts)
```

## 로컬 실행

```bash
npm install
npm run docs:dev      # 개발 서버
npm run docs:build    # 정적 빌드 (docs/.vitepress/dist)
```

`main` 브랜치에 푸시하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해 GitHub Pages에 배포합니다.

## 라이선스

원본의 MIT 라이선스와 저작권 표시를 [LICENSE](LICENSE)에 유지합니다. 이 사이트는 학습·연구용이며 투자 권유가 아닙니다.
