// Make sure the document has loaded
$(document).ready(function(){

// Variables 
var randomNumber = Math.floor(Math.random()*102)+19;
var pooh = Math.floor(Math.random()*12)+1;
var eeyore = Math.floor(Math.random()*12)+1;
var tigger = Math.floor(Math.random()*12)+1;
var piglet = Math.floor(Math.random()*12)+1;
// var buttons = [pooh, eeyore, tigger, piglet];
// Also needed away to prevent the same number from being repeated for the Character Cards.
// But I also didn't get a chance to update.
var myScore = 0;
var wins = 0;
var losses = 0;

// Resets
function reset() {
    randomNumber = Math.floor(Math.random()*102)+19;
    $("#randomNumber").text(randomNumber);
    pooh = Math.floor(Math.random()*12)+1;
    eeyore = Math.floor(Math.random()*12)+1;
    tigger = Math.floor(Math.random()*12)+1;
    piglet = Math.floor(Math.random()*12)+1;
    myScore = 0;
    $("#yourScore").text(myScore);
}

// Game 
// I'm pretty sure the code below can be shortened in a loop or something, but I haven't placed the loop as yet.
// There's a for each function for each on click function, but I didn't get a chance to research it
$("#randomNumber").text(randomNumber);

//$(".selected").each(click, ...)
    

$("#Pooh").click(function(){
    $("#Pooh").attr("poohValue", pooh);
    console.log($(this).attr("poohValue"));
    myScore += parseInt($(this).attr("poohValue"));
    $("#yourScore").text(myScore);
    if (myScore === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();        
    }    
    else if (myScore > randomNumber){
        losses++;
        $("#losses").html("Losses: " + wins);        
        reset();
    }
})
$("#Eeyore").click(function(){
    $("#Eeyore").attr("eeyoreValue", eeyore);
    console.log($(this).attr("eeyoreValue"));
    myScore += parseInt($(this).attr("eeyoreValue"));
    $("#yourScore").text(myScore);
    if (myScore === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);        
        reset();
    }    
    else if (myScore > randomNumber){
        losses++;
        $("#losses").html("Losses: " + wins);        
        reset();
    }
})
$("#Tigger").click(function(){
    $("#Tigger").attr("tiggerValue", tigger);
    console.log($(this).attr("tiggerValue"));
    myScore += parseInt($(this).attr("tiggerValue"));
    $("#yourScore").text(myScore);
    if (myScore === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);        
        reset();
    }    
    else if (myScore > randomNumber){
        losses++;
        $("#losses").html("Losses: " + wins);        
        reset();
    }
})
$("#Piglet").click(function(){
    $("#Piglet").attr("pigletValue", piglet);
    console.log($(this).attr("pigletValue"));
    myScore += parseInt($(this).attr("pigletValue"));
    $("#yourScore").text(myScore);
    if (myScore === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);        
        reset();
    }    
    else if (myScore > randomNumber){
        losses++;
        $("#losses").html("Losses: " + wins);        
        reset();
    }
})});

