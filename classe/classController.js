//import 
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const Classe = require("./classModele");
const Promotion = require("./PromoModele");
const etd = require("../Etudiant/EtudModele");
const user = require("../Utilisateur/UserModele");
//const auth=require("../Autentification/AutMoD");
//const axios = require("../Autentification/Axios");

//routes
const classCtrl = {
    //Créatin d'une nouvelle classe
    AddEtdClass: async (req, res) => {
        try {
            const { statut_fraisE, statut_fraisA, statut_fraisL, anneeEntityId,promotionEntityId,etudiantEntityId} = req.body;
            const newClass = await Classe.findOrCreate({where:{ statut_fraisE, statut_fraisA, statut_fraisL, anneeEntityId,promotionEntityId,etudiantEntityId }});
            //const isadmin = await user.findOne({where:{roleEntitiesId:2}});
            //if(isadmin){
            //const response = await axios.post('/AddEtdClass', {statut_fraisE:newClass.statut_fraisE, statut_fraisA:newClass.statut_fraisA, statut_fraisL:newClass.statut_fraisL, anneeEntityId:newClass.anneeEntityId,promotionEntityId:newClass.promotionEntityId,etudiantEntityId:newClass.etudiantEntityId});
            res.status(200).json(newClass);
            //}else{
            res.status(401).json({message:"Opération non autorisée"});
            //}
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    //Prendre toutes les classes
    getAllClass: async (req, res) => {
        try {
            const classes = await Classe.findAll();

            //const isadmin = await user.findOne({where:{roleEntitiesId:2}});
            
            res.status(200).json(classes);
            
           
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    //Mise à jour des classes
    updateClass: async (req, res) => {
        try {
            const {statut_fraisE, statut_fraisA, statut_fraisL, anneeEntityId,promotionEntityId,etudiantEntityId  } = req.body;
            //const promo = await Promotion.findOne({ where: { id:promotionEntityId} });
            const Etd = await etd.findOne({where:{ id:etudiantEntityId}} );
            const updated = await Classe.update({ statut_fraisE, statut_fraisA, statut_fraisL, anneeEntityId,promotionEntityId,etudiantEntityId}, { where: { etudiantEntityId:Etd.id } });
            //const isadmin = await user.findOne({where:{roleEntitiesId:2}});
            if (updated) {
                //const updatedClass = await Classe.findOne({ where: { id:updated.id} });
                res.status(200).json(updated);
            } else {
                res.status(404).json({ message: 'Classe inexistante ou opération non autorisée' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
     // Récupérer une classe par son ID
     getClassById: async (req, res) => {
        try {
            const {id} = req.body;
            const promo = await Promotion.findOne({ where: { id:id} });
            const classe = await Classe.findAll({where:{promotionEntityId :promo.id}});
            //const isadmin = await user.findOne({where:{roleEntitiesId:2}});
            if (classe) {
                res.status(200).json(classe);
            } else {
                res.status(404).json({ message: 'Classe inexistante ou opération non autorisée' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Récupérer une classe par son Nom
    getClassByName: async (req, res) => {
        try {
            const {nom} = req.body;
            const promo = await Promotion.findOne({where : {nom:nom}});
            const classe = await Classe.findAll({where:{promotionEntityId :promo.id}});
            //const isadmin = await user.findOne({where:{roleEntitiesId:2}});
            if (classe /*&& isadmin*/) {
                res.status(200).json(classe);
            } else {
                res.status(404).json({ message: 'Classe inexistante ou opération non autorisée' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
            res.status(200).json(promo.id);
        }
    },
     // Supprimer une classe
     deleteClass: async (req, res) => {
        try {
            const { nom } = req.body;
            const promo = await Promotion.findOne({where:{nom:nom}});
            const deleted = await Classe.destroy({ where: { promotionEntityId :promo.id} });
            //const isadmin = await user.findOne({where:{roleEntitiesId:2}});
            if (deleted /*&& isadmin*/) {
                res.status(204).json({message: "Classe supprimée avec succès"});
            } else {
                res.status(404).json({ message: 'Classe inexistante ou opération non autorisée' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteEtdinclass: async (req, res) => {
        try {
            const { nom,postnom } = req.body;
            const Etd = await etd.findOne({where:{nom:nom,postnom:postnom}});
            const deleted = await Classe.destroy({ where: { etudiantEntityId :Etd.id} });
            const isadmin = await user.findOne({where:{roleEntitiesId:2}});
            if (deleted && isadmin) {
                res.status(200).json({message: "Étudiant(e) supprimé(e) de la classe avec succès"});
            } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e) ou opération non autorisée' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = classCtrl;