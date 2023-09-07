// inputs= #month, #day, #year
let isValid = false;
const input_day =document.querySelector('#day')
const input_month =document.querySelector('#month')
const input_year =document.querySelector('#year')

//output= .output-year, .output-month, .output-day
const output_day =document.querySelector('.output-day')
const output_month =document.querySelector('.output-month')
const output_year =document.querySelector('.output-year')

//submit button
const submit_btn = document.querySelector('.logo-btn')

//errors = #error-day, #error-month, #error-year
const error_day = document.querySelector('.error-day')
const error_month = document.querySelector('.error-month')
const error_year = document.querySelector('.error-year')
const head_day = document.querySelector('.span1')
const head_month = document.querySelector('.span2')
const head_year = document.querySelector('.span3')

//events happening in the input_day so as to reach the conditions met
//(not more than 31days)and the input is not filled. adding plus to make it a string 
input_day.addEventListener('input', e =>{
if(+input_day.value > 31 || +input_day.value<0){
    isValid = false;
    error_day.textContent= "Must be a valid date";
    return;
}
else {
    isValid = true;
    error_day.textContent= "";
}
if(+input_day.value===0){
    isValid=false;
    error_day.textContent= "This field is rquired"
    head_day.style.color="var(--Light-red)"
    input_day.style.border="2px solid var(--Light-red)"
    return;
}
else {
    isValid=== true;
    error_day.textContent= "";
    head_day.style.color="";
    input_day.style.border=""
}
})
//events happening in the input_month so as to reach the conditions met
//(not more than 12month)and the input is not filled. adding plus to make it a string 
input_month.addEventListener('input', e =>{
    if(+input_month.value > 12 || +input_month.value<0 ){
        isValid = false;
        error_month.textContent= "Must be a valid month";
        return;
    }
    else {
        isValid = true;
        error_month.textContent= "";
    }
    if(+input_month.value===0){
        isValid=false;
        error_month.textContent= "This field is rquired";
        head_month.style.color="var(--Light-red)";
        input_month.style.border="2px solid var(--Light-red)";
        return;
    }
    else {
        isValid= true;
        error_month.textContent= "";
        head_month.style.color="";
        input_month.style.border="";
    }
    })
input_year.addEventListener('input', e =>{
    if(+input_year.value >2023 || +input_year.value<0){
        isValid = false;
        error_year.textContent= "Must be a valid year";
        return;
    }
    else {
        isValid = true;
        error_year.textContent= "";
    }
    if(+input_year.value===0){
        isValid=false;
        error_year.textContent= "This field is rquired"
        head_year.style.color="var(--Light-red)"
        input_year.style.border="2px solid var(--Light-red)"
        return;
    }
    else {
        isValid= true;
        error_year.textContent= "";
        head_year.style.color="";
        input_year.style.border="";
    }
    })

submit_btn.addEventListener('click',calculateDate);
function calculateDate(){
    if(isValid){
    const birthObj = new Date(
        input_year.value,
        input_month.value - 1, // Month is 0-based (0 = January, 1 = February, ...)
        input_day.value
    );
    
    const today = new Date();
    
    // Calculate the difference in milliseconds
    const ageDiff = today - birthObj;
    console.log(ageDiff)
    
    // Convert milliseconds to years, months, and days
    const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000; // Approximate average year length
    const millisecondsInMonth = millisecondsInYear / 12; // Approximate average month length
    
    const ageYears = Math.floor(ageDiff / millisecondsInYear);
    const ageMonths = Math.floor((ageDiff % millisecondsInYear) / millisecondsInMonth);
    const ageDays = Math.floor((ageDiff % millisecondsInMonth) / (24 * 60 * 60 * 1000)); // Convert remaining milliseconds to days
    
    // console.log(`Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`);
    output_day.textContent =ageDays;
    output_month.textContent=ageMonths;
    output_year.textContent=ageYears;
    return
    }
    // else{
    //     alert('Input dd/mm/yyyy')
    // }
}
        