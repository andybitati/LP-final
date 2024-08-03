const mysql = require('mysql');
const studentData = require('./EtudModele')

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'polytechnique'
});

/*db.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL!');
});
*/


const StudentModel = {
    createStudent: async (req, res) => {
        try {
            const { nom, postnom, prenom, sexe, statut, tel, email, adresse } = req.body;

            const newEtd = await studentData.findOrCreate({ where: { nom, postnom, prenom, sexe, statut, tel, email, adresse } });
            res.status(201).json(newEtd);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Récupérer tous les utilisateurs
    getAllStudent: async (req, res) => {
        try {
            const etd = await studentData.findAll();
            res.status(200).json(etd);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    /*createStudent: (std, callback) => {
        const query = 'INSERT INTO Etudiant_entity SET ?';
        db.query(query, studentData, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    getAllStudents: (callback) => {
        const query = 'SELECT * FROM Etudiant_entity';
        db.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },*/
    //chercher par le nom
    getEtdbyName: async (req, res) => {
        try {
            const { nom, postnom } = req.body;
            const etd = await studentData.findOne({ where: { nom: nom, postnom: postnom } });
            if (etd) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(response));;
            } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e)' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    //chercher par l'email
    getEtdbymail: async (req, res) => {
        try {
            const { email } = req.body;
            const etd = await studentData.findOne({ where: { email: email } });
            if (etd) {
                res.status(200).json(etd);
            } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e)' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getEtdById: async (req, res) => {
        try {
            const { id } = req.body;
            const etd = await studentData.findOne({ where: { id: id } });
            if (etd) {
                res.status(200).json(etd);
            } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e)' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
        // Ajoutez d'autres méthodes pour la mise à jour et la suppression si nécessaire
    },
    deleteEtdid: async (req, res) => {
        try {
            const { id } = req.body;
            const etd = await studentData.findOne({ where: { id: id } });
            if (etd) {
                await etd.destroy();
                res.status(200).json({ message: "Étudiant(e) supprimé(e) avec succès" });
            } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e)' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteEtdName: async (req, res) => {
        try {
            const { nom, postnom } = req.body;
            const etd = await studentData.findOne({ where: { nom: nom, postnom: postnom } });
            if (etd) {
                await etd.destroy();
                res.status(200).json({ message: "Étudiant(e) supprimé(e) avec succès" });
            } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e)' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updatEtd: async (req, res) => {
        try {
            //const { id } = req.params;
            const { nom, postnom, prenom, sexe, statut, tel, email, adresse } = req.body;
            const updated = await studentData.update({ nom: nom, postnom: postnom, prenom: prenom, sexe: sexe, statut: statut, tel: tel, email: email, adresse: adresse }, { where: { nom: nom, postnom: postnom } });
            if (updated) {
                //const updatedEtd = updated.id;
                res.status(200).json({ message: "Etudiant(e) mis(e) à jour avec succès" });
            } else {
                res.status(404).json({ message: 'Étudiant(e) inexistant(e)' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = StudentModel;
