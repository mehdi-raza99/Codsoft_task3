let string="";
let digit="";
function clicked(input) {
    if (input == 0 ||
        input == 1 ||
        input == 2 ||
        input == 3 ||
        input == 4 ||
        input == 5 ||
        input == 6 ||
        input == 7 ||
        input == 8 ||
        input == 9 ||
        input == '.'
    ) {
        digit += input;      
        string += input;
        document.querySelector(".display").innerText = digit;
    } else if (input == '+' ||
        input == '-' ||
        input == '*' ||
        input == '/'
    ) {
        digit = "";       
        string += input;
        document.querySelector(".display").innerText= 0;
    }
    else{
        string=eval(string);
        digit=string;
        document.querySelector(".display").innerText= string;
    }

}