// 객체 여러 단계 안의 속성을 찾을 수 있음

const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
// status 내부의 count만 골라서 변수에 할당 가능
const { getCandy, status: { count } } = candyMachine;
console.log(getCandy); // [Function: getCandy]
console.log(getCandy()); // 에러로 count 인식 불가 -> 구조분해할당을 하면 this가 바뀌기 때문
console.log(count); // 5
