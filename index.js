// syntax: addEventListener(type,listener[,optimize])
// general meaning:
// when required event is happened listen for the next step

//1st button is selected and tell to listen or wait for a click , when click event happened call the function that has to be confirmed 





// type is event type 

// document.querySelector("button").addEventListener("click" ,handleClick);

// function handleClick(){
//     alert("I got clicked");
// }

// var audio= new Audio("sounds/crash.mp3");


for(var i=0 ;i<7 ; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonHtml=this.innerHTML;
    buttonPress(buttonHtml);
    buttonAnnimation(buttonHtml);



})
}




document.addEventListener("keydown",function(event){
    buttonPress(event.key);
    buttonAnnimation(event.key);

})




function buttonPress(key){
    switch (key) {
    case "w":

    var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "a":
        var bass = new Audio("sounds/kick-bass.mp3");
        bass.play();
        break;

    case "s":
        var crash1 = new Audio("sounds/crash.mp3");
        crash1.play();
        break;
        
    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play(); 
        break; 
        
    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "l":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        
        
    default:console.log(buttonHtml)
        break;
}

}


function buttonAnnimation(currentKey) {

var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function (){
    activeButton.classList.remove("pressed")
},100);

}

