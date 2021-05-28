const express = require('express');
const uuid = require('uuid');
const members = require('../../Members');

const router = express.Router();

// Get all members array
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
	const found = members.some(item => item.id == req.params.id);

	if (found) {
		res.json(members.filter(item => item.id == req.params.id));
	} else {
		res.status(400).json({msg: `No member with the id of ${req.params.id}`});
	}
});

// Create member
router.post('/', (req, res) => {
	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		email: req.body.email,
		status: 'active'
	};
	if (!newMember.name || !newMember.email) {
		return res.status(400).json({ msg: 'Please include a name and an email' });
	};
	members.push(newMember);
	res.json(members);
	// res.redirect('/');
});

// Update member
router.put('/:id', (req, res) => {
	const found = members.some(item => item.id == req.params.id);

	if (found) {
		const updMember = req.body;
		members.forEach(member => {
			if (member.id == req.params.id) {
				member.name = updMember.name ? updMember.name : member.name;
				member.email = updMember.email ? updMember.email : member.email;
				res.json({ msg: 'Member is updated', member});
			};
		});
	} else {
		res.status(400).json({msg: `No member with the id of ${req.params.id}`});
	}
});

// Delete member
router.delete('/:id', (req, res) => {
	const found = members.some(item => item.id === parseInt(req.params.id));

	if (found) {
		res.json({ 
			msg: 'Member deleted',
			members: members.filter(item => item.id !== parseInt(req.params.id))
		});
	} else {
		res.status(400).json({msg: `No member with the id of ${req.params.id}`});
	}
});

module.exports = router;