function fetchBase() {
  var url = "/api/movies/list";

  axios
    .get(url)
    .then(function(response) {
      var names = response.data.map(x => x.title).join(",");
      var node = document.createElement("div");
      document
        .getElementById("results-container")
        .appendChild(node).innerHTML = names;
      console.log(names);
    })
    .catch(function(error) {
      console.log(error);
    });
}

fetchBase();
