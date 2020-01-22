function getResult() {

    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var hour = Number(document.getElementById("hour").value);
    var rate = Number(document.getElementById("rate").value);
    var sal = hour * rate;

    document.getElementById("result").innerHTML += "<tr>" +
        "<td>" + name + "</td>" +
        "<td >" + gender + "</td>" +
        "<td >" + sal.toLocaleString() + "원" + "</td>" +
        "</tr>";
}