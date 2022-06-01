console.log("connecté");

//modifcation image de bannière
//je selectionne l'image et stocke dans une variable
const imgBan = document.querySelector(".imgBan");
//je crrer un addeventlistener pour modifier la source lors du clique sur l'image
imgBan.addEventListener("click", function(){
    imgBan.src ="image/avatar.svg";
});

//Action bouton Modify text and color
//je selectionne le buton
const buttonTextColr = document.querySelector(".textColorButton");
//je recupère les element à modifier
const nameToModify = document.querySelector("#name");
const backGroundColor = document.querySelectorAll(".pink-bg");
const allPinkElement = document.querySelectorAll(".pink-text");
//je crée un addeventlistenner lorsque l'on clique sur le bouton et je modifie les propriétés
buttonTextColr.addEventListener("click", function() {
    const modifyBackgroundColor = window.prompt("Enter a color: ")
    const user = window.prompt("Enter your name: " );
    backGroundColor.forEach(element => {
        element.style.backgroundColor = modifyBackgroundColor;
    });
    allPinkElement.forEach(element =>{
        element.style.color = modifyBackgroundColor;
    });
    //backGroundColor.style.backgroundColor = modifyBackgroundColor; remplacé par les forEach sur tous les element du tableau
    buttonTextColr.style.backgroundColor = modifyBackgroundColor;
    nameToModify.innerHTML = user;
    nameToModify.style.color = "white";
});
