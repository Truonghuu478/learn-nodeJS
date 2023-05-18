// cấu trúc dữ liệu Set & Map
const dict = new Map();
dict.set("decs", "xin chao");
// console.log(dict);
//Primitive and Reference
// Primitive là các kiểu dữ liệu nguyên thuỷ : string, number,...
//Reference là những kiểu dữ liệu bậc cao: Object, Array,Function
//get
const hello = dict.get("decs");
// console.log("hello: ", hello);
//key cuar Map có thể là bất kì kiểu dữ liệu nào
const fn = () => {}; // khắc phục khi tham chiếu
dict.set(fn, "day la mot function");
dict.set("name", "day la mot name");

dict.set("old", "day la mot old");

console.log(dict.get(fn)); // =>undefind tại vì đây là 2 function ẩn danh và nó kh trỏ về một vùng nhớ

//Duyệt giá trị trong Map
const iterable = dict.keys();
console.log("duyet keys Map", iterable.next().value);
console.log("duyet keys Map", iterable.next().value);

// for (const [key, value] of dict) {
//   console.log("for", key, value);
// }

// dict.forEach((value, key) => {
//   console.log("forEach", value, key);
// });

//has tìm xem key có tồn tại trong Map hay không
const hasMessage = dict.has("old");
// console.log("hasMessage: ", hasMessage);
//xoa key old trong Map. trả về true nếu xoá hành công
dict.delete("old");
//  dict.clear; xoá toàn bộ

//Tập hợp giá trị không bị trùng lặp nhau

const arr = [1, 2, 3, 4, 5, 1, 7, 12, 12];
const set = new Set(arr);
console.log("set: ", set);
//thêm phần tử
set.add(10).add(11);
//has
set.has(1); // true
