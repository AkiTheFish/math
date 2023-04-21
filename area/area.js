function OnClick() {

    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;

    var area = width * height;

    var areaOutput = document.getElementById("output");
    areaOutput.innerHTML = "area is.. " + area;

}

function OnClickBack() {

    location.href = "../index.html"

}