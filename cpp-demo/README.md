# C/C++ 


Emscripten
```shell
/Users/juneleo/.tool/emsdk/upstream/emscripten/emcc index.cpp -o out/index.js -s EXPORTED_FUNCTIONS=_fib -sEXPORTED_RUNTIME_METHODS=ccall,cwrap
```
* EXPORTED_FUNCTIONS 导出c++中自己定义的方法
* EXPORTED_RUNTIME_METHODS 

* ccall 直接调用方法
* cwrap 获取方法对象

具体细节可以查看Emscripten官网

https://emscripten.org/docs/


