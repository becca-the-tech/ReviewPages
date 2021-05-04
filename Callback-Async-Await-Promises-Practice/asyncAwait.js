// This code is courtesy of a tutorial from Traversy Media:
//Async JS Crash Course - Callbacks, Promises, Async Await
// https://www.youtube.com/watch?v=PoRJizFvM7s

const posts = [
    { title: "Post One", body: "This is post one." },
    { title: "Post Two", body: "This is post two." }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const err = false;

            if (!err) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}


//async is added to the front of a function letting the browser know to run it asynchronously
//then await is called within it saying that process may take some time but the function shouldn't move
//on until the await part is finished fully, so getPosts() will not occur until createPost() is done running
async function init() {
    await createPost({ title: "Post Three", body: "This is post three" });

    getPosts();
}

init();
