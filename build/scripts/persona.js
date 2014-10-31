var signinLink = document.getElementById('login-btn');
if (signinLink) {
  signinLink.onclick = function() { navigator.id.request(); };
}

var signoutLink = document.getElementById('logout-btn');
if (signoutLink) {
  signoutLink.onclick = function() { navigator.id.logout(); };
}

navigator.id.watch({
    onlogin: function(assertion) {
         verifyAssertion(assertion);
    },
    onlogout: function() {
        alert("Logout...");
    },
    loggedInUser: undefined
});