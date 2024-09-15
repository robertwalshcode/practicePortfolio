function submit() {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let phoneNumber = document.getElementById("phoneNumber");
  let email = document.getElementById("email");
  let dob = document.getElementById("dob");
  let gender = document.getElementById("gender");
  let stateOfHealth = document.getElementById("stateOfHealth");
  let otherComments = document.getElementById("otherComments");
  let wayToContact = document.getElementById("wayToContact");

  let error = false;

  if (firstName.value == null || firstName.value.length === 0) {
    document.getElementById("firstName_error").innerHTML =
      "First Name is required.";
    error = true;
  } else {
    document.getElementById("firstName_error").innerHTML = "";
  }

  if (lastName.value == null || lastName.value.length === 0) {
    document.getElementById("lastName_error").innerHTML =
      "Last Name is required.";
    error = true;
  } else {
    document.getElementById("lastName_error").innerHTML = "";
  }

  if (phoneNumber.value == null || phoneNumber.value.length === 0) {
    document.getElementById("phoneNumber_error").innerHTML =
      "Phone Number is required.";
    error = true;
  } else {
    document.getElementById("phoneNumber_error").innerHTML = "";
  }

  if (email.value == null || email.value.length === 0) {
    document.getElementById("email_error").innerHTML = "Email is required.";
    error = true;
  } else {
    document.getElementById("email_error").innerHTML = "";
  }

  if (dob.value == null || dob.value.length === 0) {
    document.getElementById("dob_error").innerHTML = "DOB is required.";
    error = true;
  } else {
    document.getElementById("dob_error").innerHTML = "";
  }

  if (gender.value == null || gender.value.length === 0) {
    document.getElementById("gender_error").innerHTML = "Gender is required.";
    error = true;
  } else {
    document.getElementById("gender_error").innerHTML = "";
  }

  if (stateOfHealth.value == null || stateOfHealth.value.length === 0) {
    document.getElementById("stateOfHealth_error").innerHTML =
      "State Of Health is required.";
    error = true;
  } else {
    document.getElementById("stateOfHealth_error").innerHTML = "";
  }

  if (error === true) {
    return;
  }

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    dob: dob.value,
    gender: gender.value,
    stateOfHealth: stateOfHealth.value,
    otherComments: otherComments.value,
    wayToContact: wayToContact.value,
  };
  // Send the email using EmailJS
  emailjs.send("service_k44dw8p", "template_p4nk546", data).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("success").innerHTML =
        "Your form submitted Successfully!";
      document.getElementById("success").style.display = "block";
    },
    (error) => {
      console.log("FAILED...", error);
      document.getElementById("error").innerHTML =
        "Error submitting the from. Please try again!";
      document.getElementById("error").style.display = "block";
    }
  );
}

function reset() {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let phoneNumber = document.getElementById("phoneNumber");
  let email = document.getElementById("email");
  let dob = document.getElementById("dob");
  let stateOfHealth = document.getElementById("stateOfHealth");
  let otherComments = document.getElementById("otherComments");
  let success = document.getElementById("success");
  let error = document.getElementById("error");

  firstName.value = "";
  lastName.value = "";
  phoneNumber.value = "";
  email.value = "";
  stateOfHealth.value = "";
  otherComments.value = "";
  dob.value = "";
  success.style.display = "none";
  error.style.display = "none";
}

(function () {
  emailjs.init("q-lg8G7_ujRUl5E-9");
})();
