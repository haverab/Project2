$(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $("form.register");
    const firstName =$("input#fname");
    const lastName=$("input#lname");
    const companyName=$("input#nameCompany");
    const emailInput = $("input#email");
    const passwordInput = $("input#password");
   
    const joburl=$("input#url");
    
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", event => {
      event.preventDefault();
      const recruiterData = {
        fname: firstName.val().trim(),
        lname: lastName.val().trim(),
        nameCompany: companyName.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        url: joburl.val().trim(),
       
  
      };
  
      if (!recruiterData.email || !recruiterData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpRecruiter(recruiterData.fname, recruiterData.lname, recruiterData.nameCompany, recruiterData.email, recruiterData.password,recruiterData.url);
      firstName.val("");
      lastName.val("");
      companyName.val("");
      emailInput.val("");
      passwordInput.val("");
      joburl.val("");
     
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpRecruiter(firstName, lastName, companyName, email, password, url) {
      $.post("/api/recruit", {
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        email: email,
        password: password,
        url: url,
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
  