const User = require('./UserModele'); // importation du moddele user
const bcrypt = require("bcrypt");

const userController = {
    // Créer un nouvel utilisateur
    createUser: async (req, res) => {
        try {
            const { loginEmail, password } = req.body;
            if (password){
                const salt = await bcrypt.genSalt(10);
                User.password = await bcrypt.hash(User.password, salt);
            };
            const newUser = await User.findOrCreate({where:{ loginEmail, password },defaults : {roleEntitiesId:1}});
            res.status(201).json(newUser);
            return newUser;
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Récupérer tous les utilisateurs
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            //const isadmin = await User.findOne({where: {roleEntitiesId : 2}});
            if(!users){
                res.status(400).json({message: "Pas d'utilisateur trouvé"});

            }else{
                res.status(200).json(users);
            }
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Récupérer un utilisateur par son ID
    getUserById: async (req, res) => {
        try {
            const { id } = req.body;
            const user = await User.findOne({where:{id:id}});
            //const isadmin = await User.findOne({where: {roleEntitiesId : 2}});
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    //Récupérer par email
    getUserByMail: async (req, res) => {
      try{
        const { loginEmail} = req.body;
        const etd = await User.findOne({where:{loginEmail:loginEmail}});
        //const isadmin = await User.findOne({where: {roleEntitiesId: 2}});
        if (etd) {
            res.status(200).json(etd);
        } else {
              res.status(404).json({ message: 'Utilisateur inexistant' });
        }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },  
    

    // Mettre à jour un utilisateur
    updateUser: async (req, res) => {
        try {
            const { loginEmail, password } = req.body;
            const userfound = await User.findOne({where:{loginEmail:loginEmail, password:password}});
            const updated = await User.update({ loginEmail, password }, { where: { id:userfound.id } });
    
            if (updated) {
                const updatedUser = await User.findByPk(id);
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Supprimer un utilisateur
    deleteUser : async (req, res) => {
        try {
            const { loginEmail } = req.body;
            const deleted = await User.destroy({ where: { loginEmail:loginEmail } });
            //const isadmin = await User.findOne({where: {[roleEntitiesId] : 2}});
            if (deleted) {
                res.status(204).json({ message: 'Utilisateur supprimé avec succès' });
            } else {
                res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = userController;
