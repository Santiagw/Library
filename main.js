const myLibrary = [];
const bookContainer = document.querySelector("#bookContainer")
const form = document.querySelector("#bookForm")
const submitBookBtn = document.querySelector("#submitBook")
const Dialog = document.querySelector("dialog")
const newBookBtn = document.querySelector(".newBookBtn")

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = Math.random()
}

function addBookToLibrary(title, author, pages, read, id) {
    const book = new Book(title, author, pages, read, id)
    myLibrary.push(book)
}

function displayBooks() {
bookContainer.innerHTML = ""
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

newBookBtn.addEventListener("click", () => Dialog.setAttribute("open", true)) 

submitBookBtn.addEventListener("click", ()=>{
  const titleField = document.querySelector("#title")
const authorField = document.querySelector("#author")
const pagesField = document.querySelector("#pages")
const readField = document.querySelector("#read")

addBookToLibrary(titleField.value, authorField.value, pages.value, read.value)
Dialog.open = false
displayBooks()
})