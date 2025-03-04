let a = prompt("Nhập một số nguyên dương:");
let n = parseInt(a);

if (!Number.isInteger(n) || n <= 0) {
    document.write("dữ liệu nhập vào không hợp lệ");
} else {
    let output = `các số chia hết cho 5 từ 1 đến ${n} là: `;
    let first = true;

    for (let i = 5; i <= n; i += 5) {
        if (!first) {
            output += ", ";
        }
        output += i;
        first = false;
    }
    document.write(output);
}

