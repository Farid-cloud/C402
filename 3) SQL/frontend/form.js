const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const id = document.querySelector(".ID");
const password = document.querySelector(".password");
const address = document.querySelector(".address");
const form = document.querySelector(".form");
const axios = require('axios');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // let database=[];
  const adduser = {
    ID: id,
    Name: name,
    Surname: surname,
    Password: password,
    Address: address,
  };
  // database.push(adduser);
  console.log("Yeni user yaradıldı : " + name.value + " " + surname.value);

  let obj = [];
  obj.id = id.value;
  obj.name = name.value;
  obj.surname = surname.value;
  obj.password = password.value;
  obj.address = address.value;

  console.log(obj);
  form.reset();
});
const formdel = document.querySelector(".formdel");
const delid = document.querySelector(".delid");

formdel.addEventListener("submit", function (e) {
  e.preventDefault();
  
});
