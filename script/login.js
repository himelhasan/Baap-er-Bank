//step=1 add click evebt handler with the submit button
document.getElementById("btn-login").addEventListener("click", function () {
  // step-2 get the email address for the email input field
  const emailField = document.getElementById("email-field");
  // alwasys use value for input field
  const userEmail = emailField.value;

  //setp =3 get the user password from the password input field
  const passwordField = document.getElementById("password-field");
  const userPassword = passwordField.value;
  console.log(userEmail, userPassword);

  // // DONT USE THIS MEHTOD ITS DANGEROUS. ITS JUST FOR NOW
  // STEP-4 verify email and password

  if (userEmail == "sontan@baap.com" && userPassword == "2022") {
    window.location.href = "bank.html";
  } else {
    alert("Tui password vuilla gesos , tore ami tejjo sontan ghosona korlam!!");
  }
});
