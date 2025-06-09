const myLibrary = [];
const bookContainer = document.querySelector("#bookContainer")

function Book(title, author, pages, read, id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id
}

function addBookToLibrary(title, author, pages, read, id) {
    const book = new Book(title, author, pages, read, id)
    myLibrary.push(book)
}

addBookToLibrary("title", "author", "pages", "read", "id")

function displayBooks() {
    for (const book of myLibrary) {
        const bookInfoContainer = document.createElement("p")
        bookInfoContainer.textContent =
            `
            title: ${book.title},
            author: ${book.author}
            pages: ${book.pages},
            read: ${book.read},
            id: ${book.id},
            `
        bookContainer.appendChild(bookInfoContainer)
    }
}

displayBooks()