// newElement()
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("Category");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  document.getElementById("demo").innerHTML = "Welcome!";
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/herosf2006/SALEWEB/master/Resource/JSON/data.json", true);
xmlhttp.send();

// function newElement(category, name, url, value, quantity) {
function newElement() {
  var category = document.createElement("div");
  // var t = document.createTextNode(name);
  category.className = ("Category 1");
  document.getElementById("grid").appendChild(category);
  var content = document.createElement("div");
  category.appendChild(content);
  content.className = ("content");
  var img = document.createElement("img");
  content.appendChild(img);
  img.src = "https://www.w3schools.com/w3images/mountains.jpg";
  img.style = "width:100%";

  var h4 = document.createElement("h4");
  var p = document.createElement("p");
  h4.innerHTML = "Type 1";
  p.innerHTML = "Blah blah blah";
  content.appendChild(h4);
  content.appendChild(p);
}
