document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFild= document.getElementById('deposit-fild');
    const depositAmount = depositFild.value;
      
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;

    depositTotalElement.innerText = parseInt(depositAmount) +parseInt (depositTotal);

    depositFild.value ='';
});
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFild=document.getElementById('Withdraw-fild'); 
    let withdrawAmount = withdrawFild.value;
    

    const withdrawTotalElement = document.getElementById('withdraw-total');
    let withdrawTotal = withdrawTotalElement.innerText;

    withdrawTotalElement.innerText = parseFloat(withdrawAmount) + parseFloat(withdrawTotal);
    withdrawFild.value ='';

})