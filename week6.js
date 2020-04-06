function foo(x,y,z,d, ...args){
    return console.log (x,y,z,d, args)
}

foo (1,2,3,4,5,6,7)

function asd(...args){
    console.log(args[5]);
}

var arr = [1,2,3,4,5,6,7]

asd(...arr)

let arr1 = [1,2,3]
let arr2 = [...arr1,4,5,6,7]

console.log(arr2)

let arr3 = [1, 'top']
let arr4 = [2, 'kek']

console.log(...arr3[1],...arr4[1])
