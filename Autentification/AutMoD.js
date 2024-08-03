const User = require("../Utilisateur/UserModele");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const otp = require("./otp");
//const axios = require("../Autentification/Axios");
var SecretKey = otp.generateSecretKey();
var token = "";
var user = "";
//var TokenValid = "";


const AuthModel = {
  SignUp: async (req, res) => {
    try {
      const { loginEmail, password } = req.body;
      // ... validation des données ...
      user = await User.findOrCreate({ where: { loginEmail: loginEmail, password: password }, defaults: { roleEntitiesId: 1 } });
      // Utilisation de l'instance Axios configurée
      /*const response = await axiosInstance.post('/login', {
        loginEmail: user.loginEmail,
        token: token
    });*/
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  },
  login: async (req, res) => {
    try {
      const { loginEmail, password } = req.body;
      user = await User.findOne({ where: { loginEmail } });
      const Password = await bcrypt.compare(password, user.password);
      const isadmin = await User.findOne({ where: { roleEntitiesId: 2, loginEmail: loginEmail } });
      if (!user || !Password) {
        return res.status(401).json({ message: 'Identifiants incorrects' });
      }
      //req.session.user ={id:user.id, loginEmail: user.loginEmail};

      token = jwt.sign({ id: user.id, loginEmail: loginEmail, roleEntitiesId: user.roleEntitiesId }, SecretKey, { expiresIn: '1h' });
      // Utilisation d'Axios pour effectuer une requête HTTP
      /*const response = await axios.post('/login', {
      loginEmail: user.loginEmail,
      token: token
    });*/

      //
      /*if (isadmin){
        res.redirect("/classeAll");
      }else{
        res.redirect("/EtudiantAll");
      }*/
      return res.status(200).json({message : "Identification réussie",token})
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      res.status(500).json({ success: false, error: 'Erreur de connexion à la base de données' });
    }

  },
  logout: async (req, res) => {
    try {
      // Aucune action à prendre pour déconnecter, le token JWT expire de lui-même
      return res.status(200).json({ message: 'Déconnexion réussie' });
    } catch (error) {
      res.status(400).json({ message: `Erreur : ${error.message}` });
    }
  },
  isAuthenticated: async (req, res, next) => {
    try {
      let token = req.headers.authorization/*['postman-token']*/;
      if (!token) {
        return res.status(401).json(/*{ error: 'Non autorisé' }*/req.headers);
      }

      const decoded = jwt.verify(token, SecretKey);
      const user = await User.findByPk(decoded.id);
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non authentifié' });
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Token invalide' });
    }
  },
  isAuthorized: async (req, res, next) => {
    const user = req.user;
    if (user.roleEntitiesId === 2) {
      return next();
    } else {
      return res.status(403).json({ error: 'Opération non autorisée' });
    }
  }
};

module.exports = AuthModel;

