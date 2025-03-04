let str = prompt("Nhập vào chuỗi");
let nhap = prompt("nhâp kí tự ");
let a =0;
for (let i = 0; i < str.length;i++ ){
    if (str[i] == nhap){
        a++;
        break;
    }
}
if ( a == 1){
    document.write("Tồn tại")
} else {
    document.write("Không tồn tại");
}


