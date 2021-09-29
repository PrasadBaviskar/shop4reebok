function signup(el){
    el.preventDefault();

    let idk=document.getElementById("idk");

    let First_Name= idk.First_Name.value;
   let Last_Name=idk.Last_Name.value;
   let Email_1=idk.Email_1.value;
   let password_1=idk.password_1.value;
   let password_2=idk.password_2.value;
   if(password_1===password_2){

   if(localStorage.getItem("users")===null){
    localStorage.setItem("users",JSON.stringify([]));
   }

   let user={
    First_Name,
    Last_Name,
     Email_1,
    password_1,
    password_2,

    
   };
   console.log("user",user);
    
   let arr=JSON.parse(localStorage.getItem("users"));
   arr.push(user);
   localStorage.setItem("users",JSON.stringify(arr));
}
else{
    alert("wrong password");
}
}


function login(el)
{
    el.preventDefault();
    
    let  idk=document.getElementById("idk1");

    let Email=idk.Email.value;
    let password=idk.password.value;
    
   
    let all_user=JSON.parse(localStorage.getItem("users"));
    all_user.forEach(function(user) {
        if((Email===user.Email_1)&&(password===user.password_1))
        {
            alert("successful");
            window.location.herf="";
        }
    });

}