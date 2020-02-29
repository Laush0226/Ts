//boolean
let areYouOk:boolean = true //areYouOk 是 boolean 类型 值为 true
//null
//undefined
//number
let a:number = 6
let b:number = 1_000_000 //thousand  million
//string
let nameBy:string = "lsh"
let action:string = "keep moving"
//symbol
//object

//function
function init(FP: string | boolean | number,num : number){
    return "init"+ FP + num
}

console.log(init(areYouOk,a))