const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){ // 테이블에 대한 설정
        return super.init({ // 테이블 컬럼에 대한 설정
            name: {
                type: Sequelize.STRING(20)
            },
            position: {
                type: Sequelize.STRING(20)
            },
            email: {
                type: Sequelize.STRING(50)
            },
            github: {
                type: Sequelize.STRING(100)
            },
            insta: {
                type: Sequelize.STRING(100)
            },
            likelion: {
                type: Sequelize.STRING(20)
            },
            phone : {
                type: Sequelize.STRING(15)
            }
		}, { // 테이블 자체에 대한 설정
            sequelize,
            timestamps: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){ // 다른 모델과의 관계
    }
};