// 시퀄라이즈 패키지 + 생성자
const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env]; // 데이터베이스 설정을 불러옴
const db = {};

// MySQL 연결 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize; // 연결 객체 재사용을 위해 db.sequelize에 담음

// db 객체에 모델 담아둠
db.User = User;
db.Comment = Comment;

// 각 모델의 init 함수를 호출하여 테이블(+컬럼) 정보 설정
User.init(sequelize);
Comment.init(sequelize);

// 테이블 관계 연결 메서드 실행
User.associate(db);
Comment.associate(db);

module.exports = db;
