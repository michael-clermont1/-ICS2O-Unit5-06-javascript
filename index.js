function myFunction() {
      var age, day;

      
      age = document.getElementById("age").value;
    
        if (age==13) {
            age = "You guessed my age correct.";
               } else if (age<13) {
            age = "You guessed too small, please try again.";
        } else if (age>13) {
            age = "You guessed too big, please try again.";
        } else {
            age = "Invalid answer. Please try again.";
        }
    document.getElementById("demo").innerHTML = age;
}