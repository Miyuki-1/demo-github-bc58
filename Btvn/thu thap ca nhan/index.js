function tinhTienThue(){
    var tongThuNhapNam = document.getElementById("tong-thu-nhap-nam").value *1;
    var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value *1;
    var ThuNhapNam = 0;
    if (tongThuNhapNam <= 60e6){
        ThuNhapNam = tongThuNhapNam * 0.05;
    }
    if (tongThuNhapNam>60e6 && tongThuNhapNam<=120e6){
        ThuNhapNam = tongThuNhapNam * 0.1;
    }
    if (tongThuNhapNam>120e6 && tongThuNhapNam<=210e6){
        ThuNhapNam = tongThuNhapNam * 0.15;
    }
    if (tongThuNhapNam>210e6 && tongThuNhapNam<=384e6){
        ThuNhapNam = tongThuNhapNam * 0.2;
    }
    if (tongThuNhapNam>384e6 && tongThuNhapNam<=624e6){
        ThuNhapNam = tongThuNhapNam * 0.25;
    }
    if (tongThuNhapNam>624e6 && tongThuNhapNam<=960e6){
        ThuNhapNam = tongThuNhapNam * 0.3;
    }
    if (tongThuNhapNam>960e6){
        ThuNhapNam = tongThuNhapNam * 0.35;
    }
    var thuNapChiuThue = ThuNhapNam - 4e6 - soNguoiPhuThuoc * 1.6e6;
    document.getElementById("result").innerText = `${thuNapChiuThue.toLocaleString()} VND`;
}