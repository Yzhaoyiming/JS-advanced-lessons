//基本（原始）数据类型与引用（对象）类型的区别：内存分配方式不同
//内存的分配方式影响变量的生命周期
//函数局部变量中的值类型变量与引用类型变量
function foo(){
    var a=10;
    var b=true;
    var str="hello";//str="hello"存在栈中
    var obj={name:"zhao",age:20};//obj(访问地址)存在栈中，对象{name:"zhao",age:20}存在堆中，通过访问存于栈中的变量名（访问地址）访问
    obj.name="li"
    console.log(obj);
}
foo();