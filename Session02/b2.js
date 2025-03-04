let a = prompt("nhập vào số bất kì");

if (isNaN(a) || a < 0) {
    document.write("dữ liệu nhập vào không hợp lệ");
} else {
    document.write("các số chia hết cho 5: ")
    for (let i = 1; i <= a; i++) {
        if(i % 5 === 0){
            document.write(`${i}, ` )
            continue;
        }
    }
}

