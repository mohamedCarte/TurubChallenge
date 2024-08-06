function Tuur(){
  const numOfTurub = document.getElementById("numOfTurub").value;
  const resultTurub = document.getElementById("resultTurub");
  const resultSawir = document.getElementById("resultSawir");

  const values = [];

  const image = [];

  for(let i = 0; i < numOfTurub; i++){
    const value = Math.floor(Math.random() * 7) + 1;
    values.push(value);
    image.push(`<img src="img/${value}.png">`)
  }
  resultTurub.textContent = `turub: ${values.join(',')}`;
  resultSawir.innerHTML = image.join('');

}
// function genetretePassord(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

// const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
// const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const NumberChars = "0123456789";
// const symbolChars = "`!@#$%^&*()_+/[];./<>";

// let allowChars = "";
// let password = "";

// allowChars += includeLowerCase ? lowerCaseChars : "";
// allowChars += includeUpperCase ? upperCaseChars : "";
// allowChars += includeNumbers ? NumberChars : "";
// allowChars += includeSymbols ? symbolChars : "";

// if(passwordLength <= 0){
//   console.log("at least 1 is needed");
// }
// if(allowChars.length === 0){
//   console.log("at laest one set is needed to be select")
// }
// for(let i = 0; i < length; i++){
//   const randomIndex = Math.floor(Math.random() * allowChars.length);
//   password += allowChars[randomIndex];
// }

// return password;

// }

// const passwordLength = 12;
// const includeLowerCase = false;
// const includeUpperCase = true;
// const includeSymbols = true;
// const includeNumbers = true;

// const password = genetretePassord(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

// console.log(password);


