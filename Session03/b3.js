let number1 = prompt("Nhập vào số");

let a = number1;
let b = "";
for (let i = number1.length-1 ; i >= 0;i--) {
    b += a[i];
}

if (a == b){
    document.write('là số đối xứng');
    
} else if(isNaN(number1)){
    document.write("số không hợp lệ");
} else {
    document.write('ko là số đối xứng');
}


