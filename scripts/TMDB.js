const search = document.getElementById("search");
let searchValue;
async function multisearch(value) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
    }
  };
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(value)}&include_adult=false&language=en-US&page=1`, options);
    const response_1 = await response.json();
    renderData(response_1); // Call the render method with the API response
    return response_1;
  } catch (err) {
    return console.error(err);
  }
}

async function loadmore(value, page) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDM0MjI3ZmY0NTc4ZjI1OGMyYjg4ZjkyYTdkOTA2ZSIsInN1YiI6IjY0YTBjODIwZDUxOTFmMDBmZjhiY2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kzuIlYzurUYIyJop8nw8_Swm-H2esjAiqe5UbsgKhw4'
    }
  };
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(value)}&include_adult=false&language=en-US&page=${encodeURIComponent(page)}`, options);
    const response_1 = await response.json();
    renderData(response_1); // Call the render method with the API response
    return response_1;
  } catch (err) {
    return console.error(err);
  }
}


async function trending (){
  const options = {
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
function renderData(data) {
    // Render the API data on the webpage or perform any other actions
    //console.log(data);
    // Example: Render movie titles in a list
    //const movieList = document.getElementById('movieList');
    
    data.results.forEach(movie => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("movie-container");
    
        // Create the <a> element
        const anchor = document.createElement("a");
        anchor.href = "movieinfo.html";
        anchor.classList.add("title");
        anchor.id = movie.name;
    
        // Create the <img> element
        const image = document.createElement("img");
        if ( movie.poster_path === null){
          image.src = "../images/no-poster-available.jpg"
        }
        else{
          image.src = `https://image.tmdb.org/t/p/w${500}${movie.poster_path}`;
        }
        image.alt = `${movie.name} poster`;
        image.classList.add("posters");
        image.id = movie.id;
    
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
        runningTimeParagraph.textContent = `${movie.media_type}`;
        const movieGrid = document.querySelector(".movie-grid");
        newDiv.appendChild(anchor);
        newDiv.appendChild(titleParagraph);
        newDiv.appendChild(runningTimeParagraph);
        
        
        movieGrid.appendChild(newDiv);
    });
  }
trending()
  .then(response => {
    // Access the API response JSON here
    //console.log(response);
  })
  .catch(err => {
    // Handle any errors
    console.error(err);
  });

  search.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchValue = search.value;
      document.querySelector(".movie-grid").innerHTML= " ";
      multisearch(searchValue)
  .then(response => {
    // Access the API response JSON here
    console.log(response.results[6].poster_path);
    
    renderData(response);
  })
  .catch(err => {
    // Handle any errors
    console.error(err);
  });
    }
  });
  trending()
  .then(response => {
    // Access the API response JSON here
    //console.log(response);
  })
  .catch(err => {
    // Handle any errors
    console.error(err);
  });

  search.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchValue = search.value;
      document.querySelector(".movie-grid").innerHTML= " ";
      multisearch(searchValue)
  .then(response => {
    // Access the API response JSON here
    console.log(response.results[6].poster_path);
    
    renderData(response);
  })
  .catch(err => {
    // Handle any errors
    console.error(err);
  });
    }
  });

  

