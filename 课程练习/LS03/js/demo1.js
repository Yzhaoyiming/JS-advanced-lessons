var n1=12345.6789;
console.log(n1.toFixed(2));//12345.68  toFixed(num)可以把number四舍五入为指定小数位数（num）的数字
console.log(n1.toPrecision(2));//1.2e+4  toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4 toExponential() 方法可把对象的值转换成指数计数法。


console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//isNaN()若括号中的如果是非数值，那么返回true
console.log(Math.floor(3.8));//3  floor（）可对一个数进行下舍入
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4  ceil()可对一个数进行上舍入
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3  round()可把一个数字舍入为最接近的整数，如果是0.5，将进行上舍入，3.5 将舍入为 4，而 -3.5 将舍入为 -3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4