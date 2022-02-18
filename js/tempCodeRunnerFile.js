for (let x = 0; x < 5; x++) {
    function fahrenheit(){
        document.getElementById("cel"+x).classList.remove("active");
        document.getElementById("feh"+x).classList.add("active");
    }
    
    function celsius(){
        document.getElementById("feh"+x).classList.remove("active");
        document.getElementById("cel"+x).classList.add("active");
    }
    console.log(x);
}