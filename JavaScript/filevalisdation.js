let inputs=document.querySelectorAll(`input[type="text"]`)
let submit=document.querySelector(`input[type="submit"]`)
let nameError=document.querySelector(`[id="nameError"]`)
let emailError=document.querySelector(`[id="emailError"]`)
let phoneError=document.querySelector(`[id="phoneError"]`)
let passError=document.querySelector(`[id="passError"]`)
let cpassError=document.querySelector(`[id="cpassError"]`)
let form=document.querySelector(`form`)

// submit.onclick=()=>{}
// form.addEventListener("input",(event)=>{
form.addEventListener("submit",(event)=>{
    let formEvalute=true
    event.preventDefault()
    let nameVal=inputs[0].value
    let emailVal=inputs[1].value
    let phoneVal=inputs[2].value
    let passVal=inputs[3].value
    let cpassVal=inputs[4].value
   formEvalute= evaluateName(nameVal,formEvalute)
   formEvalute=  evaluateEmail(emailVal,formEvalute)
   formEvalute=  evaluatePhone(phoneVal,formEvalute)
   formEvalute= evaluatePass(passVal,formEvalute)
    if(formEvalute)
    {
        formEvalute=evaluateConfirmPass(passVal,cpassVal,formEvalute)
    }
    else{
        cpassError.innerText="invalid password"
    }
 if(formEvalute===true)
 {
    alert("valid details ")
    window.open("https://www.flipkart.com/")
 }
 else{
    alert("invalid form details")
 }
})

function evaluateName(x)
{
    let str=x
    if(str.length<3)
    {
        nameError.innerText=`name length should not be less than 3`
        console.log("name length should not be less than 3");

    }
     else if(str.length>3)
   {
    for(let i=0;i<str.length;i++)
    {
        let asci=str.charCodeAt(i)
        let char=str[i]
        if(!((asci>=65 && asci<=90)||(asci>=97 && asci<=122)))
        {
             nameError.innerText=`invalid name char ${char}`
            console.log("invalid ");
            break
        }
    }
   }
   else{
    nameError.innerText=`valid name`
   }

}


function evaluateEmail(x)
{
    let str=x
    if(str.length===0)
    {
        emailError.innerText=`empty value is not accepted`
    }
  
    else if(!str.includes("@"))
    {
        emailError.innerText=`email is not included with @`
    }
    else if(!str.includes("gmail"))
    {
        emailError.innerText=`email is not included with gmail`
    }
    else if(!(str.endsWith(".com")||str.endsWith(".in"))){
        emailError.innerText=`email is not ending with .com or .in`
    }
  else{
    emailError.innerText=`valid email`
  }
}

function evaluatePhone(x)
{
    let num=x
    if(!(num.length===10))
    {
        phoneError.innerText="length should be 10"
    }
    else if (!(num[0]<=9 && num[0]>=6))
    {
        phoneError.innerText="invalid starting num"
    }
    else{
        phoneError.innerText="valid num"
    }
}
function evaluatePass(x)
{
    let str=x
    let schar="{}[]!@#$%&*()"
    let uc=0;
    let lc=0;
    let sc=0;
    let nc=0;
    if(str.length<8)
    {
passError.innerText="password length invalid"
return false
    }
   else{
    for(let char of str)
    {
        
        let asci=char.charCodeAt()
        if(asci>=65 && asci<=90)
        {
            uc++
        }
        else if(asci>=97 && asci<=122)
        {
            lc++
        }
        else if(asci>=48 && asci<=57)
        {
            nc++
        }
        else if(schar.includes(char))
        {
            sc++
        }

    }
    if(uc<1){
        passError.innerText="pass should include min 1 UC"
       return false
    
    }
    else if(lc<1){
        passError.innerText="pass should include min 1 LC"
      return false

    }
   else if(sc<1){
        passError.innerText="pass should include min 1 sc"
     return false
         
    }
    else if(nc<1){
        passError.innerText="pass should include min 1 nc"
      return false
        
    }
    else{
        passError.innerText="valid password"
        return true
    }
   }
    // console.log(sc+"   sc");
    // console.log(lc+"   lc");
    // console.log(uc+"   uc");
    // console.log(nc+"   nc");
    
    
}

function evaluateConfirmPass(x,y)
{
    if(x===y)
    {
        cpassError.innerText="confirm pass is matching"
        return true
    }
    else{
        cpassError.innerText="pass ans confirm password mis match"
        return false
    }
}





