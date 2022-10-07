// 예시 1
// 비순수 함수
const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false
};

function selfEducate() {
  frederick.canRead = true; // 전역변수 바꿈 -> 부수효과
  frederick.canWrite = true;
  return frederick;
}

// selfEducate();
console.log(frederick); // 함수 실행시 false값 모두 true로 바뀜

// selfEducate 함수 리팩토링 1 -> 파라미터를 받게 만들기
const selfEducate1 = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};

console.log(selfEducate1(frederick)); // 변경
console.log(frederick); // 원본도 변경
// 파라미터를 받아도 부수효과가 나타나는 것은 변하지 않음
// 전달되는 인수를 불변 데이터로 취급하면 순수 함수를 얻을 수 있다

// selfEducate 함수 리팩토링 2 -> 파라미터를 불변 데이터로 만들기
const selfEducate2 = (person) => ({
  ...person,
  canRead: true,
  canWrite: true
});

console.log(selfEducate2(frederick)); // 변경
console.log(frederick); // 원본 불변
// 순수 함수 완성

// 예시 2
// DOM을 변경하는 비순수 함수
function Header(text) {
  let h1 = document.createElement('h1');
  document.body.appendChild(h1);
  // 리턴값이 없고 DOM을 변경하기 때문에 비순수 함수
}

Header('Header() caused side effects');

// DOM을 변경하기 위해 순수 함수와 렌더링 함수를 분리
// 순수 함수:  엘리먼트를 만들어 반환하는 역할만 담당
const Header = (props) => <h1>{props.title}</h1>;
// 렌더링은 아래 부분이 담당
ReactDOM.render(
  <Header title='React uses pure functions' />,
  document.getElementById('react-container')
);