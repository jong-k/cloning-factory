 // 05-2.콜백패턴을 프로미스로 변경
function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
      // 생략
    })
    .catch(err => { // 프로미스의 장점 : 간편한 에러처리 -> 마지막 catch에서 모든 에러를 처리
      console.error(err);
    })
}

// 코드의 깊이가 세 단계 이상 깊어지지 않음
// 메서드가 프로미스 방식을 지원해야 사용 가능 (findOne 및 save 메서드가 프로미스 지원한다고 가정)

// 프로미스 여러개를 한번에 실행하는 방법도 존재
// Promise.all 사용
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // [성공1, 성공2] -> 모두 resolve여야함
  })
  .catch((error) => {
    console.log(error); // 하나라도 reject 되면 catch로 넘어감
  });