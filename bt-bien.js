function tinhTong() {
    let number1 = document.getElementById("vl").value;
    let number2 = document.getElementById("hh").value;
    let number3 = document.getElementById("sh").value;
    let sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
    let tb = (parseInt(number1) + parseInt(number2) + parseInt(number3))/3;
    document.getElementById("tong").value = sum;
    document.getElementById("tb").value = tb.toFixed();
}


    
