
const User = require('../Utilisateur/UserModele'); // Modèle Mongoose pour les utilisateurs
const bcrypt = require('bcrypt'); // Pour le hachage des mots de passe
const jwt = require('jsonwebtoken'); // Pour générer des tokens JWT
const OTP = require("./otp");
const userctrl = require("../Utilisateur/UserController");

// Fonction pour s'inscrire
const Auth = {
    signUp : async (req, res) => {
        try {
            // Création d'un nouvel utilisateur
            const newUser = userctrl.createUser();
            // Réponse avec le nouvel utilisateur (sans renvoyer le mot de passe)
            res.status(201).json(newUser);
                
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de l'inscription" });
        }
    },
    
    // Fonction pour se connecter
    login : async (req, res) => {
        try {
            // Vérification de l'utilisateur
            const {loginEmail,password}=req.body;
            const user = await User.findOne({ where :{loginEmail : loginEmail} });
            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé' });
            }
    
            // Vérification du mot de passe
        
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Mot de passe incorrect' });
            }
            
    
            // Génération du token JWT
            const token = jwt.sign(
                { userId: user._id },
                OTP.generateSecretKey, // Remplacez 'secret_key' par votre clé secrète
                { expiresIn: '1h' }
            );
    
            // Réponse avec le token
            res.status(200).json({
                token,
                userId: user._id
            });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la connexion" });
        }
    }
    
};
module.exports = Auth;
