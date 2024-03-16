function sum(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let output = num1 + num2;

    document.getElementById("output").value = output;
}

function calc(op){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let output = 0;

    switch(op){
        case '+' : output = num1 + num2; break;
        case '-' : output = num1 - num2; break;
        case '*' : output = num1 * num2; break;
        case '/' : output = num1 / num2; break;

    }

    document.getElementById("output").value = output;

    let newHistory = "<div>" + num1 + " " + op + " " + num2 + " " + "=" + " " + output + "</div>";
    let history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;

    if(history.children.length > 10){
        history.removeChild(history.childNodes[10]);
    }
}