const express = require('express');
const router = express.Router();
const { User } = require('../../models'); // Adjust the path as per your project structure

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single user by its _id and populated thought and friend data
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .populate('thoughts')
            .populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT to update a user by its _id
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE to remove user by its _id
router.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User successfully deleted' });
    } catch (err) {
        res.status(404).json(err);
    }
});

// POST request to add a friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } }, 
      { new: true, runValidators: true }
    ).populate('friends');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found with this ID' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

// DELETE request to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } }, // Remove the friend's ID from the friends list
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found with this ID' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;
