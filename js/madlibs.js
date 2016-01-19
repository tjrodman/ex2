window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;

  //capture the reset event
  document.f.onreset = resetPage;

  //define process function
  function processForm() {

    //store user name in a variable
    var q1 = document.f.q1.value;
    //store user color in a variable
    var q2 = document.f.q2.value;
    var q3 = document.f.q3.value;
    var q4 = document.f.q4.value;
      var q5 = document.f.q5.value;
      var q6 = document.f.q6.value;
      var q7 = document.f.q7.value;
      var q8 = document.f.q8.value;
      var q9 = document.f.q9.value;
      
    //error detection
    if (q1 == "" || q2 == "" || q3 == "" || q4 == "" || q5 == "" || q6 == "" || q7 == "" || q8 == "" || q9 == "") {
      alert("fill out the form!");
        play = false;

    } else {
      //capture the msg element to change it's text and html
      var myMsg = document.getElementById("myMsg");
        
        //if "one" is used, use "shot"(singular)
        if (q5 == "one" || q5 == "ONE" || q5 == "1" || q5 =="ONe") {
      myMsg.innerHTML = "You gotta go and get angry at all of my <em>" + q1 + "</em><br>You know I try but I don't do too well with <em>" + q2 + "</em><br>I hope I don't run out of <em>" + q3 + "</em>,<br> could someone call a <em>" + q4 + "</em><br>Cause I just need <em>" + q5 + "</em> more shot at forgiveness<br><br>Yeah, Is it too late now to say <em>"+ q6 + "</em><br>Cause I'm missing more than just your <em>" + q7 + "</em><br>Is it too late now to say <em>" + q8 + "</em><br>Yeah I know that I let you down<br>Is it too late to say <em>" + q9 + "</em> now?";
        }//if a number greater than one is used, use "shots"(plural)
        else{ myMsg.innerHTML = "You gotta go and get angry at all of my <em>" + q1 + "</em><br>You know I try but I don't do too well with <em>" + q2 + "</em><br>I hope I don't run out of <em>" + q3 + "</em>,<br> could someone call a <em>" + q4 + "</em><br>Cause I just need <em>" + q5 + "</em> more shots at forgiveness<br><br>Yeah, Is it too late now to say <em>"+ q6 + "</em><br>Cause I'm missing more than just your <em>" + q7 + "</em><br>Is it too late now to say <em>" + q8 + "</em><br>Yeah I know that I let you down<br>Is it too late to say <em>" + q9 + "</em> now?";
            
        }
        
      myMsg.className = "show";
        
    //play audio    
    var audio = new Audio('media/sorry.mp3');
    audio.play();
    }
    
    //prevent page from reloading
    return false;
  }

  //if user chooses "reset"
  function resetPage() {
    //remove any text from myMsg
    myMsg.innerHTML = "";
    //change the class name
    myMsg.className = "hide";
    //reset the userName field
    q1.value = "";
    //reset the userColor field
    q2.value = "";
    q3.value = "";
      q4.value = "";
      q5.value = "";
      q6.value = "";
      q7.value = "";
      q8.value = "";
      q9.value = "";
   
      //I am having trouble trying to stop the music when reset button is pressed. or restart the music when lets sing is pressed a second time.
    
      

    return false;
  }
}