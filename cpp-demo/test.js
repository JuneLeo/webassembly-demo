// // 1.调用index导出的js
//
// let myModule = require('out/index.js')
// myModule.onRuntimeInitialized = function () {
//     const start = Date.now();
//     // console.log(myModule.ccall("fib", 'number', ['number'], [45], null))
//     console.log(myModule._fib(45))
//     console.log(`cost=${Date.now() - start}`)
// }

// 2.不使用index.js 直接加载wasm
// const path = require('path')
// const fs = require('fs')
//
// const filePath = path.resolve(__dirname, 'out/index.wasm')
// const buffer = fs.readFileSync(filePath)
//
// // const byte = new Int8Array(buffer)
//
// var source = "["
//
// for (let byteElement of buffer) {
//     source += `${byteElement},`
// }
// source += "]"
//
// console.log(source)

// const source = [0,97,115,109,1,0,0,0,1,145,128,128,128,0,4,96,0,1,127,96,1,127,1,127,96,1,127,0,96,0,0,3,137,128,128,128,0,8,3,1,0,2,1,2,0,0,4,133,128,128,128,0,1,112,1,1,1,5,134,128,128,128,0,1,1,128,2,128,2,6,141,128,128,128,0,2,127,1,65,144,136,4,11,127,1,65,0,11,7,251,128,128,128,0,8,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,3,102,105,98,0,1,16,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,0,7,9,115,116,97,99,107,83,97,118,101,0,2,12,115,116,97,99,107,82,101,115,116,111,114,101,0,3,10,115,116,97,99,107,65,108,108,111,99,0,4,25,95,95,105,110,100,105,114,101,99,116,95,102,117,110,99,116,105,111,110,95,116,97,98,108,101,1,0,10,137,129,128,128,0,8,2,0,11,81,1,1,127,65,0,33,1,32,0,33,0,3,127,32,1,33,1,2,64,2,64,2,64,32,0,34,0,65,1,78,13,0,65,0,33,0,12,1,11,32,0,65,3,78,13,1,65,1,33,0,11,32,1,32,0,106,15,11,32,1,32,0,65,126,106,16,1,106,33,1,32,0,65,127,106,33,0,12,0,11,11,4,0,35,0,11,6,0,32,0,36,0,11,20,2,1,127,1,127,35,0,32,0,107,65,112,113,34,1,36,0,32,1,11,6,0,32,0,36,1,11,4,0,35,1,11,5,0,65,128,8,11,0,143,129,128,128,0,4,110,97,109,101,1,106,8,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,1,3,102,105,98,2,9,115,116,97,99,107,83,97,118,101,3,12,115,116,97,99,107,82,101,115,116,111,114,101,4,10,115,116,97,99,107,65,108,108,111,99,5,11,115,101,116,84,101,109,112,82,101,116,48,6,11,103,101,116,84,101,109,112,82,101,116,48,7,16,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,7,28,2,0,15,95,95,115,116,97,99,107,95,112,111,105,110,116,101,114,1,8,116,101,109,112,82,101,116,48,0,205,129,128,128,0,11,46,100,101,98,117,103,95,105,110,102,111,94,0,0,0,4,0,0,0,0,0,4,1,183,0,0,0,33,0,4,0,0,0,0,0,0,0,14,0,0,0,5,0,0,0,81,0,0,0,2,5,0,0,0,81,0,0,0,7,237,3,0,0,0,0,159,179,0,0,0,1,2,90,0,0,0,3,0,0,0,0,93,0,0,0,1,2,90,0,0,0,4,38,0,0,0,72,0,0,0,0,5,0,0,0,0,5,4,0,91,0,0,0,4,0,81,0,0,0,4,1,183,0,0,0,12,0,111,0,0,0,171,0,0,0,77,0,0,0,132,0,0,0,5,0,0,0,2,95,0,0,0,55,0,0,0,1,14,5,3,0,4,0,0,3,0,0,0,0,5,4,4,132,0,0,0,5,0,0,0,7,237,3,0,0,0,0,159,60,0,0,0,1,16,89,0,0,0,5,55,0,0,0,0,0,189,128,128,128,0,10,46,100,101,98,117,103,95,108,111,99,0,0,0,0,27,0,0,0,4,0,237,2,0,159,27,0,0,0,50,0,0,0,4,0,237,0,0,159,1,0,0,0,1,0,0,0,4,0,237,0,0,159,0,0,0,0,0,0,0,0,0,174,129,128,128,0,13,46,100,101,98,117,103,95,97,98,98,114,101,118,1,17,1,37,14,19,5,3,14,16,23,27,14,17,1,18,6,0,0,2,46,1,17,1,18,6,64,24,151,66,25,3,14,58,11,59,11,73,19,63,25,0,0,3,5,0,2,23,3,14,58,11,59,11,73,19,0,0,4,137,130,1,0,49,19,17,1,0,0,5,36,0,3,14,62,11,11,11,0,0,0,1,17,1,37,14,19,5,3,14,16,23,27,14,17,1,18,6,0,0,2,52,0,3,14,73,19,58,11,59,11,2,24,0,0,3,36,0,3,14,62,11,11,11,0,0,4,46,0,17,1,18,6,64,24,151,66,25,3,14,58,11,59,11,39,25,73,19,63,25,0,0,5,15,0,73,19,0,0,0,0,171,130,128,128,0,11,46,100,101,98,117,103,95,108,105,110,101,167,0,0,0,4,0,33,0,0,0,1,1,1,251,14,13,0,1,1,1,1,0,0,0,1,0,0,1,0,105,110,100,101,120,46,99,112,112,0,0,0,0,0,0,5,2,5,0,0,0,3,1,1,0,5,2,34,0,0,0,3,1,5,15,10,1,0,5,2,35,0,0,0,5,13,6,1,0,5,2,48,0,0,0,3,1,5,15,6,1,0,5,2,49,0,0,0,5,13,6,1,0,5,2,60,0,0,0,3,1,5,27,6,1,0,5,2,61,0,0,0,3,1,5,5,1,0,5,2,69,0,0,0,3,127,5,22,1,0,5,2,70,0,0,0,5,16,6,1,0,5,2,72,0,0,0,5,27,1,0,5,2,79,0,0,0,5,35,0,1,1,112,0,0,0,4,0,73,0,0,0,1,1,1,251,14,13,0,1,1,1,1,0,0,0,1,0,0,1,115,121,115,116,101,109,47,108,105,98,47,108,105,98,99,47,109,117,115,108,47,115,114,99,47,101,114,114,110,111,0,0,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,46,99,0,1,0,0,0,0,5,2,132,0,0,0,3,16,1,0,5,2,133,0,0,0,3,1,5,2,10,1,0,5,2,137,0,0,0,0,1,1,0,167,130,128,128,0,10,46,100,101,98,117,103,95,115,116,114,105,110,116,0,105,110,100,101,120,46,99,112,112,0,47,85,115,101,114,115,47,106,117,110,101,108,101,111,47,100,101,109,111,47,119,101,98,97,115,115,101,109,98,108,121,45,100,101,109,111,47,99,112,112,45,100,101,109,111,0,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,0,47,101,109,115,100,107,47,101,109,115,99,114,105,112,116,101,110,0,95,95,101,114,114,110,111,95,115,116,111,114,97,103,101,0,47,101,109,115,100,107,47,101,109,115,99,114,105,112,116,101,110,47,115,121,115,116,101,109,47,108,105,98,47,108,105,98,99,47,109,117,115,108,47,115,114,99,47,101,114,114,110,111,47,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,46,99,0,102,105,98,0,99,108,97,110,103,32,118,101,114,115,105,111,110,32,49,55,46,48,46,48,32,40,104,116,116,112,115,58,47,47,103,105,116,104,117,98,46,99,111,109,47,108,108,118,109,47,108,108,118,109,45,112,114,111,106,101,99,116,32,100,102,56,50,51,57,52,101,55,97,50,100,48,54,53,48,54,55,49,56,99,97,102,97,51,52,55,98,102,55,56,50,55,99,55,57,102,99,52,102,41,0]
//
//
//
// WebAssembly.instantiate(new Int8Array(source)).then((results) => {
//     const start = Date.now();
//     console.log(results.instance.exports.fib(45))
//     console.log(`cost=${Date.now() - start}`)
// });


async function a() {
    const source = [0,97,115,109,1,0,0,0,1,159,128,128,128,0,6,96,0,1,127,96,1,127,0,96,1,127,1,127,96,0,0,96,3,127,127,127,1,127,96,3,127,126,127,1,126,3,150,128,128,128,0,21,3,2,0,1,0,0,1,2,0,3,0,0,0,1,1,0,3,2,1,2,0,4,133,128,128,128,0,1,112,1,1,1,5,134,128,128,128,0,1,1,128,2,128,2,6,151,128,128,128,0,4,127,1,65,128,128,4,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,7,150,130,128,128,0,15,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,3,102,105,98,0,1,5,104,101,108,108,111,0,2,16,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,0,20,6,102,102,108,117,115,104,0,19,21,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,105,110,105,116,0,9,25,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,102,114,101,101,0,10,25,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,98,97,115,101,0,11,24,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,101,110,100,0,12,9,115,116,97,99,107,83,97,118,101,0,5,12,115,116,97,99,107,82,101,115,116,111,114,101,0,6,10,115,116,97,99,107,65,108,108,111,99,0,7,28,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,99,117,114,114,101,110,116,0,8,25,95,95,105,110,100,105,114,101,99,116,95,102,117,110,99,116,105,111,110,95,116,97,98,108,101,1,0,10,183,133,128,128,0,21,4,0,16,9,11,236,1,1,31,127,35,0,33,1,65,16,33,2,32,1,32,2,107,33,3,32,3,36,0,32,3,32,0,54,2,8,32,3,40,2,8,33,4,65,0,33,5,32,4,33,6,32,5,33,7,32,6,32,7,76,33,8,65,1,33,9,32,8,32,9,113,33,10,2,64,2,64,32,10,69,13,0,65,0,33,11,32,3,32,11,54,2,12,12,1,11,32,3,40,2,8,33,12,65,2,33,13,32,12,33,14,32,13,33,15,32,14,32,15,76,33,16,65,1,33,17,32,16,32,17,113,33,18,2,64,32,18,69,13,0,65,1,33,19,32,3,32,19,54,2,12,12,1,11,32,3,40,2,8,33,20,65,2,33,21,32,20,32,21,107,33,22,32,22,16,1,33,23,32,3,40,2,8,33,24,65,1,33,25,32,24,32,25,107,33,26,32,26,16,1,33,27,32,23,32,27,106,33,28,32,3,32,28,54,2,12,11,32,3,40,2,12,33,29,65,16,33,30,32,3,32,30,106,33,31,32,31,36,0,32,29,15,11,12,1,1,127,65,228,0,33,0,32,0,15,11,6,0,32,0,36,1,11,4,0,35,1,11,4,0,35,0,11,6,0,32,0,36,0,11,18,1,2,127,35,0,32,0,107,65,112,113,34,1,36,0,32,1,11,4,0,35,0,11,18,0,65,128,128,4,36,3,65,0,65,15,106,65,112,113,36,2,11,7,0,35,0,35,2,107,11,4,0,35,3,11,4,0,35,2,11,2,0,11,2,0,11,12,0,65,128,128,4,16,13,65,132,128,4,11,8,0,65,128,128,4,16,14,11,4,0,65,1,11,2,0,11,180,2,1,3,127,2,64,32,0,13,0,65,0,33,1,2,64,65,0,40,2,136,128,4,69,13,0,65,0,40,2,136,128,4,16,19,33,1,11,2,64,65,0,40,2,136,128,4,69,13,0,65,0,40,2,136,128,4,16,19,32,1,114,33,1,11,2,64,16,15,40,2,0,34,0,69,13,0,3,64,65,0,33,2,2,64,32,0,40,2,76,65,0,72,13,0,32,0,16,17,33,2,11,2,64,32,0,40,2,20,32,0,40,2,28,70,13,0,32,0,16,19,32,1,114,33,1,11,2,64,32,2,69,13,0,32,0,16,18,11,32,0,40,2,56,34,0,13,0,11,11,16,16,32,1,15,11,65,0,33,2,2,64,32,0,40,2,76,65,0,72,13,0,32,0,16,17,33,2,11,2,64,2,64,2,64,32,0,40,2,20,32,0,40,2,28,70,13,0,32,0,65,0,65,0,32,0,40,2,36,17,4,0,26,32,0,40,2,20,13,0,65,127,33,1,32,2,13,1,12,2,11,2,64,32,0,40,2,4,34,1,32,0,40,2,8,34,3,70,13,0,32,0,32,1,32,3,107,172,65,1,32,0,40,2,40,17,5,0,26,11,65,0,33,1,32,0,65,0,54,2,28,32,0,66,0,55,3,16,32,0,66,0,55,2,4,32,2,69,13,1,11,32,0,16,18,11,32,1,11,6,0,65,140,128,4,11]

    const bytes = new Int8Array(source)
// WebAssembly.instantiate(bytes).then((results) => {
//     console.log("111111")
//     const exports = results.instance.exports
// }).catch((e)=>{
//     console.log("22222")
// })

    const m1 = new WebAssembly.Module(bytes)
    const ins = new WebAssembly.Instance(m1)

    console.log(ins.exports.hello())
    console.log("1111")

}

a();



