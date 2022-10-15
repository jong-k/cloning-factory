# 카카오톡 클론
> markup만 사용해서 카카오톡 클론코딩

> 기타 마크업 연습 소스코드 
## 1. Sign Up Screen
### 1-1. 상태바 만들기 (최상단)
- 3열을 가짐 (통신, 시간, 배터리)
- 클래스 이름을 부모__자식 이런 형태로 표현했음

### 1-2. BEM (Block Element Modifier)
- 더 쉽게 읽히는 CSS를 위한 컨벤션
- Block
  - 환경에 영향을 받으면 안됨 (margin을 넣거나 position으로 top, left 값 조절 등)

- Element
  - Blcok이 전체라면, Element는 조각을 의미
  - 2개의 underscore를 앞에 붙여서 표시(__)
  - 다른 element의 일부분으로 중복해서 사용할 수 없음

- Modifier
  - Blcok 또는 Element의 형태(모양, 상태, 행통 등)를 정의
  - 2개의 dash를 앞에 붙여서 표시(--)
  - 항상 Block의 일부로 사용해야 한다
### 1-3. 아이콘 레퍼런스
### heroicons
- SVG 아이콘 활용 가능
- SVG : 텍스트 기반 이미지로 수정이 간편함
### font awesome
- 회원가입후 사용 키트?를 받아서 사용해야함
- js 스크립트를 index.html에 추가한 후 사용
### 1-4. 기타
- 로그인폼은 사이트에서 유일하므로, class 대신 id를 사용해도 됨
### 1.5 상태바 CSS
- font-family 프로퍼티에 값(글꼴)들을 나열하면, 없는 것은 제외하고 있는 순서대로 적용된다.
- fonts를 import할 때는 link 보다 css import 방법이 낫다
- 너무 많은 폰트를 고르면 페이지가 무거워질 수 있다
- justify-content 대신 가운데 정렬하는 방법
  - 1 justify-content 를 center로 돌린다
  - 2 각 컬럼의 width를 33%를 넣어준다 (3개라서)
  - 3 nth-child(2) 에 flex, justify-content: center를 준다
  - 4 last-child에 flex, justify-content: flex-end, align-items: center를 준다
- 폰트어썸 아이콘 사이즈 조절하는 법
  - 아이콘 클래스 이름에 fa-2x (2배) 처럼 추가한다
  - fa-lg : large (조금 크게)
- reset css cdn 으로 user agent style 초기화 (cdn 방식보다 css import가 보기 좋다고 한다)
- status-bar css 분리하고 styles.css가 app.js 처럼 모든걸 연결하게함
- page ruler 익스텐션으로 정밀 측정 가능
## 2. Log In Form
### input
- pseudo element (::placeholder)를 통해 placeholder의 스타일도 조정 가능
  - 참고로 :hover 등은 pseudo class 임
- css에서 변수 사용하기
  - :root {} 선언 후 이 안에 --yellow 이렇게 yellow 변수 선언하고
  - 사용처에서는 var(--yellow) 이렇게 사용
- not 의사 클래스를 사용하면 조건문 부여 가능
  - 예시) input:not([type="submit"])
  - type이 submit이 아닌 input에만 적용
  - [] 안에는 속성 설정
- inherit(상속) 값은 부모 element에서 그 프로퍼티값을 그대로 적용
- font-size 디폴트는 16px
- BEM 방식 쓸건지 아닌지 자기 스타일대로 결정
- form은 action과 method 라는 2가지 특성을 가짐
  - action
    - 파일 경로를 설정하면 해당 파일을 method에 맞게 수행함
  - method
    - GET, POST 등 가능 (POST는 서버 필요)
    - GET은 보안에 취약하므로 username, password 등을 GET으로 다뤄선 안된다
    - URL에 포함되어도 상관없는 정보를 GET 방식으로 불러온다 (쿼리 등)
  - html, css만 다루기 때문에 이 방식으로 페이지를 전환한다 (로그인 -> 친구목록 로딩)
## 3. Navigation Bar
- VS Code 의 tag 생성 단축키를 인텔리제이에서도 사용할 수 있다 (탭 누르면 됨)
  - 예시) nav>ul>li*4>a
- 메인 화면 (친구 목록)에서는 nav 바에서 선택된 항목 이외에는 빈칸으로 아이콘 등록
- a tag는 기본적으로 블루 컬러를 갖기 때문에 reset.css 에서 모든 a tag의 color와 text-decoration을 변경해줌
- box-sizing: border-box 설정을 통해 
- border-box는 padding size를 고려하지 않고 box size를 고정한다
  - 예) padding 50px 일때 width 200px 인 박스는 실제 크기가 250px이 된다
- 각 nav bar 위의 뱃지를 만들기 위해 span element를 이용한다
- display: flex 하면 span 태그도 width, height 조절 가능
  - 그리고 가운데 정렬 해주면 됨
- position: absolute는 가장 가까운 position: relative를 가진 부모 태그를 기준으로 움직인다
## 4. Screen Header
- 각 nav_bar를 누르면 헤더 이름이 바뀌어야 함
- 각 탭에 맞게 아이콘 배치를 바꿔주면서 재사용성 높일 것임 (클래스 활용의 장점)
## 5. Friends Screen
- 아이콘은 텍스트와 동일하기 때문에 컬러 바꿀 수 있음
- \> 모양 아이콘 `chevron`
- ... 모양 아이콘 `ellipsis`
- a element를 사용하여 전 영역을 링크로 활용
## 6. User Component
- 친구 목록에 있는 user component와 채팅 목록에 있는 user component는 사진 크기와 메시지 미리보기만 조정해서 같이 사용
- 그래서 여러 버전을 만들어두고 활용
  - 서브타이틀 (메시지 미리보기) 주석처리
- 비슷한 클래스 끼리 순서 배치하지 말고 위에서 아래로 배치하자!
  - cascading이라는 이름에 맞게!
## 7. Chats Screen
- friends.html 을 최대한 재활용해서 chats.html을 만들자
## 8. find Screen
- font awesome 아이콘 중에 fa-solid (꽉 찬것) / fa-regular (속이 빈것)
- nav__badge 활용해서 screen header badge 만들기
- 재사용성 높은 것들은 component로, 아니면 screen으로
- font-size로 아이콘 크기도 키울 수 있음
- 자주 등장하는 경계선을 main-border로 변수화
- inline은 margin, padding이 정상적으로 적용 안됨!
- h 태그들은 block!
- text-transform: uppercase 를 통해 CSS로 소문자를 대문자로 바꿀 수 있음
- 검은 배경에 opacity 주고 흰 아이콘과 이미지 주고 싶을 때
  - 그런데 폰트 어썸에 검은 아이콘 밖에 없다면?
  - 아이콘 색깔 텍스트처럼 바꿀 수 있음
## 9. more screen
- 아이콘은 span으로 감싸야 컬러도 바꿀 수 있고 css가 먹히는 듯
## 10. settings screen
- 3개 컬럼을 justify-content: center 로 해놓고 space-between 처럼 하려면 어떻게?
  - 맨 왼쪽 것 margin-right: auto
  - 맨 오른쪽 것 margin-left: auto 로 놓기
## 11. chat screen
- width: 100%로 했을 때 오른쪽 왼쪽 잘리는 것은 box-sizing: border-box로 해결하면 됨
- 사실 position absolute로 위치 지정하는 것은 가급적 피하는 것이 좋다 (치트키 느낌)
- position 속성이 생기면, layer가 생성된다
- z-index 기본값은 0이고 정수값을 입력할 수 있음
- flex-end를 활용해 메세지 시간을 메세지 옆밑에 딱 붙이기
- 내가 보낸 톡의 말풍선과 시간 위치 바꾸기 
  - 방법1 : order: 1; (0이 기본값) 하면 순서가 거꾸로 바뀜 (flex children 에게만 적용)
  - 방법2: flex-direction: row-reverse 하면 순서가 거꾸로 바뀜
## 12. write message
- 부모 div가 width가 적용되어 있지 않으면
  - 자식 div도 width를 적용할 수 없다
## 13. splash screen
- friends.html에서 맨 처음 접속하면 코코아톡 노란 창이 뜨도록 설정하기
- body 속성은 기본적으로 position: relative
  - 따라서 position: absolute 일때 body를 상대하려면 굳이 relative 만들 필요 없음
- opcity: 0을 활용하면 display: none 대신 활용할 수 있음
  - display: flex 이미 설정되어 있는 element에 유용하게 작용
  - opacity: 0 말고도 visibility: hidden;도 가능
- animation 뒤에 forwards를 적으면 마지막 속성이 계속 적용됨
  - 예를 들면 opacity 0이 애니메이션 끝나고 나서도 계속 남아 있음
- 완전히 어떤 element를 없애려면 JS를 사용하는 수밖에 없음 (CSS로는 한계 있음)
## 14. nav animation
- translateY(양수) : 내려갔다 올라갔다
- translateY(음수) : 올라갔다 내려갔다
## 15. more animation
- (반복) 애니메이션 만들 떄는 @keyframes
- 심장박동 애니메이션 -> color와 scale 조합해서 가능
- will-change : 브라우저에게 뭔가 바뀔 것이라고 말해줌
  - 그래픽 카드를 이용해 애니메이션을 가속화 (부드럽게, 자연스럽게)
- :focus-within 가상 선택자는 focus된 상태를 캡쳐함
- 안보이게 하는 3가지
  - display: none
  - opacity: 0
  - visibility: hidden
- 0.3s 를 .3s 라고도 표현 가능
## 16. no mobile nedia query
- 큰 스크린일 떄 (no mobile) 별도의 element만 띄움
- media query 사용
  - max-width: 645px -> 최대 645px까지 스타일을 적용
  - 645px 넘어가면 무시
- 추가로 가로모드 방지도 가능!
  - landscape 또는 portrait 속성 이용
## 배포하기
- github를 통해 html, css, js 만으로 이루어진 스태틱 사이트를 만들 수 있음
- 대신 브랜치명을 `gh-pages` 로 만들어야함
  - 또한 퍼블릭 레포여야함
- 그리고 publish branches 누르면 댐
- github.io/레포이름 이렇게 사이트 만들어짐
  - environment 탭에서 접속할 수 잇음
- 파일명에 대문자 지양할것