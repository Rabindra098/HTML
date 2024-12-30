function add ()
{
    let a=10,b=20;
    let c= a+b;
    console.log(c)
}
add()

function sub ()
{
    let a=20,b=10;
    let c=a-b;
    console.log(c)
}
sub()

function add(a,b)
{
    let c=a+b;
    console.log(c)
}
add(23,34)

function greetings (n)
{
    console.log(`Hello ${n}`)
}
greetings("Rabindra")

function add(a,b=6)
{
    let c=a+b;
    console.log(c)
}
add(6)
add(5,6)

function mul(a,b)
{
    return a*b;
}
let y=mul(5,6)
console.log(y)

//write a function that returns no of character is given String//
function fun( x)
{
    return x.length;
}
let res=fun("Rabindra")
console.log(res)
console.log(fun)

//function expression//
let z= function()
{
    console.log(z)
}
console.log(z)

let intro=function billu (n)
{
    console.log(`Hyy Hello ${n}`)
}
intro("Rabindra")
console.log(intro)

let sub1 = function (a,b)
{
    return b-a;
}
console.log(sub(10-20))
//or//
let sub3=(x,y)
console.log(sub(18,78))