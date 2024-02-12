const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols = "!@#$%^&*()_-+=?/><~*-.;:";

const lengthEl = document.querySelector("#length");
const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const numberEl = document.querySelector("#numbers");
const symbolEl = document.querySelector("#symbols");
const genbtnEl = document.querySelector("#generate");
const passwordEl = document.querySelector("#password");

genbtnEl.addEventListener("click",() =>{
   
    const length = lengthEl.value;
    let characters = "";
    let password = "";

    if(lowercaseEl.checked){
        characters += lowercaseletters;
    }
    if(uppercaseEl.checked){
        characters += uppercaseletters;
    }
    if(numberEl.checked){
        characters += numbers;
    }
    if(symbolEl.checked){
        characters += symbols;
    }
    for (let i=0; i<length;i++){
        password += characters.charAt(Math.floor(Math.random()* characters.length));
    }
    passwordEl.value = password;

  
});
