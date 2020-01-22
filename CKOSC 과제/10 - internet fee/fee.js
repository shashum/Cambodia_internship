function check() {
    var buttonValue = document.getElementById("Button");
    switch (buttonValue.value) {
        case "start":
            buttonValue.value = "stop";
            time();
            break;
        case "stop":
            buttonValue.value = "clear";
            time2();
            break;
        case "clear":
            buttonValue.value = "start";
            clear();
            break;
    }
}
var start = new Date();
var start_hour = start.getHours();
var start_min = start.getMinutes();

function time() {
    var start_hour = start.getHours();
    var start_min = start.getMinutes();
    if (start_hour < 10) {
        start_hour = "0" + start_hour;
    }
    if (start_min < 10) {
        start_min = "0" + start_min;
    }
    document.getElementById("ch").innerHTML = start_hour;
    document.getElementById("cm").innerHTML = start_min;
}

function time2() {
    var stop = new Date();
    var stop_min = stop.getMinutes();
    var stop_hour = stop.getHours();
    if (stop_hour < 10) {
        stop_hour = "0" + stop_hour;
    }
    if (stop_min < 10) {
        stop_min = "0" + stop_min;
    }
    document.getElementById("sh").innerHTML = stop_hour;
    document.getElementById("sm").innerHTML = stop_min;
    var min = ((stop_hour - start_hour) * 60) + (stop_min - start_min);
    document.getElementById("min").innerHTML = min + "minute(s)";
    var th_fee = parseInt(min / 60);
    var tw_fee = parseInt((min - (th_fee * 60)));
    if (tw_fee <= 30 && tw_fee > 15) {
        tw_fee = 700;
    } else if (tw_fee >= 1 && tw_fee < 16) {
        tw_fee = 500
    } else if (min == 0) {
        tw_fee = 0;
    } else {
        tw_fee = 1500
    }
    var sum = (th_fee * 1500) + (tw_fee);
    document.getElementById("riel").innerHTML = sum;
}

function clear() {
    document.getElementById("ch").innerHTML = "00"
    document.getElementById("cm").innerHTML = "00"
    document.getElementById("sh").innerHTML = "00"
    document.getElementById("sm").innerHTML = "00"
    document.getElementById("min").innerHTML = "0 Minute";
    document.getElementById("riel").innerHTML = "0"
}