function loginUser(){
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if(u === "admin" && p === "1234"){
        document.getElementById("loginMsg").style.display="block";
        document.getElementById("loginMsg").innerHTML="✅ Login Successful! Welcome admin";
          location.reload();
        
    } else {
        document.getElementById("loginMsg").style.display="block";
        document.getElementById("loginMsg").style.background="#ffe8e8";
        document.getElementById("loginMsg").style.border="1px solid red";
        document.getElementById("loginMsg").style.color="red";
        document.getElementById("loginMsg").innerHTML="❌ Wrong Username or Password!";
        }
    }

function admissionSubmit(){
    document.getElementById("adMsg").style.display="block";
    document.getElementById("adMsg").innerHTML="✅ Admission Form Submitted Successfully!";
    location.reload();
}