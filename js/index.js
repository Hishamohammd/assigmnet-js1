

import { Home } from "./home.module.js";
 new Home();

let home = document.getElementById('home')
let search = document.getElementById('search');
function OPEN(params) {



  
  $("#close").click(function () {
    document.getElementById("close").classList.add("d-none");
    document.getElementById("close-x").classList.remove("d-none");
    document.querySelector(".nav-tab").classList.remove("d-none");
  });
  $("#close-x").click(function () {
    document.getElementById("close").classList.remove("d-none");
    document.getElementById("close-x").classList.add("d-none");
    document.querySelector(".nav-tab").classList.add("d-none");
  });
 
  $('#search-btn').click(function () {
     
      contact.classList.add('d-none')
      search.classList.remove('d-none');
    })
  $('#contact-us').click(function () {
      home.classList.add('d-none');
      search.classList.add('d-none');
      contact.classList.remove('d-none');
    })
  $('#categ').click(function () {
    home.classList.remove('d-none');
      search.classList.add('d-none');
      contact.classList.add('d-none');
    })
  $('#area').click(function () {
    home.classList.remove('d-none');
      search.classList.add('d-none');
      contact.classList.add('d-none');
    })
  $('#ingrend').click(function () {
    home.classList.remove('d-none');
      search.classList.add('d-none');
      contact.classList.add('d-none');
    })
}
let contact =document.getElementById('contact');
OPEN()



