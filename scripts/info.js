const transferredData = localStorage.getItem('movieName');
console.log(transferredData); // Output: Data to be transferred
//document.querySelector("h1").innerHTML = name;

//let movieMap = http://www.omdbapi.com/?t=morbius&plot=full

let apiKey = "a92b3753";

//http://www.omdbapi.com/?apikey=[yourkey]&

//`http://www.omdbapi.com/?t${encodeURIComponent(name)}&apiKey=${apiKey}`
//http://www.omdbapi.com/?i=tt3896198&apikey=a92b3753  use this
//http://www.omdbapi.com/?apikey=[yourkey]&t=name
fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(transferredData)}&apikey=a92b3753&plot=full`)
  .then(response => response.json())
  .then(data => {
    // Process the search results returned in 'data'
    function errorSafe(element){
        if (typeof element === "undefined") {
            return "N/A"
          } else {
            return element
          }

    }
    
    let img1 = `<img src="${data.Poster}" alt="poster" class="poster">`
    let infoHtml = `<h1>${data.Title}</h1>
    <div class="rateContainer">
    <div class="rottenTomatoes">
        <img src="images/imdb.png" alt="poster" class="imdb">
            <p class="tomRate">${errorSafe(data.Ratings[0].Value)}</p>
            
        </div>
        <div class="rottenTomatoes">
        <img src="images/RottenTomato.png" alt="poster" class="rates">
            <p class="tomRate">${errorSafe(data.Ratings[1].Value)}</p>
        </div>
        <div class="rottenTomatoes">
        <img src="images/metacritic.png" alt="poster" class="rates">
            <p class="tomRate">${errorSafe(data.Ratings[2].Value)}</p>
            
        </div>
    </div>
        
        
        
        <p>Cast: ${data.Actors}</P>
        <p> Type:  ${data.Type}</p>
        <p> Runtime : ${data.Runtime}</p>
        <p> Release date: ${data.Released}</p>
        <p>Rated: ${data.Rated}</p>
        <p>Genre: ${data.Genre}</p>
        <p>Director: ${data.Director}</p>
        <h2>Plot: ${data.Plot}</h2>

    `
    console.log(data);
    document.querySelector(".poster").innerHTML = img1;
    document.querySelector(".info").innerHTML = infoHtml;
    
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });