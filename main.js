/* function auth() {
      var txtEmail = document.getElementById("txtEmail").value;
       var txtPassword = document.getElementById("txtPassword").value;
             if(txtEmail == "devcom@gmail.com" && txtPassword == "admin1234") {
                     window.location.assign("site.html");
                      alert("Login Success");
               } else {
                    alert("Email or Password is Incorrect, Please try Again.")
                    return;
             }
   
         }
function auth2() {
}
*/

let info = (
  {
    email: "devcom@gmail.com",
    password: "admin1234"
  }
)


 /* SIGNUP SCRIPT */

        function auth2() {
            var txtEmail = document.getElementById("txtEmail").value;
             var txtPassword = document.getElementById("txtPassword").value;
              var txtConpassword = document.getElementById("txtConpassword").value;

                   if(txtEmail == "devcom@gmail.com" && txtPassword == "admin1234" && txtConpassword == "admin1234") {
                            
                    window.location.assign("welcome.html");
                            alert("Sign up Success");

                     } else if (txtEmail == "devcom@gmail.com" && txtPassword == "admin1234" && txtConpassword !== txtPassword.value) {

                            alert("Passwords Are Not the Same, Please try Again"); 

                        }  else if (txtEmail !== "devcom@gmail.com" && txtPassword =="admin1234" && txtConpassword == txtPassword.value) {

                    
                          alert("Email is Already in Use, Please try Again.");
        
                   } else if (txtEmail !== "devcom@gmail.com" && txtPassword !== "admin1234" && txtConpassword !== "admin1234") {
                    
                        alert("Email and Password are Invalid");

                   } else if (txtEmail == "devcom@gmail.com" && txtPassword !== "admin1234" && txtConpassword !== "admin1234") {
                        alert("Password is Invalid");
                   }
                }
         
        /* function auth1() {
          if (txtfirst-name && txtlast-name === "") {
            alert("Please enter your first and last name");
          } else {
            return;
          }
        } */


 /* LOGIN SCRIPT */

  function auth() {
        var txtEmail = document.getElementById("txtEmail").value;
         var txtPassword = document.getElementById("txtPassword").value;
               if(txtEmail == "devcom@gmail.com" && txtPassword == "admin1234") {
                       window.location.assign("welcome.html");
                        alert("Login Success");
                 } else {
                      alert("Email or Password is Incorrect, Please try Again.");
                      return;
               }
     
           }


/* Open / close right bar */

/* function openNav() {
  document.getElementById("rightbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
  document.getElementById("rightbar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} */



/* Message sending prevention (temporary) */

function nosend() {

  
  alert("Sending messages is currently unavailable during the sites development phase, we will inform all users when sending messages is available.");
  return;
}


function profilechk() {
  var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
      var age = document.getElementById("age").value;

    if (firstname == "" && lastname == "" && age == "") {
      alert("Please set your name(s) & age to a valid value.");
      return;
    } else if (lastname == "" && age == "") {
      alert("Plase set your last mamena & age to a valid value.");
      return;
    } else if (age == "") {
      alert("Please set your age to a valid value.");
    return;
 }
}

function searchdeny() {
  alert("The search function on this site is currently not developed. Please try again another time.");
  return;
}