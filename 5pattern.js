//(pattern) 匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“\(”或“\)”。


//var reg=/([a-z]+)(\d*)/g;

//var str='sdsda;;sdahj8202xdsa9fdsfsd5sdf12sfdsd';
//console.log(reg.test(str));//true
//console.log(RegExp.$1);//sdahj
//console.log(RegExp.$2);//8202


// (?:pattern) 非获取匹配，匹配pattern但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如“industr(?:y|ies)”就是一个比“industry|industries”更简略的表达式。


//var reg=/([a-z]+)(?:8|\d+)/g;

//console.log(str.match(reg));//[ 'sdahj8202', 'xdsa9', 'fdsfsd5', 'sdf12' ]

//(?=pattern)非获取匹配，正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。
// 例如，“Windows(?=95|98|NT|2000)”能匹配“Windows2000”中的“Windows”，
// 但不能匹配“Windows3.1”中的“Windows”。
// 预查不消耗字符，也就是说，
// 在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，
// 而不是从包含预查的字符之后开始。
//var reg1=/([a-z]+)(?=\d+)/g;

//console.log(str.match(reg1)); //[ 'sdahj', 'xdsa', 'fdsfsd', 'sdf' ]
//(?!pattern)非获取匹配，正向否定预查，
// 在任何不匹配pattern的字符串开始处匹配查找字符串，
// 该匹配不需要获取供以后使用。例如“Windows(?!95|98|NT|2000)”
// 能匹配“Windows3.1”中的“Windows”，但不能匹配“Windows2000”中的“Windows”。








