// random pin generator
function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}
document.getElementById('pin-genarator').addEventListener('click',function(){
    const input=document.getElementById('pin-value');
    input.value=getPin();

})
// key pad 
document.getElementById('key-pad').addEventListener('click',function(event){
    const number=event.target.innerText;
    const cal=document.getElementById('type-number');
    if(isNaN(number)){
       if(number=='C'){
        cal.value='';
       }
       else if(number=='<'){
           const inputValue=cal.value;
           const str=inputValue.substring(0,inputValue.length-1);
           cal.value=str;
       }
    }
    else{
        const previouscal=cal.value;
    const newcalc=previouscal+number;
    cal.value=newcalc;
    }
})
// submit
document.getElementById('submit').addEventListener('click',function(){
    const input=document.getElementById('pin-value');
    const pin1=input.value;
    const typeNumbers=document.getElementById('type-number').value;
    
    

    const successMessage=document.getElementById('success-notify');
    const failError=document.getElementById('failed-notify');
    if(pin1==typeNumbers){
        successMessage.style.display='block';
        failError.style.display='none';
        console.log(pin1);
    }
    else{
        failError.style.display='block';
        successMessage.style.display='none';
        console.log(typeNumbers);
    }
})
