
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



 /* SIGNUP SCRIPT */

        function auth2() {
            var txtEmail = document.getElementById("txtEmail").value;
             var txtPassword = document.getElementById("txtPassword").value;
              var txtConpassword = document.getElementById("txtConpassword").value;

                   if(txtEmail == "devcom@gmail.com" && txtPassword == "admin1234" && txtConpassword == "admin1234") {
                            
                    window.location.assign("site.html");
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
                       window.location.assign("site.html");
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
}



/* function profilechk() {
  var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
      var age = document.getElementById("age").value;

    if (firstname == "" && lastname == "" && age == "") {
        alert("Please set your name(s) & age to a valid value.");
      return;
    } else if (lastname == "" && age == "") {
        alert("Plase set your last mame & age to a valid value.");
      return;
    } else if (age == "") {
        alert("Please set your age to a valid value.");
    return;
 }
} */

function searchdeny() {
 alert("The search function on this site is currently not developed. Please try again another time.");
  return;
}


// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent(){
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookieNotice").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "none";
}else{
    document.getElementById("cookieNotice").style.display = "block";
}



//search autocomplete

const searcharr = [
  { name: 'settings' },
  { name: 'profile' },
  { name: 'friends' },
  { name: 'groups' },
  { name: 'masthead' },
]

//main page clock

function startTime() {
  const today = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const nth = function(today) {
    const todayString = String(today);
}
  
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = weekday[today.getDay()];
  let u = today.getDate();
  let w = month[today.getMonth()];
  let y = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;  document.getElementById('txt2').innerHTML = d + " " + " " + u + " " + w + " " + y;
  setTimeout(startTime, 1000);

}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10 
  return i;
}






/* function postlog() {

  if (nosend()) {
  console.log("Message failed to send.")
  } else {
    console.log("Message has been sent!")
  }
  
} */


function loginsave() {
  var input = document.getElementById("txtPassword").value;

  var input2 = document.getElementById("txtEmail").value;

  console.log(input);
  console.log(input2);

} 

//(in progress) saves the information inputted via the user on the sign-up page

function signupsave() {
  var input = document.getElementById("txtEmail").value;
    var input2 = document.getElementById("txtPassword").value;
      var input3 = 
document.getElementById("txtConpassword").value;
        var input4 = document.getElemenyById("first-name").value;
          var input5 = document.getElementById("last-name").value;

    if(input2 !== input3) {
      return;
    } else if(input2 == input3) {
        console.log(input);
        console.log(input2);
        console.log(input3);
        console.log(input4);
        console.log(input5);
      return;
    }
  
  
}

//(in progress) new login script that allows the user to define their own email / password rather than being given a set combo.

function signupnew() {

  const email = document.getElementById("txtEmail").value;

    const password1 = document.getElementById("txtPassword").value;

      const password2 = document.getElementById("txtConpassword").value;

        const firstn = document.getElementById("first-name").value;

          const secn = document.getElementById("last-name").value;


  if(email && password1 && password2 && firstn && secn) {
    alert("Welcome to Loopable!");
  } else {
    alert("Please fill out all options.");
  }
  
  
}



//show / hide personal details in settings

function showhide() {
  var x = document.getElementById("account-details-email");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//logging message contents

function logmsg() {
  var textcontents = document.getElementById("textcontentbox").value;

  console.log(textcontents.value);
  
}

function msgnotification() {

  alert("Your Message Has successfully been sent!");
}

function findfrienddenytemp() {

  alert("The finding-friends function is currently not available during this stage of production, please try again another time.")
  
}

function findfriend() {

  searchbarfriend = document.getElementById("friend-search-bar").value;


  if(!searchbarfriend) {
    alert("Please enter a valid username")
  } else {
    alert("Friending users is currently unavailable during this stage of development within the site, please try again another time.")
  }
}

function welcometxt() {
  var name = document.getElementById("first-name").value;
  
  
    let o = name;
  
  
  document.getElementById("welcome-txt").innerHTML = "Welcome back, " + o;
  
}

function changenameshow() {

    const namedis = document.getElementById('profile-page-name-title').value;


  

  if (!namedis) {
    alert("Please enter a valid username that must contain at least 3 characters.");
  } else if (namedis.length <= 2) {
    alert("This username is too short, please make sure your name is at least 3 characters in length.");
  } else if (namedis.length >= 20) {
    alert("This username is too longth.")
  }
  
  else {
    alert("Username changed!")

    const changetxt = document.getElementById("usernamedisplay").innerHTML = namedis;

    console.log(changetxt);
  }

  
  
}