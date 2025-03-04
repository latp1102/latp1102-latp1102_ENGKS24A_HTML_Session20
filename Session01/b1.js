let a = prompt("Nhập vào số");
let n = parseInt(a);

if (!Number.isInteger(n) || n <= 0) {
    document.write("dữ liệu nhập vào không hợp lệ");
} else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    document.write(sum);
}