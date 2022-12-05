const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password  =  document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function validateForm(){
    if(fullname.value ==''){
        alert('Shkruani Emrin tuaj te plote')
    }
    else if(username.value  == ''){
        alert('Shkruani Username')
        
    }
    else if(email.value  == ''){
        alert('Shkruani Email')
    }
    else if(phone.value  == ''){
        alert('Shkruani numrin e telefonit')
    }
    
     else if(password.value =='' || password.value.length < 8){
        alert('Shkruani passwordin  me 8 ose me shume karaktere')
        
    }
    else if(confirmPassword.value  == ''){
        alert('Shkruani passwordin')
    }
    else if ( confirmPassword.value != password.value){
        alert('Shkruani passwordin e njejte si me larte')
    }
    else{
        alert('Ju jeni kyqur')
    }

}