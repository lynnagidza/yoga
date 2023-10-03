const express = require('express');

const router = express.Router();
// const {
//   createUsers, findUser, updateUser, deleteUser,
// } = require('../controllers/userController');

router.get('/', async (req, res) => {
  res.render('checkout');
});
// router.post('/', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = await createUsers(name, email, password);
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating user:', err });
//   }
// });

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await findUser(id);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Error finding user:', err });
//   }
// });

// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password } = req.body;
//   try {
//     const user = await updateUser(id, name, email, password);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating user:', err });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await deleteUser(id);
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting user:', err });
//   }
// });

module.exports = router;
