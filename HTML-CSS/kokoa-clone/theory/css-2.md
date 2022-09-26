# Learning CSS
## 목차
### 1. How to Add CSS to HTML
- `inline CSS` : head 태그 내에 style 태그 부분에 CSS를 작성하는 방법
- `external CSS` : link 태그로 별도의 css 파일을 연결하는 방법 (css 파일을 재사용할 수 있어서 더 좋음)
### 2. Writing Our First CSS Lines
- CSS 속성명에는 - `대시` 이외 다른 특수문자가 들어가면 안됨
### 3. What Does Cascading Mean
- `cascading`의 의미는 브라우저가 CSS 코드를 위에서 아래로 순서대로 읽는다는 뜻
  - 즉, 코드의 순서가 결과에 영향을 미친다
  - 그래서 같은 선택자에 두가지 속성이 적용되면, 마지막에 적용된 스타일로 paint됨
  - 만약 style 태그 아래에 link 태그로 css를 paint하면, 아래의 external CSS 방식이 채택됨
### 4. Blocks and Inlines
- `lorem` 키워드를 통해 문자열 생성 가능
- inline : 한 라인 안에 여러개가 올 수 있음
  - img, span, a
- block : 한 라인에 무조건 하나
  - div, header
### 5. Margin Part One
- display 속성을 통해 inline, block 속성으로 재설정할 수 있다
  - div element를 display: inline 으로 바꾸면 사라진다
  - inline 속성은 width와 height를 가질 수 없기 때문에
- user agent style로 기본 margin이 설정되어 있음
  - html element에 배경색, body element에 배경색 입혀보면 알 수 있음
- margin : border 바깥의 여백
### 6. Margin Part Two
- margin 충돌
  - top, bottom 에서만 발생
  - 자식 요소의 border와 부모 요소의 border가 겹칠때, top, bottom margin이 합산되어 부모요소의 margin으로 적용됨
  - 첫번째 div element가 있을 때, 이 top border와 body top border는 일치!
  - 이를 해결하기 위해 padding을 사용
### 7. Paddings and IDs
- padding : border 내부의 여백
### 8. Border
- \* 선택자를 통해 모든 element에 style 적용 가능
### 9. Classes 
- 선택자를 콤마로 연결할 수 있다
### 10. Inline Block
- inline-block의 가장 큰 장점은 width, height를 갖게 할 수 있는 inline 이라는 점이다
- 하지만 요소 사이의 빈 공간을 제어할 수 없는 문제가 있다
- 또한 반응형 디자인을 지원하지 않아서 좋은 방법이 아니다

## Flex
### 11. Flexbox Part One
- display: flex; 로 표현한다
- flexbox 관련 속성은 전부 부모 요소에 적용한다 (자식요소 X) 
  - 즉, 부모 요소를 flex container로 먼저 만들어줘야 한다
- justify-content (마찬가지로 부모 요소에 적용)는 요소들의 수평 레이아웃을 나타낸다
  - 엄밀히 말하면 수평에만 적용하는 것은 아니고 main axis에 적용된다
  - flexbox의 main axis가 수평이라 수평을 우선할 뿐이다
  - cross axis는 수직이다
- align-items는 cross axis에 적용된다 (기본 수직)
  - 부모 요소의 height를 넉넉히 주고 align-items: center; 설정하면 cross axis로도 가운데설정이 작용한다
  - 100vh : 100% viewport height
### 12. Flexbox Part Two
- flex-direction 속성에 column, row 2가지를 설정할 수 있다
  - row : 디폴트
  - column : main axis와 cross axis를 바꾼다
- flex-start가 기본값(시작점)이고 flex-end로 설정하면 끝점으로 바꿀 수 있다
- flex-wrap 속성은 width가 꽉 찼을 때 넘치는 element를 처리하는 방법을 다룬다
  - nowrap(기본값) : width를 줄여 찌그러트린다
  - wrap : element를 다음 라인으로 내린다
  - wrap-reverse : element 순서를 거꾸로 바꾼다

## Position
### 13. Fixed
- position: fixed; 는 뷰포트에서 고정하는 역할을 한다
  - 처음 위치를 사수한다 (수치대로의 위치가 아닌 처음 렌더링된 위치)
  - top: 5px; 처럼 입력하면 레이어를 바꿔서 처음 위치에서 변경할 수 있다
- opacity: 0.2; 투명도

### 13. Relative Absolute
- position: static이 기본값
- relative position
  - top, left, bottom, right를 설정하면 처음 렌더링된 위치를 기준으로 변경된 위치로 렌더링된다
- absolute position
  - 가장 가까운 relative 요소를 기준으로 top ~ right 설정
  - body : relative

### 14. Pseudo Selectors part One
- class 나 id를 통해 스타일을 입히는 것보다 수도 셀렉터로 스타일을 입히는 것이 더 좋은 방법이다
- CSS에서 인덱스는 1부터 시작한다
- nth-child 가상 선택자에서 3n + 1 처럼 인덱스를 지정하는 것도 가능하다

### 15. Combinators
- \+ 연산자는 바로 다음에 오는 형제 요소에 스타일을 입힌다
  - p + span : p 와 같은 레벨의 바로 다음 span 요소를 선택

### 16. Pseudo Selectors part Two
- \~ 연산자는 + 의 발전된 기능
  - 바로 다음에 오지 않아도 같은 레벨이면 모두 선택해줌
- input:required : required 속성이 있는 input 선택
- input[type="password"] : password input 선택
- input[placeholder~="name"] : placeholder에 name이 들어있으면 선택 (placeholder가 username이면 적용 X)
- 이외에도 속성 선택하는 옵션 많음!
### 17. States
- active : 누르고 있을 떄
- hover : 커서가 위에 있을 떄(클릭은 X)
- focus : 키보드 입력 가능 상태가 될 떄
- visited : 입력했던 링크에 대해 적용
- foucs-within : 자식 요소가 focus되면 부모 요소가 바뀜
- 어떤 상태이면 특정 요소를 바꿔라~ 도 가능
  - form:hover input {} : form에 hover되었을 때 자식요소인 input을 바꿈
- 2개 조합도 가능
  - form:hover input:focus {} : form에 hover되고, input에 focus되었을 떄
### 18. Recap
- \:: 연산자도 있다
  - input::placeholder : input 내 placeholder를 스타일
  - p::selection : p 태그의 텍스트를 선택할때 스타일
### 19. Colors and Variables
- color 표현 방법
1. 색상 이름 (blue, wheat ...)
2. 16진수 (#FFFFFF)
3. RGB (rgb(255, 0, 120))
   - RGBA도 있음 (투명도 - 0~1 사이) : rgba(255, 0, 120, 0.5)

- custom property (변수)
  - 쓰고 싶은 색깔의 hexa code를 기억해놨다가 편하게 쓰고 싶을 떄
  - :root {--main-color: #ababab} 이렇게 저장하고
  - background-color: var(--main-color) 이렇게 사용한다
  - 대쉬 2개를 쓰고 변수 이름을 붙여주면 됨
  - 컬러뿐만 아니라 border (2px solid blue) 같은 것도 저장 가능