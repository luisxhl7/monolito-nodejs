const Person = require('../models/person');
const controller = {};

controller.listPersons = (req, res) => {
    const sql = 'SELECT * FROM person';

    req.getConnection((err, conn) => {
        conn.query(sql, (err, rowsPerson ) => {
            if (err) {
                res.json(err);
            }
            res.render('persons', {
                data: rowsPerson
            });
        });
    });
}

controller.getPerson = (req, res) => {
    let { data } = req.query;
    data = data + "%";
    const sql = 'SELECT * FROM person WHERE documentNumber LIKE ? or age >= ?';

    req.getConnection((err, conn) => {
        conn.query(sql, [data, data], (err, rowsPersondata ) => {
            if (err) {
                res.json(err);
            }
            res.render('persons', {
                data: rowsPersondata
            });
        });

    });
}

controller.addPerson = (req, res) => {
    const sql = 'INSERT INTO person set ?';
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query(sql,[data], (err, rowsdata ) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        })
    })
}

controller.deletePerson = (req, res) => {
    const sql = 'DELETE FROM person WHERE id = ?';
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query(sql,[id], (err, rows ) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        })
    })
}

controller.update = (req, res) => {
    const sql = 'SELECT * FROM person WHERE id = ?';
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query(sql,[id], (err, person ) => {
            if (err) {
                res.json(err);
            }
            res.render('person_uptade', {
                data: person[0]
            });
        })
    })
}

controller.updatePerson = (req, res) => {
    const sql = 'UPDATE person set ? WHERE id= ?';
    const {id} = req.params;
    const newDataPerson = req.body;

    req.getConnection((err, conn) => {
        conn.query(sql,[newDataPerson, id], (err, person ) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        })
    })
}

module.exports = controller;
