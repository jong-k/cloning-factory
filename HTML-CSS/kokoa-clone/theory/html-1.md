# Learning HTML
## 목차
### 1. Our First HTML File
- 파일명과 폴더명은 소문자로 작성
### 2. Setup and Errors
### 3. Our First HTML Tag
### 4. More Tags and Prettier
### 5. Tag Attributes
- element 속성은 pineapple="watermelon" 이런 식으로 아무렇게나 작성해도 상관없음
  - 단지 브라우저가 이해하지 못해서 실행되지 않을 뿐
### 6. More Tags and Head
- link 태그에 shortcut icon 속성으로 파비콘 넣을 수 있음 -> `폐지`
  - \<link rel="shortcut icon" href="carrom.png" /> `icon` 만써도 됨
  - shortcut icon 대신 icon 만 써도 됨 (이제 shortcut은 브라우저가 무시함)

### 7. Its All about the Head
### 8. More Tags
- input 태그에 required 추가하고 submit 눌렀더니 동적인 알럿이?! 넘 신기해
  - minlength 등 여러가지 더 있음 
### 9. Form Tags
- pdf 파일만 업로드 받기
  - \<input type="file" accept=".pdf" />
### 10. More Tags and IDs
- label 태그의 for 속성값과 input 태그의 id 속성값이 일치하면, label 눌렀을때 해당 input으로 focus됨
### 11. Semantic HTML
- header, main, footer, aside, sidebar, nav 등 : div로 바꿔서도 되긴 함
- 그래도 코드 가독성을 위해 시맨틱 태그 사용하는 것이 좋음

- 카피라이드 마크 &copy; : \&copy; 입력하면 생김 
### 12. Recap
- 태그명, 속성명은 자유롭게 작성 가능, 단지 브라우저가 알아듣지 못할 뿐
- HTML에서는 항상 큰 따움표를 사용하는게 편함 (컨벤션)
- 모든 태그가 id를 가질 수 있음