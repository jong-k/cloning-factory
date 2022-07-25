// 05-3.프로미스를 async/await 문법으로 변경
async function findAndSaveUser(Users) {
  let user = await Users.findOne({}); // await 함수가 resolve 되면 user 변수가 초기화
  user.name = 'zero';
  user = await user.save();
  user = await Users.findOne({ gender: 'm' });
  // 생략
}
// 각 promise 앞에 await 키워드를 붙임
// await 함수는 해당 프로미스가 resolve 될 때까지 기다린 후에 다음 라인으로 넘어감

// 에러처리 부분까지 만들어 보완하면 (try/catch 문 사용)
async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
  } catch (error) {
    console.error(error);
  }
}

// for 문과 async/await 을 같이 써서 프로미스를 순차 실행하기
// Promise.all 은 한번에 모두 실행,
// for await 는 순차 실행
const promise1 = Promise.resolve('성공1'); // 즉시 resolve 되는 프로미스
const promise2 = Promise.resolve('성공2');
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})(); // 무기명 화살표 함수의 즉시실행 형태

// async 함수의 리턴값은 항상 promise 로 감싸지기 때문에
// .then 을 붙이거나 await 을 붙여 추가로 처리할 수 있다.
async function findAndSaveUser(Users) {
  // 생략
}
findAndSaveUser().then(() => { /* 생략 */ });
// 또는
const other = async () => {
  const result = await findAndSaveUser();
}

// async/await 문법은 코드를 간결하게 하는 의의가 있다