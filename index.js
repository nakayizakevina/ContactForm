const Form = document.getElementById("form")
const FirstName = document.getElementById("first_name");
const LastName = document.getElementById("last_name");
const Email = document.getElementById("email");
const Message = document.getElementById("message")


const FirstNamePreview = document.getElementById("firstNamePreview");
const LastNamePreview = document.getElementById("lastNamePreview");
const EmailPreview = document.getElementById("emailPreview");
const MessagePreview = document.getElementById("messagePreview")

const EmailErrorState = document.getElementById("email__error")



function UserNamePattern(username){
    const NamePattern = /^[a-zA-Z]{5,25}$/;
    return NamePattern.test(username);
}

function UserEmailPattern(useremail){
    const EmailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailPattern.test(useremail);
}

function UserMessage(e){
  const mesage = "";
}

Form.addEventListener("submit", function (e) {
     e.preventDefault()

  const ValidFirstName= UserNamePattern(FirstName.value);
  const ValidLastName = UserNamePattern(LastName.value);
  const ValidEmail= UserEmailPattern(Email.value);
  const message = UserMessage(Message.value);

  if (ValidFirstName && ValidLastName && ValidEmail) {
    alert("Message Sent! Thanks for completing the form. We'll be in touch soon!");
  } 

  FirstNamePreview .textContent = FirstName.value;
  LastNamePreview.textContent = LastName.value;
  EmailPreview.textContent = Email.value;
  MessagePreview.textContent = Message.value;


});

function CheckEmailState(){
  if(Email.value === ""){
    console.log("please input something")
    EmailErrorState.classList.add("error")

  }
}


