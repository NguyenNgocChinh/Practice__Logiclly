// 1 hãy viết 1 function có chức năng tính lũy thừa của 1 số
// 2 hãy viết 1 function in ra các thông tin của 1 Object
// 3 hãy viết 1 function sau khi tính tổng thì tính lũy thừa của số đó (vận dụng câu 1)

function luythua(x) {
  const n = Math.pow(x, 3);
  return n;
}
console.log(luythua(2));

// 2

function emp(y) {
  for (const x in y) {
    console.log(`${x} : ${y[x]}`);
  }
}
const y = { ho: "Nguen", ten: "Thanh", diachi: "Quan12" };

emp(y);

// 3

function tong(a, b) {
  const c = a + b;
  const d = luythua(c);
  console.log(d);
}
tong(10, 20);


