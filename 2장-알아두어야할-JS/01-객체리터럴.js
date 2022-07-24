// 예전 방식
var sayNode = function () {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function () {
    console.log('JS');
  },
  sayNode: sayNode
};

oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); // Node
// oldObject.sayNode; -> 표현식이 아님
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic

// 새로운 방식
const newObject = {
  sayJS() { // function 도 안써도 됨
    console.log('JS'); // 콜론 없이 쓸 수 있음 (객체의 메서드)
  },
  sayNode, // property 와 value 가 같으면 콜론 필요 없음
  [es + 6]: 'Fantastic', // 표현식 in 대괄호
};
newObject.sayJS(); // JS
newObject.sayNode(); // Node
console.log(newObject.ES6); // Fantastic