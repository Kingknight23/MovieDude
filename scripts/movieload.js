localStorage.clear();
function loadSome (para){
    let newHtml = "";
    let movie = para;
    movie.slice(0,25).forEach(function(element){
        newHtml +=  `
        <div class="movie-container">
              <a onclick="handleClick(this.id)" href="movieinfo.html" class="title" id="${element.title}">
                <img src="${element.poster}" alt="${element.title} poster" class="posters" id="${element.movie_id}">
              </a>
              <p class="title">
                <span onclick="handleClick(this.id)" href="movieinfo.html">${element.title}</span>
              </p>
              <p>${element.running_time} min &#x2022; Movie</p>
            </div>
        `
    })        
    return  newHtml;
    }

    let hTml = loadSome(movie);
    document.querySelector(".movie-grid").innerHTML= hTml;

    function load(para) {
        let allHtml = "";
        let classTarget = document.querySelectorAll(".movie-container");
        let count = classTarget.length;
      
        para.slice(0, count + 10).forEach(function(element) {
          allHtml += `
            <div class="movie-container">
              <a onclick="handleClick(this.id)" href="movieinfo.html" class="title" id="${element.title}">
                <img src="${element.poster}" alt="${element.title} poster" class="posters" id="${element.movie_id}">
              </a>
              <p class="title">
                <span onclick="handleClick(this.id)" href="movieinfo.html">${element.title}</span>
              </p>
              <p>${element.running_time} min &#x2022; Movie</p>
            </div>
          `;
        });
      
        document.querySelector(".movie-grid").innerHTML = allHtml;
        return allHtml;
      }
      
      function handleClick(element) {
        console.log(element);
        localStorage.setItem('movieName', element);
      }
      let searchInput = document.getElementById("search");
searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    performSearch(searchInput);
  }
});
window.addEventListener("unload", function() {
    let input = document.getElementById("search");
    input.value = "";
  });

function performSearch(input) {
    console.log(input.value);
    localStorage.setItem('movieName', input.value);
    window.location.assign("movieinfo.html");
    // Perform search logic
  // ...
}
    /*function movieName(){

        let iD = element.id;
        movie.forEach(function(item){
            if (item.movie_id === iD){
                return item.title;
            }
            else{
                console.log("none")
            }

        })

    }
    console.log(movieName());

function saveId(id) {
    clickedElementId = id;
    console.log(id)
    }
    localStorage.setItem("movie",20);
console.log(localStorage.getItem("movie"));*/











