// let arr = ["hyy","hello","welcome","byy"]
// console.log(arr[2]);
// let arr2=[3,4,5,6,7,8,9]
// console.log(arr2[0]*arr2[4])
// console.log(arr2.length)
// xconsole.log(arr[10])
// arr[10]=25;
// console.log(arr.length)


let friends=["Rabi","Raju","Subham","Sandep","jatin","komal"]
friends.shift();
friends.unshift("Rajib")
friends.pop()
friends.push("loni")
friends.splice(2,0,"justin")
console.log(friends)


arr=[3,4,5];
// function square(x)
// {
//     console.log(x*x)
// }
// add.forEach(square);
arr.forEach
(function (ele,ind) 
{
    console.log(ele*ele,ind)    
});
arr=["raj","jhon","sheob","shekhar"]
arr.forEach(function(ele,ind){
    console.log(ele.charAt(0))
})


// return values as even or odd in new Array
arr=[1,2,3,4,5]
let arr1=arr.forEach(function (ele)
{
    return ele%2==0;
})
console.log(arr1)

let arr2=arr.map(function (ele)
{
    return ele%2==0;
})
console.log(arr2)

let arr3=arr.filter(function (ele)
{
    return ele%2==1;
})
console.log(arr3)

arr=[1,2,3,4,5];
let arr4=arr.some(function(ele,ind)
{
    return ele%2==0;
})
console.log(arr4)

let arr5=arr.every(function(ele,ind)
{
    return ele%2==0;
})
console.log(arr5)

let arr6=arr.find(function(ele,ind)
{
    return ele%2==0;
})
console.log(arr6)

//reduce
//----> It is used for accumulate values (values whiche consider previous values)
arr=[1,2,3,4,5]
let result=arr.reduce(function (prev,curr) 
{
    return prev+curr;
},0)
console.log(result)