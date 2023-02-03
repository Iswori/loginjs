

function Login() {
    let email=document.getElementById('email').value;
    let emailerror=document.getElementById('emailerror');
    let pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    console.log(email.match(pattern))
   alert(email)
   if(email.length===0){
emailerror.innerHTML='please enter email address'
   }else if (email.match(pattern)===null) {
    emailerror.innerHTML="wrong";
   }

   let password=document.getElementById('password').value;
   let passworderror=document.getElementById('passworderror');

   alert(password)
   if(password.length===0) {
    passworderror.innerHTML="please enter your password"
   } else if (password.length>8 || password.length<6) {
    alert('fired')
    // passworderror.innerHTML="password must be less than 8 words"
    passworderror.innerHTML="password must be more than 6 words"
   } 

//    email.match(pattern)
//    if (!email.match(pattern)) {
//        alert('login')
//    } else{
//        alert('incorrect')
//    }
}