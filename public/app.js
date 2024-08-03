const express = require('express');
const userController = require('../src/Utilisateur/UserController'); // chemin vers le controleur

const app = express();

// Middleware pour parser le body des requêtes en JSON
app.use(express.json());

// Routes pour les utilisateurs
app.post('/users', userController.createUser); // Créer un nouvel utilisateur
app.get('/users', userController.getAllUsers); // Récupérer tous les utilisateurs
app.get('/users/:id', userController.getUserById); // Récupérer un utilisateur par son ID
app.put('/users/:id', userController.updateUser); // Mettre à jour un utilisateur
app.delete('/users/:id', userController.deleteUser); // Supprimer un utilisateur

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log('Serveur démarré sur le port  '  ,{$ ,PORT});
});


        