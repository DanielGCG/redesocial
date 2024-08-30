document.getElementById('post-btn').addEventListener('click', function() {
    const content = document.getElementById('post-content').value;

    if (content.trim() !== '') {
        const post = {
            content: content,
            author: 'Usuário Exemplo'
        };

        // Enviar o post para o backend
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => {
            // Adicionar o post à lista de posts na página
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `<p>${data.author} - ${data.date}</p><p>${data.content}</p>`;
            document.getElementById('posts').appendChild(postDiv);
        })
        .catch(error => console.error('Erro:', error));

        // Limpar a área de texto
        document.getElementById('post-content').value = '';
    } else {
        alert('Por favor, escreva algo antes de postar.');
    }
});

// Para carregar os posts existentes na inicialização
window.addEventListener('load', function() {
    fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `<p>${post.author} - ${post.date}</p><p>${post.content}</p>`;
            document.getElementById('posts').appendChild(postDiv);
        });
    })
    .catch(error => console.error('Erro:', error));
});
