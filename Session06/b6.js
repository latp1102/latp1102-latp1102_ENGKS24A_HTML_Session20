let number = prompt("Nhập số")
let dem = 1;

if (number < 2){
    dem = 0;
} else {
    for (let i = 2; i <= Math.sqrt(number);i++) {
         if (number % i == 0){
            dem = 0;
            break;
        }
    }
}
if (dem == 1) {
    document.write("là số nguyên tố");
} else{
    document.write("không phải là số nguyên tố");
}