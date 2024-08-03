const User = require('./UserModele'); // importation du moddele user
const bcrypt = require("bcrypt");
const etdctrl = require("../Etudiant/EtudController");
const etdmodel= require("../Etudiant/EtudModele");

const userController = {
    // Créer un nouvel utilisateur
    createUser: async (req, res) => {
        const LoginEmail = await etdmodel.findAll({attributes:[email]});
        const pw1 = await etdmodel.findAll({attributes : [nom]});
        const pw2 = await etdmodel.findAll({attributes : [postnom]});
        const password = pw1+pw2;
        try {
            const { loginEmail, password} = req.body;
            
            if (password){
                bcrypt.hash(password, 5, function( err,bcryptedPassword){
                    password : bcryptedPassword
                })
            };
            
            const newUser = await User.create({ loginEmail, password });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
};