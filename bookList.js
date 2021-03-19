//bookList is the table
let bookList = document.getElementsByTagName("bookList");

//h2 to display info from the form
let h2 = document.getElementById("info");



/*Note to self: form inputs that use the value need to be declared within the Listener because
otherwise they are being initialized before they even have value */


//ADD BOOKS TO TABLE

//submit button for form to add book
let btn = document.getElementsByTagName("button")[0];

//event listener on form to add book to table
btn.addEventListener("click", function(event) {
    //telling browser not to submit form so values can be used
    event.preventDefault();

    //form selectors
    let bookTitle = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let newTable = document.createElement("tr");
    let tableBody = document.getElementById("tableBody");

    //TODO: still need to add form inputs and JS DOM references to Time, Status, and Completion
    newTable.innerHTML = "<td>" + bookTitle + "</td><td>" + author + "</td><td>" + pages + "</td><td>Time</td><td>Own/Library</td><td>In Progress/Rereading/Finished</td><td class='removable'>Remove?</td>";

    //make tr have class "striped" if even row
    if (tableBody.childNodes.length % 2 == 0) {
        newTable.classList.add("striped");
    }

    //adding event listener to the new td at end to book table row to remove books
    newTable.lastChild.addEventListener("click", function() {
        confirmAndRemove(newTable.lastChild);
    });
    //add the newly filled in tr element to the table body
    tableBody.appendChild(newTable);

    //this was just to output info to an h2 to confirm form input was working properly
    //    h2.innerHTML = "Book Title: " + bookTitle + "<br>Author: " + author + "<br>Pages: " + pages;

});


//Removing tr's from the page when .removable is clicked
let removables = document.querySelectorAll(".removable");

/* TODO: TRYING TO FIX THIS UP SINCE CURRENTLY THE FOR LOOP DOES NOT INCLUDE NEWLY ADDED ITEMS
*/
function confirmAndRemove(target) {
    let confirmRemove = window.confirm("Are you sure you want to remove?");
    if (confirmRemove) {
        alert("Removing " + target);
    }
}

for (let i = 0; i < removables.length; i++) {
    removables[i].addEventListener("click", function() {
        confirmAndRemove(removables[i]);
    });
}
