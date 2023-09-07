const database = [];

const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const hobbiler = document.querySelector("#hobbiler");
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (age < 18) {
    alert("Yaşı 18-dən aşağı olanlar qeydiyyatdan keçə bilməz!");
    return;
  }
  if (name.length < 3) {
    alert("Adınız ən azı 3 hərf olmalıdır.");
    return;
  }
  if (surname.length < 3) {
    alert("Soyadınız ən azı 3 hərf olmalıdır.");
    return;
  }
  const useradd = {
    name: name,
    surname: surname,
    age: age,
    password: password,
    email: email,
    gender: gender,
    hobbiler: hobbiler,
  };
  database.push(useradd);
  console.log("Yeni istifadəçi əlavə edildi.", useradd);
  form.reset;
});
