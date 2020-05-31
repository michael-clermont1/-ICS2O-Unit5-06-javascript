function myFunction() {
      var age;
      var realAge=14;

      
      age = document.getElementById("age").value;
    
        if (age == realAge) {
            age = "You guessed my age correct.";
               } else if (age < realAge) {
            age = "You guessed (" + age + ") that is too small, please try again.";
        } else if (age > realAge) {
            age = "You guessed (" + age + ") that is too big, please try again.";
        } else {
            age = "Invalid data entry. Please a positive number and try again.";
        }
    document.getElementById("demo").innerHTML = age;
}