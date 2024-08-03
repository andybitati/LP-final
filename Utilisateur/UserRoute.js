const express = require("express");
const userController = require("./UserController");
const router = express.Router();


// Routes pour les utilisateurs

router.post('/users', userController.createUser); // Créer un nouvel utilisateur
router.get('/users', userController.getAllUsers); // Récupérer tous les utilisateurs
router.get('/users/:id', userController.getUserById); // Récupérer un utilisateur par son ID
router.put('/users/:id', userController.updateUser); // Mettre à jour un utilisateur
router.delete('/users/:id', userController.deleteUser); // Supprimer un utilisateur


module.exports= router