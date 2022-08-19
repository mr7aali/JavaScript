document.getElementById('btn-submit').addEventListener('click',function(){



   const emailFild= document.getElementById('user-email');
   const email = emailFild.value;

   const passFild= document.getElementById('user-pass');
   const pass = passFild.value;

   if(email === '1' && pass==='1'){
    window.location.href='Bank1.html' ;
   }
   else{
    alert('Invalid User');
   }
  
})