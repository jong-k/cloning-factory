// Promise 는 실행은 하되 결과값은 나중에 받는 객체
const condition = true;
// Promise 객체는 reject, resolve 를 파라미터로 갖는다
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});

promise // resolve 인 경우 then 실행, reject 인 경우 catch 실행
  .then((message) => { // resolve 파라미터인 '성공'이 message 에 전달
    console.log(message);
  })
  .catch((error) => { // reject 파라미터인 '실패'가 error 에 전달
    console.error(error);
  })
  .finally(() => { // 마지막에 그냥 실행
    console.log('resolve 이든 reject 이든 무조건 실행');
  })

// 프로미스를 리턴할 수 도 있음 -> .then 과 .then 을 연결하려면 새로운 프로미스를 리턴해줘야함
promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => { // message -> message2
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => { // message2 -> message3
    console.log(message3);
  })
  .catch((error) => {
    console.error(error)
  })