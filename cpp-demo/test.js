// 1.调用index导出的js

let myModule = require('out/index.js')
myModule.onRuntimeInitialized = function () {
    const start = Date.now();
    // console.log(myModule.ccall("fib", 'number', ['number'], [45], null))
    console.log(myModule._fib(45))
    console.log(`cost=${Date.now() - start}`)
}

// 2.不使用index.js 直接加载wasm
const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, 'out/index.wasm')
const buffer = fs.readFileSync(filePath)
WebAssembly.instantiate(buffer).then((results) => {
    const start = Date.now();
    console.log(results.instance.exports.fib(45))
    console.log(`cost=${Date.now() - start}`)
});




