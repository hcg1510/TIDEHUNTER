// newElement("1", "Type 1", "https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/thumb/8/89/Cosmetic_icon_Treasure_of_the_Emerald_Revival.png/256px-Cosmetic_icon_Treasure_of_the_Emerald_Revival.png?version=62773caec416d889c7f6626de6e8e9b8", "500.000", "20")

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
  document.getElementById("Demo").innerHTML = "Welcome!";
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    // Distribution JSON DATA
    // document.getElementById("Title").innerHTML = myObj.title;
    setValue("Title", myObj.title);
    setValue("Version", myObj.version);
    setValue("Demo", Date());
    // document.getElementById("Demo").innerHTML = Date();
    var llength =  Object.keys(myObj.list).length;

    for (var i = 0; i < llength; i++) {
      newElement( myObj.list[i].category,
                  myObj.list[i].name,
                  myObj.list[i].url,
                  myObj.list[i].value,
                  myObj.list[i].quantity
      );
    }

    filterSelection("all")
  }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/herosf2006/TIDEHUNTER/master/Resource/JSON/data.json", true);
xmlhttp.send();

function newElement(category, name, url, value, quantity) {
  var type      = document.createElement("div");
  var content   = document.createElement("div");
  var img       = document.createElement("img");
  var h4        = document.createElement("h4");
  var p         = document.createElement("div");
  var price     = document.createElement("p");
  var qtt       = document.createElement("qtt");

  document.getElementById("List").appendChild(type);
  type.appendChild(content);
  content.className = ("content");
  content.appendChild(img);
  type.className = "Category " + category;
  content.appendChild(h4);
  content.appendChild(p);
  content.appendChild(price);
  p.appendChild(qtt);
  
  img.src = url;
  img.style = "width: 100%;";
  h4.innerHTML = name;
  price.innerHTML = value + " đ";
  qtt.innerText = quantity;
  if (quantity == 0) {
    qtt.style = "background: red";
  }
}

function setValue(id, value) {
  document.getElementById(id).innerHTML = value;
}
