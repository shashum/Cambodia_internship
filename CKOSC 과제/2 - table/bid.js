var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
// var clockDate = date.getDate();
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes
}
var seconds = date.getSeconds();
if (seconds < 10) {
    seconds = "0" + seconds
}
var i = 1;
var time = 0;
var c_price = 15;
// (month + 1) + "/" + day + "/" + year + "  " + hours + ":" + minutes + ":" + seconds + "</td>" 

function bid() {
    document.getElementById("bid_error").innerHTML = ""
    var b_price = Number(document.getElementById("mybid").value);
    var name = "Anonymous"
    if (b_price >= c_price + 0.5) {
        document.getElementById("result").innerHTML +=
            "<tr>" +
            "<td>" + i++ + "</td>" +
            "<td >" + name + "</td>" +
            "<td >" + "$" + b_price + "</td>" +
            "<td >" + date.toLocaleString() +
            "</tr>";
        c_price = b_price;
        time++;
        document.getElementById("rate").innerHTML = c_price;
        document.getElementById("mb").innerHTML = c_price + 0.5;
        document.getElementById("cp").innerHTML = c_price;
        document.getElementById("time").innerHTML = time;
    } else {
        document.getElementById("bid_error").innerHTML = "Bid Higher Price"
    }

}