//boolean
let areYouOk:boolean = true //areYouOk 是 boolean 类型 值为 true
//null
//undefined
//number
let age:number = 24
let b:number = 1_000_000 //thousand  million
//string
let named:string = "lsh"
let action:string = "keep moving"
let sentence:string = 
`My name is ${named}.
I'm ${age} years old.`;
//symbol
//object

//function
function init1(FP: string | boolean | number,num : number){
    return "init"+ FP + num
}

function init2(FP:string){
    return FP
}

console.log(init1(areYouOk,b))
console.log(init2(sentence))