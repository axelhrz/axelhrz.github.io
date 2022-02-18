let i = 0;
let j = 2;

function next() {
  document.getElementById("sec" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("sec" + (i + 1)).classList.add("active");
}

function fahrenheit(){
    for (let x = 0; x < 6; x++) {
        document.getElementById("cel"+x).classList.remove("active");
        document.getElementById("feh"+x).classList.add("active");} 
}

function celsius(){
    for (let x=0; x<6; x++){
    document.getElementById("feh"+x).classList.remove("active");
    document.getElementById("cel"+x).classList.add("active");}
}
   