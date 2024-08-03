//import
const express = require("express");
const classCtrl = require("./classController");
const classRoute = express.Router();

//Routes de l'administrateur
classRoute.get("/classe", classCtrl.getAllClass); // récupération de toutes les classes
classRoute.get("/classe/:id", classCtrl.getClassById);// récupération par l'id
classRoute.put("/classe/:id", classCtrl.updateClass); //mise à jour de la classe
classRoute.post("/classe", classCtrl.createClass); //création d'une nouvelle classe
classRoute.delete("/classe/:id", classCtrl.getAllClass);//suppression d'une classe


module.exports = classRoute;