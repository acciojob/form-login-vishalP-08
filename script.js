function getFormvalue() {
   // Get the form element by its ID
    var form = document.getElementById("myForm");
    
    // Get the values of the first and last name fields
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    
    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Attach the function to the form's submit event
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    getFormValue(); // Call the function to display the values
});

