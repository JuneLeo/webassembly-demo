


function j2v8String(x,y){
    return '1'
}

function j2v8Int(x,y){

    var name3 = x + y;
    return name3;
}

function j2v8Boolean(x,y){

    return x == y;
}

function putVoid(x,y){
    var array = [{name:'zhangSan'}, {name:'liSi'}, {name:'wangMaZi'}];
    for ( var i = 0; i < array.length; i++ ) {
      javaVoid.call(array[i], " 你好啊"); // javaVoid 是 java 注册到 js 的一个函数
    }
    return j2v8Int(x,y);
}

var j2v8New = {
    a: "111",
    b: "222"
};

function handle(x,y){
    const source = [0,97,115,109,1,0,0,0,1,159,128,128,128,0,6,96,0,1,127,96,1,127,0,96,1,127,1,127,96,0,0,96,3,127,127,127,1,127,96,3,127,126,127,1,126,3,150,128,128,128,0,21,3,2,0,1,0,0,1,2,0,3,0,0,0,1,1,0,3,2,1,2,0,4,133,128,128,128,0,1,112,1,1,1,5,134,128,128,128,0,1,1,128,2,128,2,6,151,128,128,128,0,4,127,1,65,128,128,4,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,7,150,130,128,128,0,15,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,3,102,105,98,0,1,5,104,101,108,108,111,0,2,16,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,0,20,6,102,102,108,117,115,104,0,19,21,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,105,110,105,116,0,9,25,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,102,114,101,101,0,10,25,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,98,97,115,101,0,11,24,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,101,110,100,0,12,9,115,116,97,99,107,83,97,118,101,0,5,12,115,116,97,99,107,82,101,115,116,111,114,101,0,6,10,115,116,97,99,107,65,108,108,111,99,0,7,28,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,99,117,114,114,101,110,116,0,8,25,95,95,105,110,100,105,114,101,99,116,95,102,117,110,99,116,105,111,110,95,116,97,98,108,101,1,0,10,183,133,128,128,0,21,4,0,16,9,11,236,1,1,31,127,35,0,33,1,65,16,33,2,32,1,32,2,107,33,3,32,3,36,0,32,3,32,0,54,2,8,32,3,40,2,8,33,4,65,0,33,5,32,4,33,6,32,5,33,7,32,6,32,7,76,33,8,65,1,33,9,32,8,32,9,113,33,10,2,64,2,64,32,10,69,13,0,65,0,33,11,32,3,32,11,54,2,12,12,1,11,32,3,40,2,8,33,12,65,2,33,13,32,12,33,14,32,13,33,15,32,14,32,15,76,33,16,65,1,33,17,32,16,32,17,113,33,18,2,64,32,18,69,13,0,65,1,33,19,32,3,32,19,54,2,12,12,1,11,32,3,40,2,8,33,20,65,2,33,21,32,20,32,21,107,33,22,32,22,16,1,33,23,32,3,40,2,8,33,24,65,1,33,25,32,24,32,25,107,33,26,32,26,16,1,33,27,32,23,32,27,106,33,28,32,3,32,28,54,2,12,11,32,3,40,2,12,33,29,65,16,33,30,32,3,32,30,106,33,31,32,31,36,0,32,29,15,11,12,1,1,127,65,228,0,33,0,32,0,15,11,6,0,32,0,36,1,11,4,0,35,1,11,4,0,35,0,11,6,0,32,0,36,0,11,18,1,2,127,35,0,32,0,107,65,112,113,34,1,36,0,32,1,11,4,0,35,0,11,18,0,65,128,128,4,36,3,65,0,65,15,106,65,112,113,36,2,11,7,0,35,0,35,2,107,11,4,0,35,3,11,4,0,35,2,11,2,0,11,2,0,11,12,0,65,128,128,4,16,13,65,132,128,4,11,8,0,65,128,128,4,16,14,11,4,0,65,1,11,2,0,11,180,2,1,3,127,2,64,32,0,13,0,65,0,33,1,2,64,65,0,40,2,136,128,4,69,13,0,65,0,40,2,136,128,4,16,19,33,1,11,2,64,65,0,40,2,136,128,4,69,13,0,65,0,40,2,136,128,4,16,19,32,1,114,33,1,11,2,64,16,15,40,2,0,34,0,69,13,0,3,64,65,0,33,2,2,64,32,0,40,2,76,65,0,72,13,0,32,0,16,17,33,2,11,2,64,32,0,40,2,20,32,0,40,2,28,70,13,0,32,0,16,19,32,1,114,33,1,11,2,64,32,2,69,13,0,32,0,16,18,11,32,0,40,2,56,34,0,13,0,11,11,16,16,32,1,15,11,65,0,33,2,2,64,32,0,40,2,76,65,0,72,13,0,32,0,16,17,33,2,11,2,64,2,64,2,64,32,0,40,2,20,32,0,40,2,28,70,13,0,32,0,65,0,65,0,32,0,40,2,36,17,4,0,26,32,0,40,2,20,13,0,65,127,33,1,32,2,13,1,12,2,11,2,64,32,0,40,2,4,34,1,32,0,40,2,8,34,3,70,13,0,32,0,32,1,32,3,107,172,65,1,32,0,40,2,40,17,5,0,26,11,65,0,33,1,32,0,65,0,54,2,28,32,0,66,0,55,3,16,32,0,66,0,55,2,4,32,2,69,13,1,11,32,0,16,18,11,32,1,11,6,0,65,140,128,4,11]
    const bytes = new Int8Array(source)
    const m1 = new WebAssembly.Module(bytes)
    const ins = new WebAssembly.Instance(m1)
    const a = ins.exports.hello()
    callBack("结果为：" + a)
}

function javaCallBack(x,y){
    var t = javaBack(x+y);//javaBack是 java注册到js中的一个回调函数
    return t;
}

