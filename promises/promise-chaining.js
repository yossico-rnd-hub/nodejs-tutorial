let p1 = new Promise((resolve, reject) => { resolve('Error-1') })
let p2 = new Promise((resolve, reject) => { reject('Error-2') })
let p3 = new Promise((resolve, reject) => { resolve('Error-3') })

// p1.then((x) => { console.log('2-ok'); return p2 }).then((x) => { console.log('3-ok'); return p3 }).catch((x) => console.log(x))

// p1.then(p2).then(p3)

// Promise.resolve(1)
//     .then(x => { console.log('2-ok'); return Promise.resolve(2) })
//     .then(x => { console.log('3-ok'); return Promise.resolve(3) })
//     .then(x => { console.log('4-ok'); return Promise.reject(4) })
//     .then(x => { console.log('5-ok'); return Promise.resolve(5) })
//     .catch(e => console.log(e))
