function isLetter(char){
    return ( (char >= 'A' &&  char <= 'Z') ||
             (char >= 'a' &&  char <= 'z') );
}

function translator(){
    var text = document.getElementById("English").value;
    var translated;

    for(var i = 0; i < text.length; i++)
    {
        var c = text.charAt(i).toLowerCase();

        if(isLetter(c) == false)
        {
            continue;
        }
        

    }

}
