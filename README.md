# CC Obsidian

Obsidian 사이드바에서 [Claude Code](https://claude.com/claude-code)를 실행하세요.

![Claude Sidebar](screenshot-obsidian.png)

## 주요 기능

- **내장 터미널** - Obsidian 사이드바에서 완전한 터미널 사용 가능
- **Claude 자동 실행** - Claude Code 자동 시작
- **멀티 탭** - 여러 개의 Claude 인스턴스를 동시에 실행 가능

## 시스템 요구사항

- macOS, Linux, 또는 Windows
- Python 3
- [Claude Code](https://claude.com/claude-code)

## 설치 방법

이 플러그인은 **BRAT**을 통해 설치하는 것을 권장합니다.

1. Obsidian Community Plugins에서 **BRAT** 플러그인을 설치하고 활성화합니다.
2. BRAT 설정으로 이동하여 "Add Beta plugin"을 클릭합니다.
3. 다음 주소를 입력합니다: `https://github.com/reallygood83/cc-obsidian`
4. "Add Plugin"을 클릭합니다.
5. Community Plugins 목록에서 "CC Obsidian"을 찾아 활성화합니다.

### 수동 설치

1. [최신 릴리즈](https://github.com/reallygood83/cc-obsidian/releases)에서 `main.js`, `manifest.json`, `styles.css` 파일을 다운로드합니다.
2. 내 보관함 폴더 안에 `<보관함>/.obsidian/plugins/cc-obsidian/` 폴더를 생성합니다.
3. 다운로드한 파일들을 해당 폴더에 복사합니다.
4. Obsidian을 다시 로드하고 설정(Settings) → 커뮤니티 플러그인(Community Plugins)에서 활성화합니다.

## 사용 방법

- 왼쪽 리본 메뉴의 하트 아이콘을 클릭하여 Claude를 엽니다.
- 명령어 팔레트(`Cmd+P` 또는 `Ctrl+P`)에서 다음 기능을 사용할 수 있습니다:
  - **Open Claude Code** - Claude 패널 열기 또는 포커스
  - **New Claude Tab** - 새 Claude 탭 열기
  - **Close Claude Tab** - 현재 Claude 탭 닫기
  - **Toggle Focus: Editor ↔ Claude** - 에디터와 Claude 간 빠른 전환
- `Shift+Enter`를 눌러 여러 줄을 입력할 수 있습니다.
- 설정(Settings) → 단축키(Hotkeys)에서 원하는 단축키를 설정하세요.

## 플랫폼 지원

| 플랫폼 | 상태 |
|----------|--------|
| macOS | ✅ 지원됨 |
| Linux | ✅ 지원됨 |
| Windows | ⚠️ 실험적 지원 |

### Windows 설정 (실험적)

Windows 사용자는 추가적인 의존성 설치가 필요합니다:

1. [python.org](https://python.org)에서 Python 3를 설치합니다.
2. `pywinpty` 라이브러리를 설치합니다:
```bash
pip install pywinpty
```
3. 플러그인을 설치합니다. (BRAT 사용 권장)

**참고:** Windows 지원은 실험적 기능입니다. ConPTY 오버헤드로 인해 macOS/Linux보다 성능이 다소 느릴 수 있습니다.

## 작동 원리

- [xterm.js](https://xtermjs.org/) - 터미널 에뮬레이션
- Python 내장 `pty` 모듈 - 가상 터미널 지원 (macOS/Linux)
- [pywinpty](https://github.com/andfoy/pywinpty) - Windows PTY 지원

## 개발 및 기여

소스 코드를 수정하고 다시 빌드하려면 다음 명령어를 실행하세요 (Unix 환경):

```bash
./build.sh
```

## 작성자

**배움의 달인**
- YouTube: [배움의 달인 채널](https://www.youtube.com/@%EB%B0%B0%EC%9B%80%EC%9D%98%EB%8B%AC%EC%9D%B8-p5v)
- GitHub: [reallygood83](https://github.com/reallygood83)

## 라이선스

MIT
