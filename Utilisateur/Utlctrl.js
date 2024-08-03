import { Utilisateur } from "./UtileModele";
const User = new Utilisateur({
    databe : "fac",
    username : "root",
    password : "",
    host : "localhost",
    dialect : "mysql"
});


const userController = {
    // Créer un nouvel utilisateur
    createUser: async (req, res) => {
        try {
            const { loginEmail, password } = req.body;
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

    // Récupérer tous les utilisateurs
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Récupérer un utilisateur par son ID
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Mettre à jour un utilisateur
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { loginEmail, password } = req.body;
            const [updated] = await User.update({ loginEmail, password }, { where: { id } });
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
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await User.destroy({ where: { id } });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = userController;