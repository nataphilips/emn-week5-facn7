if (typeof module === "undefined") {
  var base = fetchBase();
  var list;
  var prevInput = "";
  var search = document.getElementById("Search");
}

function createMyElement(filmObj) {
  var subContainer = document.createElement("div");
  subContainer.className = "subContaine";

  var link = document.createElement("a");
  link.className = "filmLink";
  // var newtitle = title.replace(/\s+/g, "");

  var qs = `?filmName=${filmObj.title}&img=${filmObj.img}&vote=${filmObj.vote}&release_date=${filmObj.vote}&overview=${filmObj.overview}`;

  link.setAttribute("href", "/movie" + qs);
  link.setAttribute("name", "helloButton");
  link.setAttribute("target", "_blank");

  link.innerHTML = "More Details";

  var img = document.createElement("img");
  img.src = filmObj.img;

  var titlepara = document.createElement("p");
  titlepara.className = "title";

  titlepara.innerHTML = filmObj.title;
  subContainer.appendChild(titlepara);
  subContainer.appendChild(img);

  subContainer.appendChild(link);
  // link.appendChild(subContainer);

  var cont = document.getElementById("results-container");
  cont.appendChild(subContainer);
}
if (typeof module === "undefined") {
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
      var filmObj = {
        title: e.title,
        img: "https://image.tmdb.org/t/p/w400" + e.poster_path,
        vote: e.vote_count,
        release_date: e.release_date,
        overview: e.overview
      };

      createMyElement(filmObj);
    });
  };
}
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
  // let axios = typeof module !== "undefined" ? require("axios") : axios;

  // eslint-disable-next-line no-undef
  axios
    .get(url)
    .then(function(response) {
      base = response.data;
      list = [...base];
      var container = document.getElementById("results-container");
      var parent = document.getElementById("bigcont");
      container.remove();
      container = document.createElement("div");
      container.id = "results-container";
      parent.appendChild(container);
      // var names = list.map(x => x.title).join(",");
      list.forEach(e => {
        var filmObj = {
          title: e.title,
          img: "https://image.tmdb.org/t/p/w400" + e.poster_path,
          vote: e.vote_count,
          release_date: e.release_date,
          overview: e.overview
        };
        createMyElement(filmObj);
      });
      console.log("fetch:", base);
    })
    .catch(function(error) {
      console.log(error);
    });
  return base;
}

if (typeof module !== "undefined") {
  module.exports = {
    filter
  };
}
