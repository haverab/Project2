$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstInput =$("input#firstName");
  const lastInput=$("input#lastName");
  const phoneInput=$("input#phone");
  const emailInput = $("input#email-input");
  const imgInput = $("input#img");
  const messageInput=$("input#msg");
  const passwordInput = $("input#password-input");
 
  const typeInput=$("#userType");
  

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
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
    signUpUser(userData.firstName, userData.lastName, userData.phone, userData.email, userData.password,userData.userType,userData.imgUrl);
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
  function signUpUser(firstName, lastName, phone, email, password,message, userType,imgUrl) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      message: message,
      password: password,
      userType: userType,
      imgUrl: imgUrl
    })
      .then(() => {
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
