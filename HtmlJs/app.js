const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const age = parseInt(document.querySelector(".age"));
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const gender = document.querySelector(".gender");
const hobbiler = document.querySelector(".hobbiler");
const form = document.querySelector(".form");

const database = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    age: 30,
    email: "john@example.com",
  },
  {
    id: 2,
    ad: "Jane",
    surname: "Smith",
    age: 25,
    email: "jane@example.com",
  },
  {
    id: 3,
    ad: "Alice",
    surname: "Johnson",
    age: 28,
    email: "alice@example.com",
  },
];
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (age < 18) {
    alert("Yaşı 18-dən aşağı olanlar qeydiyyatdan keçə bilməz!");
    return 0;
  }
  if (name.length < 3) {
    alert("Adınız ən azı 3 hərf olmalıdır.");
    return;
  }
  if (surname.length < 3) {
    alert("Soyadınız ən azı 3 hərf olmalıdır.");
    return;
  }

let database=[];
  const adduser = {
    Name: name,
    Surname: surname,
    Age: age,
    Password: password,
    Email: email,
    Gender: gender,
    Hobbilər: hobbiler,
  };
  database.push(adduser);
  console.log("Yeni user yaradıldı : " + name.value + "" + surname.value);
  

  let obj = [];
  obj.name = name.value;
  obj.surname = surname.value;
  obj.age = age.value;
  obj.password = password.value;
  obj.email = email.value;
  obj.gender = gender.value;
  obj.hobbiler = hobbiler.value;
  console.log(obj);
  form.reset();
});

function tek_database(a, s, y, e, g) {
  let obj = [];
  obj.name = a;
  obj.surname = s;
  obj.age = y;
  obj.email = e;
  obj.gender = g;
  console.log(obj.values);
}

tek_database(age);
function print_ad() {
  for (let i = 0; i < database.length; i++) {
    console.log(database[i].name);
  }
}
//print_ad();

function print_ad_soyad() {
  for (let i = 0; i < database.length; i++) {
    console.log(database[i].name + " " + database[i].surname);
  }
}
print_ad_soyad();
function calculator(b1, b2, b3) {
  let netice;

  switch (b3) {
    case "toplama":
      netice = b1 + b2;
      break;
    case "cixarma":
      netice = b1 - b2;
      break;
    case "vurma":
      netice = b1 * b2;
      break;
    case "bolme":
      if (b2 !== 0) {
        netice = b1 / b2;
      } else {
        netice = "Sıfıra bölmək olmaz!";
      }
      break;
    default:
      netice = "Uğursuzdur";
  }
  return netice;
}

console.log(calculator(5, 3, "toplama")); // 8
console.log(calculator(10, 4, "cixarma")); // 6
console.log(calculator(7, 6, "vurma")); // 42
console.log(calculator(8, 2, "bolme")); // 4
console.log(calculator(5, 0, "bolme")); // "Sıfıra bölmək olmaz!"
console.log(calculator(5, 3, "mod")); // "Uğursuzdur"

function tek_or_cut(reqem) {
  if (reqem % 2 === 0) {
    return "Cütdür";
  } else {
    return "Təkdir";
  }
}

console.log(tek_or_cut(4)); // "Cütdür"
console.log(tek_or_cut(7)); // "Təkdir"
console.log(tek_or_cut(0)); // "Cütdür" (Sıfır da cüt qəbul edilir)
