const express = require("express");
const resultatctrl = require("./ResultatCtrl");
const Routeresultat = express.Router();

//Les routes
Routeresultat.get("/Resultat",resultatctrl.Envoiresultat);
