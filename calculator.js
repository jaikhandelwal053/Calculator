let display = document.getElementById("display");
let input = document.querySelectorAll("input");
let value = "";

input.forEach((e) => {
    e.addEventListener("click",(event) => {
        if (event.target.value == "=") {
            if (value.length != 0) {
                let newval = eval(value);
                value = newval;
                display.value = value;
            }
        }else if(event.target.value == 'C'){
            value = value.substring(0,value.length-1);
            display.value = value;
        }else if(event.target.value == 'AC'){
            value = "";
            display.value = value;
        } else {
            value += event.target.value;
            display.value = value;
        }
    });
});