# Advanced CSS
## 1. Transitions
- transition: all 속성으로 변화가 발생하는 속성에 효과를 줄 수 있다
  - all 대신 특정 속성을 써서 효과를 주고 싶은 속성을 고를 수도 있다
  - transition 속성은 변화 전 element에 위치해야 한다

## 2. Transformations
- transform: skew(), translate(), rotate() 등..
- transformation은 다른 box element에 영향을 끼치지 않음
  - translateX, translateY로 위치를 변경해도 다른 요소들 영향 없음

## 3. Animations
- @keyframes 로 변수처럼 설정 가능
- transition, transform 등은 마우스 hover 등 어떤 액션을 해줘야 작동함
- animation은 인터랙션 필요없이 자동으로 작용함
- 0%, 50%, 100%로 나눈 다음 50%를 최종변화로 설정하면 자연스럽게 반복 (infinite 도 필요)

## 4. Media Queries
- @media 로 frame을 설정 (조건문처럼)
- min-width 로 최소 너비, max-width로 최대 너비를 설정
- orientation: landscape 설정하면 가로모드 설정 가능
- print : 브라우저에서 인쇄 화면을 설정