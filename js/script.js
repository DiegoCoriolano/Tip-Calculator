document.addEventListener("click",calc);

    var bill = document.getElementById("value-box").value;
    var npeople =document.getElementById("npeople").value;

    var tip = document.getElementsByName("tip-select");

    var tipBox = document.getElementById("custom-tip").value;




function calc(){
    var bill = document.getElementById("value-box").value;
    var npeople =document.getElementById("npeople").value;

    var tip = document.getElementsByName("tip-select");

    var tipBox = document.getElementById("custom-tip").value;


    if (tipBox==""){

        for(i=0; i<((tip.length)-1); i++){
            if (tip[i].checked){
                var checkedTip=tip[i].value;
                console.log(checkedTip);

                var tipAmount = ((bill*(parseInt(checkedTip)/100)/npeople));
                document.getElementById("tip-amount-value").innerText = "$" + tipAmount.toFixed(2);

                var tipTotal = (((parseFloat(bill)+parseFloat(tipAmount)))/npeople);
                document.getElementById("tip-total-value").innerText = "$" + tipTotal.toFixed(2);

                var tipAmountTotal = ((parseFloat(bill)*parseFloat(parseInt(checkedTip)/100)));
                document.getElementById("tip-total").innerText = "$" + tipAmountTotal.toFixed(2);
            }

        }

    }


    if (npeople=="0"){
        document.getElementById("cantZero").style.display="initial";

        document.getElementById("tip-amount-value").innerText = "$0,00";

        document.getElementById("tip-total-value").innerText = "$0,00";

        document.getElementById("tip-total").innerText = "$0,00";

    } else{
        document.getElementById("cantZero").style.display="none";5  
    }
    
    if (bill!="" && npeople>"0" && tipBox!=""){

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

        var tipAmount = ((bill*(tipBox/100)/npeople));
        document.getElementById("tip-amount-value").innerText = "$" + tipAmount.toFixed(2);

        var tipTotal = (((parseFloat(bill)+ parseFloat(tipAmount)))/npeople);
        document.getElementById("tip-total-value").innerText = "$" + tipTotal.toFixed(2);

        var tipAmountTotal = ((parseFloat(bill)*parseFloat(tipBox/100)));
        document.getElementById("tip-total").innerText = "$" + tipAmountTotal.toFixed(2);
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

    document.getElementById("tip-amount-value").innerText = "$0,00";

    document.getElementById("tip-total-value").innerText = "$0,00";

    document.getElementById("tip-total").innerText = "$0,00";
}

function resetButton(){

    document.getElementById("custom-tip").value="";

    
}
