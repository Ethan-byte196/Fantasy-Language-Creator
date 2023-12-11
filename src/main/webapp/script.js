document.addEventListener('DOMContentLoaded', function() {
    // Get the form and textarea elements
    var form = document.getElementById('userTranlate');
    var textarea = document.getElementById('English');
  
    // Load the stored text when the page loads
    textarea.value = localStorage.getItem('savedText') || '';
  
    // Save the text to localStorage when the form is submitted
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      localStorage.setItem('savedText', textarea.value);
      // Then submit the form
      form.submit();
    });
  });


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
