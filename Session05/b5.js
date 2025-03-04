let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");

if (isNaN(a) || isNaN(b) || b < 0) {
    document.write("không hợp lệ");
} else {
    let c = 1;
    for (let i = 0;i < b;i++){
        c *= a;
    }
    document.write(c);
} 