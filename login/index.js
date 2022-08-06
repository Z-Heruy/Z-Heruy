
var usern = document.querySelector("#uname").value;
var para=document.getElementById("error")
var pass=document.querySelector("#passw").value;
 function error()
 {
    if(usern==="tariku" && pass==="HEY12345")
    {
        para.innerHTML="error"
        return True

    }
    else
    {
        alert("oops!error")
    }
 }






























// class calc
// {
//     constructor(previous,curent)
//     {
//         this.previous=previous
//         this.curent=curent
//         this.clear()
//     }
//   clear()
//   {
//     this.previous=""
//     this.curent=""
//   }
//   delete()
//   {
    
//   }
//   append(one)
//   {
//     this.curent=one
//   }
//   operation()
//   {
    
//   }
//  compute()
//   {
    
//   }
//   update()
//   {
//     this.curent.innerText=this.curent
//   }


// }

//  operator= document.getElementById("#operator")
//  number= document.querySelectorALL("#number")
//  equal= document.querySelector("#equal")
//  clear= document.querySelector("#clear")
//  delet= document.querySelector("#delet")
//  previous= document.querySelector(".previous")
 
//  curent= document.querySelector(".curent")

//  cal=new calc(previous,curent)

// number.forEach(button => {
//     button.addEventListener('click',() => 
//     {
//         cal.append(button.textContent)
//         cal.update()
//     }
//     )
    
// });