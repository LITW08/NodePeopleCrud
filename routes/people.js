const router = require('express').Router();
const peopleDb = require('../db/people-db');

router.get('/', async (req, res) => {
    const people = await peopleDb.getPeople();
    res.render('people/index', { people });
});

router.get('/edit', async (req, res) => {
    const person = await peopleDb.getById(req.query.id);
    res.render('people/edit', { person });
});

router.post('/update', async (req, res) => {
    await peopleDb.update(req.body);
    res.redirect('/people');
});

router.get('/add', (req, res) => {
    res.render('people/add');
});

router.post('/add', async (req, res) => {
    await peopleDb.add(req.body);
    res.redirect('/people');
});

module.exports = router;