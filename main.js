
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
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
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



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkD9iTuqLCuhaQDcQe-fLFdupzoMQuv48",
  authDomain: "loopable-41c09.firebaseapp.com",
  projectId: "loopable-41c09",
  storageBucket: "loopable-41c09.appspot.com",
  messagingSenderId: "683931012251",
  appId: "1:683931012251:web:bfe07a1f915f6cd01eca3e",
  measurementId: "G-1P16GNW6B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);