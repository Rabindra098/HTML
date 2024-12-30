let obj=
{
    name:"rabi",
    age: 21,
    email: "rabi@1.com",
}
let obj2=obj;
let obj3={
    name:"rabi",
    age: 22,
    email: "rabi@1.com",
}
console.log(obj2==obj)
console.log(obj3==obj)
console.log(obj.name)
console.log(obj['age'])
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))

let obj4=object.create(obj)
console.log(obj4)
console.log(obj4.age)

//prototype inheritance
//extending prototype
let arr=[5,4,3]
Array.prototype.rabi=function(ele)
{
    return ele(1);
}
console.log(arr.rabi())
Array.prototype.Rabi=function(ele)
{
    console.log("Hi")
}
arr.Rabi()