'use strict';

let myForm = document.getElementById('form');
let myTable = document.getElementById('table');
let allUser = [];

if (localStorage.getItem("Store"))
{
    let data=Json.parse(localStorage.getitm("store"));
    for (let i=0;i<data.length;i++){
        let wholeData=new Store(data.user,data.type,data.price,data.condition);
        data.render();
    }
}
// create construtor
function Store(user, type, price, condition) {
    this.userName = user;
    this.theType = type;
    this.thePrice = price;
    this.conditionState = condition;
    allUser.push(this);
}
// create a method  to render the table
Store.prototype.render = function () {
    let tableRow = document.createElement('tr');
    myTable.appendChild(tableRow);
    let userCell = document.createElement('td');
    tableRow.appendChild(userCell);
    userCell.textContent = this.userName;
    let typeCell = document.createElement('td');
    tableRow.appendChild(typeCell);
    typeCell.textContent = this.theType;
    let priceCell = document.createElement('td');
    tableRow.appendChild(priceCell);
    priceCell.textContent = this.thePrice;
    let conditionCell = document.createElement('td');
    tableRow.appendChild(conditionCell);
    conditionCell.textContent = this.conditionState;
};

// generate a random
function price(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// add event listenr
myForm.addEventListener('submit', submitHandle);

// create function to handle event

function submitHandle(event) {
    event.preventDefault();
    let user = event.target.user.value;
    let type = event.target.type.value;
    let price = price(100, 500);
    if (price < 200) {
        var condition = 'Used';
    } elseif(price >= 200){
        var condition = 'New';

    }
    let newUser = new Store(user, type, price, condition);
    newUser.render();
    
    localStorage.setItem("User", "value");
}
