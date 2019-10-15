var base = fetchBase();
var list;
var prevInput = "";
var search = document.getElementById("Search");

search.oninput = function() {
  console.log("working");
  var data = search.value;
  if (data.length < prevInput.length) {
    list = base;
  }
  prevInput = data;
  list = filter(data, list);
  var names = list.map(x => x.title).join(",");
  var node = document.createElement("div");
  document
    .getElementById("results-container")
    .appendChild(node).innerHTML = names;
  // if (document.readyState === "complete") {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         var data = JSON.parse(xhr.responseText);
  //         // logic here
  //         if (data.length < prevInput.length) {
  //           list = base;
  //         }
  //         prevInput = data;
  //         list = filter(data, list);
  //         var names = list.map(x => x.title).join(",");
  //         var node = document.createElement("div");
  //         document
  //           .getElementById("results-container")
  //           .appendChild(node).innerHTML = names;
  //       } else {
  //         console.error(xhr.responseText);
  //       }
  //     }
  //   };
  //   xhr.open("GET", "/bla", true);
  //   xhr.send();
  // }
};

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

// This function gets an array of movie objects, which title includes the string passed as arg

const filter = (str, arr) => {
  return arr.filter(e => e.title.includes(str));
};

// This function gets movie database JSON

function fetchBase() {
  var url = "/api/movies/list";

  axios
    .get(url)
    .then(function(response) {
      base = response.data;
      list = [...base];
      console.log("fetch", list);
    })
    .catch(function(error) {
      console.log(error);
    });
  return base;
}
