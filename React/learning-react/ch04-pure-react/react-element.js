// 리액트 프로젝트가 아니므로 작동 X
// 리액트 엘리먼트를 만들고 id가 root인 엘리먼트 아래에 렌더링
const dish = React.createElement('h1', {id: 'recipe-0'}, 'Baked Salmon');
ReactDOM.render(dish, document.getElementById('root'));

/* 결과
<body>
	<div id="root">
		<h1 id="recipe-0">Baked Salmon</h1>
	</div>
</body>
*/

// 여러 엘리먼트 렌더링도 가능
const dessert = React.createElement('h2', null, 'coconut cream');
ReactDOM.render([dish, dessert], document.getElementById('root'));

// 데이터로 리액트 엘리먼트 빠르게 만들기
const items = [
  '1 lb Salmon',
  '1 cup Pine Nuts',
  '2 cups Butter Lettuce',
  '1 Yellow Squash',
  '1/2 cup Olive Oil',
  '3 cloves of Garlic'
];

// 리액트에서는 key를 사용하여 배열을 순회한다
React.createElement(
  'ul',
  { className: 'ingredients'},
  items.map((ingredient, i) => React.createElement('li', { key: i }, ingredient))
);