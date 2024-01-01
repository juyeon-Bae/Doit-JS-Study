 function showPrice(){
        var originPrice = document.querySelector("#oPrice").value; //원래가격
        var rate = document.querySelector("#rate").value; //할인율
        var savedPrice = originPrice *(rate/100); //절약된 가격
        var resultPrice = originPrice - savedPrice; //할인된 가격
        document.querySelector("#showResult").innerHTML = "상품의 원래가격은" +originPrice+"원이고, 할인율은"
        + rate +"%입니다" + savedPrice+"원을 절약한 "+ resultPrice+"원에 살 수 있습니다"; 

 }
    

 