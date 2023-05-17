// if(window.history.replaceState){
//     window.history.replaceState(null,null,window.location.href)
// }
         
//CLICK LOGIN AND SIGN-UP

const user=document.getElementById("user")

user.addEventListener("click",function(value){
      
    const art2=document.getElementById("art2")
     
    art2.style.display="block"
    value.stopPropagation
})

const log=document.getElementById("log")

log.addEventListener("click",function(value){
      
    const art2=document.getElementById("art2")
     
    art2.style.display="block"
    value.stopPropagation

})
        // XMARK1

var xmark1=document.getElementById("xmark1")

xmark1.addEventListener("click",function(){
    var main1=document.getElementById("logmain")
    main1.style.display="none"

    // var logsuccess1_1=document.getElementById("logsuccess")
    // logsuccess1_1.textContent=""

    var input_1=document.getElementById("input1").value=""

    var input1_2=document.getElementById("input1_2").value=""
     
    // var welcome=document.getElementById("welcome")
    // welcome.style.display="block"
    // var exitlog=document.getElementById("exitlog")
    // exitlog.style.display="none"



})

//         // XMARK2

var xmark2=document.getElementById("xmark2")

xmark2.addEventListener("click",function(){
   
    var main2=document.getElementById("logmain2")
    main2.style.display="none"

    // var signupsuccess2=document.getElementById("signupsuccess2")
    // signupsuccess2.textContent="You have already sign-up(:"
    
    var input2_1=document.getElementById("input2_1").value=""
    
    var input2_2=document.getElementById("input2_2").value=""

    // var welcome=document.getElementById("welcome")
    // welcome.style.display="block"
})

           //LOGIN_UNDER
var login_under=document.getElementById("login_under")

login_under.addEventListener("click",function(value){

var art2=document.getElementById("art2")
art2.style.display="none"
value.stopPropagation

var logmain=document.getElementById("logmain")
logmain.style.display="block"
value.stopPropagation

// var welcome=document.getElementById("welcome")
// welcome.style.display="none"
})



            //SIGN-UP

var Sign_up=document.getElementById("Sign-up")

Sign_up.addEventListener("click",function(value){

var art2=document.getElementById("art2")
art2.style.display="none"
value.stopPropagation

var logmain2=document.getElementById("logmain2")
logmain2.style.display="block"
value.stopPropagation

// var welcome=document.getElementById("welcome")
// welcome.style.display="none"
}) 
       //CLOSEUNDERLOGIN

var bigdiv=document.getElementById("bigdiv")

bigdiv.addEventListener("click",function(){

 var art2_2=document.getElementById("art2")
 art2_2.style.display="none"
})

     //ERASE VALUEFOR LOGIN

var under_login=document.getElementById("under_login")

under_login.addEventListener("click",function(){
  
    if(document.getElementById("input1").value=="")
    {
      alert('Enter Username and Password')
      return false;
    }
    if(document.getElementById("input1_2").value=="")
    {
      alert('Enter Username and Password')
      return false;
    }
    else{
      var input_11=document.getElementById("input1").value=""

      var logsuccess11=document.getElementById("logsuccess")
      logsuccess11.style.display="block"

      var input11_2=document.getElementById("input1_2").value=""

      var logsuccess12=document.getElementById("logsuccess")
      logsuccess12.style.display="block"

      var exitlog11=document.getElementById("exitlog")
      exitlog11.style.display="block"

      var xmark1cancel=document.getElementById("xmark1")
      xmark1cancel.style.display="none"

      var pls=document.getElementById("pls")
      pls.style.display="none"

      var ticketbook=document.getElementById("ticketbooking")
      ticketbook.style.display="block"

    }

})


  //ERASE VALUE FOR SIGN-UP


var under_login2=document.getElementById("under_login2")

under_login2.addEventListener("click",function(){
    if(document.getElementById("input2_1").value=="")
    {
      alert('Enter Email and Password')
      return false;
    }
    if(document.getElementById("input2_2").value=="")
    {
      alert('Enter Email and Password')
      return false;
    }
    else{  
        var input21_1=document.getElementById("input2_1").value=""

        var signupsuccess2_2=document.getElementById("signupsuccess2")
        signupsuccess2_2.style.display="block"

        var input21_2=document.getElementById("input2_2").value=""

        var signupsuccess2_2=document.getElementById("signupsuccess2")
        signupsuccess2_2.style.display="block"
    
        var exitlog2=document.getElementById("exitlog2")
        exitlog2.style.display="block"

        var xmark2cancel=document.getElementById("xmark2")
        xmark2cancel.style.display="none"

        var pls=document.getElementById("pls")
        pls.style.display="none"
  
        var ticketbook=document.getElementById("ticketbooking")
        ticketbook.style.display="block"
  
    }               
  })
  

//             //EXITLOGIN

var exitlog1=document.getElementById("exitlog")

exitlog1.addEventListener("click",function(){
var main1=document.getElementById("logmain")
main1.style.display="none"

var logsuccess1_1=document.getElementById("logsuccess")
logsuccess1_1.textContent="You have already logged-in(:"


var input_1=document.getElementById("input1").value=""

var input1_2=document.getElementById("input1_2").value=""

// var welcome=document.getElementById("welcome")
// welcome.style.display="block"

})

             //EXIT SIGN-UP  
var exitlog2=document.getElementById("exitlog2")

exitlog2.addEventListener("click",function(){
var main2=document.getElementById("logmain2")
main2.style.display="none"

var logsuccess1_1=document.getElementById("signupsuccess2")
logsuccess1_1.textContent="You have already signed(:"

var input2_1=document.getElementById("input2_1").value=""

var input2_2=document.getElementById("input2_2").value=""

// var welcome=document.getElementById("welcome")
// welcome.style.display="block"

})


       //LOGGED-IN

var backhome=document.getElementById("exitlog") 

backhome.addEventListener("click",function(){
    var homelogin=document.getElementById("login")
    homelogin.style.display="none"

    var logged=document.getElementById("logged")
    logged.style.display="block"
})

logged.addEventListener("click",function(value){
    logmain.style.display="block"
    value.stopPropagation
   
    var inlogin=document.getElementById("inlogin")
    inlogin.style.display="none"
    
    // var welcome=document.getElementById("welcome")
    // welcome.style.display="none"

})

              //SIGNED
 
var backhome2=document.getElementById("exitlog2") 

backhome2.addEventListener("click",function(){
    var homelogin=document.getElementById("login") 
    homelogin.style.display="none"

    var signed=document.getElementById("signed")
    signed.style.display="block"
})

signed.addEventListener("click",function(value){
    var logmain222=document.getElementById("logmain2")
    logmain222.style.display="block"
    value.stopPropagation
   
    var inlogin2=document.getElementById("inlogin2")
    inlogin2.style.display="none"

    // var welcome=document.getElementById("welcome")
    //  welcome.style.display="none"

})
      
        //LOGIN AND SIGNUP PAGE IF CONDITION



        //   BOOKING SECTION1

var randomnum=Math.floor(Math.random() *10001);
function check(){
var p=document.getElementById("phnoinput").value;
var fromval=document.getElementById("selectfrom").value;
var toval=document.getElementById("selectto").value;
var adultcheck=document.getElementById("adultinput").value;
var childcheck=document.getElementById("childinput").value;
var infantcheck=document.getElementById("infantsinput").value;
var total=Number(adultcheck)+Number(childcheck)+Number(infantcheck)

    if(document.getElementById("selectfrom").value==""){
        alert('Please fill all Input field');
        return false;
       }

    if(document.getElementById("selectto").value==""){
        alert('Please fill all Input field');
        return false;
       }

    if(document.getElementById("dateinput").value==""){
      alert('Please fill all Input field');
      return false;
    }


    if(document.getElementById("adultinput").value==""){
      alert('Please fill all Input field');
      return false;
     }
 
    // if(document.getElementById("travellersinput").value==""){
    //  alert('Please fill all Input field');
    //  return false;
    // }
   
   if(document.getElementById("phnoinput").value==""){
    alert('Please fill all Input field');
    return false;
   }

   if(document.getElementById("nameinput").value==""){
    alert('Please fill all Input field');
    return false;
   }
   if(fromval==toval){
    alert("From and destination place can't be same")
    return false;
  }

if(adultcheck>10){
    alert("Adults are 10 only allowed")
    return false;
  }
 
 if(childcheck>4){
     alert("Children are 4 only allowed")
     return false;
 }

 if(infantcheck>2){
  alert("Infants are 2 only allowed")
  return false;
}


if(isNaN(p)){
  alert("Please enter numberic value in mobile number")
  return false;
} 
if(p.length<10){
  alert("Mobile number must be in 10 digits")
  return false;
}
if(p.length>10){
  alert("Mobile number must be in 10 digits")
  return false;
}
 
if((p.charAt(0)!=9) && (p.charAt(0)!=7) && (p.charAt(0)!=8) && (p.charAt(0)!=6) ){
    alert("Mobile number must be start with (6,7,8,9)")
    return false;
  }

          //<---ELSE PART--->  
  
 else{
        document.getElementById("finalticket").style.display="block"
        document.getElementById("namefinal").textContent=`Name : ${document.getElementById("nameinput").value}`

        document.getElementById("mblno").textContent=`Mobile number : ${document.getElementById("phnoinput").value}`

        document.getElementById("ticketnumber").textContent=`Ticket number : ${randomnum2}`

        document.getElementById("fromfinal").textContent=`from : ${document.getElementById("selectfrom").value}`

        document.getElementById("tofinal").textContent=`destination : ${document.getElementById("selectto").value}`

        document.getElementById("datefinal").textContent=`departure date : ${document.getElementById("dateinput").value}`

        document.getElementById("returndatefinal").style.display="none"

        document.getElementById("adultfinal").textContent=`adults : ${document.getElementById("adultinput").value}`

        if(document.getElementById("childinput").value=="")
        {
          document.getElementById("childfinal").style.display="none"
        }
        else{
          document.getElementById("childfinal").style.display="block"
          document.getElementById("childfinal").textContent=`children : ${document.getElementById("childinput").value}`          
        }

        if(document.getElementById("infantsinput").value=="")
        {
          document.getElementById("infantfinal").style.display="none"
        }
        else{
          document.getElementById("infantfinal").style.display="block"
          document.getElementById("infantfinal").textContent=`infants : ${document.getElementById("infantsinput").value}`          
        }


        document.getElementById("totalfinal").textContent=`total travellers : ${total}` 
        
        document.getElementById("classfinal").textContent=`class : ${document.getElementById("classoption").value}`
       


                  // CLEAR VALUES
        document.getElementById("selectfrom").value=""
        document.getElementById("selectto").value=""
        document.getElementById("dateinput").value=""
        document.getElementById("adultinput").value=""
        document.getElementById("childinput").value=""
        document.getElementById("infantsinput").value=""
        document.getElementById("travellersinput").value=""
        document.getElementById("classoption").value=""
        document.getElementById("phnoinput").value=""
        document.getElementById("nameinput").value=""
        document.getElementById("ticketbooking").style.display="none"
   }

 }
          //ONEWAY & ROUNDWAY
function roundtrip(){
    document.getElementById("innerbook").style.display="none"
    document.getElementById("innerbook2").style.display="block"
}

function oneway2(){
    document.getElementById("innerbook2").style.display="none"
    document.getElementById("innerbook").style.display="block"
}         


           //BOOKINGSECTION-2
           //BOOKINGSECTION-2
           //BOOKINGSECTION-2
var randomnum2=Math.floor(Math.random() *10001);
function check2(){
var pnum=document.getElementById("phnoinput2").value;
var fromval2=document.getElementById("selectfrom2").value;
var toval2=document.getElementById("selectto2").value;
var adultcheck2=document.getElementById("adultinput2").value;
var childcheck2=document.getElementById("childinput2").value;
var infantcheck2=document.getElementById("infantsinput2").value;
var datecheck= document.getElementById("returndatefinal").value
var returndatecheck=document.getElementById("returndatefinal").value
var total2=Number(adultcheck2)+Number(childcheck2)+Number(infantcheck2)

  if(document.getElementById("selectfrom2").value==""){
      alert('Please fill all Input field');
      return false;
     } 
  if(document.getElementById("selectto2").value==""){
      alert('Please fill all Input field');
      return false;
     } 
  if(document.getElementById("dateinput2").value==""){
    alert('Please fill all Input field');
    return false;
  } 

  if(document.getElementById("returndateinput2").value==""){
    alert('Please fill all Input field');
    return false;
  } 

  if(document.getElementById("adultinput2").value==""){
    alert('Please fill all Input field');
    return false;
   }
 
  // if(document.getElementById("travellersinput2").value==""){
  //  alert('Please fill all Input field');
  //  return false;
  // }
 
 if(document.getElementById("phnoinput2").value==""){
  alert('Please fill all Input field');
  return false;
 }

if(document.getElementById("nameinput2").value==""){
  alert('Please fill all Input field');
  return false;
}

if(fromval2==toval2){
  alert("From and destination place can't be same")
  return false;
}

if(datecheck==returndatecheck){
  alert("Departure and Return-date cannot be same")
  return false;
}

if(adultcheck2>10){
  alert("Adults are 10 only allowed")
  return false;
}

if(childcheck2>4){
   alert("Children are 4 only allowed")
   return false;
}

if(infantcheck2>2){
alert("Infants are 2 only allowed")
return false;
}


if(isNaN(pnum)){
  alert("Please enter numberic value in mobile number")
  return false;
} 
if(pnum.length<10){
  alert("Mobile number must be in 10 digits")
  return false;
}

if(pnum.length>10){
  alert("Mobile number must be in 10 digits")
  return false;
}

if((pnum.charAt(0)!=9) && (pnum.charAt(0)!=7) && (pnum.charAt(0)!=8) && (pnum.charAt(0)!=6) ){
  alert("Mobile number must be start with (6,7,8,9)")
  return false;
}


if(document.getElementById("nameinput2").value>20){
  alert("Name should be only in 20 characters")
  return false;
}  


            // <----ELSE PART---->
else{
  document.getElementById("finalticket").style.display="block"

  document.getElementById("namefinal").textContent=`Name : ${document.getElementById("nameinput2").value}`

  document.getElementById("mblno").textContent=`Mobile number : ${document.getElementById("phnoinput2").value}`

  document.getElementById("ticketnumber").textContent=`Ticket number : ${randomnum}`

  document.getElementById("fromfinal").textContent=`from : ${document.getElementById("selectfrom2").value}`

  document.getElementById("tofinal").textContent=`destination : ${document.getElementById("selectto2").value}`

  document.getElementById("datefinal").textContent=`departure date : ${document.getElementById("dateinput2").value}`

  document.getElementById("returndatefinal").textContent=`Return date: ${document.getElementById("returndateinput2").value}`

  document.getElementById("adultfinal").textContent=`adults : ${document.getElementById("adultinput2").value}`

  if(document.getElementById("childinput2").value=="")
  {
    document.getElementById("childfinal").style.display="none"
  }
  else{
    document.getElementById("childfinal").style.display="block"
    document.getElementById("childfinal").textContent=`children : ${document.getElementById("childinput2").value}`          
  }

  if(document.getElementById("infantsinput2").value=="")
  {
    document.getElementById("infantfinal").style.display="none"
  }
  else{
    document.getElementById("infantfinal").style.display="block"
    document.getElementById("infantfinal").textContent=`infants : ${document.getElementById("infantsinput2").value}`          
  }


  document.getElementById("totalfinal").textContent=`total travellers : ${total2}` 
  
  document.getElementById("classfinal").textContent=`class : ${document.getElementById("classoption2").value}`




      document.getElementById("selectfrom2").value=""
      document.getElementById("selectto2").value=""
      document.getElementById("dateinput2").value=""
      document.getElementById("returndateinput2").value=""
      document.getElementById("adultinput2").value=""
      document.getElementById("childinput2").value=""
      document.getElementById("infantsinput2").value=""
      document.getElementById("travellersinput2").value=""
      document.getElementById("classoption2").value=""
      document.getElementById("phnoinput2").value=""
      document.getElementById("nameinput2").value=""
      document.getElementById("ticketbooking").style.display="none"
 }

}


              //PLEASE LOGIN
              






























