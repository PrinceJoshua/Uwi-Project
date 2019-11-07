<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Registration</title>
</head>

<body onload="loadData()">
    <div class="container">
        <div class="header">

            <div><img id="image" src="/images/index.png" alt="logo"></div>
            <div class="heading">
                <h1>Barbados Revenue Authority</h1>
                <h3>Vehicle Licensing and Registration System</h3>
                <h2>All fields required</h2>
            </div>
            <div></div>
        </div>

        <div class="formarea">
            <form id="myForm"  action="" onsubmit=" " >
                <?php
                if (isset($errors) && !empty($errors)): ?>
                  <ul>
                <?php
                  foreach ($errors as $err_msg): ?>
                     <li><?php echo $err_msg ?></li>
                <?php 
                  endforeach; ?>
                  </ul>
              <?php
              endif; ?>


                <span id="ID">National ID</span> <input type="text" id="natID" name="National ID" value=""><span class="Error" id="natInfo"></span>
                <span id="lNO">License No.</span> <input type="text" id="LicenseId" value=""><span id="Error"></span>
                <span id="FN">First Name</span> <input type="text" id="FirstNameId" name="firstname" value=""><span class="ErrorName"></span>
                <span id="LN">Last Name</span> <input type="text" id="LastNameId" name="lastname" value=""><span class="ErrorName"></span>
                <span id="EM">Email </span><input type="email" id="EmailId" name="email" value=""><span></span>
                <span id="EM">Telephone</span><span><input type="text" id="TelephoneId" name="telephone" value="">-<input type="text" id="Telephone2Id" name="Telephone2"></span><span></span>
                <span id="ADl">Address 1</span> <input type="text" id="Address1Id" value=""><span class="ErrorAdd"></span>
                <span id="AD2">Address 2 </span><input type="text" id="Address2Id" value=""><span class="ErrorAdd"></span>
                <span >Parish </span>
                        <select id="Par">
                        <option value="stphilip">St. Philip</option>
                        <option value="christchurch">Christ Church</option>
                        <option value="stmichael">St. Michael</option>
                        <option value="stgeorge">St. George</option>
                        <option value="stjohn">St. John</option>
                        <option value="stjames">St. James</option>
                        <option value="stthomas">St Thomas</option>
                        <option value="stjoseph">St. Joseph</option>
                        <option value="standrew">St. Andrew</option>
                        <option value="stpeter">St. Peter</option>
                        <option value="stlucy">St. Lucy</option>
                        </select>
                <span></span>
                <span></span>
                <span>
                <input id="regis" type="button" value="Register">
                <input id="cancel" type="reset" value="cancel">
                </span>
                <span></span>
            </form>
        </div>


        <!-- <div class="col-12">
            <button id="regis" type="button" >Register</button> 
            <button id="cancel"type="button">cancel</button>
          </div> -->
    </div>



</body>
<script src="scripts.js"></script>

</html>