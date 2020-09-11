// 反转字符串

//方法1
const str = "abcdefghigqlmnopqrstuvwxyz"
let newStr =""

for(let i =str.length-1;i>-1;i--){
newStr = newStr+str[i]
}
console.log(newStr,"方法1")

//方法2
const array = str.split("")

for(let i =0;i<array.length;i++){
  let bar = array.length-i
  if(i>=bar) break;
  let foo = array[i]
  array[i]=array[bar-1]
  array[bar-1] = foo
}

console.log(array.join(""),"方法2")

//方法3

console.log(str.split("").reverse().join(""),"方法3")