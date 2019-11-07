let messages = [];


var id = document.getElementById("natID").value;
var  licenseno = document.getElementById("LicenseId").value;
var fName = document.getElementById("FirstNameId").value;
var lName = document.getElementById("LastNameId").value;
var add1 = document.getElementById("Address1Id").value;
var add2 = document.getElementById("Address2Id").value;
var par = document.getElementById("Par").value;



//console.log(par);

function isIdValid(id) {


   

    let i = 0;

    if (id.length != 11) { //if Id is not the correct length 
        messages.push(document.getElementById("natInfo").innerHTML = "Error: incorrect length");
        return false;
    } else { //if it is the correct length

        if (id[6] === "-") { // if the - is in the 7th position(arrays start at 0)

            for (id[i]; i < 6; i++) { //run thru first six chars  


                if ((id[i] >= 0) && (id[i] <= 9)) { //if numbers are between 0 and 9 inclusive  

                } else {
                    messages.push(document.getElementById("natInfo").innerHTML = "Error: not a number");
                    break;
                }
                if ((i === 5) && (id[5] >= 0) && (id[5] <= 9)) { //if the 6th number is valid
                    let z = 7; //skip the dash(-)
                    for (id[z]; z < 11; z++) { //run thru numbers after dash(-)

                        if ((id[z] >= 0) && (id[z] <= 9)) { //if numbers are between 0 and 9 inclusive  

                        } else {
                            messages.push(document.getElementById("natInfo").innerHTML = "Error: not a number");

                            break;

                        }

                    }
                }
            }


        } else { //if dash 
            messages.push(document.getElementById("natInfo").innerHTML = "invalid id dash wrong place");
            return false;

        }


        return true;

    }

} //function isValidID




//var fName = document.getElementById("FirstNameId").value;
//var lName = document.getElementById("LastNameId").value;

function isNameValid(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.match(letters)) { // making sure the pattern match the input  
        //  console.log("NAME works");
        return true;
    } else {
        messages.push(document.getElementsByClassName("ErrorName").innerHTML = "Incorrect Format");
        //  console.log("NAME DOES NOT WORK");
        return false;
    }

} //function isvalidNAME






add1 = document.getElementById("Address1Id").value;
add2 = document.getElementById("Address2Id").value;


function isAddressValid(addr) {

    var letters = /^[a-zA-Z0-9\d\-_#.'\s]+$/i; //^[a-zA-Z0-9 ]*$/gm;
    if (addr.match(letters)) { // making sure the pattern match the input  
        //   console.log(" ADDRESS works");
        return true;
    } else {
        messages.push(document.getElementsByClassName("ErrorAdd").innerHTML = "Incorrect Format");
        //console.log(" ADDRESS DOES NOT WORK");
        return false;
    }

} //function isvalidADDRESS


 function isLicenseNumValid(licenseno)
 {
   
 }
 console.log(licenseno);

 if ((licenseno == "") || (fName == "") || (lName == "") || (add1 == "") || (add2 == "")) {
    messages.push(document.getElementById("natInfo").innerHTML = "Error: Information Missing");

}

if (document.getElementById("natID").value.trim == "") {
    messages.push(document.getElementById("natInfo").innerHTML = "Error: Invalid Nation ID Format");
    
}





    var Registerbtn = document.getElementById("regis");
    if (Registerbtn) 
    {
        Registerbtn.addEventListener("onlick", function (h)
        {
            
            
           
            if (isNameValid(fName) == true && isNameValid(lName) == true && isIdValid(id) == true && isAddressValid(add1) == true && isAddressValid(add2) == true && isLicenseNumValid(licenseno)== true) {
                let driver = [{
                    Id: id,
                    LicenseNo: LicenseID,
                    FirstName: fName,
                    LastName: lName,
                    Address1: add1,
                    Address2: add2,
                    Parish: par,
                }
            ];

                
                newDriver(driver);
        }
        //     function newDriver(driver) {
        //         // new pass gen and add to driver variable
        //         var temp = localStorage.getItem("driver_Info");
        //         temp = JSON.parse(temp);
        //         temp.push(driver);


        //         let driver_Info = JSON.stringify(temp);
        //         localStorage.setItem("driver_Info", driver_Info);
    
        //         console.log(localStorage);
        // }


        h.preventDefault();
        });
    }
    



















//-----------------------------------------LOG-IN PAGE--------------------------------------------------------------------------------------------------------------------





var form= document.getElementById("signIn");
var uname = document.getElementById("uName");
var passwd= document.getElementById("passwd");


 //var randString= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZXY';
//var randString= 'abcd';


function getrandUName(){
var randString= '';
var length1= 4;
var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length;

for ( var i = 0; i < length1; i++ ) {
   randString += characters.charAt(Math.floor(Math.random() * charactersLength));
}

var num1= Math.floor(Math.random() * 10);
var num2= Math.floor(Math.random() * 10);
var num3= Math.floor(Math.random() * 10);
var num4= Math.floor(Math.random() * 10);

 return uname= randString.concat(num1, num2, num3, num4);
}

 console.log("Gerate UserAmme= "+ getrandUName());

 function gerrandPasword()
 {
    var randString2= '';

    var length2=Math.floor(Math.random()* 16) + 8;
    var randLetd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randLetLength= randLetd.length;
    var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%';
    var charactersLength = characters.length;
    var numbers = '1234567890';
    var numberLength= numbers.length;

    
  let  w=0;
    
       if(w[0]= characters.charAt(Math.floor(Math.random()* randLetLength)))
       {
        

        for ( length2[w]; w < length2; w++) {
                        
            randString2 += characters.charAt(Math.floor(Math.random() * charactersLength ))
           
        }
    }
    
       return randString2;
    }
        

 console.log("PASSWORD = "+gerrandPasword());






if(form){
form.addEventListener("onlick",  function(e)
{      
    e.preventDefault();
    
    uname = uname.value;
    passwd = passwd.value;
    let messages = []

    function isLetter(c) { //function to change 
            return c.toLowerCase() != c.toUpperCase();
        }

    function isUsernameFormatValid(uname)
{
    if (uname.length != 8) //Making sure the username has 8 characters
    {
        messages.push(document.getElementById("unameErr").innerHTML ="Must Be 8 Chars");
       // return false;
    }
    else{

    let i=0;
    for(uname[i]; i < 4; i++ ) //run thru the first four characters 
    {
        if (isLetter(uname[i])) //using the isLetter function to determine if the first character is a letter
        {
                
        }
        else
           messages.push(document.getElementById("unameErr").innerHTML ="First Charater must be letter"); 
    }

    for(i = 4; i < 8; i++)//run through lst four positions
    {
        if (((uname[i] >= 0) && (uname[i] <= 9))) //making sure its a number
        {
            
        }
        else
        {
          messages.push (document.getElementById("unameErr").innerHTML ="Last 4 Must be Numbers");
        }
    }
    }
    return true;
}


function isPasswordFormatValid(passwd)
{

    if ((passwd.length < 8) || (passwd.length > 16) )
    {
      messages.push(document.getElementById("passErr").innerHTML ="Must Be between 8 and 16 chars");
       // return false;
    }
    
  



    containNumber= false;
    let i=0;
    for( passwd[i]; i < passwd.length; i++)
    {
        if((i===0) && ((passwd[i]) >=0 && (passwd[i] <=9)) ) {
        
            messages.push(document.getElementById("passErr").innerHTML ="1st Cahara must be Letter");
            return false;
        }
        else{
            return true;
        }

        
    }

    if((passwd[i]) >=0 && (passwd[i] <=9))
    {
        containNumber= true;
    
    }

    if(!containNumber)
    {
       messages.push(document.getElementById("passErr").innerHTML ="Must contain at least one number");
        
    }


}



console.log("Username is",isUsernameFormatValid(uname));
console.log( "Password is ",isPasswordFormatValid(passwd));


 if(isPasswordFormatValid(passwd)== true && isUsernameFormatValid(uname)== true)
 {
     var userdata=[ {
                     username: uname,
                     password: passwd
     }
    ]
 }

 validateUser(userdata, null);

 function validateUser(userdata, usertype)
 {
     //check if user data is null
 if(!userdata)   {
     return
 }
 
 //get user records from local storage
 var records = localStorage.getItem("driver_Info");
 
 console.log("username: " + records.username[0] + "password: " + records.password[0]);
 //compare user data with user records
 if(username.value == records.user[0] && records.value == entry.pass[0]) {
     alert('You have successfully logged in.');
 
 }
 

//get user records from local storage
var user_records =
 localStorage.setItem("user_records", JSON.stringify(user_records));
var udat =JSON.parse(localStorage.getItem('user_records'));

console.log(udat);


//compare user data with user records
var match =udat.passwd === userdata.passwd;

//if user is valid, save new user session
if (match) {
   // sessionStorage.setItem(JSON.stringify({firstName:match.firstName, lastName:match.lastName, LicenseNo:match.LicenseNo}), null );
   sessionStorage.setItem("Correct", match)
}
//else throw error

else{
    return false;
}
//console.log(sessionStorage.getItem('match'));
}



});
}
//--------------------------------------AdMin-SIGN-IN PAGE---------------------------------------------------------
var empid = document.getElementById("empid");

function addHyphen() {
    let ele = document.getElementById('empid');
        ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

        let finalVal = ele.match(/.{1,3}/g).join('-');
        document.getElementById('empid').value = finalVal;
}






form2= document.getElementById('adminInfo');
if(form2){
form2.addEventListener("mouseup",  function(f)
{
    
  f.preventDefault();  
});
}









function loadData()
{
  var driverArray = [
     {
        nationalId: "730209-3043",
        licenseNo: "135686819730209",
        firstName: "Andrew",
        lastName: "Pryor",
        address1: "31 ",
        address2: "Prior Park",
        parish: "St. James",
        username: "qwer1234",
        password:"andrewpryor123"
     },

     {
        nationalId: "671212-0404",
        licenseNo: "143647819671212",
        firstName: "Jennifer",
        surname: "Davis",
        address1: "Wavell Ave",
        address2: "Black Rock",
        parish: "St. Michael",
        username: "geju7593",
        password:"anoth3rpass"
   },

   {
      nationalId: "790422-1209",
      licenseNo: "100893419790422",
      firstName: "Anderson",
      surname: "Alleyne",
      address1: "Lascelles Terrace",
      address2: "The Pine",
      parish: "St. Michael",
      username: "oyqb4789",
      password:"thepassw0rd"
   }
  ]

  var employeeArray = [
   {
      employeeId: "545-700-593",
      firstName: "Merissa",
      lastName: "Halliwall",
      password:"f1rstpa55"
   },

   {
      employeeId: "090-728-221",
      firstName: "Terold",
      lastName: "Bostwick",
      password:"secur3acc3s5"
 },

 {
   employeeId: "147-830-662",
   firstName: "Vanda",
   lastName: "Marshall",
   password:"oll1p0ps"
 }
]

  //add to localStorage 
  if(!localStorage.getItem("driver_Info"))
  {
     localStorage.setItem("driver_Info", JSON.stringify(driverArray));
  }
  if(!localStorage.getItem("employeeinfo"))
  {
     localStorage.setItem("employeeinfo", JSON.stringify(employeeArray));
  }

}