const api = import('./pkg/index.js')

api.then(api => {
    const start = Date.now()
    console.log(api.fib(45))
    console.log(`cost=${Date.now() - start}`)
}).catch((e)=>{
    console.log(e)
})



