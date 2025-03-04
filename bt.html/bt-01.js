// const carts = [15000, 2000, 3000];
// let total = 0;
// for (let i = 0; i< carts.length;i++){

//     total += carts[i];
//     console.log("Tại vị trí" + i + "thì tông tiền");
// } chuyển đổi tiền tệ
// console.log(total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));

// const payments = [2000, 30000, 40000, 50000];
// let i = 0;
// let total = 0;

// while(total < 1000000 && i < payments.length){
//     total += payments[i];
//     i++;
//     console.log("Tổng tiền" + i + "là thứ ", total);
    
// }

// break
// nhập vào số n, lấy trong khoảng từ 0 đến n 
        // b1: lấy n từ người dùng
// let n = 10;
// // b2: in ra các số từi 0 đến n
// for (let i = 0; i <= 10; i++){
//     if (n % 2 == 0){
//         console.log("Số chắn đầu tiên", i);
//         break;
                
//     }
// }

// continue

for(let i = 0;i <= 10; i++){
    if(i === 4){
        continue;
    }
    console.log("i = ", i);
    
}