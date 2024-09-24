const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generatedPass = document.getElementById('password1');
const generatedPass2 = document.getElementById('password2');
const generatePassBtn = document.querySelector('.button');

generatePassBtn.addEventListener('click', function() {
    generatedPass.value = "";
    generatedPass2.value = "";
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor (Math.random() * characters.length);
        let randomIndex2 = Math.floor (Math.random() * characters.length);
        generatedPass.value += characters[randomIndex];
        generatedPass2.value += characters[randomIndex2];
    }
})
