var Text = document.getElementById("Status");
var Bulb = document.getElementById("bulb-img");
var Button =document.getElementById("btn")
var Back = document.querySelector(".center");

function work()
{
    if(Text.innerText=="DAY")
    {
        Text.innerText="NIGHT";
        Text.style.color="white";
        Bulb.src='1on.png';
        Back.style.backgroundColor="black";
        Button.innerText="OFF";
        Button.style.backgroundColor="blue";
    }
    else
    {
        Text.innerText="DAY";
        Text.style.color = "black";
        Bulb.src='1off.png';
        Button.innerText="ON";
        Back.style.backgroundColor="white";
        Button.style.backgroundColor="";
    }
}















// var text = document.getElementsByClassName("Status");
// var btn1 = document.getElementsByClassName("btn");
// var photo = document.querySelector(".img");
// var bg = document.querySelector(".box");


// // function work()
// // {
// //   if(text.innerText=="DAY"){

// //     text.innerText=="NIGHT";

// //     photo.src ="onbulb.jpeg";
// //     btn1.innerText = "OFF";
// //     bg.style.backgroundColor = "grey";
// //     text.style.color = "red";
// //   }
// //   else{
// //     text.innerText="DAY";
// //     photo.src ="offbulb.jpeg";
// //     btn1.innerText == "ON";
// //     bg.style.backgroundColor = "white";
// //     text.style.color = "yellow";
// //   }
  
// // }


// function glowBulb(){
//   if(text.innerText=="DAY")
//   {
//       text.innerText="NIGHT";
//       text.style.color="white";
//       photo.src='offbulb.jpeg';
//       bg.style.backgroundColor="black";
//       btn1.innerText="OFF";
//   }
//   else
//   {
//       text.innerText="DAY";
//       photo.src='onbulb.jpeg';
//       btn1.innerText="ON";
//       bg.style.backgroundColor="green";
//   }
// }







// var b = document.querySelector(".btn");
// var d = document.querySelector(".day");

// var light = 0;
// function work(light)
// {
     
//     if(light == 1)
//     {
        
//         document.querySelector(".img").src = "offbulb.jpeg";
//         document.querySelector(".day").innerHTML = "DAY"; 
//         document.body.style.backgroundColor = "white";
//         b.innerHTML = "ON";
//         light = 0;
//         }
//     else
//     {
        
//         document.querySelector(".img").src = "onbulb.jpeg";
//         document.querySelector(".day").innerHTML = "NIGHT"; 
//         document.body.style.backgroundColor = "grey";
//         b.innerHTML = "OFF";
//         light = 1;
//     }
     
// }
// b.addEventListener("click",work);






