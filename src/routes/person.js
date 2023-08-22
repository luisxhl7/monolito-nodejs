const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/', personController.listPersons);
router.get('/search', personController.getPerson);
router.post('/addperson', personController.addPerson);
router.get('/delete/:id', personController.deletePerson);
router.get('/update/:id', personController.update);
router.post('/update/:id', personController.updatePerson);


module.exports = router;