// 비교1
// 공백을 하이픈으로 치환하는 프로그램 (명령형 ver.)
const string1 = 'Restaurant in Hanalei';
let urlFriendly1 = '';

for (let i = 0; i < string1.length; i++) { // 이 반복문이 무엇인지 주석으로 설명할 필요가 있음
  urlFriendly1 += string1[i] === ' ' ?  '-' : string1[i];
}

console.log(urlFriendly1); // Restaurant-in-Hanalei

// 공백을 하이픈으로 치환하는 프로그램 (선언형 ver.)
const string2 = 'Restaurant in Hanalei';
let urlFriendly2 = string2.replace(/ /g, '-'); // 공백이 하이픈으로 변경되어야 한다는 사실을 묘사 가능
// 실제로 그 작업을 처리하는 방법(replace 메서드의 동작 원리)은 추상화를 통해 아랫단에 감춤

console.log(urlFriendly2); // Restaurant-in-Hanalei

// 비교2
// DOM 만드는 과정 (명령형 ver.)

const target = document.getElementById('target');
const wrapper = document.createElement('div');
const headline = document.createElement('h1');

wrapper.id = 'welcome';
headline.innerText = 'Hello World';

wrapper.appendChild(headline);
target.appendChild(wrapper);

/* DOM 만드는 과정 (선언형 ver.) - 리액트

const { render } = ReactDOM;

const Welcome = () => ( // welcome 컴포넌트는 렌더링할 DOM에 대해 기술
  <div id='welcome'>
    <h1>Hello World</h1>
  </div>
);

// target이라는 id를 갖는 엘리먼트 안에 렌더링하겠다는 개발자의 의도가 명확히 드러남
render(<Welcome />, document.getElementById('target'); // render 함수는 컴포넌트 지시에 따라 DOM을 만듬
*/