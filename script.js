var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);
console.log(popup);

function addItem() {
  var newLi = document.createElement("li");
  newLi.innerHTML = "Новая задача!";
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";

}

function delItem() {
  myList.removeChild(story[0]);

  if(story.length == 0) {
    popup.style.display = "block";
  }
  
}


function closePopup() {
  popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);

var name = "User";
var age = 19;
var subscribed = true;

function getAccess(name, age, subscribed) {
  if(age >= 18 && subscribed) {
    alert(name + ", access is granted")
    console.log("Access is granted");
  } else {
    alert(name + ", access denied")
    console.log("Access is denied");
  }
}

getAccess(name, age, subscribed);
