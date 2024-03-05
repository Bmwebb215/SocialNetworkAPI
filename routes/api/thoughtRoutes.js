const express = require('express');
const router = express.Router();
const { Thought, User } = require('../../models'); // Adjust the path as per your project structure

// GET all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single thought by its _id
router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new thought and link it to the user
router.post('/', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } }, { new: true });
        res.json(newThought);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT to update a thought by its _id
router.put('/:id', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedThought);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE to remove a thought by its _id
router.delete('/:id', async (req, res) => {
    try {
        const deleteThought = await Thought.findByIdAndDelete(req.params.id);
        res.json({ message: 'Thought successfully deleted' });
    } catch (err) {
        res.status(404).json(err);
    }
});

module.exports = router;
