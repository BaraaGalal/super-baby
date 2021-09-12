function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var fname = document.contactForm.fname.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.phone.value;
    var lname = document.contactForm.lName.value;
    var schoolName = document.contactForm.schoolName.value;
    var jobDes = document.contactForm.job.value;
    
    
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = fnameErr = lnameErr =snameErr=jnameErr= true;
    
    // Validate name
    if(fname == "")  {
        printError("fnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(fname.match(regex)) {
            clear();
            fnameErr = false;
           
        } else {
            printError("fnameErr", "Please enter a valid name");
            
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(email.match(regex)) {
            printError("emailErr", "");
            emailErr = false;
        } else{
            printError("emailErr", "Please enter a valid email address");
           
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^\d{11}$/;
        if(mobile.match(regex)) {
            printError("mobileErr", "");
            mobileErr = false;
           
        } else{
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        }
    }
    
    if(lname == "")  {
        printError("lnameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(lname.match(regex)) {
            printError("lnameErr", "");
            lnameErr = false;
            
        } else {
            printError("lnameErr", "Please enter a valid last name"); 
        }
    }
    if(schoolName == "")  {
        printError("snameErr", "Please enter your schoolName");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(schoolName.match(regex)) {
            printError("snameErr", "");
            snameErr = false;
           
        } else {
            printError("snameErr", "Please enter a valid schoolName");
        }
    }
    if(jobDes == "")  {
        printError("jnameErr", "Please enter your job description");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(jobDes.match(regex)) {
            printError("jnameErr", "");
            jnameErr = false;
            
        } else {
            printError("nameErr", "Please enter a valid job description");
        }
    }
    
    
    // Prevent the form from being submitted if there are any errors
   if((fnameErr || emailErr || mobileErr || fnameErr || lnameErr ||snameErr||jnameErr) == true) {
       return false;
      debugger;
     // console.log(error);
    } else {
       var dataPreview = "You've entered the following details: \n" +
        "Full Name: " + fname + "\n" +
        "Email Address: " + email + "\n" +
        "Mobile Number: " + mobile + "\n" +
        console.log(fname)
        console.log(email)
        console.log(mobile)
        document.getElementById("cnt-us").innerHTML="thanks for contact us";
      console.log("right")
// Display input data in a dialog box before submitting the form
     alert(dataPreview);
    }
};
function hide(e){
    //document.getElementById(e).style.display="none";
    console.log(e)
}
function clear(){
     document.contactForm.fname.value="";
    //  document.contactForm.email.value="";
    //  document.contactForm.phone.value="";
    // document.contactForm.lName.value="";
    // document.contactForm.schoolName.value="";
    //  document.contactForm.job.value="";
    //  console.log("hi")
     //to hide message
}