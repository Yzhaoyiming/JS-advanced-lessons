var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));//parseInt可解析一个字符串，并返回一个整数。如果是非数字，则先转换为字符串，然后在转成整型
console.log(parseFloat("23.456xy"));//同上，结果为23.456
//parseFloat()转换规则：
//1、从第一个开始解析直到遇到第一个无效的float字符或者字符串末尾
//2、会忽略前导的0，只能转化十进制的，遇见十六进制的计数方法直接转化成0
//3、如果字符串里没有小数点或者小数点后全是0，那么返回值是整数
//4、字符串中第一个小数点是有效的，其他的都是无效的


//注意：parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt);
console.log(parseFloat === window.parseFloat);

console.log(Math.ceil(a2));//向上取整 24
console.log(Math.floor(a2));//向下取整 23
console.log(Math.round(a2));//四舍五入取整 23
a3 = 5e2;//指数形式  用e几表示10的几次方
console.log(a3);//500    
console.log(typeof Math);//object


// //NaN
// var x = Number("xis021");//试着转成Number类型
// console.log(x);//NaN
// isNaN(x);//true
// typeof NaN;

// console.log(Math.log(-1));//NaN   只能是正数
// console.log(Math.acos(2));//NaN   只能是[-1；1]
// console.log(NaN === NaN);//false    NaN和NaN不相等，无论数值还是地址


//Infinity和-Infinity
var y1=2/0;
console.log(y1);//Infinity 正数除以0是正无穷大
var y2=-2/0;
console.log(y2);//-Infinity  负数除以0是负无穷大
console.log(isFinite(y1));//false
console.log(isFinite(12));//true   isFinite()若括号中是有限数，返回true


//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0



