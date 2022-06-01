console.log("connecté");

//modifcation image de bannière
//je selectionne l'image et stocke dans une variable
const imgBan = document.querySelector(".imgBan");
//je crrer un addeventlistener pour modifier la source lors du clique sur l'image
imgBan.addEventListener("click", function(){
    imgBan.src ="image/avatar.svg";
});

//Action bouton Modify text and color
//je selectionne les boutons
const mainButton = document.querySelectorAll(".mainButton");
const buttonTextColr = document.querySelector(".textColorButton");
//je recupère les element à modifier
const nameToModify = document.querySelector("#name");
const backGroundColor = document.querySelectorAll(".pink-bg");
const allPinkElement = document.querySelectorAll(".pink-text");
const allLink = document.querySelectorAll(".link");
//je crée un addeventlistenner lorsque l'on clique sur le bouton et je modifie les propriétés
buttonTextColr.addEventListener("click", function() {
    const modifyColor = window.prompt("Enter a color: ")
    const user = window.prompt("Enter your name: " );
    //changer la couleur de tous les background
    backGroundColor.forEach(element => {
        element.style.backgroundColor = modifyColor;
    });
    //changer la couleur des textes pink
    allPinkElement.forEach(element =>{
        element.style.color = modifyColor;
    });
    //changer la couleur des liens
    allLink.forEach(element => {
        element.style.color = modifyColor;
    })
    //changer la  couleur des boutons
    mainButton.forEach(element => {
        element.style.backgroundColor = modifyColor;
    })
    //modifier le texte du prénom utilisateur et sa couleur
    nameToModify.innerHTML = user;
    nameToModify.style.color = "white";
});

//Bonus2 : modifier les textes " you can modify"
//je recupère le bouton dans une variable
const devButton = document.querySelector(".blockButton");
//je selectionne les li
const liModify = document.querySelectorAll(".liModify");
//je créer un tableau avec les données de sortie
let arrayDev = ["VS Code", "GitHub", "Terminal"];
//je crée un addeventlistener sur devButton pour changer les li
devButton.addEventListener("click", function(event) {
    for (let i=0; i < liModify.length; i++) {
        liModify[i].innerHTML = arrayDev[i];
    }
})

