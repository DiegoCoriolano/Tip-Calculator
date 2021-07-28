function calc(){
    var bill = document.getElementById("value-box").value;
    var npeople = document.getElementById("npeople").value;

    var tip = document.getElementsByName("tip-select");

    var tipBox = documentgetElementById("custom-tip");

    if (tipBox=""){
        for (var i=0; i<=tip.length-1; i++){
            if (tip[i].checked==true){
                var tipValue=tip.value;
            }
        } else{
            
        }


    }

    
    


    if (bill!="" && npeople!=""){
    var TipAmount = (bill/npeople);
    document.getElementById("tip-amount-value").innerText=TipAmount.toFixed(2);
    }

}

function customTip(){

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