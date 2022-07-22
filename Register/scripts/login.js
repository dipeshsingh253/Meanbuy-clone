let dataArrLS = JSON.parse(localStorage.getItem("userData")) || [];



function login(){
   

    let signinData = {
                       email:document.querySelector("#email").value,
                       password:document.querySelector("#pass1").value,
                     };
                     if(checkSignin(signinData.email,signinData.password)===true){
                        localStorage.setItem("signin",signinData)
                        alert("Log in Successfull")
                        window.location.href="index.html";
                     }else{
                        alert("Wrong Email or Password");
                        window.location.reload();
                     }
}

function checkSignin(email,password){
    let filtered = dataArrLS.filter(function(element){
 return element.email===email && element.password===password; 
    });

    if(filtered.length>0){
        return true;
    }else{
        return false;
    }
}

import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();