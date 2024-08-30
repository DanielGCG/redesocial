// Simulando um banco de dados em memória
let posts = [];

exports.createPost = (req, res) => {
    const post = {
        id: posts.length + 1,
        content: req.body.content,
        author: req.body.author,
        date: new Date().toLocaleString()
    };
    posts.push(post);
    res.status(201).json(post);
};

exports.getAllPosts = (req, res) => {
    res.json(posts);
};
