var base = fetchBase();
var list;
var prevInput = "";
var search = document.getElementById("Search");

function createMyElement(title, imagePath) {
  var subContainer = document.createElement("div");
  subContainer.className = "subContaine";

  var link = document.createElement("a");
  link.className = "filmLink";
  // var newtitle = title.replace(/\s+/g, "");

  link.setAttribute("href", "/movie" + "?filmName=" + title);
  link.setAttribute("name", "helloButton");
  link.innerHTML = "More Details";

  var img = document.createElement("img");
  img.src = imagePath;

  var titlepara = document.createElement("p");
  titlepara.className = "title";

  titlepara.innerHTML = title;
  subContainer.appendChild(titlepara);
  subContainer.appendChild(img);

  subContainer.appendChild(link);
  // link.appendChild(subContainer);

  var cont = document.getElementById("results-container");
  cont.appendChild(subContainer);
}

search.oninput = function() {
  console.log("working");
  var data = search.value;
  // if(data.length<3){
  //   console.log(data,data.length);
  //   return;
  // }
  // console.log(data.length);
  if (data.length < prevInput.length) {
    list = base;
  }
  prevInput = data;
  list = filter(data, list);
  console.log(list.length);
  var container = document.getElementById("results-container");
  var parent = document.getElementById("bigcont");
  container.remove();
  container = document.createElement("div");
  container.id = "results-container";
  parent.appendChild(container);
  // var names = list.map(x => x.title).join(",");
  list.forEach(e => {
    createMyElement(e.title, "https://image.tmdb.org/t/p/w400" + e.poster_path);
  });
};

// showData(data);
// function showData(data) {
//   var div = document.querySelector(".container");
//   div.remove();
//   div = document.createElement("div");
//   div.className = "container";
//   document.getElementById("bigcont").appendChild(div);

//   if (data.length == 0) {
//     var h1 = document.createElement("h1");
//     h1.className = "content";
//     h1.innerHTML = "<i>no data to show</i>";
//     document.getElementsByClassName("container")[0].appendChild(h1);
//   } else {
//     data.forEach(function(element) {
//       console.log("+");
//       document.getElementsByClassName("container")[0].appendChild(element);
//     });
//   }
// }

// This function gets an array of movie objects, which title includes the string passed as arg

const filter = (str, arr) => {
  return arr.filter(e => {
    var ltitle = e.title.toLowerCase();
    str = str.toLowerCase();
    return ltitle.includes(str);
  });
};

// This function gets movie database JSON

function fetchBase() {
  var url = "/api/movies/list";

  axios
    .get(url)
    .then(function(response) {
      base = response.data;
      list = [...base];
      console.log("fetch:", base);
    })
    .catch(function(error) {
      console.log(error);
    });
  return base;
}
