// 레시피 컴포넌트를 만드는 함수

// 데이터
const ingredients = [
  '1 lb Salmon',
  '1 cup Pine Nuts',
  '2 cups Butter Lettuce',
  '1 Yellow Squash',
  '1/2 cup Olive Oil',
  '3 cloves of Garlic'
];

// IngredientList 컴포넌트
function IngredientList() {
  return React.createElement(
    'ul',
    { className: 'ingredients'}, // items 배열에 있는 모든 내용에 대해 li를 만듬
    items.map((ingredient, i) => React.createElement('li', { key: i }, ingredients))
  );
}

// 렌더링 함수
ReactDOM.render( // items 부분에 데이터를 전달,
  React.createElement(IngredientList, { items: ingredients }, null),
  document.getElementById('root')
)

/* 만들어진 DOM
<IngredientList>
  <ul className="ingredients">
    <li key="0">1 lb Salmon</li>
    <li key="1">1 cup Pine Nuts</li>
    <li key="2">2 cups Butter Lettuce</li>
    <li key="3">1 Yellow Squash</li>
    <li key="4">1/2 cup Olive Oil</li>
    <li key="5">3 cloves of Garlic</li>
  </ul>
</IngredientList>
*/

//전역 변수 대신 props 객체를 통해 item을 얻게 하기
// items 배열을 리액트 프로퍼티로 참조하게 변경할 수도 있다

// IngredientList 컴포넌트
function IngredientList1(props) {
  return React.createElement(
    'ul',
    { className: 'ingredients'}, // items 배열에 있는 모든 내용에 대해 li를 만듬
    props.items.map((ingredient, i) => React.createElement('li', { key: i }, ingredients))
  );
}

// 구조분해할당 ver.
// IngredientList 컴포넌트
function IngredientList2({ items }) {
  return React.createElement(
    'ul',
    { className: 'ingredients'}, // items 배열에 있는 모든 내용에 대해 li를 만듬
    items.map((ingredient, i) => React.createElement('li', { key: i }, ingredients))
  );
}