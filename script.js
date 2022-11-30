var score=0;

function result() {

    
    if(document.getElementById('mercury1').checked) 
    {
        score++;
    }
    if(document.getElementById('anakin2').checked) 
    {
        score++;
    }
   if(document.getElementById('aphrodite3').checked) 
    {
        score++;
    }
   if(document.getElementById('number4').checked) 
    {
        score++;
    }
   if(document.getElementById('strawberries5').checked) 
    {
        score++;
    }
    console.log(score)   

    
}

 document.getElementById("submit").addEventListener("click",result);
 
 

// add eventlistener connected to submit button 
// console.log

