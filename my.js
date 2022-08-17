//Select Landing Page Element 
let landingPage = document.querySelector(".main"); 

//Get Array Of Imgs 
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {
    //Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    //Change Background Image Url 
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';

}, 5000);