//from w3school

element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);


function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
  }
  
  function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
  }
  
  function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
  }