let password = document.querySelector("#fPassword");
let confirm = document.querySelector("#sPassword");
let errorMessage = document.querySelector("#wrongpass")

let submit = document.querySelector("#submitbutton");
submit.addEventListener('click',function(){
    if (password.value != confirm.value){
        password.style.border = "red solid 1px"
        confirm.style.border = "red solid 1px"
        errorMessage.style.visibility = "visible"        

    }else{
        location.reload()
    };

});