function validateForm() {
  let fnameInput = document.forms["contactForm"]["fname"].value;
  let lnameInput = document.forms["contactForm"]["lname"].value;
  let emailInput = document.forms["contactForm"]["email"].value;

  if (fnameInput == "") {
    document.getElementById("fnameErr").innerHTML =
      "Please enter your first name";
  } else {
    document.getElementById("fnameErr").innerHTML = "";
  }

  if (lnameInput == "") {
    document.getElementById("lnameErr").innerHTML =
      "Please enter your last name";
  } else {
    document.getElementById("lnameErr").innerHTML = "";
  }

  if (emailInput == "") {
    document.getElementById("emailErr").innerHTML = "Please enter your email";
  } else {
    document.getElementById("emailErr").innerHTML = "";
  }
}

function formSent() {
  alert("Form Sent!  Thanks!");
}
