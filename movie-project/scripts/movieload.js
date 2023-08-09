/**
 * load movies with movie info into a grid 
 * @param {array<object>} movies 
 * @param {number} start 
 * @param {number} stop 
 * @returns none
 */
/*function loadAll(movies, start, stop){
  movies.slice(start, stop).forEach(function (movie) {
    let newDiv = document.createElement("div");
    console.log(newDiv);
    newDiv.classList.add("movie-container");

    // Create the <a> element
    const anchor = document.createElement("a");
    anchor.href = "movieinfo.html";
    anchor.classList.add("title");
    anchor.id = movie.title;

    // Create the <img> element
    const image = document.createElement("img");
    image.src = movie.poster;
    image.alt = `${movie.title} poster`;
    image.classList.add("posters");
    image.id = movie.movie_id;

    // Append the <img> element as a child of the <a> element
    anchor.appendChild(image);

    // Create the first <p> element with class "title"
    const titleParagraph = document.createElement("p");
    titleParagraph.classList.add("title");

    // Create the <span> element inside the first <p> element
    const titleSpan = document.createElement("span");
    titleSpan.textContent = movie.title;
    titleSpan.onclick = function() {
      handleClick(this.id);
    };
    titleSpan.href = "movieinfo.html";

    // Append the <span> element as a child of the first <p> element
    titleParagraph.appendChild(titleSpan);

    // Create the second <p> element with movie running time
    const runningTimeParagraph = document.createElement("p");
    runningTimeParagraph.textContent = `${movie.running_time} min \u2022 Movie`;

  
  const movieGrid = document.querySelector(".movie-grid");
  newDiv.appendChild(anchor);
  newDiv.appendChild(titleParagraph);
  newDiv.appendChild(runningTimeParagraph);
  console.log(newDiv);
  console.log(movieGrid);
  
  movieGrid.appendChild(newDiv);
  });
}*/

/**
 * load movies with movie info into a grid  raging 0-25
 * @param {array<object>} movies
 * @returns none
 */
function loadMovies(movies) {
  loadAll(movies, 0,25);
}

/**
 * load movies with movie info into already existing grid in sequences of 10's each time the load more button is pushed
 * @param {array<object>} movies
 * @returns none
 */
function loadMoreMovies(movies) {
  const movieContainers = document.querySelectorAll(".movie-container");
  const count = movieContainers.length;
  loadAll(movies, count, count+10);
}

/*function handleClick(element) {
  console.log(element);
  localStorage.setItem("movieName", element);
}*/

function performSearch(input) {
  console.log(input.value);
  localStorage.setItem("movieName", input.value);
  window.location.assign("search.html");
}



window.addEventListener("unload", function () {
  const input = document.getElementById("search");
  input.value = "";
});

// Usage:
// Load the initial set of movies
try {loadMovies(movie);

// Load more movies when needed
//loadMoreMovies(movie);
// Get the button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const trendingButton = document.getElementById('trendingButton');

// Attach a click event listener
trendingButton.addEventListener('click', function() {
  // Redirect or navigate to the desired page
  localStorage.setItem("movie",20);
  window.location.href = 'render.html';

});


const login = document.getElementById('login');

// Attach a click event listener
login.addEventListener('click', function() {
  // Redirect or navigate to the desired page
  window.location.href = 'mailinglist.html';
});

//scrollFunction();
//topFunction();

}
catch (err) {
  console.log(err);
}

