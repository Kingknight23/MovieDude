const trend = document.getElementById("trendingButton");
let searchValue;
let movie_render;
//let movieContainerId;
let movieContainerId = 1;
localStorage.clear();

const add = (function () {
  let counter = 1;
  return function () {counter += 1; return counter;}
})();

/**
 * Search Function which makes use of GET request to receive JSON file of movie based  from  "The movie DataBase API"
 * @param {string} value movie to be search for
 * @param {number} [num=1] page number in the API (default page 1)
 */
async function multisearch(value, num=1) {
  button();
  loadMore.style.display = "block";
  const options = {
    method: 'GET',
    headers: {
      'Cache-Control': 'private',
      accept: 'application/json',
      //const bcrypt = require('bcrypt');
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
      
    }
  };
  
  try {
    
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(value)}&include_adult=false&language=en-US&page=${encodeURIComponent(num)}`, options);
    const response_1 = await response.json();
    renderData(response_1); // Call the render method with the API response
    return response_1;
  } catch (err) {
    return console.error(err);
  }
}
/**
 * trending which makes use of GET request to receive JSON file of trending movies from  "The movie DataBase API"
 * 
 */
async function trending (){
  button();
  if(typeof loadMore !== "undefined"){loadMore.style.display = "none";}
  const options = {
      'Cache-Control': 'private',
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
      }
    };
    
    try {
  const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
  const response_1 = await response.json();
  renderData(response_1); // Call the render method with the API response
  return response_1;
} catch (err) {
  return console.error(err);
}
  
}
async function MovieTrend (){
  button();
  loadMore.style.display = "none";
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
      }
    };
    
    try {
  const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
  const response_1 = await response.json();
  renderData(response_1); // Call the render method with the API response
  return response_1;
} catch (err) {
  return console.error(err);
}
  
}
async function tvTrend (){
  button();
  loadMore.style.display = "none";
  const options = {
    'Cache-Control': 'private',
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
      }
    };
    
    try {
  const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options);
  const response_1 = await response.json();
  renderData(response_1); // Call the render method with the API response
  return response_1;
} catch (err) {
  return console.error(err);
}
  
}
async function general (type){
  button();
  loadMore.style.display = "none";
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
      }
    };
    
    try {
      let movietr = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
      let trendtr = "https://api.themoviedb.org/3/trending/all/day?language=en-US"
      let showtr = "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
      let link;
      if (type ==="Tvshow"){
        link = showtr;
      }
      else if(type ==="movies"){
        link = movietr;
      }
      else if (type ==="trendingButton"){
        link = trendtr;
      }
  const response = await fetch(`${encodeURIComponent(link)}`, options);
  const response_1 = await response.json();
  renderData(response_1); // Call the render method with the API response
  return response_1;
} catch (err) {
  return console.error(err);
}
  
}
function renderData(data) {
    // Render the API data on the webpage or perform any other actions
    //console.log(data);
    // Example: Render movie titles in a list
    //const movieList = document.getElementById('movieList');
    let check = document.querySelector(".movie-grid");
    if ( check !== null){
    if (document.querySelector(".movie-grid").innerHTML=== ""){
      data.results.forEach(movie => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("movie-container");
        //console.log(movie.id)
        newDiv.id = movie.id;
        newDiv.addEventListener("mousemove", function(){
          newDiv.style.cursor = "pointer";
        });
        newDiv.addEventListener('click', function() {
          movieContainerId = this.id;
          console.log(movieContainerId)
          infoget(movieContainerId, movie.media_type);
          
      });
    
        // Create the <a> element
        const anchor = document.createElement("a");
        anchor.href = "movieinfo.html";
        anchor.classList.add("title");
        anchor.id = movie.id;
        //anchor.onclick = infoget(anchor.id);
    
        // Create the <img> element
        const image = document.createElement("img");
        if ( movie.poster_path === null || typeof movie.poster_path ==="undefined"){
          image.src = "../images/no-poster-available.jpg"
        }
        else{
          image.src = `https://image.tmdb.org/t/p/w${500}${movie.poster_path}`;
        }
        image.alt = `${movie.name} poster`;
        image.classList.add("posters");
    
        // Append the <img> element as a child of the <a> element
        anchor.appendChild(image);
    
        // Create the first <p> element with class "title"
        const titleParagraph = document.createElement("p");
        titleParagraph.classList.add("title");
    
        // Create the <span> element inside the first <p> element
        const titleSpan = document.createElement("span");
        if(typeof movie.name === "undefined"){
            titleSpan.textContent = movie.title;
        }
        else{
            titleSpan.textContent = movie.name;
        }
        titleSpan.onclick = function() {
          handleClick(this.id);
        };
        titleSpan.href = "movieinfo.html";
    
        // Append the <span> element as a child of the first <p> element
        titleParagraph.appendChild(titleSpan);

      
        // Create the second <p> element with movie running time
        const runningTimeParagraph = document.createElement("p");
        
        if (typeof movie.release_date === "undefined"){
          runningTimeParagraph.textContent = `${movie.media_type} ( ${movie.first_air_date} ) `;
        }
        else{
          runningTimeParagraph.textContent = `${movie.media_type} ( ${movie.release_date} ) `;
        }
        if (movie.media_type === "tv"){
          runningTimeParagraph.textContent = `${movie.media_type}-show ( ${movie.first_air_date} ) `;
        }
        
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('rating');
        num = movie.vote_average/2;
        const rating = num.toFixed(1);

        if (rating > 0) {
          for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
        
            createRatingStars(i, rating, star, ratingContainer);
          }
        }
        
        const movieGrid = document.querySelector(".movie-grid");
        newDiv.appendChild(anchor);
        newDiv.appendChild(image)
        newDiv.appendChild(titleParagraph);
        newDiv.appendChild(runningTimeParagraph);
        newDiv.appendChild(ratingContainer);
        movieGrid.appendChild(newDiv);
        
    });
    
    }
    else{
      document.querySelector(".movie-grid").innerHTML= "";
      renderData(data);
    }
  }
  }

async function infoget(id, type ){
  console.log(id)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/${encodeURIComponent(type)}/${encodeURIComponent(id)}?language=en-US`, options)
    .then(response => response.json())
    //.then(response => console.log(response))
    .then(response => render_info(response, type))
    .catch(err => console.error(err));


}
function render_info(data, type){
  let newhtml = "";
  let rate = parseFloat(data.vote_average).toFixed(2)
  if (type !== "tv"){
      newhtml = `<div class="poster">
      <img src="https://image.tmdb.org/t/p/w${500}${data.poster_path}" alt="poster" class="image">
  </div>
  <div class="subinfo">
      <h1>${data.title}</h1>
              

          <h2> ${data.overview}</h2>
          <h3> ${data.tagline}</h3>
          <pre>
          ${data.runtime} mins &#x2022;  ${rate} /10 of ${data.vote_count}  &#x2022; ${data.release_date}  &#x2022;  ${data.original_language}
              </pre>
      </div>`}
    else{
      let seasons = ""
      let series = data.seasons.length;
      for (let i=0; i<(data.seasons.length);i++){
        let poster = data.seasons[i].poster_path;
        console.log(poster)
        let path;
        if (poster!== null || poster !== "undefined"){
          path = `https://image.tmdb.org/t/p/w${200}${poster}`
        }
        else{
          path = `../images/no-poster-available.jpg`
        }
        seasons += `<div class="arc">
              <img src="${path}" alt="poster">
              <h3>${data.seasons[i].name} &#x2022; ${data.seasons[i].air_date}  </h3>
        </div>`
      }
      newhtml = `<div class="poster">
      <img src="https://image.tmdb.org/t/p/w${500}${data.poster_path}" alt="poster" class="image">
  </div>
  <div class="subinfo">
      <h1>${data.name}</h1>
          <h2> ${data.overview}</h2>
          <h3> ${data.tagline}</h3>
          <pre>
                ${series}  Seasons   &#x2022;    rating: ${rate} /10 of ${data.vote_count}    &#x2022;    ${data.spoken_languages.english_name}
            </pre>
          <div class="seasons">
            ${seasons}
          </div>
      </div>`
    }
  sessionStorage.setItem('html', newhtml);
  window.location = "../htmlpages/movieinfo.html";
  
  //console.log(newhtml);
  return newhtml;
}
const movieContainers = document.querySelectorAll('.movie-container');

// Add click event listener to each movie-container
movieContainers.forEach(movieContainer => {
  movieContainer.addEventListener('click', function() {
    movieContainerId = this.id;
    console.log(movieContainerId)
    //movie_render = infoget(movieContainerId);
    
});
});


  function createRatingStars(i , rating, star, ratingContainer) {
    num = rating-i;
    
    if (num>=0) {
      star.classList.add('selected');
      star.innerHTML = '&#9733;'; // Filled star symbol
    } else if (num>0 && num<=0.4) {
      star.classList.add('selected', 'quarter-star');
      star.innerHTML = ''; // Filled star symbol
    } else if (num>0.4 && num<=0.5) {
      star.classList.add('selected', 'half-star');
      star.innerHTML = ''; // Filled star symbol
    } else if (num>0.5 && num<=0.9) {
      star.classList.add('selected', 'three-quarter-star');
      star.innerHTML = ''; // Filled star symbol
    } else {
      star.innerHTML = '&#9734;'; // Empty star symbol
    }

    ratingContainer.appendChild(star);
  }

  const fullPath = window.location.pathname; // Get the path of the current URL
  const pageName = fullPath.split('/').pop(); // Extract the page name from the path
if (pageName === "render.html"){
  trending()
  .then(response => {
    // Access the API response JSON here
    // (response);
  })
  .catch(err => {
    // Handle any errors
    console.error(err);
  });

}



  search.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let search = document.getElementById("search");
      searchValue = search.value;
      search.value=""
      multisearch(searchValue)
  .then(response => {
    // Access the API response JSON here
    
  })
  .catch(err => {
    // Handle any errors
    console.error(err);
  });
    }
  });
  const load = document.getElementById("loadMore");
  if(load !== null){
load.addEventListener("click", function (event) {
    try {
        document.querySelector(".movie-grid").innerHTML = " ";
        multisearch(searchValue, add())
        .then(response => {
            // Access the API response JSON here
            renderData(response);
        })
        .catch(err => {
            // Handle any errors
            console.error("An error occurred:", err);
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }
});
  }


  function button(){
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(trend) {
      trend.style.border = "none";
      trend.style.color = "rgb(2, 9, 22)";
      trend.style.backgroundColor =  "rgb(118, 217, 18)";
      trend.addEventListener('mouseover', function() {
        this.style.border = "1px ridge";
        this.style.borderColor = "rgb(118, 217, 18)";
        this.style.color = "rgb(118, 217, 18)";
        this.style.backgroundColor =  "rgb(2, 9, 22)";
      });
      
      trend.addEventListener('mouseleave', function() {
        this.style.border = "none";
        this.style.color = "rgb(2, 9, 22)";
        this.style.backgroundColor =  "rgb(118, 217, 18)";
      });
      if(trend.id != "loadMore"){
        trend.addEventListener('click', function() {
          trend.addEventListener('mouseover', function() {
            this.style.border = "1px ridge";
            this.style.borderColor = "rgb(118, 217, 18)";
            this.style.color = "rgb(118, 217, 18)";
            this.style.backgroundColor =  "rgb(2, 9, 22)";
          });
          trend.addEventListener('mouseleave', function() {
            this.style.border = "1px ridge";
          this.style.borderColor = "rgb(118, 217, 18)";
          this.style.color = "rgb(118, 217, 18)";
          this.style.backgroundColor =  "rgb(2, 9, 22)";
          });
          
        });
      }
      
});
  }
function change(name){
  html = name;
}


