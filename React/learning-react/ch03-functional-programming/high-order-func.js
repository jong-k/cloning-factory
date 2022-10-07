// 고차 함수
const invokeIf = (condition, fnTrue, fnFalse) => (condition) ? fnTrue() : fnFalse();
const showWelcome = () => console.log('welcome!!!');
const showUnauthorized = () => console.log('Unauthorized!!!');

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);

// 커링 예제
// userLogs는 일부 정보(사용자 이름)를 받아 함수를 반환한다
// 나머지 정보(메시지)가 사용 가능해지면 userLogs가 반환한 함수를 활용할 수 있다.

//                         | -> log 함수
const userLogs = username => message => console.log(`${userName} -> ${message}`); // 고차 함수
const log = userLogs('grandpa23');
log('attempted to load 20 fake members');

getFakeMembers(20).then(
  members => log(`successfully loaded ${members.length} members`),
  error => log('encountered an error loading members')
);

// resolve인 경우
// grandpa23 -> atteattempted to load 20 fake members
// grandpa23 -> successfully loaded 20 members

// reject인 경우
// grandpa23 -> atteattempted to load 20 fake members
// grandpa23 -> encountered an error loading members