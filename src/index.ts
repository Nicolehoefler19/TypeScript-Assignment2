const container = document.querySelector('.container') as HTMLInputElement;
const seats = document.querySelectorAll('.row .seat:not(.occupied)') as  NodeListOf<HTMLElement>;
const count : HTMLElement | any = document.getElementById('count');
const total : HTMLElement | any = document.getElementById('total');
var area : HTMLElement | any = document.getElementById('test') as HTMLElement;

const movieSelect = document.getElementById('movie') as HTMLSelectElement;
var localStorage : Storage;

//Umgeschriebener JavaScript Code der Vorlage Movie-Seat-Booking
populateUI();

// function changeTicketPrice(){
// let ticketPrice: number;
// let x : number = Number(movieSelect.value);
// ticketPrice = +x;
// }

// changeTicketPrice();

//Save selected movie index and price
function setMovieData(movieIndex: string, moviePrice: string){ 
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected') as NodeListOf<HTMLElement>;

    const seatsIndex : any = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount : number = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    //total.innerText = selectedSeatsCount * ticketPrice;
}

//Get Data from Localstorage and populate UI
function populateUI() {
    
    const selectedSeats: number[] | null = JSON.parse(localStorage.getItem('selectedSeats') || '{}');

    if (selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat: Element, index: number) => {
            if (selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex : number = Number(localStorage.getItem('selectedMovieIndex'));

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
      }
}

//Movie select event

container?.addEventListener('change', (e: Event) => {
      const el = e.target as HTMLSelectElement;
      let y : any = Number(el.value);
//      ticketPrice = +y;
      var elSelectedIndex = String(el.selectedIndex);
      setMovieData(elSelectedIndex, el.value);
      updateSelectedCount();
  });
 
// //Seat Click event


container?.addEventListener('click', (e: Event) => {
    const el = e.target as HTMLElement;
    if (
        el.classList.contains('seat') &&
        !el.classList.contains('occupied')
      ) {
        el.classList.toggle('selected');
        updateSelectedCount();
      }
    });
    
    // Initial count and total set
    updateSelectedCount();

//My Code


var movieButton = document.getElementById('movie') as HTMLInputElement;
movieButton?.addEventListener('change', changetheme);

function changetheme(){
    console.log("hi");
    let movieSlct = document.getElementById('movie') as HTMLSelectElement;
    var slectedMovie : number = Number(movieSlct.options[movieSlct.selectedIndex].value);

    if(slectedMovie == 10){
        //zählt runter bis start
        var i : number = 10;
        var token = setInterval(timer, 1000);

        function timer(){
            if(i <= 0){
                console.log("Ende des Countdowns");
                 clearInterval(token);
                 changeStyle();
            }
            else{
                i -= 1;
                area.innerHTML = String(i);
                console.log(i);
            }
        }


        function changeStyle(){
            //sets layout
            let screen = document.getElementById("screen") as HTMLElement;
            let movie = document.getElementById("movie") as HTMLElement;
            let button = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./avengers_screen.gif)";
            movie.style.color = "black";
            movie.style.background = "purple";
            button.style.color = "black";
            button.style.background = "purple";
           
        }
}
    

    else if (slectedMovie == 12){
        //zählt runter bis start
        var i : number = 10;
        var token = setInterval(timer, 1000);

        function timer(){
            if(i <= 0){
                console.log("Ende des Countdowns");
                 clearInterval(token);
                 changeStyle();
            }
            else{
                i -= 1;
                area.innerHTML = String(i);
                console.log(i);
            }
        }

        function changeStyle(){
            //sets layout
            let screen = document.getElementById("screen") as HTMLElement;
            let movie = document.getElementById("movie") as HTMLElement;
            let button = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./joker.gif)";
            movie.style.color = "white";
            movie.style.background = "green";
            button.style.color = "white";
            button.style.background = "green";
            
        }
    }

    else if(slectedMovie == 8){
        var i : number = 10;
        var token = setInterval(timer, 1000);

        function timer(){
            if(i <= 0){
                console.log("Ende des Countdowns");
                 clearInterval(token);
                 changeStyle();
            }
            else{
                i -= 1;
                area.innerHTML = String(i);
                console.log(i);
            }
        }
        function changeStyle(){
            //sets layout
            let screen : HTMLElement = document.getElementById("screen") as HTMLElement;
            let movie : HTMLElement = document.getElementById("movie") as HTMLElement;
            let button : HTMLElement = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./ts4.gif)";
            movie.style.color = "white";
            movie.style.background = "red";
            button.style.color = "white";
            button.style.background = "red";
            
        }
    }

    else if(slectedMovie == 9){
        var i : number = 10;
        var token = setInterval(timer, 1000);

        function timer(){
            if(i <= 0){
                console.log("Ende des Countdowns");
                 clearInterval(token);
                 changeStyle();
            }
            else{
                i -= 1;
                area.innerHTML = String(i);
                console.log(i);
            }
        }
        function changeStyle(){
            //sets layout
            let screen = document.getElementById("screen") as HTMLElement;
            let movie = document.getElementById("movie") as HTMLElement;
            let button = document.getElementById("bestellung") as HTMLElement;
            
            screen.style.backgroundImage = "url(./lion.gif)";
            movie.style.color = "black";
            movie.style.background = "orange";
            button.style.color = "black";
            button.style.background = "orange";
            
        }
    }
    else{
        console.log("No movie selected");
    }
}


document.getElementById("bestellung")?.addEventListener('click', validator);

function validator(){
    console.log("validator geht");
    var orderButton = document.getElementById("bestellung") as HTMLInputElement;
    var textArea = document.getElementById("ajaxArea") as HTMLElement;
    var img1 = document.getElementById("img1") as HTMLElement;
    var img2 = document.getElementById("img2") as HTMLElement;
    var clicked : number;
    clicked = 0;
    img1.style.backgroundImage = "url(./dog.gif)";
    img2.style.backgroundImage = "url(./crazy.gif)";

    textArea.innerHTML += '<button id="gamebutton">Klick me for a chance to get 50% off</button>';
    var gamebutton = document.getElementById("gamebutton") as HTMLInputElement;
    gamebutton.style.textAlign = "center";
    gamebutton.style.background = "cyan";
    gamebutton.style.borderRadius = "5px";

    gamebutton?.addEventListener("click", winorNot);

    function winorNot(){
        if(clicked < 1){
            clicked++;
            var numberRow : Array<Number>
            var i : number;
            var won : void;

            numberRow = new Array;

            numberRow[0] = 1;
            numberRow[1] = 2;
            numberRow[2] = 3;
            numberRow[3] = 4;
            numberRow[4] = 5;
            numberRow[5] = 6;

            i = Math.floor(Math.random() * 5) + 1;

            var chanceToWin = new Promise ((resolve, reject) =>{
               if(numberRow[i] > 2){
                    var newTicketPrice : number;
//                     newTicketPrice = ticketPrice/2;
//                     ticketPrice = newTicketPrice;
                    textArea.innerHTML += '<h4>' + numberRow[i] + '</h4>';
                    console.log("The number is: " + numberRow[i]);
                    won = alert("Congratulation. You've won. Look at the Price. It's now 50% off.");
          
                    resolve(won);
                }
                else{
                    let reason : any;

                    textArea.innerHTML += '<h4>' + numberRow[i] + '</h4>';
                    console.log("The number is: " + numberRow[i]);
                    won = alert("Sorry You've lost");
                    reject(reason);
                }
            });
        var runGame : any;
        runGame = function(){
            chanceToWin.then(function(fulfilled: any){
                alert(fulfilled);
            })
            .catch(function(error: any){
                alert(error.message);
            });
        }
        runGame();
        }
        gamebutton.disabled = true;
     }
 }
 