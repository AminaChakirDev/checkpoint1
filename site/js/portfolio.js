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
//je recupère le nom à modifier
const nameToModify = document.querySelector("#name");
//je crée un addeventlistenner lorsque l'on clique suyr le bouton et je modifie les propriétés
buttonTextColr.addEventListener("click", function() {
    const user = window.prompt("Entyer your name: " );
    nameToModify.innerHTML = user;
    nameToModify.style.color = "white";
});
