

let dataArr=JSON.parse(localStorage.getItem("userData")) || [];
function register(){
  event.preventDefault();

  let dataObj = {
                 email:document.querySelector("#email").value,
                 password:document.querySelector("#pass2").value,
                } ;
                if(checkEmail(dataObj.email)===true){
                  alert("Account Successfully Created");
                  window.location.href="login.html";
                  dataArr.push(dataObj)
                  localStorage.setItem("userData",JSON.stringify(dataArr));
                }else{
                //   let p = document.querySelector("#alert")
                //   p.innerText="This Email is already Registered";
                //   p.style.color="red"
                //   p.style.fontSize="20px"
                alert('Email already exists')
                  
                }           
}
function checkEmail(email){
  let filtered = dataArr.filter(function(element){
    return email===element.email
  });
  if(filtered.length>0){
    return false;
  }else{
     return true;
  }
}
 
 
 
