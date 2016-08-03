/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var poetryArray = ["robinhaiku.jpg","Pale with Dawn.jpg", "Spring1.jpg", "spring2.jpg",
"spring3.jpg"];

for (i = 0; i < poetryArray.length; i++) {
    var preload = new Image();
    preload.src = poetryArray[i];
} 

var imageNumber = 0;
var difference = poetryArray.length - 1;
var delay = 2000;

setInterval("ChangeImages(1)", delay);

function ChangeImages(direction) {
    imageNumber = imageNumber + direction;
    
    if (imageNumber > difference) {
        imageNumber = 0;
    }
    
    if (imageNumber < 0) {
        imageNumber = direction;
    }
    
    document.getElementById("slideshow").src = poetryArray[imageNumber];
    }
