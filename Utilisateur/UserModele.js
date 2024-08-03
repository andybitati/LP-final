const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
//import {Sequelize, DataTypes} from "sequelize";

// Créez une instance de Sequelize pour la connexion à la base de données
const sequelize = new Sequelize('polytechnique', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// notre modele  Étudiant
const User = sequelize.define('User', {
    // Attributs du modèle
    
    loginEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleEntitiesId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{ sequelize, 
    modelname : "User",
    hooks:{
        beforeCreate : async (user)=>{
            user.password = await bcrypt.hash(user.password,10);
        },
        beforeUpdate :  async (user)=>{
            if(user.changed("password")){
                user.password = await bcrypt.hash(user.password,10);
            }
        }
    }

},{
    // Options du modèle
    tableName: 'compte_entity', // Nom de la table dans la base de données
    timestamps: false// Désactive les colonnes de timestamp par défaut (createdAt et updatedAt)
},
sequelize.sync()
    .then(() => {
        console.log('');
    })
);

module.exports = User;

