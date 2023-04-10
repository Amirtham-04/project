const form = document.getElementById('signup-form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (validateForm()) {
    form.submit();
  }
});



// function validateForm() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var phno = document.getElementById("phno").value;
//   var password = document.getElementById("password").value;

//   if (name == "") {
//     alert("Name must be filled out");
//     return false;
//   }
  
//   if (email == "") {
//     alert("Email must be filled out");
//     return false;
//   }

//   // Email validation using regular expression
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     alert("Invalid email address format");
//     return false;
//   }
  
//   if (phno == "") {
//     alert("Mobile number must be filled out");
//     return false;
//   }

//   // Phone number validation using regular expression
//   var phoneRegex = /^\d{10}$/;
//   if (!phoneRegex.test(phno)) {
//     alert("Invalid mobile number format");
//     return false;
//   }
  
//   if (password == "") {
//     alert("Password must be filled out");
//     return false;
//   }

//   return true;
// }

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phno = document.getElementById("phno").value;
    var password = document.getElementById("password").value;
  
    if (name == "") {
      alert("Name must be filled out leasted 2 latters");
      return false;
    }
  
    if (email == "") {
      alert("Email must be add @ filled out");
      return false;
    }
  
    // Email validation using regular expression
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address format please add @ and .com");
      return false;
    }
  
    if (phno == "") {
      alert("Mobile number must be 10 numbers filled out");
      return false;
    }
  
    // Phone number validation using regular expression
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phno)) {
      alert("Invalid mobile number format Number must be 10 numbers");
      return false;
    }
  
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
  
    // Password validation using regular expression
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long");
      return false;
    }
  
    return true;
  }
  

document.getElementById("submit-btn").addEventListener("click", function(event){
  event.preventDefault();
  if (validateForm()) {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("submit-btn").value = "Submitting...";
    document.getElementById("submit-btn").form.submit();
  }
});
