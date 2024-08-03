//imports

const express= require("express");
//const session= require("express-session");
const bodyParser = require("body-parser");
const rtctrl = require("../Projet/Utilisateur/UserController");
const rtctrl2 = require("../Projet/classe/classController");
const rtctrl3 = require ("../Projet/Etudiant/EtudController");
const rtctrl4 = require("../Projet/Resultat/ResultatCtrl");
const rtctrl5 = require("../Projet/Autentification/AutMoD");
const path = require("path");
const otp = require("./Autentification/otp");
const cors = require("cors");
//const axios = require("axios");

//Intenstialisation du serveur

var app = express();

//Configuration de bodyparser //permet de récupérer les infos contenu dans le corps d'une req http

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,"frontend")));
app.use(cors());
/*app.use((req,res,next)=> {
  res.setHeader("Acces-Control-Allow-Origin", "http://localhost:3003");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
  res.setHeader("Acces-Control-Headers", "Content-Type,Authorization");
  next();

});*/
// Configurer EJS comme moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Frontend/Ejs'));
//app.use('/auth', AuthRoutes);
//app.use(session({secret:otp.generateSecretKey, resave:false,saveUninitialized:true}));

//Configuration des routes pour administrateur pour la crétation des utilisateurs et des classes
// Route GET pour la page de connexion
/*app.get('/login', (req, res) => {
    res.render('login');
  });
  app.get('/Etudiantnompostnom', (req, res) => {
    res.render('Etudiantall');
  });*/
app.post('/UtilisateurCreate', rtctrl.createUser); // Créer un nouvel utilisateur
app.get('/UtilisateurAll', rtctrl.getAllUsers); // Récupérer tous les utilisateurs
app.get('/UtilisateurId', rtctrl.getUserById); // Récupérer un utilisateur par son ID
app.get('/UtilisateurloginEmail', rtctrl.getUserByMail); // Récupérer un utilisateur par son email
app.patch('/UtilisateurUpdate', rtctrl.updateUser); // Mettre à jour un utilisateur
app.delete('/UtilisateurloginEmail', rtctrl.deleteUser); // Supprimer un utilisateur
app.get("/classeAll", rtctrl2.getAllClass); // récupération de toutes les classes
app.get("/classeid", rtctrl2.getClassById);// récupération par l'id
app.get("/classenom",rtctrl2.getClassByName);// récupération par son nom
app.patch("/classeUpdate", rtctrl2.updateClass); //mise à jour de la classe
app.post("/AddEtdClass", rtctrl2.AddEtdClass); //création d'une nouvelle classe
app.delete("/classeDelete", rtctrl2.deleteClass);//suppression d'une classe
app.delete("/classeEtdinclass", rtctrl2.deleteEtdinclass);//suppression d'un étudiant d'une classe
app.get("/EtudiantAll", rtctrl3.getAllStudent); // récupération de tous les étudiants
app.get("/Etudiantnompostnom", rtctrl3.getEtdbyName); // récupération de l'étudiant par son nom
app.get("/Etudiantid", rtctrl3.getEtdById); // récupération de l'étudiant par son id
app.get("/EtudiantEmail", rtctrl3.getEtdbymail); // récupération de l'étudiant par son email
app.post("/EtudiantCreate", rtctrl3.createStudent); // Création nouvel étudiant
app.patch("/EtudiantUpdate", rtctrl3.updatEtd); // Création nouvel étudiant
app.delete("/Etudiantid", rtctrl3.deleteEtdid); // Suppression étudiant
app.delete("/Etudiantnompostnom", rtctrl3.deleteEtdName); // Suppression étudiant
app.get("/Resultatemail",rtctrl4.Envoiresultat);//pour envoyer le resultat
app.post("/login", rtctrl5.login);//pour la connexion
app.get("/logout",rtctrl5.logout)//pour la déconnexion
app.put("/SignUp", rtctrl5.SignUp);//creation d'un nouveau compte
app.post("/generateOTP",otp.generateOTP);//génère l'OTP
app.post("/verifyOTP",otp.verifyOTP);//pour la vérification de l'OTP




//Lancement du serveur
app.listen(3003,function(){
    console.log("Le serveur tourne");
});