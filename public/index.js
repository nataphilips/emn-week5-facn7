var elem = document.createElement("img");
elem.setAttribute(
  "src",
  "https://www.ssbwiki.com/images/thumb/1/12/KJH.jpg/160px-KJH.jpg"
);
elem.setAttribute("height", "400");
elem.setAttribute("width", "400");

elem.setAttribute("alt", "Flower");

var data = [elem, elem, elem];
console.log(data.length);
showData(data);
function showData(data) {
  var div = document.querySelector(".container");
  div.remove();
  div = document.createElement("div");
  div.className = "container";
  document.getElementById("bigcont").appendChild(div);
  // var h1 = document.createElement("h1");

  // div.appendChild(h1);

  if (data.length == 0) {
    var h1 = document.createElement("h1");
    h1.className = "content";
    h1.innerHTML = "<i>no data to show</i>";
    document.getElementsByClassName("container")[0].appendChild(h1);
  } else {
    data.forEach(function(element) {
      console.log("+");
      document.getElementsByClassName("container")[0].appendChild(element);
    });
  }
}
