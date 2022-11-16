"use strict";
// ინფუთი
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let ul = document.querySelector(".ul-form");
let add = document.querySelector(".add");
let clear = document.querySelector(".clearAll");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputValue = input.value;
    if (inputValue == " ") {
        return;
    }
    let li = document.createElement("li");
    li.textContent = inputValue;
    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-delete-left");
    i.addEventListener("click", function() {
        li.remove();
    })
    li.appendChild(i);
    ul.appendChild(li);
    input.value = " ";
})

clear.addEventListener("click", function() {
    ul.innerHTML = " ";
})

// burger animation

let burger = document.querySelector(".burger-container");
let miniNav = document.querySelector(".active-content")
burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    miniNav.classList.toggle("active");
})