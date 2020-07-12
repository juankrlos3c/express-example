const members = require('./../../../members');
const express = require('express');
const uuid = require('uuid')
const router = express.Router();

router.get('/', (req, res) => {
    res.json(members);
});
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    // res.send(req.params.id);
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: 'member not found'});
    }
});

router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if (!newMember.email || !newMember.name) {
        return res.status(400).json({ msg: 'please include a name'});
    }

    members.push(newMember);
    res.json(members);
});

router.put('/', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    // res.send(req.params.id);
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: 'member not found'});
    }
});

module.exports = router;