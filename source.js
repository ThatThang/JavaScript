///////////////////////// CHUỖI ////////////////////////////////

// var myString = 'Hoc JS cung JS f8 ';

// 1:Length - Tính độ dài của chuỗi
// console.log(myString.length)

// 2:Find Index - Tìm vị trí của phần tử trong chuỗi
// console.log(myString.IndexOf('JS'));
// console.log(myString.lastIndexOf('JS'));

// 3:Cut String - Cắt chuỗi
// console.log(myString.slice(4, 6));
// console.log(myString.slice(-3, -1))

// 4:Replace - Thay thế chuỗi
// console.log(myString.replace(/JS/g, 'JavaScript'));

// 5:Convert to UperCase - Chuyển chuỗi thành in Hoa
// console.log(myString.toUpperCase())

// 6:Convert to LowerCase - Chuyển chuỗi thành in Thường
// console.log(myString.toLowerCase())

// 7:Trim - Loại bỏ khoảng trắng ở hai đầu của chuỗi
// console.log(myString.trim().length)

// 8:Split - Tách chuỗi thành array

// var language = 'Js, Php, Ruby';

// console.log(language.split(', '))

// 9: Get a character by index - Lấy phần tử trong chuỗi

// var string = 'Character'
// console.log(string.charAt(1))
// Khi nhập một giá trị khác trong chuỗi giá trị trả về sẽ là  chuỗi

// console.log(string[0])
// Khi nhập một giá trị khác trong chuỗi giá trị trả về sẽ là undefine

///////////////////////// HÀM ////////////////////////////////


// function writelog(){

//     var string ='';
//     for (var pagram of arguments){
//         string += `${pagram} - `
//     }
//     console.log(string);
// }
// writelog('log1','log2')

///////////////////////// SỐ ////////////////////////////////

// var number1 = 1;
// var number2 = 2.5;


// function isNumber(value){
//     return typeof value === 'number';
// }

// console.log(isNumber('aaa'));


///////////////////////// Mảng ////////////////////////////////
//Tạo mảng
// var fruits  = [ 

//     'Melon', 
//     'Orange', 
//     'Apple'
// ];
// console.log(fruits);

//Kiểm tra có phải là mảng hay không vì nếu xài typeof thì [] hoặc {} đều trả về là object

// console.log(Array.isArray(fruits));

// lấy phần tử theo index

// console.log(fruits[0]);

// for ( var i = 0 ; i < fruits.length; i++ ) {
//     console.log(fruits[i]);
    
// }   



