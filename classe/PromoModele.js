const Sequelize = require("sequelize");
const { DataTypes } = require('sequelize');
// Créez une instance de Sequelize pour la connexion à la base de données
const sequelize = new Sequelize('fac', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Assuming you have a Sequelize instance named sequelize
const Promotion = sequelize.define('Promotion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  departEntityId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
},{
    tableName: 'promotion_entity',//.belongsTo(promotion_entity,{foreignKey : "id"}), // Nom de la table dans la base de données
    timestamps: false
});

module.exports = Promotion