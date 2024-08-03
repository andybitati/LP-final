const Sequelize  = require("sequelize");
const {DataTypes} = require("sequelize");

// Créez une instance de Sequelize pour la connexion à la base de données
const sequelize = new Sequelize('polytechnique', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// notre modele  Étudiant
const Etudiant = sequelize.define('Etudiant', {
    // Attributs du modèle
    /*id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },*/
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postnom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sexe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    }, {
    // Options du modèle
    tableName: 'etudiant_entity', // Nom de la table dans la base de données
    timestamps: false // Désactive les colonnes de timestamp par défaut (createdAt et updatedAt)
});
sequelize.sync()
    .then(() => {
        console.log('');
    });

module.exports = Etudiant;

