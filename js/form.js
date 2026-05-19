const firstName = document.getElementById("fname")

const lastName = document.getElementById("lname")





function onlyLetters(field){
    const regex = /^[A-Za-z]+$/;

    if(!regex.test(field.value)){
        field.setCustomValidity("Please use only characters from a - z, do not use symbols or numbers")
    }
    else{
        field.setCustomValidity("");
    }
    
}

firstName.addEventListener("input", function(){
    onlyLetters(firstname)
})


lastName.addEventListener("input", function(){
    onlyLetters(lastname)

});