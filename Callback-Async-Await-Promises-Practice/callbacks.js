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


/////// If left where getPosts() runs, then a createPost() with a longer timeout,
/////// the DOM is already set by the time createPost() runs so postThree will not display
////// One option is to add getPosts() as a callback, so it only runs after createPost() finishes
// getPosts();

// function createPost(post){
//     setTimeout(()=> {
//         posts.push(post);
//     }, 2000)
// }

// createPost({title: 'Post Three', body: 'This is post three'});


//with getPosts() passed in as a callback, it only runs after posts.push(post) is done being added to the array
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

//since getPosts is being passed in as a callback, do not include parentheses or else it will run right away
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
