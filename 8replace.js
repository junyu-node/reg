
// replace 替换

var str='hello,world hello,bob'
var str1=str.replace('h','H');
console.log(str1) //Hello,world hello,bob

var str2=str.replace(/h/,'H');
console.log(str2) //Hello,world hello,bob
//全局匹配查找并替换
console.log(str.replace(/h/g,'H')) // Hello,world Hello,bob
console.log(str.replace(/b/g,'$`')) //  ello,world hello,world ello,bob
// leftContext
// 是当前表达式模式最后一个匹配字符串左边的所有内容，
// 可以简写为$`（其中"'"为键盘上"Esc"下边的反单引号）。
// 初始值为空字符串""。每次成功匹配时，其属性值都会随之改变。

console.log(str.replace(/h/g,"$'"))
////rightContext
// 是当前表达式模式最后一个匹配字符串右边的所有内容，可以简写为$'。
// 初始值为空字符串""。每次成功匹配时，其属性值都会随之改变。


