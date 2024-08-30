const express = require('express');
const router = express.Router();

// Array simples para armazenar os posts temporariamente
let posts = [];

// Rota para obter todos os posts
router.get('/', (req, res) => {
    res.json(posts);
});

// Rota para criar um novo post
router.post('/', (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Rota para deletar um post pelo ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(post => post.id !== parseInt(id, 10));
    res.status(204).end();
});

module.exports = router;
