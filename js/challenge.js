document.addEventListener("DOMContentLoaded", function(){
  plus();
  minus();
  pause();
})

let count = document.getElementById("counter")
let timer = setInterval(counter, 250)
let plusButton = document.getElementById("plus")
let minusButton = getElementById("minus")

function counter() {
  
  count.innerText = parseInt(count) + 1;
  
}



function plus(){
  plusButton.addEventListener("click", counter)
  
}

function minus(){
  
  minusButton.addEventListener("click", function(){
    count.innerText = parseInt(count.innerText, 10) -1;
  })
}

function pause() {
  let pauseButton = document.getElementById("pause")
  pauseButton.addEventListener("click", function(){
    if (pauseButton.textContent === "Resume")
    
      pauseButton.textContent = "Pause"
      plusButton.disabled = false;
      minusButton.disabled = false;
     timer = setInterval(counter, 250);
      
    else (pauseButton.textContent === "Resume")
      plusButton.disabled = true;
      minusButton.disabled = true;
      clearInterval(timer);
  })

}