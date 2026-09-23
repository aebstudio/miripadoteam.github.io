# GitHub Pages 배포 안내

1. 이 ZIP을 **압축 해제**합니다. `index.html`, `.nojekyll`, `assets/`가 같은 최상위 폴더에 있는지 확인합니다. ZIP 파일 자체를 웹사이트 파일로 올리지 마세요.
2. GitHub에서 새 저장소를 만들고 압축을 푼 폴더의 **내용물 전체**를 저장소 최상위에 올립니다. `assets/media/`와 `assets/backgrounds/`도 모두 포함해야 합니다.
3. 저장소의 **Settings → Pages → Build and deployment → Deploy from a branch**에서 `main`과 `/(root)`를 선택하고 저장합니다.
4. 배포 주소는 사용자/조직 사이트의 경우 `https://사용자명.github.io/`, 일반 저장소의 경우 `https://사용자명.github.io/저장소명/`입니다. 배포 완료 후 첫 화면과 ONDEA 실습 섹션을 확인하세요.

이미지와 글꼴은 `index.html`을 기준으로 한 상대 경로로 연결됩니다. `.nojekyll`도 유지하세요. 파일명 대소문자를 바꾸거나 일부 이미지만 올리면 화면에서 누락될 수 있습니다. ONDEA 실습의 일곱 배경은 `assets/backgrounds/`에 있습니다.

출처: GitHub Docs, GitHub Pages limits; Configuring a publishing source for your GitHub Pages site.
