# cc-obsidian

![Preview](Preview.png)

옵시디언(Obsidian)을 사용하면서 "이 내용을 좀 정리해줘" 혹은 "이 파일을 수정해줘"라고 말만 하면 알아서 해주는 비서가 있다면 얼마나 좋을까요?  
**cc-obsidian**은 바로 그런 역할을 합니다. 옵시디언 사이드바에서 클로드(Claude)와 대화하며, 클로드가 여러분의 노트를 직접 읽고, 쓰고, 명령어도 실행하게 만드는 강력한 플러그인입니다.

단순히 질문에 대답만 하는 챗봇이 아닙니다. 여러분의 '디지털 정원(Vault)'을 관리하는 똑똑한 정원사라고 생각해보세요.

---

## 🙋‍♂️ 개발자 및 소통 창구 (Connect)

이 플러그인은 여러분의 생산성을 극대화하기 위해 관리되고 있습니다. 궁금한 점이나 팁을 얻고 싶다면 아래 채널을 방문해주세요!

- **GitHub**: [reallygood83](https://github.com/reallygood83) (코드와 이슈 관리)
- **YouTube**: [배움의 달인](https://www.youtube.com/@%EB%B0%B0%EC%9B%80%EC%9D%98%EB%8B%AC%EC%9D%B8-p5v) (활용 꿀팁 영상)
- **X (Twitter)**: [x.com/reallygood83](https://x.com/reallygood83) (빠른 소식)

---

## ✨ 주요 기능 (Features)

*   **⚡️ 진짜 일하는 AI**: 클로드가 단순히 조언만 하는 게 아니라, 파일을 직접 생성하고 수정합니다. 터미널 명령어까지 실행할 수 있습니다.
*   **👀 눈치 빠른 비서**: 현재 여러분이 보고 있는 노트를 자동으로 참고합니다. `@`를 입력해서 특정 파일이나 폴더를 콕 집어 참고하라고 할 수도 있습니다.
*   **🖼️ 이미지 분석**: 이미지를 드래그 앤 드롭하면 클로드가 내용을 분석해줍니다.
*   **✏️ 바로 수정하기**: 텍스트를 선택하고 단축키를 누르면, 그 부분만 쏙 골라 클로드가 수정해줍니다. (워드프로세서의 '변경 내용 추적'처럼 수정된 부분을 보여줍니다.)
*   **🧠 나만의 비서 교육**: `#`을 입력하면 클로드에게 "항상 이렇게 답변해"라고 지시사항(System Prompt)을 추가할 수 있습니다.
*   **🛠️ 도구 확장 (MCP)**: 외부 도구들과도 연결하여 기능을 무한히 확장할 수 있습니다.

---

## 🚀 설치 방법 (Installation)

### 방법 1: 가장 쉬운 방법 (GitHub Release)

1.  [최신 릴리즈 페이지](https://github.com/reallygood83/cc-obsidian/releases/latest)에서 `main.js`, `manifest.json`, `styles.css` 이 3가지 파일을 다운로드합니다.
2.  여러분의 옵시디언 저장소(Vault) 안에 폴더를 하나 만듭니다:  
    `.obsidian/plugins/cc-obsidian/`
3.  다운로드한 3개 파일을 방금 만든 폴더에 넣습니다.
4.  옵시디언을 켜고 **설정(Settings) → 커뮤니티 플러그인(Community plugins)**에서 "cc-obsidian"을 찾아 켭니다(Enable).

### 방법 2: 개발자용 설치 (직접 빌드)

코드를 직접 수정하거나 최신 개발 버전을 쓰고 싶은 분들을 위한 방법입니다.

1.  터미널을 열고 플러그인 폴더로 이동합니다.
    ```bash
    cd /path/to/vault/.obsidian/plugins
    git clone https://github.com/reallygood83/cc-obsidian.git
    cd cc-obsidian
    ```
2.  필요한 도구를 설치하고 빌드합니다.
    ```bash
    npm install
    npm run build
    ```
3.  옵시디언 설정에서 플러그인을 켭니다.

---

## 🎮 사용 방법 (Usage)

사용법은 아주 직관적입니다.

1.  **채팅 시작하기**: 왼쪽 리본 메뉴의 로봇 아이콘을 누르거나, 명령어 창(Command Palette)에서 채팅을 엽니다.
2.  **문맥 추가하기 (`@`)**:
    *   채팅창에 `@`를 입력해보세요. 내 저장소의 다른 파일이나 폴더를 선택해서 "이것 좀 봐줘"라고 할 수 있습니다.
    *   `@foler/`라고 쓰면 특정 폴더 안의 파일들만 보여줍니다.
3.  **명령어 템플릿 (`/`)**:
    *   `/`를 입력하면 자주 쓰는 명령어 모음이 나옵니다.
4.  **바로 고치기 (Inline Edit)**:
    *   노트에서 고치고 싶은 문장을 드래그해서 선택합니다.
    *   지정된 단축키를 누르면 클로드가 그 부분만 수정해줍니다.

---

## ⚙️ 설정 가이드 (Configuration)

설정 메뉴에서 클로드를 더 똑똑하게 만들 수 있습니다.

*   **사용자 이름**: 클로드가 여러분을 부를 이름을 정해주세요.
*   **미디어 폴더**: 이미지를 붙여넣을 때 저장될 위치를 정합니다.
*   **안전 모드 (Safety)**:
    *   클로드가 터미널 명령어를 쓸 때 위험한 명령(`rm -rf` 등)은 막습니다.
    *   파일을 수정하거나 명령을 내릴 때마다 허락을 받도록 설정할 수 있습니다(권장).
*   **Claude CLI 설정**: 만약 "Claude CLI not found" 오류가 뜬다면, 컴퓨터에 설치된 Claude의 위치를 직접 알려줘야 합니다. (터미널에서 `which claude` 또는 `where.exe claude`로 찾을 수 있습니다.)

---

## ❓ 자주 묻는 질문 (Troubleshooting)

**Q. "Claude CLI not found"라고 뜨면서 안 돼요!**  
A. 클로드 프로그램이 어디 있는지 플러그인이 못 찾아서 그렇습니다. 설정(Settings) -> Advanced 탭에 가서 `Claude CLI path`에 직접 경로를 입력해주세요.

**MacOS/Linux 예시:**
1. 터미널에 `which claude` 입력
2. 나온 경로(예: `/usr/local/bin/claude`)를 복사해서 붙여넣기

**Windows 예시:**
1. 파워쉘에 `where.exe claude` 입력
2. 나온 경로(예: `C:\Users\...\claude.exe`)를 복사해서 붙여넣기

---

## 📜 라이선스 (License)

이 프로젝트는 [MIT License](LICENSE)를 따릅니다.

## 🙏 감사의 말

이 플러그인은 Obsidian과 Anthropic의 위대한 도구들 덕분에 만들어졌습니다.
