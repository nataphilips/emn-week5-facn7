// var filmName, img, vote, release_date, overview;
var filmObj;
(function getfilminfo() {
  filmObj = {
    filmName: getParameterByName("filmName"),
    img: getParameterByName("img"),
    vote: getParameterByName("vote"),
    release_date: getParameterByName("release_date"),
    overview: getParameterByName("overview")
  };
})();

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

console.log(filmObj);

(function buildDom() {
  var name = document.getElementById("film_name");
  name.innerHTML = filmObj.filmName;

  var img = document.getElementById("film_image");
  console.log(img);
  img.src = filmObj.img;

  var votes = document.getElementById("filmvots");
  votes.innerHTML = "votes: <br>" + filmObj.vote;

  var overview = document.getElementById("overview");
  overview.innerHTML = "Overview: <br>" + filmObj.overview;

  var date = document.getElementById("date");
  date.innerHTML = "Release date: <br>" + filmObj.release_date;
})();
