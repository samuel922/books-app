const form = document.getElementById('book-form')

//Book constructor
const Book = function(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI construuctor
const UI  = function() {}

//UI prototypes
UI.prototype.addBookToList = function(book) {
    //Create a row
    const row = document.createElement('tr');
    //Add columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    const list = document.getElementById('book-list');
    list.appendChild(row);
}

UI.prototype.showAlert = function(message, className) {
    //Create a div
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add textnode
    div.appendChild(document.createTextNode(message));
    //Insert the div
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    //Set timeout

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.clearFields = function() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}


form.addEventListener('submit', function(e) {
    //Get Values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    //Instantiate Book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Check for input
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert('Please fill in the fields!', 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);

        //Show success
        ui.showAlert('Book added successfully', 'success');

        //Clear fields
        ui.clearFields()
    }
    
    e.preventDefault();
})