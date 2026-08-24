# NUPS — KAIST Space Club

2026 가을학기 NUPS 리크루팅 홈페이지입니다. 우주 배경을 활용한 다크 편집 디자인 위에 WebGL 3D 외계행성, 화면 안에 여유 있게 들어오는 궤도 링, 소형 위성을 한 장면으로 구성했습니다. 활동·성과 기록과 모집 카운트다운을 포함합니다.

## GitHub Pages 배포

이 프로젝트를 GitHub 저장소의 `main` 브랜치에 push하면 포함된 GitHub Actions 워크플로가 자동으로 정적 사이트를 빌드하고 Pages에 배포합니다. 프로젝트 저장소와 사용자/조직 Pages 저장소(`*.github.io`)의 경로를 모두 자동 처리합니다.

첫 배포 이후 저장소의 **Settings → Pages**에서 배포 상태를 확인할 수 있습니다.

## 로컬 확인

```bash
npm ci
npm run dev
```

GitHub Pages용 정적 결과물 확인:

```bash
npm run build:pages
```

정적 파일은 `out/`에 생성됩니다.
