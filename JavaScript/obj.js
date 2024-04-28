

let obj={
name:"darshan"
}

let obj1={
place:"banglore"
}


console.log(Object.assign(obj,obj1));

obj1.__proto__=obj

console.log(obj1.name);