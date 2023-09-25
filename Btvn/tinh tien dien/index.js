function tinhTien() {
    var soKw = document.getElementById("so-kw").value *1;
    var tongTien1 = 0;
    if (soKw <= 50){
        tongTien1 += soKw *500;
    } 
    if (soKw >50 && soKw <=100){
        tongTien1 += (soKw - 50) * 650 + 50 * 500; 
    } 
    if (soKw>100 && soKw<=200){
        tongTien1 += (soKw -100) * 850 + 50 * 650 + 50 * 500;
    } 
    if (soKw>200 && soKw<=350){
        tongTien1 += (soKw -200) * 1100 + 50 * 850 + 50 * 650 + 50 * 500;
    }
    if (soKw > 350) {
        tongTien1 += (soKw- 350) * 1300 + 50 * 1100 + 50 * 850 + 50 * 650 + 50 * 500;
    }
    document.getElementById("result").innerText = `${tongTien1.toLocaleString()} VND`;
}