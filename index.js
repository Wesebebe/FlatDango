//set binder to the url  
let url = 'http://localhost:3000/films/'

//declare variables by using DOM selectors
const runTime = document.querySelector('#runtime')
let movieNames = document.getElementById('films')    
const movieDescription = document.querySelector('#film-info')
let button = document.getElementById('buy-ticket')
const showTime = document.querySelector('#showtime')    
let filmItem = document.querySelector('.film-item')    
const tickets = document.querySelector('#ticket-num') 
const movieTitle = document.getElementById('title')
const poster = document.querySelector('#poster')   

//fetch any movie from url
function fetchMovie(){     
   fetch(url + 3)
     .then(res => res.json())
     .then(data =>  displayMovies(data))
     moviesList()
     }



//function to display movie
function displayMovies(movie) {
   
  poster.src = movie.poster            
  movieTitle.textContent = movie.title         
  runTime.textContent = movie.runtime         
  movieDescription.textContent = movie.description    
  showTime.textContent = movie.showtime         
  tickets.innerHTML = movie.capacity - movie.tickets_sold     

}

//function to return movie titles and append to list
function moviesList (data){
        //movieNames.innerHTML = "";
        data.forEach(renderMovieTitle);
}
    
function renderMovieTitle(movie) {
        const listItem = document.createElement('li');
        listItem.textContent = data.title;
        movieNames.append(listItem)
} 




//loading the html before loading the javascript code
document.addEventListener('DOMContentLoad' , fetchMovie())


