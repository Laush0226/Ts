"use strict";
//boolean
var areYouOk = true; //areYouOk 是 boolean 类型 值为 true
//null
//undefined
//number
var age = 24;
var b = 1000000; //thousand  million
//string
var named = "lsh";
var action = "keep moving";
var sentence = "My name is " + named + ".\nI'm " + age + " years old.";
//symbol
//object
//function
function init1(FP, num) {
    return "init" + FP + num;
}
function init2(FP) {
    return FP;
}
console.log(init1(areYouOk, b));
console.log(init2(sentence));
