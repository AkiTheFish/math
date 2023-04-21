function OnClick() {

    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);

    var perimeter = (width + height) * 2;

    var perimeterOutput = document.getElementById("output");
    perimeterOutput.innerHTML = "perimeter is.. " + perimeter;

}

function OnClickBack() {

    location.href = "../index.html"

}