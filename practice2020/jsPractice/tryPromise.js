function abc(r1, r2) {
    console.log("promise created")
    // r1(100)
    r2(50)
}

function onlyResolve(r) {
    console.log("promise only resolve called")
    r(70)
}

promise = new Promise(abc).then((value) => {
    console.log(`success with value = ${value}`)
}, (reason) => {
    console.log(`failed ${reason}`)
})

new Promise(onlyResolve).then((successValue) => {
    console.log(`only resolve success with value ${successValue}`)
})

new Promise(success => {
    console.log("Empty param promise")
    setTimeout(() => {
        console.log("code happen after timeout 2 secs")
        success("Success!")
    }, 2000)
}).then(value => {
    console.log(`recieve value ${value}`)
})

setTimeout(() => {
    console.log('normal timeout')
}, 3000)

console.log("run") 