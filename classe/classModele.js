const Sequelize = require("sequelize");
const { DataTypes } = require('sequelize');

// Créez une instance de Sequelize pour la connexion à la base de données
const sequelize = new Sequelize('polytechnique', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// notre modele  Étudiant
const Classe = sequelize.define('Classe', {
    // Attributs du modèle

    statut_fraisE: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    statut_fraisA: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    statut_fraisL: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    anneeEntityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    promotionEntityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    etudiantEntityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    // Options du modèle
   
    tableName: 'classe_entity',//.belongsTo(promotion_entity,{foreignKey : "id"}), // Nom de la table dans la base de données
    timestamps: false // Désactive les colonnes de timestamp par défaut (createdAt et updatedAt)

});

module.exports = Classe;

