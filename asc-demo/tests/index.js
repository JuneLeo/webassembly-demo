
import { fib } from "../build/debug.js";
const start = Date.now()
console.log(fib(45))
console.log(`cost = ${Date.now() - start}`)




