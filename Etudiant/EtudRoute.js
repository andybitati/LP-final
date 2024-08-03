//import
const express = require("express");
const etdCtrl = require("./EtudController");
const EtudRoute = express.Router();

//Les routes
EtudRoute.get("/Etudiant", etdCtrl.getAllStudent); // récupération de tous les étudiants
EtudRoute.get("/Etudiant", etdCtrl.getEtdbyName); // récupération de l'étudiant par son nom
EtudRoute.get("/Etudiant/:id", etdCtrl.getEtdById); // récupération de l'étudiant par son id
EtudRoute.post("/Etudiant", etdCtrl.createStudent); // Création nouvel étudiant
EtudRoute.put("/Etudiant/id", etdCtrl.updatEtd); // Création nouvel étudiant
EtudRoute.delete("/Etudiant/id", etdCtrl.deleteEtd); // Suppression étudiant
