const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.render('users/index', { users });
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    await user.save();

    res.redirect('/users');
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/show', { user });
});

router.get('/:id/edit', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/edit', { user });
});

router.put('/:id', async (req, res) => {
    const { name, email, password } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        name,
        email,
        password
    });

    res.redirect(`/users/${req.params.id}`);
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/users');
});

module.exports = router;