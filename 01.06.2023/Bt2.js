const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];
let sum = 0;

for (let i =0; i < mang.length; i++){
    if(mang[i] %2 !==0) {
        sum += mang[i]

    }
}

console.log(sum);