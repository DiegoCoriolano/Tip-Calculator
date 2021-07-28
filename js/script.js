function calc(){
    var bill = document.getElementById("value-box");
    var npeople = document.getElementById("npeople");


    if (bill!="" && npeople!=""){
    var TipAmount = (bill.value/npeople.value);
    document.getElementById("tip-amount-value").innerText=TipAmount;
    }

}


function reset(value){
    var valuebox = document.getElementById("value-box");
    valuebox.value="";

    var tip05 = document.getElementById("tip05");
    tip05.checked=false;
    var tip10 = document.getElementById("tip10");
    tip10.checked=false;
    var tip15 = document.getElementById("tip15");
    tip15.checked=false;
    var tip25 = document.getElementById("tip25");
    tip25.checked=false;
    var tip50 = document.getElementById("tip50");
    tip50.checked=false;
    var custom = document.getElementById("custom-tip");
    custom.value="";

    document.getElementById("npeople").value="";
}