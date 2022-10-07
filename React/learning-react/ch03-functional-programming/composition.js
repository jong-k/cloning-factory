// both 함수
// civilianHours의 출력이 appendAMPM의 입력이 된다
// 이 2 함수를 both 함수로 묶을 수 있다.
const both = date => appendAMPM(civilianHours(date));
// 단, 묶을 함수가 많아지면, 가독성이 안좋아진다
// 함수를 더 큰 함수로 조합해주는 compose 함수를 만들어본다

// compose 함수
const both1 = compose(civilianHours, appendAMPM);

both1(new Date());
// 원하는 위치에 언제든 함수를 추가할 수 있어서 확장하기 쉽다
// 함수의 순서를 바꿀 수도 있다

// both 대신 compose 함수를 사용
const compose1 = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);
// 여러 함수를 인자로 받는다 (스프레드 연산자 활용)
// arg 인자(reduce에서 초기값)를 전달해 호출하면 fns 배열에 reduce가 호출되면서 각 f들이 composed를 적용해 반환한다