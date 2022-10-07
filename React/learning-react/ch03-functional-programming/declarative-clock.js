// 시계 어플리케이션 (선언형 ver.)
// 콘솔을 관리하거나 값을 반환하는 함수를 만든다 (함수형 프로그래밍에서는 변수 대신 함수 사용)
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

// Date 객체를 받아서 시, 분, 초가 들어 있는 24시간제 시각을 반환
const abstractClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
});

// 24시간제 시각을 받아 상용시로 변경 (1300 -> 1:00)
const civilianHours = clockTime => ({
  ...clockTime,
  hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
});

// 24시간제 시각에 맞는 AM이나 PM을 붙여준다
const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: (clockTime.hours >= 12) ? 'PM' : 'AM'
});

// 타겟 함수를 인자로 받아서 시간을 그 타겟 함수에게 전달하는 함수를 반환
// 여기서 타겟 함수는 console.log 가 될 것임
const display = target => time => target(time);

// 템플릿 문자열('hh:mm:ss tt')을 받아서 각 시간 정보에 알맞는 값을 넣고 반환
const formatClock = format =>
  time => format.replace('hh', time.hours)
                .replace('mm', time.minutes)
                .replace('ss', time.seconds)
                .replace('tt', time.ampm)

// 1자리 시간이나 분, 초 앞에 0을 붙여준다
const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: (clockTime[key] < 10) ? '0' + clockTime[key] : clockTime[key]
});

// 여러 함수를 인자로 받아 arg를 전달해 호출하면, fns 배열에 reduce가 호출되면서 각 f들이 composed를 적용해 반환
const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);

// clockTime은 new Date()가 들어오고, arg 초기값은 clockTime으로 지정됨
// 그리고 appendAMPM과 civilanHours가 차례로 적용됨
const convertToCivilianTime = clockTime => compose(appendAMPM, civilianHours)(clockTime);

// 상용시간 객체를 받아서 시, 분, 초가 2자리 숫자로 이뤄졌는지 확인하고 필요하면 앞에 0 붙이기
const doubleDigits = civilianTime => compose(prependZero('hours'), prependZero('minutes'), prependZero('second'))(civilianTime);

// 매 1초당 호출되는 인터벌 타이머 안에 여러 함수를 합성한 것을 넣음
const startTicking = () => setInterval(
  compose(
    clear,
    getCurrentTime,
    abstractClockTime,
    convertToCivilianTime,
    doubleDigits,
    formatClock('hh:mm:ss tt'),
    display(log)
  ),
  oneSecond()
);
startTicking();
