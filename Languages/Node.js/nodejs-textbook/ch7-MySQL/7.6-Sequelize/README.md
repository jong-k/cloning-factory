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

▶️ config/config.json (MySQL 계정 패스워드 노출안되게 주의)

`npm start` 명령어로 서버를 실행후 데이터베이스 연결 확인

## 4. 모델 정의하기
MySQL에서 미리 정의한 테이블을 시퀄라이즈에서 정의해야함 (모델과 연동하기 위함)

- MySQL의 `Table` 과 시퀄라이즈의 `모델` 이 대응된다
- 시퀄라이즈는 모델 이름을 `단수형`, 테이블 이름을 `복수형` 으로 설정
  - `User` 모델 - `users` 테이블

## 5. 관계 정의하기
- users 테이블과 comments 테이블 간의 관계를 정의
- MySQL에서는 `JOIN` 으로 테이블 연결
### 5-1. 1:N 관계
ex) 한 유저는 여러개의 코멘트를 작성할 수 있음

- hasMany : users 테이블의 id 컬럼이 comments 테이블의 commenter 컬럼에서 여러개가 나타날 수 있음
- belongsTo : comments 테이블의 commenter 컬럼은 users 테이블의 id 컬럼에 속함
