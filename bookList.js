//bookList is the table
let bookList = document.getElementsByTagName("bookList");

//h2 to display info from the form
let h2 = document.getElementById("info");

/*Note to self: form inputs that use the value need to be declared within the Listener because
otherwise they are being initialized before they even have value */


//button
let btn = document.getElementsByTagName("button")[0];

//event listener on button
btn.addEventListener("click", function(event) {
    //telling browser not to submit form so values can be used
    event.preventDefault();

    //form selectors
    let bookTitle = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    h2.innerHTML = "Book Title: " + bookTitle + "<br>Author: " + author + "<br>Pages: " + pages;

});
