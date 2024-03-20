let submit=document.querySelector("#submit");
let b=document.querySelector("#pass");
b.onkeyup = function(){
    let pass1 =Array.from(b.value).length;
    document.querySelector("#msg").innerHTML=`your pass is ${pass1} character`
}
submit.onclick = function(){
    let pass1 =document.querySelector("#pass").value;
    let passConfirm=document.querySelector("#confirmPass").value;
    if(pass1==0){

        document.querySelector("#msg2").innerHTML=`passward is requrid`;

    }
    else if(pass1 !== passConfirm){
        document.querySelector("#msg1").innerHTML=`your pass its please confirm`
    }
    else{
        let pass1 = Array.from(b.value).length;
        document.querySelector("#msg2").innerHTML=`its submit true and your pass i`;
    }
}

