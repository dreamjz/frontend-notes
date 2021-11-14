// String
// length
var str1 = '字符串';
var str2 = 'js, 字符串';

console.log(str1.length);
console.log(str2.length);
// concat
var str3 = 'string ';
console.log(str3 + 'String');
console.log(str3 + 123);
console.log(str3 + true);
console.log(str3 + null);
console.log(str3 + undefined);
console.log(str3 + { a: 'A' });
// insert variable
var name = 'name';
var age = 100;
console.log('Name: ' + name + ',age: ' + age);
console.log(`Name: ${name},age: ${age}`);
// insert expression
var a = 10
var b = 15
console.log('a+b is: ' + (a + b));
console.log(`a+b is: ${a + b}`);
// change line
console.log(`line 1
line2`);
// call functinon 
console.log(`Name is: ${getName()}`);

function getName() {
    return 'my name';
}
