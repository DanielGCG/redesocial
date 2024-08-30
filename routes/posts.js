const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Rota para criar uma nova postagem
router.post('/', postsController.createPost);

// Rota para listar todas as postagens
router.get('/', postsController.getAllPosts);

module.exports = router;
