// 재귀 예시 1 - 카운트다운 10
const countdown = (value, fn) => {
  fn(value);
  return (value > 0) ? countdown(value - 1, fn) : value;
}

countdown(10, value => console.log(value));

// setTimeout으로 시간지연 구현하기 (1초 지연)
const countdown1 = (value, fn, delay=1000) => {
  fn(value);
  return (value > 0) ? setTimeout(() => countdown1(value - 1, fn), delay) : value;
};

const log = value => console.log(value);
countdown1(10, log);

// 재귀 예시 2 - 중첩된 객체 순회하며 값 찾기
const dan = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Dan',
        last: 'Deacon'
      }
    }
  }
};

const deepPick = (fields, object={}) => {
  const [first, ...remaining] = fields.split('.');
  return (remaining.length) ? deepPick(remaining.join('.'), object[first]) : object[first];
};

console.log(deepPick('type', dan)); // person
console.log(deepPick('data.info.fullname.first', dan)); // Dan