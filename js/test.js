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

    } else {

      //capture the msg element to change it's text and html
      var myMsg = document.getElementById("myMsg");

      myMsg.innerHTML = "You gotta go and get angry at all of my " + q1 + "</em>. The user's favorite color is <em>" + q2 + "</em>." + q3 + q4 + q5 + q6 + q7 + q8 + q9 + " done";
      myMsg.className = "show";
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

    return false;
  }
}