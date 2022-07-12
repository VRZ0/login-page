window.onload = function(){

var mail = document.getElementById('mailinput')

var pass = document.getElementById('passinput')

document.getElementById('btn').addEventListener('click', function(){

    firebase.auth().signInWithEmailAndPassword(mail.value, pass.value)

    .then((userCredential) => {
        console.log('logado como: ' + firebase.auth().currentUser.email)
        // window.location.replace('inicial.html')

        console.log(firebase.auth().currentUser.a.c)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert('ERRO! ' + error)
  });
})
}