//bookList is the table
let bookList = document.getElementsByTagName("bookList");

//h2 to display info from the form, form access to reset inputs at the end of click handler
let h2 = document.getElementById("info");
let form = document.getElementById("newBookForm");


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

    //creates new row and access the tableBody since that's where the new row will be appended
    let newRow = document.createElement("tr");
    let tableBody = document.getElementById("tableBody");

    //checks if bookTitle or pages are empty since they are required
    //alerts user if either is missing without resetting the form
    if (bookTitle == '' || pages == '') {
        alert("Book title and pages are required. Please fill them in.");
        return;
    }

    //TODO: still need to add form inputs and JS DOM references to Time, Status, and Completion
    newRow.innerHTML = "<td>" + bookTitle + "</td><td>" + author + "</td><td>" + pages + " pages</td><td>Time</td><td>Own/Library</td><td>In Progress/Rereading/Finished</td><td class='removable'>Remove?</td>";

    //adding event listener to the new td at end to book table row to remove books
    newRow.lastChild.addEventListener("click", function() {
        confirmAndRemove(newRow.lastChild);
    });
    //add the newly filled in tr element to the table body
    tableBody.appendChild(newRow);

    //striping the table to make sure the pattern continues properly
    striped(tableBody.children);

    //clearing the form values for next usage
    form.reset();

    //this was just to output info to an h2 to confirm form input was working properly
    //    h2.innerHTML = "Book Title: " + bookTitle + "<br>Author: " + author + "<br>Pages: " + pages;

});


//Removing tr's from the page when .removable is clicked
let removables = document.querySelectorAll(".removable");

//function for adding the striped class to even row numbers
function striped(arrayList) {
    for (let i = 0; i < arrayList.length; i++) {
        if (i % 2 == 0) {
            arrayList[i].classList.add("striped");
        } else {
            arrayList[i].classList = '';
        }
    }
}

function confirmAndRemove(target) {
    //topParent gets the target (td)'s parentNode which is tr, and grandparent of table body
    //then gets children for table body to get all the tr's
    let topParent = target.parentNode.parentNode.children;
    let confirmRemove = window.confirm("Are you sure you want to remove?");

    //targets parentNode since target is td and parent is tr to remove row
    if (confirmRemove) {
        target.parentNode.remove();
    }

    //resets the striping for the table
    striped(topParent);
}

//adding event listeners for each td item in removable column for clicks
//starting i at 1 because heading row has class removable but does not need an event listener
for (let i = 1; i < removables.length; i++) {
    removables[i].addEventListener("click", function() {
        confirmAndRemove(removables[i]);
    });
}
