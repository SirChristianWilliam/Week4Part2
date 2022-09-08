   
function myFunction1() {
    document.getElementById("button1").style.display="none";
    document.getElementById("button11").style.display="inline-block";
    document.getElementsByTagName("h3")[0].style.color = "green";
    document.getElementsByTagName("h2")[0].style.color = "green";
    document.getElementsByTagName("h1")[0].style.color = "green";
    document.getElementsByTagName("p")[0].style.color = "green";
    document.getElementById("YO2").style.color = "green";

    
};
function myFunction2() {
    document.getElementById("button2").style.display="none";
    document.getElementById("button22").style.display="inline-block";
    document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(red,blue)";
    document.getElementsByTagName("HEADER")[0].style.backgroundImage ="radial-gradient(blue,black,blue,black,blue,black)";
    document.getElementsByTagName("h1")[0].style.boxShadow = "0px 0px 115px white inset";
    document.getElementsByTagName("h1")[0].style.borderRadius = "50% 25%";

    document.getElementsByTagName("p")[0].style.textShadow = "0px 0px 15px black";

};
function myFunction3() {
    document.getElementById("button3").style.display="none";
    document.getElementById("button33").style.display="inline-block";
    document.getElementsByTagName("h3")[0].style.fontFamily = "cursive";
    document.getElementsByTagName("h2")[0].style.fontFamily = "cursive";
    document.getElementsByTagName("h1")[0].style.fontFamily = "cursive";
    document.getElementsByTagName("p")[0].style.fontFamily = "cursive";
    document.getElementById("YO2").style.fontFamily = "cursive";

};
function myFunction4() {
    document.getElementById("button4").style.display="none";
    document.getElementById("button44").style.display="inline-block";
    document.getElementById("pic1").style.display = "none";
    document.getElementById("pic2").style.display = "inline-block";
    document.getElementById("YO").style.display = "none";
    document.getElementById("YO2").style.display = "block";
 
};
 
// Above is the function to change the button from it's name, into revert.

function myFunction11() {
    document.getElementById("button1").style.display="inline-block";
    document.getElementById("button11").style.display="none";
    document.getElementsByTagName("h3")[0].style.color = "";
    document.getElementsByTagName("h2")[0].style.color = "";
    document.getElementsByTagName("h1")[0].style.color = "";
    document.getElementsByTagName("p")[0].style.color = "";
    document.getElementById("YO2").style.color = "";

    
};
function myFunction22() {
    document.getElementById("button2").style.display="inline-block";
    document.getElementById("button22").style.display="none";
    document.getElementsByTagName("BODY")[0].style.backgroundImage = "";
    document.getElementsByTagName("HEADER")[0].style.backgroundImage ="";
    document.getElementsByTagName("h1")[0].style.boxShadow = "";
    document.getElementsByTagName("p")[0].style.textShadow = "";
    document.getElementsByTagName("h1")[0].style.borderRadius = "";


};
function myFunction33() {
    document.getElementById("button3").style.display="inline-block";
    document.getElementById("button33").style.display="none";
    document.getElementsByTagName("h3")[0].style.fontFamily = "";
    document.getElementsByTagName("h2")[0].style.fontFamily = "";
    document.getElementsByTagName("h1")[0].style.fontFamily = "";
    document.getElementsByTagName("p")[0].style.fontFamily = "";
    document.getElementById("YO2").style.fontFamily = "";

};
function myFunction44() {
    document.getElementById("button4").style.display="inline-block";
    document.getElementById("button44").style.display="none";
    document.getElementById("pic1").style.display = "inline-block";
    document.getElementById("pic2").style.display = "none";
    document.getElementById("YO").style.display = "block";
    document.getElementById("YO2").style.display = "none";
};
 
  //Above is the function to change revert back to its original form.
   