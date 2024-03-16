function sum(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let output = num1 + num2;

    document.getElementById("output").value = output;
}

function sub(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let output = num1 - num2;

    document.getElementById("output").value = output;
}

function mult(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let output = num1 * num2;

    document.getElementById("output").value = output;
}

function div(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let output = num1 / num2;

    document.getElementById("output").value = output;
}