/*


            <h1 id="plans"></h1>
            <h3 class="email">Email (you'll need to confirm this email address)</h3>
            <input type="text" id="emailtext"></input>
            <h3 class="first">First Name</h3>
            <input type="text" id="firstname"></input>
            <h3 class="last">Last Name</h3>
            <input type="text" id="secondname"></input>
            <h3 class="password">Password</h3>
            <input type="text" id="password"></input>
            <h3 class="password">Enter Your Password Again</h3>
            <input type="text" id="password1"></input>
            <h3 class="password">Enter your card Details</h3>
            <input type="number" id="debitcard" placeholder="Enter your card Number"></input>
            <input type="number" id="cardnumber" placeholder="Enter your 3 digit cvv"></input>





*/
var data_div=document.getElementById("parent")
function startlearning(){
    var emailtext=document.getElementById("emailtext").value;
    var password=document.getElementById("password").value;
    var data_div=document.getElementById("parent")
    var debitcard=document.getElementById("debitcard").value;
    var enterpassword=document.getElementById("password1").value;
    var cvv=document.getElementById("cardnumber").value;
    
    if(enterpassword==password&&emailtext!=""&&password!=""&&cvv.length==3&&debitcard.length==16){
    localStorage.setItem("emailid",emailtext)
    localStorage.setItem("passwords",password)
    localStorage.setItem("debitcards",debitcard)
    window.location.href="login.html"
    }
    if(password!=enterpassword||password==""||enterpassword==""){
       
       var p=document.getElementById('parent')
        p.innerText="Password didn't match"
        p.style.color="red"
    
    }
    if(cvv.length!=3){
       
        var p=document.getElementById('parent1')
         p.innerText="Enter valid cvv"
         p.style.color="red"
     
     }
     if(debitcard.length!=16){
       
        var p=document.getElementById('parent2')
         p.innerText="Enter valid card details"
         p.style.color="red"
     
     }

    
    
}


function joinnow(){
    window.location.href="joinnow.html"
}
    
    //if(pass.length>15||pass.length<15){
        //alert("please enter valid card number")
    //}else{
    //    var data_div=document.getElementById('parent')
     //   var div=document.createElement('p')
     //   div.textContent="Card number verified,Please enter your three digit CVV Number"
     //   data_div.append(div)
    //}
    
    //
    
    