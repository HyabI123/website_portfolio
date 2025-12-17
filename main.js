function myFunction() 
{
    //variable x gets the information from ID called "myDIV" 
    var x = document.getElementById("myDIV");
    
    
    if (x.innerHTML === "") //If there is nothing in the myDIV <div>
    {
        x.innerHTML = "This is hidden text."; //put the text int he <div> (similar to just doing <p>"[...]</p> ")
    } 
    else 
    {
        x.innerHTML = ""; //However, if there is something in the myDIV tag, make it nothing
    }

    if (x.style.display === "none") 
    {
      x.style.display = "block";
    } 
    else 
    {
      x.style.display = "none";
    }
    
}