let a = prompt("Nhập vào số");

if (isNaN(a) || a <= 0) {
    document.write("dữ liệu nhập vào không hợp lệ");
} else {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    document.write(sum);
}

