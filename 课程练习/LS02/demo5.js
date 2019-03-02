(function(){
    var str_a="hello world";
    function fun_a(arg){
        console.log(arg);//hello world
        arg="hai";
        console.log(str_a,arg);//hello world,hai
    };
    fun_a(str_a);
    console.log(str_a);//hello world

    //引用传递
    var obj_b={value:"23"};
    function fun_b(arg){
        arg.value="45";
    };
    fun_b(obj_b);
    console.log(obj_b);//{value:"45"}

    function fn_c(arg){
        arg={value:2};//创建了一个新的对象，arg指向新对象
    };
    fn_c(obj_b);
    console.log(obj_b);// 这时候obj_a是{value:"45"}
    

// 上面这个问题也可以从内存角度去理解，两个函数都是传址，而这个址引用了obj_b在内存中对应的对象，
// 所以两个函数中的arg起初都是引用和obj_b同一个内存中的对象值，
// 而fn_b中访问的依旧是和obj_b同一个内存对象，所以fn_b修改是成功的，
// 但是在fn_c中重新为arg赋值新的对象，arg指向新对象并不会影响obj_b

}())