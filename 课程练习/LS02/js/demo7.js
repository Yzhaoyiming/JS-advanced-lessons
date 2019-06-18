var str = "abc_def_ghi_jkl_mn";

//转义字符 \n(换行) \"(双引号) \'（单引号） \\（斜杠\）
console.log("abc\ndefghi\\\n\'mn\'");


//字符串常用操作
var str = " abc_def_ghi_jkl_mn ";
str.split("_"); //["abc", "def", "ghi", "jkl", "mn"]
str.split("_",2); //["abc", "def"]截取长度2

//连接concat()
str.concat("_opq"); //abc_def_ghi_jkl_mn_opq  

//stringObject.substr(start,length)  substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。start为正从0开始，start为负从-1开始
str.substr(4,7);//def_ghi

//截取字符串的函数：左闭右开  start为负数那么从0开始，即若超出索引0-length-1就自动截断
str.substring(4,7);//def
str.substring(7,4);//def
str.substring(-1,3);//abc
console.log(str.substring(-1,3));//abc

//截取字符串的函数：左闭右开  start可正可负   若未指定end参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
str.slice(2);
str.slice(2,5);
str.slice(-2);
str.slice(2,-2);
console.log( str.fontcolor("red"));

// str.bold();//该方法返回加了 <b> 标签的字符串
// str.link();//该方法返回加了 <a> 标签的字符串
// str.fontcolor("red");//把字符串显示为红色
// str.fontsize(50);


console.log(str.trim());//去除字符串两边的空格
