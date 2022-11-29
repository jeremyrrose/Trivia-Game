function RESULT() {

    var score=0;
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
    document.write("YOUR SCORE:"+score);
}
