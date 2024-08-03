//Le module Résultat doit contenir simplement des fichier à envoyer à l'utilisateur
//import
const studentData = require("../Etudiant/EtudModele");
const Classe = require("../classe/classModele");
//const express = require("express");
const path = require("path");
//const authctrl = require("../Autentification/authController");
//const userctrl = require("../Utilisateur/UserController");
const usermodele = require("../Utilisateur/UserModele");






const resultat = {

    Envoiresultat: async (req, res) => {
        try {
            //verification de l'étudiant dans la BD

            const { email } = req.body;
            var FoundedId = 0;
            var str1 = "";
            var str2 = "";
            var Nfichier ="" ;
            const etd = await studentData.findOne({ where: { email: email } });
            const isadmin = await usermodele.findOne({ where: { roleEntitiesId: 2 } });
            const etd_user = await usermodele.findOne({ where: { loginEmail: etd.email } });
            if (etd_user || isadmin) {
                FoundedId = etd.id;
                var str1 = etd.nom;
                var str2 = etd.postnom;
                Nfichier = str1 + str2;
                console.log(Nfichier);
                

           } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e)' });
            }

            const stdF = await Classe.findOne({ where: { etudiantEntityId: FoundedId } });
            if (stdF.statut_fraisE && stdF.statut_fraisA && stdF.statut_fraisL) {
                //res.status(200).json({ message: "L'étudiant est ordre" });
                const filepath = path.join(__dirname, "/ResultatsEtudiants", `${Nfichier}.pdf`);
                res.sendFile(filepath, (err) => {
                    if (err) {
                        console.error("Erreur lors de l'envoie du fichier", err);
                        res.status(500).send("Une erreur s'est produite lors de l'envoi du fichier");
                    } else {
                        console.log(`Voici votre coupon\nVous pouvez le télécharger ${Nfichier}.pdf`);
                    };
                });
            } else {
                res.status(200).json({ message: "L'étudiant n'est pas en ordre" })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = resultat;