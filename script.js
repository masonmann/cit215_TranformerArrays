var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

for (var i = 0; i < chrs.length; i++) {
  var ele = document.createElement("div");
  var nameEle = document.createElement("div");
  var classEle = document.createElement("div");
  var vehicleEle = document.createElement("div");
  var imageEle = document.createElement("img");

  ele.classList.add("character");

  nameEle.innerHTML = "Name: " + chrs[i].name;
  classEle.innerHTML = "Class: " + chrs[i].class.toUpperCase();
  vehicleEle.innerHTML = "Vehicle: " + chrs[i].vehicle;

  if (chrs[i].afl == "autobot") {
    ele.classList.add("autobot");
    imageEle.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  } else if (chrs[i].afl == "decepticon") {
    ele.classList.add("decepticon");
    imageEle.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }

  if (chrs[i].vehicle == "truck") {
    vehicleEle.style.color = "blue";
  } else if (chrs[i].vehicle == "tank") {
    vehicleEle.style.color = "green";
  } else if (chrs[i].vehicle == "car") {
    vehicleEle.style.color = "gold";
  } else if (chrs[i].vehicle == "plane") {
    vehicleEle.style.color = "white";
  }

  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);
  ele.appendChild(imageEle);
  wrapperEle.appendChild(ele);
}