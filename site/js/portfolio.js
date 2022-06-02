const myAvatar = document.querySelector(".avatar-bis");
const links = document.querySelectorAll("a");
const mdf = document.querySelector(".mdf");

const addBackend = document.querySelector("#add-backend");
const btnBack = document.querySelector(".btn-back");
const backUl = document.querySelector("#back-ul");

links.forEach(e => e.style.color = "#750ff7");

myAvatar.addEventListener("click", function() {
    myAvatar.src = ("./image/avatar.svg");
});


const btnName = document.createElement("button");
const btnPosition = document.querySelector(".pink-bg");
btnName.className = "btn-name";
btnName.innerText = "Modify text and color";
btnPosition.appendChild(btnName);

btnName.addEventListener("click", function() {
    const enterColor = prompt("Enter a new color");
    const enterName = prompt("Enter your name");
    const changedName = document.querySelector("#name");
    const changedColorBg = document.querySelectorAll(".pink-bg");
    const changedColorText = document.querySelectorAll(".pink-text");

    changedName.style.color = "white";
    changedName.innerHTML = enterName;
    btnName.style.backgroundColor = enterColor;
    mdf.style.backgroundColor = enterColor;

    /*for (let i = 0; i < changedColorBg.length; i++) {
        changedColorBg[i].style.backgroundColor = enterColor;
    }

    for (let i = 0; i < changedColorText.length; i++) {
        changedColorText[i].style.color = enterColor;
    }*/

    changedColorBg.forEach(e => e.style.backgroundColor = enterColor);
    changedColorText.forEach(e => e.style.color = enterColor);
});

mdf.addEventListener("click", function() {
    let li = document.querySelectorAll("#front-dev-tools li");

    const arrayDev = ["VSCode", "Github", "Terminal"];

    for(let i = 0; i < li.length; i++) {
        li[i].innerHTML = arrayDev[i];
    }
});

btnBack.addEventListener("click", () => {
    let newList = document.createElement("li");
    newList.innerHTML = addBackend.value;
    backUl.appendChild(newList);
})



