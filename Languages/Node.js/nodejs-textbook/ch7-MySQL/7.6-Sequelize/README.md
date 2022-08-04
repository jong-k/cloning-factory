# 7.6 시퀄라이즈 사용하기
## 1. 시퀄라이즈란?
- ORM (Object Relational Mapping) 도구의 하나
  - ORM은 JS 객체와 데이터베이스의 릴레이션을 매핑해준다
- Node.js에서 MySQL 작업을 쉽게 해주는 라이브러리
- JS 문법으로 MySQL 조작 가능

## 2. 프로젝트 생성
### 2-1. 패키지 설치 및 sequelize 호출
```shell
npm init -y
npm i express morgan nunjucks sequelize sequelize-cli mysql2
npm i -D nodemon
```
- sequelize-cli : sequelize 명령어 실행을 위한 패키지
- mysql2 : MySQL과 시퀄라이즈를 이어주는 드라이버


npx로 sequelize를 호출한다
```shell
npx sequelize init
```
sequelize-cli가 자동 생성하는 코드는 그대로 사용하면 에러가 발생하므로 수정한다   

▶️ models/index.js

## 3. MySQL 연결하기
app.js를 만들고 익스프레스와 시퀄라이즈 연결 코드를 작성

▶️ app.js

SQL 연동시 config/config.json을 참조하여 설정구성
- development 객체의 아래 2개 프로퍼티를 수정하면 됨
  - password : MySQL 비밀번호
  - database : 데이터베이스 이름
- process.env.NODE_ENV 와 연동 (기본값 "development")

▶️ config/config.js   
(MySQL 계정 정보 보호를 위해 dotenv 적용했고 이를 위해 `config.json` 에서 `config.js` 로 파일 변경

`npm start` 명령어로 서버를 실행후 데이터베이스 연결 확인

## 4. 모델 정의하기
MySQL에서 미리 정의한 테이블을 시퀄라이즈에서 정의해야함 (모델과 연동하기 위함)

- MySQL의 `Table` 과 시퀄라이즈의 `모델` 이 대응된다
- 시퀄라이즈는 모델 이름을 `단수형`, 테이블 이름을 `복수형` 으로 설정
  - `User` 모델 - `users` 테이블

## 5. 관계 정의하기
- users 테이블과 comments 테이블 간의 관계를 정의
- MySQL에서는 `JOIN` 으로 테이블 연결
- 
### 5-1. 1:N 관계
ex) 한 유저는 여러개의 코멘트를 작성할 수 있음

- hasMany : users 테이블의 id 컬럼이 comments 테이블의 commenter 컬럼에서 여러개가 나타날 수 있음
- belongsTo : comments 테이블의 commenter 컬럼은 users 테이블의 id 컬럼에 속함

### 5-2. 1:1 관계
ex) 한 유저의 정보만 담당하는 테이블이 따로 존재   
ex) users 테이블, info_of_user1 테이블 (가칭)

- hasOne
- belongsTo

### 5-3. N:M 관계
ex) 게시글에 여러개의 해시태그를 달 수 있음

- belongsToMany (양쪽에서 똑같이 쓰임)

## 6. 쿼리 알아보기
- 시퀄라이즈에서는 SQL문을 자바스크립트로 생성하기 때문에 독특한 쿼리문이 존재한다
- 시퀄라이즈 쿼리는 `프로미스`를 반환하므로 then을 붙여 결과값을 받을 수 있다
- 또한 `await/async` 문법과 같이 사용할 수도 있다

### 6-1. Create
create 메서드 사용
```mysql
-- SQL
INSERT INTO nodejs.users (name, age, married, comment) VALUES ('zero', 24, 0, '자기소개1');
```

```js
// 시퀄라이즈
const { user } = require('../models');
User.create({
  name: 'zero',
  age: 24,
  married: false, // mysql의 TINYINT가 시퀄라이즈에서는 BOOLEAN으로 바뀜
  comment1: '자기소개1'
});
```

### 6-2. Read
`findAll` 또는 `findOne` 사용하며 객체 안에 다양한 옵션으로 WHERE 등을 구현   

1. findAll = SELECT *
```mysql
-- SQL
SELECT *
FROM nodejs.users;

-- 원하는 컬럼만 가져오기
SELECT name, married
FROM nodejs.users;
```

```js
// 시퀄라이즈
User.findAll({});

// 원하는 컬럼만 가져오기도 가능 -> attributes 사용
User.findAll({
  attributes: ['name', 'married']
});
```

2. findOne = LIMIT 1

```mysql
-- SQL
SELECT *
FROM nodejs.users
LIMIT 1;
```

```js
// 시퀄라이즈
User.findOne({});
```

3. WHERE은 그대로 where
- { Op } require 필요
- Op.gt (초과) -> greater than
- Op.gte (이상) -> greater than equal   

4. ORDER BY는 order, OFFSET은 그대로

### 6-3. Update
update 메서드 사용

### 6-4. Delete
destroy 메서드 사용

### 6-5. 관계 쿼리 (JOIN)