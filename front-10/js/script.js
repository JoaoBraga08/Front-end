function fetchObjetos() {
   fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resposta) => resposta.json())
    .then((posts) => {
        const postContainer = document.getElementById("posts");

        posts.forEach((post) => {
             console.log(post.postTitle)
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            //Montar um H2 -> title
            const postTitle = document.createElement("h2");
            postTitle.textContent = post.title;

            // Montar a tag P e buscar o body
            const postBody = document.createElement("p");
            postBody.textContent = post.body;

            //Adicionar estrutura na tela
            //Chamar estrutura HTML
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postBody);  

            postContainer.appendChild(postDiv);
        });
    });
}

//Chamando a fução
fetchObjetos();