###### 이롭게 에이전시 교육

# DAY07

## Front-End Environment

### 1. Sign in [GitHub.com](http://github.com/)

버전 관리도구: __github.com__에 가입

![](https://dwa5x7aod66zk.cloudfront.net/assets/labtocat-be5eee0434960a8f73e54910df8e87b8a5a3b2d651c0b301670c04a9cc26a70f.png)

-

#### 2. Install [Sublime Text Editor](http://sublimetext.com/3)

<img src="https://bungeshea.com/wp-content/uploads/sublime-text.png" alt="" width="256" height="256">

1) 텍스트 에디터: __sublimetext__ 설치 (각 운영체제에 맞춰 설치)

2) Sublime Text Package Control & Plugin 설치 방법

1. __Package Control 설치 방법__
  - [Packcontrol Control 설치방법](https://packagecontrol.io/installation) 링크 클릭 후 이동<br/><br/>

1. __Sublime Text Plugin 검색 및 설치 방법__
  1. __메뉴 사용__ :<br/><br/>
  ![Preferences/Package Control 위치](https://github.com/yamoo9/fastcampus-front-end-design/blob/master/Assets/package-control.png)
      - 메뉴바의 `Preferences/Package Control` 클릭
      - 검색바에 `Install Package` 키워드 작성 후 Enter 클릭
      - `Plugin Name` 작성 후 Enter 클릭 - 설치 완료<br/><br/>

  1. __단축키 사용__ :<br/><br/>
  ![단축키 검색바 띄우기](https://github.com/yamoo9/fastcampus-front-end-design/blob/master/Assets/install-package.png)
      - `Windows: Ctrl + Shift + P`, `Mac: Commond + Shift + P` 클릭
      - 검색바에 `Package Control: Install Package` 키워드 작성 후 Enter 클릭
      - `Plugin Name` 작성 후 Enter 클릭 - 설치 완료<br/><br/>

1. __유용한 Sublime Text Plugin Name__ (아래 `Plugin Name`을 검색 후 2)번을 참고하여 설치하세요.)
  - [AdvancedNewFile](https://packagecontrol.io/packages/AdvancedNewFile) - 빠르고 편리하게 폴더나 파일을 만드는 플러그인
  - [Material Theme](https://packagecontrol.io/packages/Material%20Theme) - Sublime Text 테마 설치
  - [Emmet](https://packagecontrol.io/packages/Emmet) - 젠코딩, 마크업 속도를 향상 시켜주는 플러그인
  - [AutoFileName](https://packagecontrol.io/packages/AutoFileName) - 자동으로 파일의 위치를 표시
  - [ConvertToUTF8](https://packagecontrol.io/packages/ConvertToUTF8) - 인코딩 오류로 인한 한글 깨짐 해결
  - [IMEsupport](https://packagecontrol.io/packages/IMESupport) - 한글 입력 시 발생하는 문제 해결
  - [All Autocomplete](https://packagecontrol.io/packages/All%20Autocomplete) - 엘리먼트 자동완성 플러그인

### 3. Setting [GitHub Page](https://pages.github.com/)

GitHub 페이지(Page) 저장소 추가/파일생성/커밋/싱크

1. [`{username}.github.io`](https://github.com/yamoo9/yamoo9.github.io) 저장소 생성
1. [`github for {OS}`](https://desktop.github.com/) GUI 도구 설치
1. 온라인 저장소 복제(Clone Online GitHub Repository)
1. `README.md` 생성/수정
1. 변경사항 커밋(Commit)
1. 커밋 싱크(Sync)

<img src="../Assets/github-pages.png" alt="" width="187" height="205">

-

##### README.md 파일 추가

`README.md` 문서는 GitHub 저장소를 소개하는 내용을 출력하는 [Markdown](https://daringfireball.net/projects/markdown/) 문서

```md
# yamoo9.github.io

yamoo9's Personal Website.

## TODO

### Make Directories & Files

- [x] `index.html`
- [x] `css/style.css`
- [x] `images/`
```

##### 수업 과정에서 작성한 파일

`index.html`

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <title>yamoo9.github.io &gt; yamoo9's Personal WebPage</title>
    <!-- Link CSS File -->
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>

    <!-- heading 1 -->
    <h1>Lecture for Web Design</h1>

  </body>
</html>
```

`css/style.css`

```css
body {
  margin: 0;
  height: 100vh;
  background: url("../images/photo-bg-1920.jpg") no-repeat center;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-weight: 100;
  letter-spacing: 0.23em;
}
```

##### 변경 사항 Commit > Push(Sync)

변경 사항이 발생할 때 마다, 내용을 요약(Summary) 정리하여 `commit` 메시지 추가.

`commit` 완료 후, `sync`하여 로컬 파일을 온라인 GitHub 저장소에 업데이트.

---

## Homework

__Comming Soon__ Page Design [ PSD | Sketch ]

![](https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/ticker-coming-soon-html-website-template.jpg)