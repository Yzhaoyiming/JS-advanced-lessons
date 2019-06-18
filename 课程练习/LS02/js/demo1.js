//类型检测 typeof一般用于值类型检测
console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object null被当作一个空对象引用
console.log(typeof undefined);//undefined
console.log(typeof {name:"mike",age:20});//object
console.log(typeof function foo(){});//function
console.log(typeof {});//object
console.log(typeof []);//object

console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//String、Boolean    function
console.log(typeof Math);//object
console.log(typeof JSON);//object

//基本类型在赋值操作后，两个变量是相互不受影响的。在从一个变量向另一个变量赋值基本类型时，会在该变量上创建一个新值，然后再把该值复制到为新变量分配的位置上。
//引用类型，当从一个变量向另一个变量赋值引用类型的值时，同样也会将存储在原来变量的对象的值
//复制一份到为新变量分配的空间中。这时保存在变量中的是对象在堆内存中的地址，所以，与简单赋值不同，这个值的
//副本是一个类似指针的东西，指向存储在堆内存中的一个对象，而赋值操作后，两个变量保存同一个堆内存地址，指向同一个对象，因此此时修改变量的值
//也就是修改了堆内存的地址，自然修改后指向了新的对象。引用类型的赋值其实是对象保存在栈区地址指针的赋值，因此两个变量指向同一个对象，任何的操作都会相互影响。


//类型检测 instanceof()左侧操作数为对象，右侧操作数为原型链中的的一个类型时，返回为true
var a={name:"zhangsan",age:20};
console.log(a instanceof Object);//注意大写//true

var b=[12,"jklf",""];
console.log(b instanceof Array);//true

var Person=function(){};
var p1=new Person();//true
// console.log(p1 instanceof Person);//true
console.log(p1 instanceof Object);//true
