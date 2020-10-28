$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstInput=$("input#firstName");
  var lastInput=$("input#lastName");
  var phoneInput=$("input#phone");
  var emailInput = $("input#email-input");
  var imgInput = $("input#img");
  var messageInput=$("input#msg");
  var passwordInput = $("input#password-input");
  var typeInput=$("#userType");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      firstName: firstInput.val().trim(),
      lastName: lastInput.val().trim(),
      phone: phoneInput.val().trim(),
      email: emailInput.val().trim(),
      msg: messageInput.val().trim(),
      password: passwordInput.val().trim(),
      userType: typeInput.val(),
      imgUrl: imgInput.val().trim(),
      
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.firstName, userData.lastName, userData.phone, userData.email, userData.password, userData.msg, userData.userType, userData.imgUrl);
    firstInput.val("");
    lastInput.val("");
    phoneInput.val("");
    emailInput.val("");
    passwordInput.val("");
    messageInput.val("");
    typeInput.val("");
    imgInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, phone, email, password, message, userType, imgUrl) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      message: message,
      userType: userType,
      imgUrl: imgUrl,
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
