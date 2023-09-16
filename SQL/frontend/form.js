const id = document.querySelector("#id");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const password = document.querySelector(".password");
const address = document.querySelector(".address");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let database = [];
  const adduser = {
    id: id.value,
    ad: name.value,
    soyad: surname.value,
    password: password.value,
    address: address.value,
  };
  database.push(adduser);
  axios.post("http://localhost:3100/users/", database);
  console.log("Yeni user yaradıldı : " + name.value + "" + surname.value);

  form.reset();
});
const formdelete =document.querySelector(".formdelete")
const ist_id=document.querySelector("#deleteID")
// formdelete.addEventListener("submit", function(e){
// e.preventDefault();
// axios.delete("http://localhost:3100/users/:"${ist_id}"")

// formdelete.reset();
// });
