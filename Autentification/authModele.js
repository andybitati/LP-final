const mysql = require('mysql');
const bcrypt = require('bcrypt');


//  connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'polytechnique'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL!');
});
// Fonctions pour interagir avec la base de données MySQL
const AuthModel = {
    createUser: async (email, password) => {
        const hashedPassword = await bcrypt.hash(password, 11);
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO compte_entity (loginEmail, password) VALUES (?, ?)';
            db.query(query, [email, hashedPassword], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    },
    findUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM compte_entity WHERE loginEmail = ?';
            db.query(query, [email], (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });
    }
};

module.exports = AuthModel;
