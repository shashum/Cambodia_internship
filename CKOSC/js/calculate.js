function calculate() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var sum = a + b;
    document.getElementById("sum").innerHTML = sum;
}