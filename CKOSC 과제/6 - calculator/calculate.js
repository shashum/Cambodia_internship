var i = 0;
var j = 0;
var k = 0;
var l = 0;


function calculate() {
    var a = Number(document.getElementById("num1").value);
    var c = Number(document.getElementById("num2").value)
    var b = Number(document.getElementById("num3").value);
    var mul = a * c;
    var cal = mul + b;
    document.getElementById("cal").innerHTML = cal;
}

function calculate2() {
    var f = Number(document.getElementById("num4").value);
    var a = Number(document.getElementById("num5").value)
    var b = Number(document.getElementById("num6").value);
    var sub = f - b;
    var cal = sub / a;
    if (a == 0) {
        alert('a is not 0');
        document.getElementById("cal2").style.color = "red"
        cal = 'ERROR';
    } else {
        document.getElementById("cal2").style.color = "white"
        cal = cal;
    }
    document.getElementById("cal2").innerHTML = cal;
}

function calculate3() {
    var a = Number(document.getElementById("num7").value);
    var x = Number(document.getElementById("num8").value);
    var b = Number(document.getElementById("num9").value);
    var c = Number(document.getElementById("num10").value);
    var mul = Math.pow(x, 2) * a;
    var cal = mul + b + c;
    document.getElementById("cal3").innerHTML = cal;
}

function quiz() {
    var a = Number(document.getElementById("ans").value)
    if (a == -2) {
        r1 = "CORRECT"
        i++;
        if (i > 1) {
            i = 1;
        }
        k++;
        if (k > 1) {
            k = 1;
        }
        document.getElementById("quiz").style.color = "skyblue"
    } else {
        r1 = 'TRY AGAIN'
        k++;
        if (k > 1) {
            k = 1;
        }
        document.getElementById("quiz").style.color = "red"
    }
    document.getElementById("quiz").innerHTML = r1;
}

function quiz2() {
    var a = Number(document.getElementById("ans2").value)
    var b = Number(document.getElementById("ans3").value)
    if ((a == -6 && b == 7) || (a == 7 && b == -6)) {
        r2 = "CORRECT"
        j++;
        if (j > 1) {
            j = 1;
        }
        l++;
        if (l > 1) {
            l = 1;
        }
        document.getElementById("quiz2").style.color = "skyblue"
    } else {
        r2 = 'TRY AGAIN'
        l++;
        if (l > 1) {
            l = 1;
        }
        document.getElementById("quiz2").style.color = "red"
    }
    document.getElementById("quiz2").innerHTML = r2;
}

function result() {
    document.getElementById("result").innerHTML = i + j;
}

function result2() {
    document.getElementById("result2").innerHTML = k + l;
}