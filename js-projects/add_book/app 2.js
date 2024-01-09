// Book Constructor
function Book(title, author, isbn){
    this.title = title || '';
    this.author = author || '';
    this.isbn = isbn || '';
}

// UI Constructor
function ConstructorUI() {}

// Add method addBookToList() to ConstructorUI prototype
ConstructorUI.prototype.addBookToList = function(book){
    // get table body element
    var bookListEl = document.getElementById('book-list');
    // create row element
    var rowEl = document.createElement('tr');
    // create cells and them to the table body
    rowEl.innerHTML = '<td>' + book.title + '</td> <td>' + book.author + '</td> <td>' + book.isbn +' </td> <td><a href="#" class="delete">X</a></td>';
    bookListEl.appendChild(rowEl);
};

// Add Delete method to constructor
ConstructorUI.prototype.deleteBook = function(target){
    if ( target.className === 'delete' ) {
        target.parentElement.parentElement.remove();
    }
};

// Show Alert
ConstructorUI.prototype.showAlert = function(message, className){
    // Create div
    var alertMsgDiv = document.createElement('div');
    // Add class className
    alertMsgDiv.className = 'alert ' + className;
    // Add text message
    alertMsgDiv.appendChild(document.createTextNode(message));
    // Get parent element
    var parentEl = document.querySelector('.container');
    // Get sibling Element (form)
    var formEl = document.getElementById('book-form');
    // Add errorDiv to parentEl
    parentEl.insertBefore(alertMsgDiv, formEl);
    // Remove errorDiv after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
};

// Clear fields constructor
ConstructorUI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

// Event Listener for add a book
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form fields values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    // Instantiate book
    var book = new Book(title, author, isbn);

    // Instantiate ConstructorUI
    var ui = new ConstructorUI();

    //Validation
    if (!title || !author || !isbn) {
        ui.showAlert('Enter book info', 'error');
    } else {
        // Add a book to List
        ui.addBookToList(book);
        // Show success msg
        ui.showAlert('Book added', 'success');
        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Delete a book from the List
document.querySelector('#book-list').addEventListener('click', function(e){
    // Instantiate ConstructorUI
    var ui = new ConstructorUI();
    ui.deleteBook(e.target);

    // show message
    ui.showAlert('Book deleted', 'success');

    e.preventDefault();
});
