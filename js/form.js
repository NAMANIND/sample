
	// Function to send the form data via email
	$("#prospects_form").submit(function(e) {
    e.preventDefault();
});
function sendFormEmail() {
  // Get form data
  var firstName = document.getElementById('inputNormalFirstName').value;
  var lastName = document.getElementById('inputNormalLastName').value;
  var email = document.getElementById('inputNormalEmail').value;
  var phone = document.getElementById('inputNormalPhone').value;
  var company = document.getElementById('inputNormalCompany').value;
  var jobTitle = document.getElementById('inputNormalJobTitle').value;
  var country = document.getElementById('selectCtrl').value;

  var checkedValue = []; 
var inputElements = document.getElementsByClassName('checkbox');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue.push(inputElements[i].value);
      }
}

console.log(checkedValue);
  
  // Compose the email body





// Check if all mandatory fields are filled
if (firstName && lastName && (checkedValue.length !=0) && email && phone && company && jobTitle && country) {


  var allowedBusinessDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'aol.com'];

  // Extract the domain from the email address
  var emailDomain = email.split('@')[1];

  // Check if the email domain is in the list of allowed business domains
  var isnotBusinessEmail = allowedBusinessDomains.includes(emailDomain);


  // var businessEmailPattern = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|net|org|edu|gov|mil|co\.uk|ac\.uk|ca|de)$/;
  // var isBusinessEmail = businessEmailPattern.test(email);
  if (!isnotBusinessEmail) {
    var body = "First Name: " + firstName + "\n\n";
    body += "Last Name: " + lastName + "\n\n";
    body += "Interested In: " + checkedValue + "\n\n";
    body += "Email: " + email + "\n\n";
    body += "Phone: " + phone + "\n\n";
    body += "Company: " + company + "\n\n";
    body += "Job Title: " + jobTitle + "\n\n";
    body += "Country: " + country + "\n\n";

    // Configure the SMTP.js parameters
    Email.send({
      SecureToken: "abe28d14-5827-4dd6-8eb5-eb40001b7cd1",
      To: "namanrai309@gmail.com",
      From: "20bei033@ietdavv.edu.in",
      Subject: "Registration Form Submission",
      Body: body,
    }).then(function (message) {
      const viewBtn = document.querySelector("#thank_you"),
        popup = document.querySelector(".popup"),
        close = popup.querySelector(".closep");

      viewBtn.classList.add("show");
      popup.classList.add("show");

      close.onclick = () => {
        viewBtn.classList.remove("show");
        popup.classList.remove("show");
      }
    });
    document.getElementById("note").innerText = "";
  } else {
    // Show an error message for invalid email domain
    // alert("Please enter a valid business email address.");
    document.getElementById("note").innerText = "*Please enter a valid business email address."
  }
} else {
  // Show an error message indicating that all fields are mandatory
  // alert("Please fill in all the mandatory fields.");
  document.getElementById("note").innerText = "*Please fill in all the mandatory fields."
}









  // var body = "First Name: " + firstName + "\n";
  // body += "Last Name: " + lastName + "\n";

  // body += "Intrested In: " + checkedValue + "\n";



  // body += "Email: " + email + "\n";
  // body += "Phone: " + phone + "\n";
  // body += "Company: " + company + "\n";
  // body += "Job Title: " + jobTitle + "\n";
  // body += "Country: " + country + "\n";
  
  // // Configure the SMTP.js parameters
  // Email.send({
  //   SecureToken: "abe28d14-5827-4dd6-8eb5-eb40001b7cd1",
  //   To: "namanrai309@gmail.com",
  //   From: "20bei033@ietdavv.edu.in",
  //   Subject: "Registration Form Submission",
  //   Body: body,
  // }).then(function (message)
  //  {
   


  //   const viewBtn = document.querySelector("#thank_you"),
  //   popup = document.querySelector(".popup"),
  //   close = popup.querySelector(".closep");
   


  //   viewBtn.classList.add("show");
  //     popup.classList.add("show");
    
  //   close.onclick = ()=>{
  //       viewBtn.classList.remove("show");

  //       popup.classList.remove("show");
      
        

  //   }

 
	







  // });


}
