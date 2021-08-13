



var big = document.getElementById("big");
var small = document.getElementById("small").getElementsByTagName("img");

for(var i=0; i<small.length; i++){

    small[i].addEventListener( "click",function(){        
        big.src=this.src;
    });
}


/*

var big = document.getElementById("big");
var small = document.getElementById("small").getElementsByTagName("img");

for(var i=0; i<small.length; i++){

    small[i].addEventListener( "click",function(){
        var imgsrc=this.getAttribute("src");
        console.log(imgsrc);   //images/1.jpg
        big.innerHTML="<img src="+imgsrc+">";
    });
}
*/