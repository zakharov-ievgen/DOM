//task 1
const button = document.querySelector(`.js--js`);
const list = document.querySelector(`.story`);
const list1 = document.querySelector(`.js--js`);
function getValue() {
    list.classList.toggle(`d-none`);
    list1.classList.toggle(`d-yes`);
}
button.addEventListener(`click`, getValue);
//task 2
let adr;
const getLink = document.querySelector(`.js--take`);
function getName() {
    adr = prompt(`Enter your link,please`);
}
getLink.addEventListener(`click`, getName);

const setLink = document.querySelector(`.js--send`);
function setName() {
    window.location.href = adr;
}
setLink.addEventListener(`click`, setName);
//task 3

let newGrid = document.querySelector(`.js--square`);
let k = 1;
let value;
function createNewGrid(screen) {
    let table = document.createElement(`table`);
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement(`tr`);
        for (let j = 1; j <= 10; j++) {
            value = k++;
            let td = document.createElement(`td`);
            td.innerHTML = value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    screen.appendChild(table);
}
//task 4
const pic = document.querySelector(`.js-picture`);
function generatorIMG() {
    randomImg = Math.floor(Math.random() * 9 + 1);
    document.getElementById(`IMGgenerator`).innerHTML = `<img src=./images/${randomImg}.jpg >`;
}
pic.addEventListener(`click`, generatorIMG);
