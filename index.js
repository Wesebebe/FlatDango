//set a binder to the url
let url = 'http://localhost:3000/films/'

//declare variables by using DOM selectors
const poster = document.querySelector('#poster')   
let film = document.querySelector('#films')    
const movieTitle = document.getElementById('title')    
let button = document.getElementById('buy-ticket')
const showTime = document.querySelector('#showtime')    
let filmItem = document.querySelector('.film-item')    
const tickets = document.getElementById('ticket-num') 
const runTime = document.getElementById('runtime')    
let buttonDiv = document.querySelector('.extra-content')  
const movieDescription = document.getElementById('film-info') 

//fetch any movie from url
function fetchMovie(){     
   fetch(url + 14)
     .then(res => res.json())
     .then(data =>  showFilms(data))
     fetchMovies()
     }

     //display the movie details
function showFilms(movie) {
   
  poster.src = movie.poster            
  movieTitle.innerHTML = movie.title         
  runTime.innerHTML = movie.runtime         
  movieDescription.innerHTML = movie.description    
  showTime.innerHTML = movie.showtime         
  tickets.innerText = movie.capacity - movie.tickets_sold     

}

//fetch data from server and use it to append film titles
function fetchMovies() {                 
    fetch(url)
    .then((res) => res.json())            
    .then((data) => movieTitles(data))   
}

//function to return movie titles and append to list
function movieTitles(movie) {   
     movie.forEach((movie) => {              
        const li = document.createElement('li')

        film.appendChild(li)        

        li.className = "film-item"  

        li.innerHTML = movie.title               
        
        //adding onclick event listener
        li.addEventListener('click', () => {            
            button.innerText = "Buy Ticket";  

            button.className = "ui purple button";  

                                  
            })
    })
}

   //add a click event listener to the button to prevent default action
       button.addEventListener("click", (e) => {     
        e.preventDefault();   

     //return number of tickets left after purchase                                   
        let ticketsRem = document.getElementById('ticket-num').innerText   

          //change the button text to "Sold Out" if tickets are zero
        if(parseInt(ticketsRem, 10) === 0){          
          button.innerText = "Sold Out"; 

           //add a class name to the button of 'sold-out'       
          button.className = 'sold-out'             
             
        }
        else{
          (ticketsRem > 0) ? document.getElementById('ticket-num').innerText -= 1 : 0 
        }
      }

       )

//DOMContentloaded to load the html before loading the js
document.addEventListener('DOMContentLoad' , fetchMovie())
