var un = document.getElementById("username-kp").value;
var pw = document.getElementById("password-kp").value;

/*function login() {
  firebase.auth().signInWithEmailAndPassword(un, pw)
    .catch(err => {
      alert(err.message);
    });
  document.getElementById("username-kp").value = "";
  document.getElementById("password-kp").value = "";
}/*/

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  alert()
}).catch(function(error) {
  alert("error");
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  } else {
    console.log("error");
  }
});