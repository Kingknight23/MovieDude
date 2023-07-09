let gridDiv = document.querySelector(".movie-grid");
let movieDivs = gridDiv.querySelectorAll("div");

movieDivs.forEach(function(div) {
  div.addEventListener("click", function() {
    const ID = this.id;
    console.log(ID); // Log ID within the event listener
  });
});
