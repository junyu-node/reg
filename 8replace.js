
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


function replacer(match, p1, p2, p3, offset, string){

    // match 匹配的字串（对应$&）
    // p1, p2, ..假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）
    // offset 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是"abcd"，匹配到的子字符串时"bc"，那么这个参数将时1）
    // string被匹配的原字符串。

    console.log(match); // abc12345#$*%
    console.log(p1);    // abc
    console.log(p2);    // 12345
    console.log(p3);    // #$*%
    console.log(string);// abc12345#$*%

    return [p1, p2, p3].join(' - ');

}

var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/,replacer);


//alert(newString);

//////////////////////////////////

/*
 var re = /apples/gi;
 var str = "Apples are round, and apples are juicy.";
 var newstr = str.replace(re, "oranges");
 */

//alert(newstr);

//////////////////////////////////

/*var str = "Apples are round, and apples are juicy.";
 var newstr = str.replace("apples", "oranges", "gi");  // 这个不兼容IE

 alert(newstr);*/


//////////////////////////////////

// 交换字符串中的两个单词
/*var re = /(\w+)\s(\w+)/;
 var str = "John Smith";

 var newstr = str.replace(re, "$2 $1");
 alert(newstr);
 */
