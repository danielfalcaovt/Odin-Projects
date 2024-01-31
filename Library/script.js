const closeModal = document.querySelector("#close-sf");
const modal = document.querySelector("#submit-form");
const openModal = document.querySelector("#open-modal");

function cModal(){
    modal.style.display = "none";
    openModal.style.display = "block";
}
closeModal.addEventListener("click",function(){
    cModal();
});

openModal.addEventListener("click",function(){
    modal.style.display = "flex";
    openModal.style.display = "none";
})

const sendBook = document.querySelector("#send-book");
const form = document.querySelector(".form");
form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
})

let count = 0;
function addBookToLibrary(){
    let booksArray = [];
    let inputAuthor = document.querySelector("#author");
    let inputTitle = document.querySelector("#title");
    let inputPages = document.querySelector("#pages");
    let inputRead = document.querySelector("#read");
    let bookContainer = document.querySelector("#books");
    let pages = inputPages.value;
    let read = inputRead.checked;
    let author = inputAuthor.value;
    let title = inputTitle.value;
    if (read === true){
        read = "Ja lido!";
    }else{
        read = "A ler!";
    };
    booksArray.push({
        author:author,
        read:read,
        pages:pages,
        title:title,
        index:count
    });
    count++
    
    let removeBook = document.createElement("button");
    for (let pos in booksArray){
        const newBook = document.createElement("div");
        bookContainer.appendChild(newBook);
        newBook.classList.add('book-container');
        newBook.classList.add(booksArray[pos].index);

        let h1 = document.createElement("h1");
        newBook.appendChild(h1);
        h1.innerHTML = booksArray[pos].title
        
        let h2 = document.createElement("h2");
        newBook.appendChild(h2);
        h2.innerHTML = booksArray[pos].author;
        
        let numberPages = document.createElement("p");
        newBook.appendChild(numberPages);
        numberPages.innerHTML = `${booksArray[pos].pages} Paginas`;

        let ifRead = document.createElement("h3");
        newBook.appendChild(ifRead);
        ifRead.innerHTML = read

        pages = inputPages.value = "";
        author = inputAuthor.value = "";
        title = inputTitle.value  = "";
        read = inputRead.value = "";
        newBook.appendChild(removeBook);
        removeBook.innerHTML = "Remover livro";
        removeBook.classList.add("remove");
        
    }
};