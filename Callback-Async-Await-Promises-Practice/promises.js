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


//Promises take in the parameters of resolve and reject, and within the function
// they either resolve() or reject() based on the presence of any errors, any rejected Promises can be caught
// can be caught by .catch() statement, while resolved Promises cause the .then(function) to execute
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

//.then runs after createPost assuming Promise was resolved, .catch() runs if an error was found
// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err));



////// using Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Goodbye");
});
//fetch returns a Promise, so use a .then() and map the results to JSON
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

//Promise.all takes in an arr of Promises, and if all are resolved can run a .then()
//in this case the .then takes all the outputs of the promises as the variable values
//and logs those values as an array

//it takes 2 seconds, because it takes the amount of time the longest Promise takes to show the values
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

