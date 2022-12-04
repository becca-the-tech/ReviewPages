let postsArray = [];
const postInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");

function renderPosts() {
    let html = "";
    for (let post of postsArray) {
        html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
    }
    document.getElementById("blog-list").innerHTML = html;
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPosts();
    });

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const postTitle = postInput.value;
    const postBody = bodyInput.value;
    const data = {
        title: postTitle,
        body: postBody
    };

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            postsArray.unshift({ title: data.title, body: data.body });
            renderPosts();
            form.reset();
        });
});
