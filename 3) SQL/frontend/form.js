const ad = document.querySelector(".name");
const soyad = document.querySelector(".surname");
const id = document.querySelector(".ID");
const password = document.querySelector(".password");
const address = document.querySelector(".address");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // let database=[];
  // const adduser = {
  //   id,
  //   ad,
  //   surname,
  //   password,
  //   address,
  // };
  // database.push(adduser);
  console.log(
    "Yeni user yaradıldı : " +
      "Ad : " +
      ad.value +
      "," +
      "Soyad : " +
      soyad.value
  );

  let obj = [];
  obj.id = id.value;
  obj.ad = ad.value;
  obj.soyad = soyad.value;
  obj.password = password.value;
  obj.address = address.value;

  console.log(obj);
  // console.log(adduser);
  axios.post("http://localhost:3100/users/", obj.value);

  form.reset();
});
const formdel = document.querySelector(".formdel");
const delid = document.querySelector(".delid");

formdel.addEventListener('click', function (e) {
  e.preventDefault();
  axios.delete(`http://localhost:3100/users/${did.value}`);
});
