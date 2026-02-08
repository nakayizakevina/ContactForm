const Form = document.getElementById("form")
const FirstName = document.getElementById("first_name");
const LastName = document.getElementById("last_name");
const Email = document.getElementById("email");
const SubmitButton = document.getElementById("button");


function UserNamePattern(username){
    const NamePattern = /^[a-zA-Z]{5,25}$/;
    return NamePattern.test(username);
}


function UserEmailPattern(useremail){
    const EmailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailPattern.test(useremail);
}

Form.addEventListener("submit", function (event) {
     event.preventDefault()

  const ValidFirstName= UserNamePattern(FirstName.value);
  const ValidLastName = UserNamePattern(LastName.value);
  const ValidEmail= UserEmailPattern(Email.value);

  if (ValidFirstName && ValidLastName && ValidEmail) {
    alert("Message Sent! Thanks for completing the form. We'll be in touch soon!");
  } else {
    alert("Please check your inputs and try again.");
  }
});
