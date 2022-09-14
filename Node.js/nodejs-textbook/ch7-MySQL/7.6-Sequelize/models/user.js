const Sequelize = require('sequelize');

// id를 기본키로 연결하므로 적어주지 않아도 MySQL에서 알아서 가져옴
module.exports = class User extends Sequelize.Model {
  static init(sequelize) { // init 메서드로 테이블 설정
    return super.init({ // 1번째 인수 : 테이블 컬럼 정보
      name: {
        type: Sequelize.STRING(20), // MySQL의 자료형과 시퀄라이즈 자료형은 약간 다름
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, { // 2번째 인수 : 테이블 자체 정보
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) { // associate 메서드는 다른 모델과의 관계 설정
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' }); // hasMany -> sour
  } // foreignKey 입력 안하면 자동으로 생성됨 ex) UserId 이렇게
};