const closeModal = document.querySelector("#close-sf");
const modal = document.querySelector("#submit-form");
const openModal = document.querySelector("#open-modal");

function cModal(){
    modal.showModal();
    modal.classList.toggle("hidden");
}

closeModal.addEventListener("click",()=>{
    modal.close();
    modal.classList.toggle("hidden");
});

const readButton = document.querySelector(".read");
readButton.addEventListener("click",()=>{
    readButton.classList.toggle("wasRead");
});