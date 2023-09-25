function ketQua() {
    var diemMonThu1 = document.getElementById("diem-mon-1").value * 1;
    var diemMonThu2 = document.getElementById("diem-mon-2").value * 1;
    var diemMonThu3 = document.getElementById("diem-mon-3").value * 1;
    var khuVuc = document.getElementById("khu-vuc").value * 1;
    var doiTuong = document.getElementById("doi-tuong").value * 1;
    var diemChuanCuaHoiDong = document.getElementById("diem-chuan-cua-hoi-dong").value * 1;
    var diemCongKhuVuc = 0;
    if (khuVuc=="A") {
        diemCongKhuVuc =2
    } else if (khuVuc=="B") {
        diemCongKhuVuc =1
    } else if (khuVuc=="C"){
        diemCongKhuVuc =0.5;
    }
    var diemCongDoiTuong =0;
    if (doiTuong=="1") {
        diemCongDoiTuong =2.5;
    } else if(doiTuong=="2") {
        diemCongDoiTuong =1.5;
    } else if(doiTuong=="3"){
        diemCongDoiTuong =1;
    }
    var diemTong = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemCongKhuVuc + diemCongDoiTuong;
    if (diemTong >=diemChuanCuaHoiDong && diemMonThu1 != 0 && diemMonThu2 != 0 && diemMonThu3 != 0) {
    alert("Đậu")
}
    else {
        alert("Rớt")
    }
}