const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        username: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        mode: {
            type: DataTypes.ENUM("black", "white")
        }
    }, {
        timestamps: false
    });
}