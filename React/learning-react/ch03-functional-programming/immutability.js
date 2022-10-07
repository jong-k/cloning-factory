// 색에 평점을 매기는 함수 시리즈
// 시리즈1 - 원본 변경
let colorLawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0
};

function rateColor1(color, rating) { // color 객체의 rating을 변경하는 함수
  color.rating = rating;
  return color;
}

console.log(rateColor1(colorLawn, 5).rating); // 5
console.log(colorLawn.rating); // 5 // 원본값도 변경됨

// 시리즈2 - 불변성 함수
const rateColor2 = function(color, rating) {
  // 빈 객체에 전달받은 color 객체를 복사하고, 전달받은 rating으로 변경한 후 리턴
  return Object.assign({}, color, {rating: rating});
};

// 시리즈3 - 화살표 함수를 활용한 리팩토링
const rateColor3 = (color, rating) => ({ // 객체 리터럴을 즉시 반환하기 위해 ()로 감쌈
  ...color, // 스프레드 연산자로 프로퍼티 나열
  rating // rating 프로퍼티 덮어씀 : rating(키): rating(값) 형태의 프로퍼티가 만들어짐
});

// 색의 이름으로 이루어진 배열에 값을 추가하는 함수1 (push)
let list = [
  { title: 'hot pink'},
  { title: 'lawn'},
  { title: 'teal'}
];
// 불변성 함수가 아님
const addColor = function (title, colors) {
  colors.push({ title });
  return colors;
};

console.log(addColor('thistle', list).length); // 4
console.log(list.length); // 4 -> 원본 배열도 변경됨

// 색의 이름으로 이루어진 배열에 값을 추가하는 함수2 (concat)
const addColor1 = (title, arr) => arr.concat({ title });

console.log(addColor1('black', list).length); // 5
console.log(list.length); // 4 -> 원본 유지 (불변성)

// 색의 이름으로 이루어진 배열에 값을 추가하는 함수3 (스프레드 연산자로 리팩토링)
const addColor2 = (title, list) => [...list, { title }];