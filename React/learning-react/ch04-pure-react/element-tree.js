/* 엘리먼트 트리
<ul class="ingredients">
  <li>1 lb Salmon</li>
  <li>1 cup Pine Nuts</li>
  <li>2 cups Butter Lettuce</li>
  <li>1 Yellow Squash</li>
  <li>1/2 cup Olive Oil</li>
  <li>3 cloves of Garlic</li>
</ul>
 */

// React.createElement로 표현
React.createElement("ul", {"className": "ingredients"},
  React.createElement("li", null, "1 lb Salmon"),
  React.createElement("li", null, "1 cup Pine Nuts"),
  React.createElement("li", null, "2 cups Butter Lettuce"),
  React.createElement("li", null, "1 Yellow Squash"),
  React.createElement("li", null, "1/2 cup Olive Oil"),
  React.createElement("li", null, "3 cloves of Garlic")
);

/* 리턴되는 리액트 엘리먼트 객체 리터럴
{
  'type': 'ul',
  'props': {
    'children': [
    { 'type': 'li', 'props': { 'children': '1 lb Salmon'}}
    { 'type': 'li', 'props': { 'children': '1 cup Pine Nuts'}}
    { 'type': 'li', 'props': { 'children': '2 cups Butter Lettuce'}}
    { 'type': 'li', 'props': { 'children': '1 Yellow Squash'}}
    { 'type': 'li', 'props': { 'children': '1/2 cup Olive Oil'}}
    { 'type': 'li', 'props': { 'children': '3 cloves of Garlic'}}
  ]}
}
*/