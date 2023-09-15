const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("card", {
        name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        manaCost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cmc: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        colors: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        types: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        subtypes: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        rarity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        set: {
            type: DataTypes.STRING,
            allowNull: false
        },
        setName: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        power: {
            type: DataTypes.INTEGER
        },
        toughness: {
            type: DataTypes.INTEGER
        },
        layout: {
            type: DataTypes.STRING,
        },
        multiverseid: {
            type: DataTypes.STRING,
        },
        imageUrl: {
            type: DataTypes.STRING
        },
        //foreignNames: {
            //habria que meter otra tabla para esto
        //},
        printings: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        //legalities: {
          //  type: DataTypes.ARRAY(DataTypes.STRING),
            //allowNull: false
            /* 
                esto es formato objeto, tipo {format: "nombre", legality: "Legal"/"Banned"/"Restricted"} 
            */
        //},
        id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}