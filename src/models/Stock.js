const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
    Sequelize.define("stock", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        condition: {
            type: DataTypes.ENUM("NM", "PL", "HP"),
        },
        language: {
            type: DataTypes.STRING,
        },
        stockNumber: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        inReserve: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        price: {
            type: DataTypes.FLOAT,
        }
    }, {
        timestamps: false
    });
}