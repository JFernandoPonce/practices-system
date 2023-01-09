window.onload = handleClientLoad;

var CLIENT_ID = '898133536835-vmjfi6b2bpgv0ci7ukjsku04qo09pu2e.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBlPDwlvG6I6_CkuQ-ORJvzfrKSiDg27PQ';
var DISCOVERY_DOCS = ["https:///www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/drive";


var signinButton = document.getElementById('user-btn');
var logoutButton = document.getElementById('logout');

function handleClientLoad(){
    gapi.load('client:auth2', initClient);
}

function initClient(){
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function(){
        gapi.auth2.getAuthInstance().isSingedIn.listen(updateSigninStatus);

        updateSigninStatus(gapi.auth2.getAuthInstance().isSingedIn.get());
        signinButton.onclick = handleSignin;
        logoutButton.onclick = handleSignout;
    }, function(error){
        console.error(error);
    })
}
 
function updateSigninStatus(isSingedIn) {
    if (isSignedIn) {
        signinButton.style.display = 'none';
        logoutButton.style.display = 'block';
    } else {
        signinButton.style.display = 'block';
        logoutButton.style.display = 'none';
    }
}

function handleSignin(){
    gapi.auth2.getAuthInstance().signIn();
}
