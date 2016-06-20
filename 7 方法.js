// 正则的方法
// test 判断

//eg
var str='4567ssdsc85d 8s5s';
var reg=/(\d+)([a-z]*)/g;

console.log(reg.test(str));//true;



//exec  检索字符串中指定的值。返回找到的值，并确定其位置。
//如果 exec() 找到了匹配的文本，
// 则返回一个结果数组。
// 否则，返回 null。
// 此数组的第 0 个元素是与正则表达式相匹配的文本，
// 第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），
// 第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），
// 以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性
// 。index 属性声明的是匹配文本的第一个字符的位置。
// input 属性则存放的是被检索的字符串 string。
// 我们可以看得出，在调用非全局的 RegExp 对象的 exec() 方法时，
// 返回的数组与调用方法 String.match() 返回的数组是相同的。
console.log(reg.exec(str)); //[ '4567ssdsc','4567','ssdsc',index: 0,input: '4567ssdsc85d 8s5s' ]



//compile 编译正则表达式。



// str的方法
// match 返回匹配的数组

    console.log(str.match(reg));//[ '4567', '85', '8', '5' ]
// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

