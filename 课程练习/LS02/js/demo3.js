(function(){
    //基本数据类型与引用数据类型的区别  赋值方式不同
    var str_a="a";
    var str_b=str_a;
    str_b="b";
    console.log(str_a,str_b);//a b

    var obj_a={v:"a"};//obj_a存的是引用，引用堆内存中存的对象{v:"a"}
    var obj_b=obj_a;//obj_b存的也是引用，引用了堆内存的值{v:"a"},是引用赋值
    obj_b.v="b";//该引用指向的堆内存中的对象值发生改变{v:"b"}，obj_a和obj_b引用的是堆内存中同一个对象值，其实相当于obj_a和obj_b两个“指针”指向同一块内存，然后修改只是修改了该内存上的内容，还是那一块内存位置没有变）
    console.log(obj_a,obj_b);//{v:"b"}

    obj_b={v:"c"};//注意：因为改的是整个对象，这里会在堆内存中再次创建一个新的对象值（内存块）{v:"c"}，而现在的obj_b引用的是这个对象
    //所以这里打印的obj_a还是{v:"b"}，而现在的obj_b则是{v:"c"}（两者在内存中引用的是不同对象了）
    console.log(obj_a,obj_b);//{v:"b"}  {v:"c"}

}())

var obj_c = {x1:2,y1:3};//obj_c.x1在堆区还是栈区
var obj_d = {x2:2,y2:3};

console.log(obj_c.x1 === obj_d.x2);//true
console.log(obj_c === obj_d);//false
console.log({m:1}==={m:1});//false


//经典案例
//
var a =123;
function foo1(x){
	x = 345;
}
foo1(a);
console.log(a);//123

//
var a ={y:123};
function foo2(x){
	x.y = 345;
}
foo2(a);

console.log(a.y);//345

//
var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);//345

//
var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);//123